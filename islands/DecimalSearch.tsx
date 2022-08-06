/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { parseDecimal } from "../utils/util.ts";

export default function DecimalSearch(props: any) {
  const [val, setVal] = useState("");

  return (
    <>
      <div {...props}>
        <div class={tw`flex`}>
          <input
            class={tw("mr-2 p-2 border border-gray-300 rounded-md w-full")}
            value={val}
            // @ts-ignore: fix
            onChange={(event) => setVal(event.target.value)}
            type="text"
          />
          <button
            class={tw(
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md",
            )}
            onClick={() => {
              const v = parseDecimal(val);
              if (v !== undefined) {
                window.location.href = `/decimal/${v}`;
              }
            }}
          >
            変換
          </button>
        </div>
      </div>
      {
        <div class={tw`text-red-500`}>
          {parseDecimal(val) === undefined && val !== "" ? "変換できません" : ""}
        </div>
      }
    </>
  );
}
