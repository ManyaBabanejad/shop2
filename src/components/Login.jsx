import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login({ setUser }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("نام کاربری الزامی است"),
      password: Yup.string()
        .min(4, "رمز عبور حداقل ۴ کاراکتر باشد")
        .required("رمز عبور الزامی است"),
    }),
    onSubmit: (values) => {
      setUser(values.username);
    },

  });

  return (
    <div className="login-container">
      <form onSubmit={formik.handleSubmit} className="login-form">
        <h2>ورود به فروشگاه</h2>

        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="نام کاربری"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && <div className="error">{formik.errors.username}</div>}
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && <div className="error">{formik.errors.password}</div>}
        </div>

        <button type="submit">ورود</button>
      </form>
    </div>
  );
}

export default Login;
