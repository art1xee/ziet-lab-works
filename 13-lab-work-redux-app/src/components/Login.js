import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      login({
        name,
        email,
      })
    );

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit__btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
