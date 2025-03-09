"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter

const LoginPage = () => {
  const router = useRouter(); // Initialize router
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      // Proceed with login logic
      console.log("Login form submitted:", { email, password });
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        // Redirect to selection page after successful login
        router.push("/selection");
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm text-center">
        {/* LOGIN Title */}
        <h1 className="text-5xl font-bold mb-2">LOGIN</h1>
        <p className="text-gray-600 text-sm mb-6">
          If you have an account with us, please log in.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <style jsx>{`
            input[type="email"],
            input[type="password"] {
              width: 100%;
            }
            h1,
            p,
            a {
              color: #333;
            }
          `}</style>
          <div className="w-full">
            <input
              type="email"
              placeholder="Email Address"
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs text-left mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
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

          {/* Sign In Button */}
            <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 text-white font-semibold py-2 rounded-full hover:bg-gray-800 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
            {isSubmitting ? "SIGNING IN..." : "SIGN IN"}
            </button>
        </form>

        {/* Sign-up & Forgot Password Links */}
        <p className="text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
            <Link href="/signup" className="font-semibold hover:underline">
            Create an account
            </Link>{" "}
          or{" "}
          <Link
            href="/password-reset"
            className="font-semibold hover:underline"
          >
            Forgot your password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
