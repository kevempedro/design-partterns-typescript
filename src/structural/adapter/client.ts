import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { EmailValidatorFunctionProtocol, EmailValidatorProtocol } from './validation/email-validator-protocol';
import { emailValidatorFunctionAdapter } from './validation/email-validator-function-adapter';

const email = 'kevempereira@gmail.com';

function validateEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
    if (emailValidator.isEmail(email)) {
        console.log('E-mail é válido! (CLASS)');
    } else {
        console.log('E-mail é inválido! (CLASS)');
    }
}

function validateEmailFunction(emailValidator: EmailValidatorFunctionProtocol, email: string): void {
    if (emailValidator(email)) {
        console.log('E-mail é válido! (FUNCTION)');
    } else {
        console.log('E-mail é inválido! (FUNCTION)');
    }
}

validateEmailClass(new EmailValidatorClassAdapter(), email);
validateEmailFunction(emailValidatorFunctionAdapter, email);
