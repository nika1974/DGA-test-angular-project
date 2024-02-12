interface BaseValidatorInterface {
    errorName: string;
    message?: string;
}

export interface RegexpValidatorInterface extends BaseValidatorInterface {
    regexp: RegExp;
}

export interface DateValidatorInterface extends BaseValidatorInterface {
    date: string | Date;
}
