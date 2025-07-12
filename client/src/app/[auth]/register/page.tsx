"use client";

import Navbar from "@/components/shared/navbar";
import Form from "next/form";
import { Separator } from "@/components/ui/separator";
import "./register.css";
import Link from "next/link";
import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState({
    name: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    let newError = { name: "", lastName: "", email: "", password: "" };
    if (!form.name) {
      newError.name = "Name is required";
      valid = false;
    }
    if (!form.lastName) {
      newError.lastName = "Last name is required";
      valid = false;
    }
    if (!form.email) {
      newError.email = "Email is required";
      valid = false;
    }
    if (!form.password) {
      newError.password = "Password is required";
      valid = false;
    }
    setError(newError);
    if (!valid) return;
    // handle register logic here
  };

  
  

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md pt-[190px]">
        <h2 className="text-xl font-bold">Register</h2>
        <p className="text-muted-foreground">
          Have an account?{" "}
          <Link href={"/auth/login"}>
            <span className="text-blue-500 cursor-pointer hover:underline">
              Sign in
            </span>
          </Link>
        </p>

        <div className="my-3">
          <Separator />
        </div>

        <Form onSubmit={handleSubmit} action="#">
          <div className="flex justify-between">
            <div>
              <label className="block text-sm font-medium ">
                Your Name
              </label>
              <br />
              <input
                placeholder="Your Name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`appearance-none block w-full  px-3 py-2 border ${error.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {error.name && <span className="text-red-500 text-xs">{error.name}</span>}
            </div>
            <div className="ml-16">
              <label className="block text-sm font-medium ">
                Your Last Name
              </label>
              <br />
              <input
                placeholder="Your Last Name"
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-2 border ${error.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {error.lastName && <span className="text-red-500 text-xs">{error.lastName}</span>}
            </div>
          </div>
          <br />
          <label className="block text-sm font-medium " htmlFor="email">
            Email
          </label>
          <br />
          <input
            placeholder="email@gmail.com"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
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
            value={form.password}
            onChange={handleChange}
            className={`appearance-none block w-full px-3 py-2 border ${error.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {error.password && <span className="text-red-500 text-xs">{error.password}</span>}
          <br />
          <div className="pt-1">
            <button className="btn" type="submit">Register</button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Register;