/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

import { parseDecimal } from "../../../utils/util.ts";
import { Header } from "../../../components/Header.tsx";
import { LeftDecimal } from "../../../components/LeftDecimal.tsx";
import { RightBar } from "../../../components/RightBar.tsx";
import { RangeNum } from "../../../components/RangeNum.tsx"

export default function Decimal(props: PageProps) {
  const { from } = props.params;
  const fro = parseDecimal(from);
  return (
    <>
      <Head>
        <title>{fro}〜{fro+1000}</title>
      </Head>
      <div class={tw`bg-indigo-100`}>
        <Header />
        <div class={tw`p-2`}>
          <div class={tw`flex flex-wrap`}>

            <div class={tw`sm:w-full md:w-8/12 my-2`}>
              <div class={tw`mx-2 bg-white p-4 rounded-lg`}>
                <RangeNum from={fro} to={fro+1000} />
              </div>
            </div>

            <RightBar class={tw`sm:w-full md:w-4/12 my-2`}/>

          </div>
        </div>
      </div>
    </>
  );
}
