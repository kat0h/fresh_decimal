/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import DecimalSearch from "../islands/DecimalSearch.tsx";

export function RightBar(props: any) {
  const data = [
    [1, 1000],
    [1001, 2000],
    [2001, 3000],
    [3001, 4000],
    [4001, 5000],
    [4001, 5000],
    [5001, 6000],
    [6001, 7000],
    [7001, 8000],
    [8001, 9000],
    [9001, 10000],
    [10001, 11000],
    [11001, 12000],
    [12001, 13000],
    [13001, 14000],
    [14001, 15000],
    [15001, 16000],
    [16001, 17000],
    [17001, 18000],
    [18001, 19000],
    [19001, 20000],
    [20001, 21000],
    [21001, 22000],
    [22001, 23000],
    [23001, 24000],
    [24001, 25000],
    [25001, 26000],
    [26001, 27000],
    [27001, 28000],
    [28001, 29000],
    [29001, 30000],
    [30001, 31000],
    [31001, 32000],
    [32001, 33000],
    [33001, 34000],
    [34001, 35000],
    [35001, 36000],
    [36001, 37000],
    [37001, 38000],
    [38001, 39000],
    [39001, 40000],
    [40001, 41000],
    [41001, 42000],
    [42001, 43000],
    [43001, 44000],
    [44001, 45000],
    [45001, 46000],
    [46001, 47000],
    [47001, 48000],
    [48001, 49000],
    [49001, 50000],
    [50001, 51000],
    [51001, 52000],
    [52001, 53000],
    [53001, 54000],
    [54001, 55000],
    [55001, 56000],
    [56001, 57000],
    [57001, 58000],
    [58001, 59000],
    [59001, 60000],
    [60001, 61000],
    [61001, 62000],
    [62001, 63000],
    [63001, 64000],
    [64001, 65000],
    [65001, 66000],
    [66001, 67000],
    [67001, 68000],
    [68001, 69000],
    [69001, 70000],
    [70001, 71000],
    [71001, 72000],
    [72001, 73000],
    [73001, 74000],
    [74001, 75000],
    [75001, 76000],
    [76001, 77000],
    [77001, 78000],
    [78001, 79000],
    [79001, 80000],
    [80001, 81000],
    [81001, 82000],
    [82001, 83000],
    [83001, 84000],
    [84001, 85000],
    [85001, 86000],
    [86001, 87000],
    [87001, 88000],
    [88001, 89000],
    [89001, 90000],
    [90001, 91000],
    [91001, 92000],
    [92001, 93000],
    [93001, 94000],
    [94001, 95000],
    [95001, 96000],
    [96001, 97000],
    [97001, 98000],
    [98001, 99000],
    [99001, 100000],
  ];
  return (
    <div {...props}>
      <div class={tw`mx-2 bg-white p-4 rounded-lg mb-2`}>
        <DecimalSearch />
      </div>
      <div class={tw`mx-2 bg-white p-4 rounded-lg my-2`}>
        <h2>一覧</h2>
        <ul class={tw`pl-6`}>
          {data.map((d) => (
            <li class={tw`list-disc py-1`}>
              <a
                class={tw`underline text-blue-500 hover:opacity-75`}
                href={`/decimal/range/${d[0]}`}
              >
                {`${d[0].toLocaleString()}〜${d[1].toLocaleString()}の進数変換`}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
