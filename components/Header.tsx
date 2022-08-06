/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import { tw } from "@twind";

export function Header() {
  return (
    <header class={tw`font-extrabold text(4xl gray-800) p-4 bg-white mb-2`}>
      <a href="/" class={tw`hover:opacity-75`}>
        基数変換-jp
      </a>
    </header>
  );
}
