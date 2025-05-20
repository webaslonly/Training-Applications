"use client";

import Navbar from "@/components/shared/navbar";
import Form from "next/form";
import { Separator } from "@/components/ui/separator";
import "./register.css";
import Link from "next/link";

function Register() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md pt-[190px]">
        <h2 className="text-xl font-bold">Register</h2>
        <p className="text-muted-foreground">
          Have an account?{" "}
          <Link href={"/login"}>
            <span className="text-blue-500 cursor-pointer hover:underline">
              Sign in
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
            name="email"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  "
          />
          <br />
        </Form>

        <div className="pt-1">
          <button className="btn">Register</button>
        </div>
      </div>
    </>
  );
}

export default Register;
