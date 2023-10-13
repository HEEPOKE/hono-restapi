import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import configureRoutesAccounts from "../routes/account";

function createServer() {
  const app = new Hono();
  const basePath = "/apis";
  const corsOptions = {
    origin: "*",
    allowHeaders: ["Content-Type"],
    allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    credentials: true,
  };

  app.use("*", prettyJSON());
  app.use("*", logger());
  app.use("*", cors(corsOptions));
  app.get("/", (c) => {
    return c.json({ message: "Welcome" });
  });
  configureRoutesAccounts(app, basePath);
  app.showRoutes();

  return app;
}

export default createServer;
