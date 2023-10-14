import StatusMessage from "../StatusModel";

export default interface ResponseMessage {
  status: StatusMessage;
  data: any;
  error?: any;
}
