"use client";

import Navbar from "@/components/shared/navbar";
import Form from "next/form";
import { Separator } from "@/components/ui/separator";
import "./login.css";
import Link from "next/link";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    let newError = { email: "", password: "" };
    if (!email) {
      newError.email = "Email is required";
      valid = false;
    }
    if (!password) {
      newError.password = "Password is required";
      valid = false;
    }
    setError(newError);
    if (!valid) return;
    // handle login logic here
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md pt-[190px]">
        <h2 className="text-xl font-bold">Login</h2>
        <p className="text-muted-foreground">
          Don't have an account?{" "}
          <Link href={"/auth/register"}>
            <span className="text-blue-500 cursor-pointer hover:underline">
              Sign up
            </span>
          </Link>
        </p>

        <div className="my-3">
          <Separator />
        </div>

        <Form onSubmit={handleSubmit} action="#">
          <label className="block text-sm font-medium " htmlFor="email">
            Email
          </label>
          <br />
          <input
            placeholder="email@gmail.com"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`appearance-none block w-full px-3 py-2 border ${error.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {error.email && <span className="text-red-500 text-xs">{error.email}</span>}
          <br />
          <label className="block text-sm font-medium " htmlFor="password">
            Password
          </label>
          <br />
          <input
            placeholder="*****"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={`appearance-none block w-full px-3 py-2 border ${error.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {error.password && <span className="text-red-500 text-xs">{error.password}</span>}
          <br />
          <div className="text-sm text-right pb-1">
            <Link href={"/auth/forgot-password"}>
              <span className="text-blue-500 cursor-pointer hover:underline ">
                Forgot Password?
              </span>
            </Link>
          </div>
          <button className="btn" type="submit">Log In</button>
        </Form>
      </div>
    </>
  );
}

export default Login;
