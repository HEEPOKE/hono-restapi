import StatusMessage from "../models/StatusModel";
import ResponseMessage from "../models/messages/response";

export default function CreateResponseMessage(
  { code, message, service, description }: StatusMessage,
  data: any,
  error?: any
) {
  error = error ?? {};

  const response: ResponseMessage = {
    status: {
      code,
      message,
      service,
      description,
    },
    data,
    error,
  };

  return response;
}
