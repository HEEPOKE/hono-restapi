import { Context } from "hono";
import ConstantService from "../constants/services";
import StatusCodeConstant from "../constants/code";
import ResponseMessage from "../models/messages/response";
import AccountServices from "../services/account_service";

async function AccountListController(c: Context) {
  try {
    const accountList = await AccountServices.listAccount();

    const response: ResponseMessage = {
      status: {
        code: StatusCodeConstant.SUCCESS.code,
        message: StatusCodeConstant.SUCCESS.message,
        service: ConstantService.ACCOUNT_SERVICE,
        description: "Account list retrieved successfully",
      },
      data: accountList,
    };

    return c.json(response, 200);
  } catch (err: any) {
    const response: ResponseMessage = {
      status: {
        code: StatusCodeConstant.FAILED.code,
        message: StatusCodeConstant.FAILED.message,
        service: ConstantService.ACCOUNT_SERVICE,
        description: `account list err :: ${err}`,
      },
      data: [],
    };

    return c.json(response, 500);
  }
}

const AccountController = {
  list: AccountListController,
};

export default AccountController;
