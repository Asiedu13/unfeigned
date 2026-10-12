import React from "react";

function PullQuote({
  cite,
  children,
}: {
  cite?: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote className="pull-quote">
      <div>{children}</div>
      {cite && <cite>— {cite}</cite>}
    </blockquote>
  );
}

function Diagram({
  caption,
  children,
}: {
  caption?: string;
  children?: React.ReactNode;
}) {
  return (
    <figure>
      <div
        className="figure-placeholder"
        role="img"
        aria-label={String(children)}
      >
        <span>{children}</span>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export const mdxComponents = {
  PullQuote,
  Diagram,
};
