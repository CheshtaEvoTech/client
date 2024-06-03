import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

export default function Registration() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className=" justify-content-center align-items-center vh-100 row d-flex">
      <form
        onSubmit={formik.handleSubmit}
        className="container border py-5 d-flex flex-column text-start col-7 gap-3  align-items-center "
      >
        <h1 className="fs-3 fw-semibolder text-center">Create an account</h1>
        <div className=" w-50">
          <label
            htmlFor="name"
            className="form-label fs-6 fw-bolder text-dark mb-0"
          >
            Name
          </label>
          <input
            className="form-control bg-transparent"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your username"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div className=" w-50">
          <label
            htmlFor="email"
            className="form-label fs-6 fw-bolder text-dark mb-0"
          >
            Email Address
          </label>
          <input
            className="form-control bg-transparent"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className=" w-50">
          <label
            htmlFor="password"
            className="form-label fs-6 fw-bolder text-dark mb-0"
          >
            Password
          </label>
          <input
            className="form-control bg-transparent"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>

        <button type="submit" className="btn btn-primary  w-50">
          Submit
        </button>

        <div className="d-flex justify-content-center gap-2">
          <p>Already have an account?</p>
          <p className="text-gray-500 hover:text-black">
            <Link to="/auth/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
