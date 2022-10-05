export interface EmailValidatorProtocol {
    isEmail: EmailValidatorFunctionProtocol;
}

export interface EmailValidatorFunctionProtocol {
    (value: string): boolean;
}
