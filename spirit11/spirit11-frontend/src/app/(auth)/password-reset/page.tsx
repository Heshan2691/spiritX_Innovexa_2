"use client";

import React, { useState } from "react";
import Link from "next/link";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ 
    password?: string; 
    confirmPassword?: string;
    general?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: {
      password?: string;
      confirmPassword?: string;
      general?: string;
    } = {};
    
    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password = 
        "Password must contain uppercase, lowercase letters, and numbers";
    }
    
    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Handle password reset logic here
      console.log("Password reset form submitted:", { password });
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Optional: redirect after successful password reset
        // setTimeout(() => window.location.href = '/login', 3000);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2 whitespace-nowrap">
          RESET ACCOUNT PASSWORD
        </h1>
        <p className="text-gray-600 text-sm mb-6">Enter a new password.</p>

        {isSuccess ? (
          <div className="text-center">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Password has been reset successfully.
            </div>
            <Link href="/login" className="text-blue-500 hover:underline">
              Back to Login
            </Link>
          </div>
        ) : (
          /* Reset Password Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-full">
              <input
                type="password"
                placeholder="Password"
                className={`w-3/4 px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-xs text-left w-3/4 mx-auto mt-1">{errors.password}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="password"
                placeholder="Confirm Password"
                className={`w-3/4 px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs text-left w-3/4 mx-auto mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Password requirements hint */}
            <p className="text-xs text-gray-500 text-left w-3/4 mx-auto">
              Password must be at least 8 characters long and include uppercase, lowercase, and numbers.
            </p>

            {/* Error Message */}
            {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}

            {/* Reset Password Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-3/4 bg-gray-900 text-white font-semibold py-2 rounded-full hover:bg-gray-800 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "RESETTING..." : "RESET PASSWORD"}
            </button>
            
            {/* Back to login link */}
            <div className="mt-4">
              <Link href="/login" className="text-gray-600 hover:underline text-sm">
                Back to login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
