import { ImageLoaderProps } from "next/image";

/**
 * Utilidad para extraerla URL con formatos optimizados para las imagenes del CMS (Servicio de Imagenes)
 * https://www.storyblok.com/docs/image-service
 */
export const StoryBlockImageURL = ({
  src,
  width,
  quality = 20,
  format = "webp",
  height = 0,
}: StoryBlockImageURLParams) => {
  return `${src}/m/${width}x${height}/filters:quality(${quality}):format(${format})`;
};

interface StoryBlockImageURLParams {
  /** URL de la imagen como la provee Storyblok */
  src: string;
  /** Width of image. The Storyblok API infers aspect ratio */
  width: number;
  /** Quality of image, for default its 20 (20%). */
  quality?: number;
  /** Format of image, for default its webp */
  format?: "webp" | "jpeg" | "png";
  /** Height of the image */
  height?: number;
}

export const StoryBlockLoader = ({ src, width, quality = 20 }: ImageLoaderProps) => {
  return StoryBlockImageURL({ src, width, quality });
};

/**
 * Util for join classes undefined or string and filter undefined
 * @param args classNames
 *
 *  @example const className = joinClasses("a", "b", undefined, "c") // "a b c"
 */
export const joinClasses = (...args: (string | undefined)[]): string => {
  return args.filter((x) => x).join(" "); // undefined is falsey
};

/**
 * Util to test diferrent viewports, must be used with jest.
 *
 * This util make a mock implementation of window.matchMedia
 *
 * @example prepareViewport("(max-width: 768px)")
 */
export const prepareViewport = (mediaQuery: string) => {
  Object.defineProperty(window, "watchMedia", {
    writable: true,
    configurable: true,
    value: mediaQuery,
  });

  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: query === mediaQuery,
      media: "",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  });
};
