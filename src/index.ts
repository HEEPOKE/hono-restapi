import { serve } from "@hono/node-server";
import createServer from "./server";
import config from "./config/config";

const port = parseInt(config.PORT ?? "6476");

serve({
  fetch: createServer().fetch,
  port,
});
