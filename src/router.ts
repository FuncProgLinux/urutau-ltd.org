import Router from "lume/middlewares/router.ts";

const router: Router = new Router();

router.get("/api/v1/health", (): Response => {
    return new Response(JSON.stringify({ status: "ok" }), {
        headers: { "Content-Type": "application/json" },
    });
});

export default router;
