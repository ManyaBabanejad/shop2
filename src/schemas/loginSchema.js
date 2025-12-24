// src/schemas/loginSchema.js
import * as Yup from "yup";

const loginSchema = Yup.object({
  username: Yup.string()
    .required("نام کاربری الزامی است"),
  password: Yup.string()
    .min(4, "حداقل ۴ کاراکتر")
    .required("رمز عبور الزامی است"),
});

export default loginSchema;
