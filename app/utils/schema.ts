import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required("email is required"),
    password: Yup.string().required("password is required").min(6, "password must be at least 6 digit")
});

export const signUpValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("last name is required"),
    email: Yup.string().required("email").required("email is required"),
    dateOfBirth: Yup.string().required("date of birth is required").test('dateOfBirth', "You must be over 18", (value) => {
        if (!value) return true;
        const age = new Date().getFullYear() - new Date(value).getFullYear();
        return age >= 18;
    }),
    gender: Yup.string().required("gender is required"),
    termsAndCondition: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("You must accept the terms and conditions"),
    profileImage: Yup.mixed().required("Profile image is required"),
    password: Yup.string().required("password is required").min(6, "password must be at least 6 digit long"),
    confirmPassword: Yup.string().required("confirm password is required").oneOf([Yup.ref('password')], "Passwords do not match")
});