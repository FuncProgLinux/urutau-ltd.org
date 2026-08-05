import Server from "lume/core/server.ts";
import notFound from "lume/middlewares/not_found.ts";

import ApiRouter from "$urutau/routes";

const port: number = Number(Deno.env.get("URUTAU_PORT") || 8000);
const root = `${Deno.cwd()}/output`;
const server: Server = new Server({ port, root });

server.use(notFound({
    root,
    page404: "/404.html",
}));
server.use(ApiRouter.middleware());

server.start();
