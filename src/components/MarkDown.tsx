import React from "react";
import ReactMarkdown, { ReactMarkdownOptions } from "react-markdown";

const Markdown = ({ children, ...props }: ReactMarkdownOptions) => (
  <ReactMarkdown {...props}>
    {typeof children === "string"
      ? children.replace(/\n/g, "  \n").replace(/\<\/br>/g, "")
      : children}
  </ReactMarkdown>
);

export default Markdown;
