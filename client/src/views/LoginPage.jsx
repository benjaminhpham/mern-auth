import React, { useState } from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <section>
      <Form>
        <h1>Sign In</h1>
        <form onSubmit={submitHandler}>
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
          <button onSubmit>Sign In</button>

          <div>
            <h3>
              New Customer? <Link to="/register">Register</Link>
            </h3>
          </div>
        </form>
      </Form>
    </section>
  );
}
