import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, User, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Offers", href: "/offers" },
  { label: "Orders", href: "/orders" },
  { label: "AboutUs", href: "/aboutus" },
];

function SiteHeader() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") return true;
      if (saved === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [isAdmin, setIsAdmin] = useState(false); // ✅ inside component

  useEffect(() => {
    const role = localStorage.getItem("post"); // should be 'admin' if admin
    setIsAdmin(role === "admin");
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur border-b shadow-sm dark:bg-gray-900/80 dark:border-gray-700">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="rounded bg-yellow-400 p-1">
            <span role="img" aria-label="cupcake">
              🧁
            </span>
          </span>
          <span className="text-pink-600 dark:text-pink-400">SugarRush</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-md font-medium text-gray-700 hover:text-pink-600 transition-colors dark:text-gray-300 dark:hover:text-pink-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-700" />
            )}
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            <Badge className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              5
            </Badge>
          </Button>

          {/* Sign In */}
          <Button variant="outline" className="hidden md:inline-flex">
            <User className="mr-2 h-4 w-4" />
            Sign In
          </Button>

          {/* Sign Up */}
          <Button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md px-4 py-2 shadow">
            Sign Up
          </Button>

          {/* Admin-only: Create Account */}
          {isAdmin && (
            <Link to="/createaccount">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2 shadow">
                Create Account
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
