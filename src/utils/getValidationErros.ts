import { ValidationError } from "yup";

interface Errors {
  [key: string]: string;
}

export default function getVaidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  // eslint-disable-next-line
  err.inner.forEach((error: any) => {
    if (err instanceof ValidationError) {
    validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}
