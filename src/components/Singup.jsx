import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useContext, useRef, useState } from "react";
import { auth } from "../services/firebase";
import { productsContext } from "../context/ProductsContext";

function Singup() {
  const [error, setError] = useState(null);
  const { user, handleUser } = useContext(productsContext);

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

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        handleUser(userCredential.user.email);
        setError(null);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        setError(errorMessage);
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
            id="singUpemail"
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
            id="singUppassword"
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
        <p>{error}</p>
        <button type="submit"> Singup </button>
      </form>
    </>
  );
}

export default Singup;
