/** @jsx h */
import { h } from "preact";

export function Adsense() {
  const ADURL = Deno.env.get("ADURL")
  return (
    <script async src={`${ADURL}`} crossOrigin="anonymous"></script>
  );
}
