"use client";

import Navbar from "@/components/shared/navbar";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import "./login.css";
import Link from "next/link";

function Login() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md pt-[190px]">
        <h2 className="text-xl font-bold">Login</h2>
        <p className="text-muted-foreground">
          Don't have an account?{" "}
          <Link href={"/register"}>
            <span className="text-blue-500 cursor-pointer hover:underline">
              Sign up
            </span>
          </Link>
        </p>

        <div className="my-3">
          <Separator />
        </div>

        <Form action="/search">
          <label className="block text-sm font-medium " htmlFor="email">
            Email
          </label>
          <br />
          <input
            placeholder="email@gmail.com"
            type="email"
            name="email"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  "
          />
          <br />
        </Form>
        <Form action="/search">
          <label className="block text-sm font-medium " htmlFor="password">
            Password
          </label>
          <br />
          <input
            placeholder="*****"
            type="password"
            name="email"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  "
          />
          <br />
        </Form>

        <div className="text-sm text-right pb-1">
          <Link href={"/forgot-password"}>
            <span className="text-blue-500 cursor-pointer hover:underline ">
              Forgot Password?
            </span>
          </Link>
        </div>
        
          <button className="btn">Log In</button>
      </div>
    </>
  );
}

export default Login;
