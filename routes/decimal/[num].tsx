/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

import { parseDecimal } from "../../utils/util.ts";
import { Header } from "../../components/Header.tsx";
import { LeftDecimal } from "../../components/LeftDecimal.tsx";
import { RightBar } from "../../components/RightBar.tsx";
import { Adsense } from "../../components/Adsense.tsx";
import { Ogp } from "../../components/Ogp.tsx";

export const handler: Handlers<number | null> = {
  GET(_, ctx) {
    const { num } = ctx.params;
    const parsed = parseDecimal(num);
    if (parsed === undefined) {
      return ctx.render(null);
    }
    return ctx.render(parsed);
  },
};

export default function Decimal(props: PageProps) {
  const num = props.data;
  if (num == null) {
    return <div>404</div>;
  }
  const TITLE = `10進数「${num}」の基数変換`;
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <Adsense />
        <Ogp
          title={TITLE}
          description="基数変換-jp 2〜36進数対応"
          url={props.url.href}
        />
      </Head>
      <div class={tw`bg-indigo-100`}>
        <Header />
        <div class={tw`p-2`}>
          <div class={tw`flex flex-wrap`}>
            <LeftDecimal data={num} class={tw`sm:w-full md:w-8/12 my-2`} />
            <RightBar class={tw`sm:w-full md:w-4/12 my-2`} />
          </div>
        </div>
      </div>
    </>
  );
}
