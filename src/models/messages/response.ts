interface StatusMessage {
  code: string;
  message: string;
  service: string;
  description: string;
}

export default interface ResponseMessage {
  status: StatusMessage;
  data: any;
}
