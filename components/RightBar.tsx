/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import DecimalSearch from "../islands/DecimalSearch.tsx";

export function RightBar() {
  return (
    <div class={tw`sm:w-full md:w-4/12 my-2`}>
      <div class={tw`mx-2 bg-white p-4 rounded-lg`}>
        <DecimalSearch />
      </div>
    </div>
  );
}
