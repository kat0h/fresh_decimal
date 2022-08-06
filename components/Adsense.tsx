/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Adsense() {
  const ADURL = Deno.env.get("ADURL")
  return (
    <script async src={`${ADURL}`} crossOrigin="anonymous"></script>
  );
}
