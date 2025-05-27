"use client";
import React, { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="px-5 md:px-0 flex justify-center items-center h-screen bg-[radial-gradient(circle_at_center,_white,_#93C5FD)]">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-sm p-8 rounded-lg shadow-md">
        <p className="text-sm text-gray-500 mb-1">
          Healthcare administration simplified
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Forgot your password?
          </h2>
          <p className="text-sm text-gray-500">
            Enter your email address below and we'll send you a link to reset
            your password.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>

          <Button
            type="submit"
            variant="secondary"
            text="Send Reset Link"
            className="bg-[#2563EB] w-full text-white"
            disabled={!email}
          />
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/home/authentication/login"
            className="text-sm text-blue-600 hover:underline"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
