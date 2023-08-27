import React, { useState } from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
  };

  return (
    <section>
      <Form>
        <h1>Sign Up</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name..."
              value={name}
              onChange={() => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter Email..."
              value={email}
              onChange={() => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password..."
              value={password}
              onChange={() => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Enter Confirm Password..."
              value={confirmPassword}
              onChange={() => setPassword(e.target.value)}
            />
          </div>

          <button onSubmit>Sign In</button>

          <div>
            <h3>
              Already Have an Account? <Link to="/login">Login</Link>
            </h3>
          </div>
        </form>
      </Form>
    </section>
  );
}
