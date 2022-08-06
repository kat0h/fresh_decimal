/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

import { Header } from "../components/Header.tsx";
import DecimalSearch from "../islands/DecimalSearch.tsx";
import { LeftTop } from "../components/LeftTop.tsx"
import { RightBar } from "../components/RightBar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>基数変換-jp 2〜36進数まで対応</title>
      </Head>
      <div class={tw`bg-indigo-100`}>
        <Header />
        <div class={tw`p-2`}>
          <div class={tw`flex flex-wrap`}>
            <LeftTop class={tw`sm:w-full md:w-8/12 my-2`}/>
            <RightBar class={tw`sm:w-full md:w-4/12 my-2`}/>
          </div>
        </div>
      </div>
    </>
  );
}
