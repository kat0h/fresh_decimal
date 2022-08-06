/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Params {
  title: string;
  description: string;
  url: string;
}

export function Ogp(props: Params) {
  return (
    <>
      <meta name="description" content={`10進数の数値を2~36進数に変換します`} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:image" content="/opg.png" />
    </>
  );
}
