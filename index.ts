import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  title: "Frankenstein",
  author: "Mary Shelley",
});

const router = new Router();

router.get("/", (context: any) => {
  context.response.body = 'hello world'
});

router.get("/book", (context: any) => {
  context.response.body = Array.from(books.values());
});


const app = new Application();
app.use(
    oakCors({
      origin: "http://localhost:3000",
      optionsSuccessStatus: 200,
    }),
);
app.use(router.routes());

console.info(`CORS-enabled web server listening on port 8000`);
await app.listen({ port: 8000 });
