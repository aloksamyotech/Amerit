export interface EstimateReOpen {
  reason: string;
  description: string;
}

export interface EstimateReopenReason {
  name: string;
  value: string;
}

export interface EstimateReOpenType {
  open: boolean;
  handleClose: () => void;
}

export interface ValidationErrorType {
  message: string | undefined;
}
