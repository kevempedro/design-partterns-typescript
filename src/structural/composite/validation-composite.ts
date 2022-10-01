export abstract class ValidationComponent {
    abstract validate(value: unknown): boolean;
}

export class ValidateEmail extends ValidationComponent {
    validate(value: unknown): boolean {
        if (typeof value !== 'string') {
            return false;
        }

        return /@/.test(value);
    }
}

export class ValidateString extends ValidationComponent {
    validate(value: unknown): boolean {
        return typeof value === 'string';
    }
}

export class ValidateNumber extends ValidationComponent {
    validate(value: unknown): boolean {
        if (typeof value !== 'string') {
            return false;
        }

        return /\d+/.test(value);
    }
}

export class ValidationComposite extends ValidationComponent {
    private readonly children: ValidationComponent[] = [];

    validate(value: unknown): boolean {
        for (const child of this.children) {
            const validation = child.validate(value);

            if(!validation) {
                return false
            }
        }

        return true;
    }

    add(...validations: ValidationComponent[]): void {
        validations.forEach((validation) => this.children.push(validation));
    }
}

const validateEmail = new ValidateEmail();
const validateNumnber = new ValidateNumber();
const validateString = new ValidateString();

const validationComposite = new ValidationComposite();

validationComposite.add(validateEmail, validateNumnber, validateString);

console.log(validationComposite.validate('kevem520@gmail.com'));
