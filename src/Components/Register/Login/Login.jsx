"use client";
import React, { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import { Checkbox } from "antd";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="px-5 md:px-0 flex justify-center items-center h-screen bg-[radial-gradient(circle_at_center,_white,_#93C5FD)]">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-sm p-8 rounded-lg shadow-md">
        <p className="text-sm text-gray-500 mb-1">
          Healthcare administration simplified
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Sign in to your account
          </h2>
          <p className="text-sm text-gray-500">
            Enter your credentials to access the dashboard
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@email.com"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Link
              href="/home/authentication/forgot_password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center mb-6">
          <Checkbox
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <span className="ml-2 text-sm text-gray-700">
            Remember me for 30 days
          </span>
        </div>

        <Button
          variant="secondary"
          text="Sign In"
          className="bg-[#2563EB] w-full text-white"
        />

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-700">Don't have an account?</span>
          <Link
            href="/home/authentication/register"
            className="ml-1 text-sm text-blue-600 hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
