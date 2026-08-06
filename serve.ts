import Server from "lume/core/server.ts";
import notFound from "lume/middlewares/not_found.ts";

const port: number = 8000;
const root = `${Deno.cwd()}/output`;
const server: Server = new Server({ port, root });

server.use(notFound({
    root,
    page404: "/404.html",
}));

server.start();
