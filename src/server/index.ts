import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";

function createServer() {
  const app = new Hono();

  const corsOptions = {
    origin: "*",
    allowHeaders: ["Content-Type"],
    allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    credentials: true,
  };

  app.get("/", (c) => {
    return c.json({ message: "Welcome" });
  });
  app.use("/apis/*", cors(corsOptions));
  app.use("*", logger());
  app.use("*", prettyJSON());
  app.showRoutes();

  return app;
}

export default createServer;
