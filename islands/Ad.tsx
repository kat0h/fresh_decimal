/** @jsx h */
import { h } from "preact";
import { useEffect } from "preact/hooks";

export default function Ad() {
  useEffect(() => {
    // PCの場合の処理を記述
    const div = document.getElementById("ad") as HTMLElement;
    const iframe = document.createElement("iframe");
    div.appendChild(iframe);

    let html = `<div id="im-a982f19c3412464683296dbf32940236">`;
    html +=
      `  <script async src="https://imp-adedge.i-mobile.co.jp/script/v1/spot.js?20220104"></script>`;
    html +=
      `  <script>(window.adsbyimobile=window.adsbyimobile||[]).push({pid:81736,mid:568758,asid:1849258,type:"banner",display:"inline",elementid:"im-a982f19c3412464683296dbf32940236"})</script>`;

    const iframeDoc = (iframe.contentWindow as Window).document;
    iframeDoc.open();
    iframe.width = "100%";
    iframeDoc.write(html);
    iframeDoc.close();
  }, []);

  return (
    <div>
      <div id="ad"></div>
    </div>
  );
}
