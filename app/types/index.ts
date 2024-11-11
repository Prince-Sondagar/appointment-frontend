

export type loginUserInput = {
    email: string,
    password: string;
};

export type signUpUserInput = {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date | null;
    gender: string;
    password: string,
    confirmPassword: string
    termsAndCondition: boolean;
    profileImage: any,
};