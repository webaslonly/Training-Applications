"use client";

import Navbar from "@/components/shared/navbar";
import Form from "next/form";
import { Separator } from "@/components/ui/separator";
import "./forgot.css";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    setError("");
    // handle forgot password logic here
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md pt-[190px]">
        <h2 className="text-xl font-bold">Forgot Password</h2>
        <Link href={"/auth/login"}>
          <p className="text-muted-foreground flex">
            <span className="mt-[5px]"><IoIosArrowBack /></span>Back
          </p>
        </Link>

        <div className="my-3">
          <Separator />
        </div>

        <Form onSubmit={handleSubmit} action="#">
          <label className="block text-sm font-medium " htmlFor="email">
            Email
          </label>
          <br />
          <input
            placeholder="mail@example.com"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`appearance-none block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {error && <span className="text-red-500 text-xs">{error}</span>}
          <br />
          <div className="pt-1">
            <button className="btn" type="submit">Send</button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Register;
