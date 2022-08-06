/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const range = (start: number, stop: number) =>
  Array.from({ length: stop - start + 1 }, (_, i) => start + (i));

function sliceByNumber<T>(array: T[], n: number): T[][] {
  const length = Math.ceil(array.length / n);
  return new Array(length)
    // @ts-ignore: ignore
    .fill()
    .map((_, i) => array.slice(i * n, (i + 1) * n));
}

export function RangeNum(props: any) {
  return (
    <table class={tw`w-full`}>
      {
        sliceByNumber(range(props.from, props.to), 5).map((d) => (
          <tr>{
            d.map((dd) => (
              <td class={tw`border px-4 py-2 text-center`}>
                <a class={tw`underline text-blue-500 hover:opacity-75`} href={`/decimal/${dd}`}>{dd.toLocaleString()}</a>
              </td>
            ))
          }</tr>
        ))
      }
    </table>
  );
}
