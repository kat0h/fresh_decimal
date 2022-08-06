/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import { tw } from "@twind";

const range = (start: number, stop: number) =>
  Array.from({ length: stop - start + 1 }, (_, i) => start + (i));

export function LeftDecimal(props: any) {
  const num = props.data;

  const data = [2, 8, 16].map((n) => {
    return {
      base: `${n}進数`,
      val: `${num.toString(n).toUpperCase()}`,
    };
  });
  const data2 = range(2, 36).map((n) => {
    return {
      base: `${n}進数`,
      val: `${num.toString(n).toUpperCase()}`,
    };
  });
  return (
    <div {...props}>
      <div class={tw`mx-2 bg-white p-4 rounded-lg`}>
        <h1 class={tw`text(2xl gray-800) mb-4`}>
          10進数「{num}」の2〜36進数変換 [2進数 | 8進数 | 16進数]
        </h1>
        <div class={tw`overflow-scroll`}>
          <table class={tw`table-auto w-full border`}>
            <thead>
              <tr>
                <th class={tw`border px-4 py-2`}>基数</th>
                <th class={tw`border px-4 py-2`}>変換結果</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr>
                  <td class={tw`border px-4 py-2 text-center`}>{d.base}</td>
                  <td class={tw`border px-4 py-2 text(right xl)`}>{d.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <table class={tw`table-auto w-full border`}>
            <thead>
              <tr>
                <th class={tw`border px-4 py-2`}>基数</th>
                <th class={tw`border px-4 py-2`}>変換結果</th>
              </tr>
            </thead>
            <tbody>
              {data2.map((d) => (
                <tr>
                  <td class={tw`border px-4 py-2 text-center`}>{d.base}</td>
                  <td class={tw`border px-4 py-2 text(right xl)`}>{d.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
