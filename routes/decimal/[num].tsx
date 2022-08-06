/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { PageProps, Handlers } from "$fresh/server.ts";

export const handler: Handlers<number | null> = {
  GET(_, ctx) {
    const { num } = ctx.params;
    const parsed = parseInt(num)
    if (isNaN(parsed) || parsed < 0 || parsed > 9007199254740992) {
      return ctx.render(null)
    }
    return ctx.render(parsed)
  }
}

const range = (start, stop) => Array.from({ length: stop - start + 1}, (_, i) => start + (i));

export default function Decimal(props: PageProps) {
  const num = props.data
  if (num == null) {
    return <div>404</div>
  }

  const data = [2, 8, 16].map((n) => {
    return {
      base: `${n}進数`,
      val:  `${num.toString(n)}`
    }
  })
  const data2 = range(2,36).map((n) => {
    return {
      base: `${n}進数`,
      val:  `${num.toString(n)}`
    }
  })
  return (
    <>
      <Head>
        <title>{num}の基数変換 2進数 | 8進数 | 16進数</title>
      </Head>
      <div class={tw`bg-indigo-100 container mx-auto`}>
        <header class={tw`font-extrabold text(4xl gray-800) p-4 bg-white mb-2`}>
          <a href="/" class={tw`hover:opacity-75`}>
            基数変換-jp
          </a>
        </header>
        <div class={tw`p-2`}>
          {/* 二列 */}
          <div class={tw`flex flex-wrap`}>
            {/* 左 */}
            <div class={tw`lg:w-8/12`}>
              <div class={tw`mx-2 bg-white p-4 rounded-lg`}>
                <h1 class={tw`text(3xl gray-800) mb-4`}>{num}の基数変換 2進数 | 8進数 | 16進数</h1>
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
                <br/>
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
            {/* 右 */}
            <div class={tw`lg:w-4/12`}>
              <div class={tw`mx-2 bg-white p-4 rounded-lg`}>
                <aside>
                  hoge
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
