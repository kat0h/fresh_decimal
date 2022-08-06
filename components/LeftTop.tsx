/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { RangeNum } from "../components/RangeNum.tsx";

export function LeftTop(props: any) {
  return (
    <div {...props}>
      <div class={tw`mx-2 bg-white p-4 rounded-lg`}>
        <h1 class={tw`text(2xl gray-800) mb-4`}>
          10進数→2〜36進数 1〜1,000まで
        </h1>
        <div>
          10進数の数を基数変換します。よく利用される2/8/16進数だけでなく、2〜36進数まで変換ができます。<br />
          <br />
        </div>
        <RangeNum from={1} to={1000} />
      </div>
    </div>
  );
}
