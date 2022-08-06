/** @jsx h */
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers<number | null> = {
  GET(_, __) {
    return new Response("", {
      status: 303,
      headers: {
        Location: "/"
      }
    })
  },
};
