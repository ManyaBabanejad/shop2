import { useFormik } from "formik";
import loginSchema from "../schemas/loginSchema";

function Login({ setUser }) {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setUser(values.username);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="login">
      <input {...formik.getFieldProps("username")} placeholder="نام کاربری" />
      <p>{formik.errors.username}</p>

      <input
        type="password"
        {...formik.getFieldProps("password")}
        placeholder="رمز عبور"
      />
      <p>{formik.errors.password}a</p>

      <button type="submit">ورود</button>
    </form>
  );
}

export default Login;
