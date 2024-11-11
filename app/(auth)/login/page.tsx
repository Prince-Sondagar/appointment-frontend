"use client";

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { loginValidationSchema } from '../../utils/schema';
import useAuth from '../../hooks/useAuth';
import { loginUserInput } from '../../types';


const Login = () => {
  const { login } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<loginUserInput>({
    mode: "all",
    resolver: yupResolver(loginValidationSchema)
  });


  const onSubmit = async (data: loginUserInput) => {
    console.log(data);
    await login(data);
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <Controller
              rules={{
                required: true
              }}
              name='email'
              control={control}
              render={({ field }) => (
                <input {...field} type="email" name="email" />
              )}
            />
            {errors.email?.message && <span>{errors.email.message}</span>}
          </div>

          <div>
            <label>Password</label>
            <Controller
              rules={{
                required: true
              }}
              name='password'
              control={control}
              render={({ field }) => (
                <input {...field} type="password" name="password" />
              )}
            />
            {errors.password?.message && <span>{errors.password.message}</span>}
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
