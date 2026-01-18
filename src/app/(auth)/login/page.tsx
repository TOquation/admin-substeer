"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const router = useRouter();

  useEffect(() => {
    const checkPreviousLogin = () => {
      const cachedEmail = localStorage.getItem("cachedEmail");
      const cachedPassword = localStorage.getItem("cachedPassword");
      const hasLoggedInBefore = localStorage.getItem("hasLoggedInBefore");

      if (hasLoggedInBefore === "true") {
        setShowBanner(false);

        if (cachedEmail && cachedPassword) {
          setEmail(cachedEmail);
          setPassword(cachedPassword);
          setRememberMe(true);
        }
      } else {
        // First time user - show banner
        setShowBanner(true);
      }
    };

    checkPreviousLogin();
  }, []);

  const handleShowPassword = () => {
    setShow(!show);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    localStorage.setItem("hasLoggedInBefore", "true");

    if (rememberMe) {
      localStorage.setItem("cachedEmail", email);
      localStorage.setItem("cachedPassword", password);
    } else {
      localStorage.removeItem("cachedEmail");
      localStorage.removeItem("cachedPassword");
    }

    // Navigate to dashboard
    router.push("/dashboard");
  };

  // Clear error when user starts typing
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({ ...errors, email: "" });
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors({ ...errors, password: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      {showBanner ? (
        <div className="w-full max-w-lg space-y-8 md:space-y-12">
          {/* subster logo */}
          <div className="flex justify-center">
            <Image
              src="/images/logo-text.svg"
              alt="subster-logo"
              width={120}
              height={120}
            />
          </div>

          {/* login-form */}
          <div className="bg-green-50 rounded-[1.5rem] min-h-40 w-full px-6 py-6 md:px-8 md:py-8">
            <div className="text-center space-y-4 mb-6">
              <h1 className="font-bold text-base md:text-lg font-inter">
                <span className="">Welcome back</span> <br />{" "}
                <span>to Substeer Admin</span>
              </h1>
              <p className="text-sm font-roboto font-normal">
                Securely manage users, analytics, and marketplace tools.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="">
                  <Input
                    required
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`py-5 px-3 rounded-full focus-visible:outline-none focus-visible:ring-0 focus:ring-0 border shadow-none ${
                      errors.email ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 ml-4">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="">
                  <div className="relative">
                    <Input
                      required
                      type={show ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      className={`py-5 px-3 rounded-full focus:ring-0 focus:outline-none border focus-visible:ring-0 shadow-none ${
                        errors.password ? "border-red-500" : "border-gray-400"
                      }`}
                    />

                    {show ? (
                      <Eye
                        onClick={handleShowPassword}
                        className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5 cursor-pointer"
                        strokeWidth={1}
                      />
                    ) : (
                      <EyeOff
                        onClick={handleShowPassword}
                        className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5 cursor-pointer"
                        strokeWidth={1}
                      />
                    )}
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1 ml-4">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <label className="flex gap-1.5 items-center text-sm">
                    <span>
                      <Checkbox
                        checked={rememberMe}
                        onCheckedChange={(checked) =>
                          setRememberMe(checked as boolean)
                        }
                        className="w-4 h-4 rounded-none border border-gray-400 data-[state=checked]:border-green-200 data-[state=checked]:bg-green-400 cursor-pointer hover:border-green-400"
                      />
                    </span>
                    <span>Remember me</span>
                  </label>

                  <button
                    type="button"
                    className="text-sm cursor-pointer text-indigo-700"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="rounded-full text-center cursor-pointer w-full font-roboto bg-green-400 text-sm hover:bg-green-500 ease-in-out duration-100 py-2.5"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="fixed top-0 left-0 right-0 w-full bg-[url('/images/banner.svg')] bg-cover bg-no-repeat bg-center h-20 flex justify-center items-center z-10">
            <h1 className="text-white text-xl md:text-2xl font-fredoka">
              Lets get you started!
            </h1>
          </div>
          <div className="w-full max-w-lg mx-auto space-y-6 md:space-y-8 mt-24">
            {/* subster logo */}
            <div className="flex justify-center">
              <Image
                src="/images/logo-text.svg"
                alt="subster-logo"
                width={120}
                height={120}
              />
            </div>

            {/* login-form */}
            <div className="bg-green-50 rounded-[1.5rem] min-h-40 w-full px-4 py-6 md:px-8 md:py-8">
              <div className="text-center space-y-4 mb-6">
                <h1 className="font-bold text-base md:text-lg font-inter">
                  <span className="">Welcome back</span> <br />{" "}
                  <span>to Substeer Admin</span>
                </h1>
                <p className="text-sm font-roboto font-normal">
                  Securely manage users, analytics, and marketplace tools.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="">
                    <Input
                      required
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                      className={`py-5 px-3 rounded-full focus-visible:outline-none focus-visible:ring-0 focus:ring-0 border shadow-none ${
                        errors.email ? "border-red-500" : "border-gray-400"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 ml-4">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="">
                    <div className="relative">
                      <Input
                        required
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={`py-5 px-3 rounded-full focus:ring-0 focus:outline-none border focus-visible:ring-0 shadow-none ${
                          errors.password ? "border-red-500" : "border-gray-400"
                        }`}
                      />

                      {show ? (
                        <Eye
                          onClick={handleShowPassword}
                          className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5 cursor-pointer"
                          strokeWidth={1}
                        />
                      ) : (
                        <EyeOff
                          onClick={handleShowPassword}
                          className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5 cursor-pointer"
                          strokeWidth={1}
                        />
                      )}
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1 ml-4">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <label className="flex gap-1.5 items-center text-sm">
                      <span>
                        <Checkbox
                          checked={rememberMe}
                          onCheckedChange={(checked) =>
                            setRememberMe(checked as boolean)
                          }
                          className="w-4 h-4 rounded-none border border-gray-400 data-[state=checked]:border-green-200 data-[state=checked]:bg-green-400 cursor-pointer hover:border-green-400"
                        />
                      </span>
                      <span>Remember me</span>
                    </label>

                    <button
                      type="button"
                      className="text-sm cursor-pointer text-indigo-700"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="rounded-full text-center cursor-pointer w-full font-roboto bg-green-400 text-sm hover:bg-green-500 ease-in-out duration-100 py-2.5"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
