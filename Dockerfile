# Install dependencies only when needed
FROM node:16-alpine AS deps

# TODO ver alternativas
ENV NPM_CUSTOMER_EXP_TOKEN='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'
ENV NPM_FONTAWESOME_TOKEN='AC544C1C-119B-47F2-82E1-64942B8D6758'

RUN apk add --no-cache libc6-compat && apk add git
WORKDIR /app

RUN echo -e "\
@customer-experience:registry=https://npm.pkg.github.com/ \n\
//npm.pkg.github.com/:_authToken=${NPM_CUSTOMER_EXP_TOKEN} \n\
@fortawesome:registry=https://npm.fontawesome.com/ \n\
//npm.fontawesome.com/:_authToken=${NPM_FONTAWESOME_TOKEN}" >> .npmrc

# Avoid to install cypress binary in the container
ENV CYPRESS_INSTALL_BINARY=0

COPY package.json package-lock.json ./
RUN npm ci --no-audit 

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build && \ 
    npm install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
RUN mkdir -p ./.next/cache/images && chown -R nextjs:nodejs ./.next
RUN chmod -R 777 ./.next

USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Desactivar la telemetria anonima de nextjs.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "run", "start"]
