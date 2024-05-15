import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import "./Register.css";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit = handleSubmit((data) => {
    reset();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        handleUser(userCredential.user.email);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
      });
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email"> Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required...",
              },
              pattern: {
                //circunflego: ^
                value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                message: "Formato erroneo",
              },
            })}
          />
          {errors.email && <span>{errors.email?.message}</span>}
        </div>

        <div>
          <label htmlFor="password"> Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required...",
              },
              minLength: {
                value: 6,
                message: "Min de largo 6",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type="submit"> Register </button>
      </form>
    </>
  );
}

export default Register;
