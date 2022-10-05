import isEmail from 'validator/lib/isEmail';

import { EmailValidatorFunctionProtocol } from "./email-validator-protocol";

export const emailValidatorFunctionAdapter : EmailValidatorFunctionProtocol = (value: string): boolean => {
    return isEmail(value);
}
