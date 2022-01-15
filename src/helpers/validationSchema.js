import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required('Enter your work email')
    .matches(/^[\w\-\.]+@([a-zA-Z0-9]+\.)+[a-zA-Z]{2,6}$/, 'Email is not valid'),
  password: Yup.string()
    .required('Enter your password')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'Enter a valid password'),
});

export const signupValidationSchema = loginValidationSchema.concat(
  Yup.object({
    name: Yup.string().required('Enter your user name'),
  })
);

export const userProfileSchema = Yup.object({
  name: Yup.string().required('Enter your user name'),
});
