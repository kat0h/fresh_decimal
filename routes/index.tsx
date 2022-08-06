/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

import { Header } from "../components/Header.tsx";
import { LeftTop } from "../components/LeftTop.tsx";
import { RightBar } from "../components/RightBar.tsx";
import { Adsense } from "../components/Adsense.tsx";
import { Ogp } from "../components/Ogp.tsx";

export default function Home(props: PageProps) {
  const TITLE = `基数変換-jp 2〜36進数まで対応`;
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
            <LeftTop class={tw`sm:w-full md:w-8/12 my-2`} />
            <RightBar class={tw`sm:w-full md:w-4/12 my-2`} />
          </div>
        </div>
      </div>
    </>
  );
}
