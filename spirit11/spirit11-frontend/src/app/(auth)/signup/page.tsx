"use client";

import React, { useState } from "react";
import Link from "next/link";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: {
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
    } = {};

    // First name validation
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Last name validation
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password = 
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Proceed with signup logic
      console.log("Signup form submitted:", { firstName, lastName, email, password });

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        // Redirect or show success message
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-lg text-center">
        {/* Title */}
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          CREATE AN ACCOUNT
        </h1>
        {/* Instruction Text */}
        <p className="text-gray-600 text-xs mb-6">
          Enter your information below to proceed. If you already have an
          account, please log in instead.
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="First Name"
                className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs text-left mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Last Name"
                className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800`}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs text-left mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs text-left mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs text-left mt-1">{errors.password}</p>
            )}
          </div>

          {/* Password requirements hint */}
          <p className="text-xs text-gray-500 text-left">
            Password must be at least 8 characters long and include uppercase, lowercase, and numbers.
          </p>

          {/* Signup Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 text-white font-semibold py-2 rounded-full hover:bg-gray-800 transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "CREATING ACCOUNT..." : "CREATE AN ACCOUNT"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
