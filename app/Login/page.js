"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/blogs";
  const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();

  // GitHub Login Handler
  const handleGithubLogin = async () => {
    try {
      await gitHubSignIn();
      router.push(redirectPath);
    } catch (error) {
      console.error("GitHub Login Error:", error);
    }
  };

  // Google Login Handler
  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      router.push(redirectPath);
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  // Logout Handler
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // If the user is logged in, show logout and welcome message
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Welcome, {user.displayName || "User"}!
          </h2>
          <p className="text-gray-600 mb-4">You are already logged in.</p>
          <button
            onClick={handleLogout}
            className="mt-4 px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  // If no user is logged in, show login options
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Please log in to continue
        </p>
        <div className="space-y-4">
          <LoginButton
            onClick={handleGithubLogin}
            bgColor="bg-blue-600"
            hoverColor="hover:bg-blue-700"
            icon={GitHubIcon}
            label="Log in with GitHub"
          />
          <LoginButton
            onClick={handleGoogleLogin}
            bgColor="bg-red-600"
            hoverColor="hover:bg-red-700"
            icon={GoogleIcon}
            label="Log in with Google"
          />
        </div>
      </div>
    </div>
  );
};

// Login Button Component
const LoginButton = ({ onClick, bgColor, hoverColor, icon: Icon, label }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-center px-6 py-3 text-white ${bgColor} rounded-lg ${hoverColor} focus:outline-none focus:ring-2`}
  >
    <Icon className="w-5 h-5 mr-2" />
    {label}
  </button>
);

// GitHub SVG Icon
const GitHubIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12C0 17.303 3.438 21.8 8.207 23.387C8.811 23.492 9.025 23.139 9.025 22.841V20.602C5.672 21.304 4.967 19.003 4.967 19.003C4.44 17.668 3.635 17.292 3.635 17.292C2.567 16.681 3.715 16.7 3.715 16.7C4.906 16.79 5.574 17.9 5.574 17.9C6.602 19.572 8.316 19.072 9.048 18.756C9.163 18.021 9.479 17.543 9.835 17.256C7.189 16.969 4.457 15.92 4.457 11.363C4.457 10.078 4.907 9.025 5.611 8.221C5.491 7.938 5.121 6.684 5.731 5.074C5.731 5.074 6.705 4.748 8.975 6.3C9.85 6.013 10.825 5.877 11.8 5.872C12.775 5.877 13.75 6.013 14.625 6.3C16.895 4.748 17.869 5.074 17.869 5.074C18.479 6.684 18.109 7.938 17.989 8.221C18.693 9.025 19.143 10.078 19.143 11.363C19.143 15.932 16.406 16.964 13.752 17.248C14.192 17.611 14.575 18.349 14.575 19.408V22.841C14.575 23.139 14.789 23.492 15.393 23.387C20.162 21.8 23.6 17.303 23.6 12C23.6 5.373 18.227 0 12 0Z" />
  </svg>
);

// Google SVG Icon
const GoogleIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21.805 10.024h-9.766v3.952h5.588c-0.448 2.226-2.509 3.859-5.588 3.859-3.317 0-6.015-2.698-6.015-6.015s2.698-6.015 6.015-6.015c1.53 0 2.918 0.565 3.975 1.488l3.018-3.018c-1.784-1.647-4.139-2.666-6.993-2.666-5.522 0-10.015 4.493-10.015 10.015s4.493 10.015 10.015 10.015c5.512 0 9.951-3.98 9.951-10.015 0-0.68-0.076-1.352-0.21-1.991z" />
  </svg>
);

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
}
