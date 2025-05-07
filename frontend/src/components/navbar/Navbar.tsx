"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./Navbar.scss";
import { User, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // user state
  const [user, setUser] = useState(true);
  const name = "John Doe";

  // Theme toggle functionality
  const [theme, setTheme] = useState("dark");


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    }
  }, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Centralized Menu Items
  const menuItems = [
    ...(user ? [{ name: "Jobs", href: "/jobs" }] : []),
    ...(user ? [{ name: "Remote", href: "/remote-jobs" }] : []),
    { name: "Candidates", href: "/candidates" },
    { name: "Chatbot", href: "/chat-bot" },
    ...(user ? [{ name: "Post Job", href: "/post-job" }] : []),
  ];

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-primary text-white" : "bg-white text-gray-800"
      } transition-colors duration-300 shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="">
            <Link href="/">
              <div className="">
                Career Connect
              </div>
            </Link>
                  </div>
          {/* Desktop Menu */}
          <div className="flex ">
          <div className="hidden lg:flex mr-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  theme === "dark"
                    ? "hover:bg-gray-700 hover:text-white"
                    : "hover:bg-red-50 hover:text-red-600"
                } transition-colors duration-150`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Theme Toggle + User Profile */}
          <div className="hidden lg:flex items-center">
            {/* Theme toggle button */}
            <div className="mr-4 ">
              <label className="switch">
                <span className="sun">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="#ffd43b">
                      <circle r="5" cy="12" cx="12"></circle>
                      <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                    </g>
                  </svg>
                </span>
                <span className="moon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                  </svg>
                </span>
                <input
                  type="checkbox"
                  className="input"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                />
                <span className="slider"></span>
              </label>
            </div>

            {/* User Profile / Login */}
            {!user ? (
              <Link
                href="/auth/sign-in"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-150"
              >
                Sign In
              </Link>
            ) : (
              <Link href="/self-profile" className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="user-profile.svg"
                    alt="profile"
                  />
                </div>
              </Link>
            )}
          </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Theme toggle button for mobile */}
            <label className="switch">
              <span className="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r="5" cy="12" cx="12"></circle>
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                  </g>
                </svg>
              </span>
              <span className="moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                </svg>
              </span>
              <input
                type="checkbox"
                className="input"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  className={`w-6 h-6 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  className={`w-6 h-6 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <span className="font-semibold">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className={`${
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-4">
          {user && (
            <div className="mb-6 py-4 border-b border-gray-200 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <User size={32} color="white" />
              </div>
              <div>
                <div className="font-medium">{name}</div>
                <Link
                  href="/self-profile"
                  className={`text-sm ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  View Profile
                </Link>
              </div>
            </div>
          )}

          {/* Mobile Menu Items */}
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded-md ${
                  theme === "dark"
                    ? "hover:bg-gray-700"
                    : "hover:bg-red-50 hover:text-red-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {!user && (
            <Link
              href="/auth/sign-in"
              onClick={() => setMenuOpen(false)}
              className="mt-4 w-full px-4 py-2 bg-red-600 text-white text-center rounded-lg hover:bg-red-700"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
