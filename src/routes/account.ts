import { Hono } from "hono";
import AccountControllers from "../controllers/account_controller";

function configureRoutesAccounts(router: Hono, basePath: string) {
  const route = router.route(basePath);

  route.get("/accounts/list", (c) => AccountControllers.list(c));
}

export default configureRoutesAccounts;
