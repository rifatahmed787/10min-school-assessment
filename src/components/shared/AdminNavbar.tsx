"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LucideBellRing, LucideUser, LucideSettings, LucideHelpCircle, LucideLogOut } from "lucide-react";
import LanguageSwitcher from "@/utils/LanguageSwitcher";
import { ThemeToggle } from "@/utils/ThemeToggle";
import Button from "../common/Button";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { login, logout } from "@/redux/features/auth/authSlice";
import { showSidebarDrawer } from "@/redux/features/ui/sidebarSlice";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="overflow-hidden rounded-full p-0"
      >
        <Image
          src={user?.avatar ?? "/placeholder-user.jpg"}
          width={36}
          height={36}
          alt="Avatar"
          className="overflow-hidden rounded-full"
        />
      </Button>

      <div>
        {isOpen && (
          <div 
            className={cn(
              "absolute right-0 mt-2 w-56 origin-top-right rounded-md",
              "bg-background shadow-lg ring-1 ring-black ring-opacity-5",
              "focus:outline-none z-50 animate-in fade-in-80"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-1">
              <div className="px-4 py-2 border-b">
                <p className="text-sm font-medium text-foreground">{user?.username || "User"}</p>
                <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
              </div>

              <Link
                href="/settings"
                className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                <LucideSettings className="mr-2 h-4 w-4" />
                Settings
              </Link>

              <Link
                href="/support"
                className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                <LucideHelpCircle className="mr-2 h-4 w-4" />
                Support
              </Link>

              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="flex w-full items-center px-4 py-2 text-sm text-foreground hover:bg-accent"
                >
                  <LucideLogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  <LucideUser className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

const AdminNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const userObject = JSON.parse(userCookie);
      const { user, isLoggedIn } = userObject;
      const accessToken = Cookies.get("token") || null;

      dispatch(
        login({
          user,
          isLoggedIn,
          accessToken,
          refreshToken: null,
        })
      );
    }
  }, [dispatch]);

  return (
    <>
      <nav className="w-screen md:w-full overflow-hidden py-1 md:py-1.5 sticky left-0 top-0 z-50 transition-all duration-500 backdrop-blur-sm border-b bg-tertiary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end">
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Notifications */}
              <Button variant="purple" className="relative" size="sm">
                <LucideBellRing className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
              </Button>

              {/* Custom Dropdown */}
              <CustomDropdown />
            </div>

            {/* Mobile Menu Button */}
            <div className="block lg:hidden">
              <button
                className="relative z-10 flex flex-col items-center justify-center w-10 h-10"
                onClick={() => {
                  dispatch(showSidebarDrawer());
                  setIsSidebarOpen(!isSidebarOpen);
                }}
                aria-label="Toggle menu"
              >
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isSidebarOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isSidebarOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isSidebarOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default AdminNavbar;