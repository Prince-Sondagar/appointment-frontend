"use client"

import useAuth from "@/app/hooks/useAuth";
import { signUpUserInput } from "@/app/types";
import { signUpValidationSchema } from "@/app/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";


const SignUp = () => {

    const { signUp } = useAuth();
    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm<signUpUserInput>({
        resolver: yupResolver(signUpValidationSchema) as any
    });

    const onSubmit = async (data: signUpUserInput) => {
     
        const formData = new FormData();
        if (getValues("profileImage")) {
            formData.append("profileImage", getValues("profileImage"));
        }

        formData.append("user", JSON.stringify({
            firstName: data?.firstName,
            lastName: data?.lastName,
            email: data?.email,
            dateOfBirth: data?.dateOfBirth,
            gender: data?.gender,
            termsAndCondition: data?.termsAndCondition,
            password: data?.password
        }))
        await signUp(formData);
    }

    return (
        <div>
            <h1>SignUp</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <Controller
                        rules={{ required: true }}
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <input {...field} type="text" name="firstName" />
                        )}
                    />
                    {errors.firstName?.message && <span className="error-message">{errors.firstName?.message}</span>}
                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <Controller
                        rules={{ required: true }}
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <input {...field} type="text" name="lastName" />
                        )}
                    />
                    {errors.lastName?.message && <span className="error-message">{errors.lastName?.message}</span>}

                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <Controller
                        rules={{ required: true }}
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <input {...field} type="email" name="email" />
                        )}
                    />
                    {errors.email?.message && <span className="error-message">{errors.email?.message}</span>}
                </div>

                <div>
                    <label htmlFor="dateOfBirth">Date Of Birth:</label>
                    <Controller
                        rules={{ required: true }}
                        name="dateOfBirth"
                        control={control}
                        render={({ field }) => (
                            <input {...field} type="date" value={field.value as any} />
                        )}
                    />
                    {errors.dateOfBirth?.message && <span className="error-message">{errors.dateOfBirth?.message}</span>}
                </div>

                <div>
                    <label htmlFor="gender">Gender:</label>
                    <Controller
                        rules={{ required: true }}
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <>
                                <input type="radio" {...field} value="male" />
                                <label>Male</label>

                                <input type="radio"  {...field} value="female" />
                                <label>Female</label>
                            </>
                        )}
                    />
                    <div>
                        {errors.gender?.message && <span className="error-message">{errors.gender?.message}</span>}
                    </div>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <Controller
                        rules={{ required: true }}
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <>
                                <input type="password" {...field} />
                            </>
                        )}
                    />
                    <div>
                        {errors.password?.message && <span className="error-message">{errors.password?.message}</span>}
                    </div>
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <Controller
                        rules={{ required: true }}
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => (
                            <>
                                <input type="password" {...field} />
                            </>
                        )}
                    />
                    <div>
                        {errors.confirmPassword?.message && <span className="error-message">{errors.confirmPassword?.message}</span>}
                    </div>
                </div>

                <div>
                    <Controller
                        rules={{ required: true }}
                        name="termsAndCondition"
                        control={control}
                        render={({ field }) => (
                            <input type="checkbox" {...field} checked={field.value} onChange={(e) => field.onChange(e.target.checked)} value={field.value as any} />
                        )}
                    />
                    <label htmlFor="termsAndCondition">Accept terms & conditions</label>
                    <div>
                        {errors.termsAndCondition?.message && <span className="error-message">{errors.termsAndCondition?.message}</span>}
                    </div>
                </div>

                <div>
                    <label htmlFor="profileImage">Profile Picture</label>
                    <Controller
                        name="profileImage"
                        control={control}
                        render={({ field }) => (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files ? e.target.files[0] : null;
                                    field.onChange(file);
                                }}
                            />
                        )}
                    />
                    <div>
                        {errors.profileImage?.message && <span className="error-message">{errors?.profileImage.message as string}</span>}
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default SignUp;