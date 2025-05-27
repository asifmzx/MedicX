"use client";
import React, { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import { Checkbox } from "antd";
import Link from "next/link";

const Register = () => {
  const [name, setName] = useState(""); // New state for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <div className="px-5 md:px-0 flex justify-center items-center h-screen bg-[radial-gradient(circle_at_center,_white,_#93C5FD)]">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-sm p-8 rounded-lg shadow-md">
        <p className="text-sm text-gray-500 mb-1">
          Healthcare administration simplified
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Create your account
          </h2>
          <p className="text-sm text-gray-500">
            Enter your details to get started
          </p>
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
        </div>

        {/* Email Field */}
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

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
        </div>

        {/* Terms Agreement */}
        <div className="flex items-center mb-6">
          <Checkbox
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span className="ml-2 text-sm text-gray-700">
            I agree to the{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms and Conditions
            </Link>
          </span>
        </div>

        {/* Register Button */}
        <Button
          variant="secondary"
          text="Register"
          className="bg-[#2563EB] w-full text-white"
          disabled={
            !agree ||
            !name ||
            !email ||
            !password ||
            password !== confirmPassword
          }
        />

        {/* Redirect to Login */}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-700">
            Already have an account?
          </span>
          <Link
            href="/home/authentication/login"
            className="ml-1 text-sm text-blue-600 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
