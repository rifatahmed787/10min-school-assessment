/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Cookies from "js-cookie";
import { LucideLogOut, LucideHexagon } from "lucide-react";
import { cn } from "@/lib/utils";
import useSidebar from "@/hooks/useSidebar";
import { ABOUT_ME } from "@/utils/constant/appConfiguration";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { login, logout } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { ADMIN_NAVIGATION_LINKS } from "@/utils/constant/navigationLinks";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useParams, usePathname, useRouter } from "next/navigation";

interface IDashboardSidebarProps {
  mouseEnter?: boolean;
  setMouseEnter?: (mouseEnter: boolean) => void;
}

const DashboardSidebar: FC<IDashboardSidebarProps> = ({
  mouseEnter = false,
  setMouseEnter = () => {},
}) => {
  const { isOpen: sidebarOpen, onClose } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useParams();
  const { user } = useAppSelector((state) => state.auth);
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

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  // Unique gradient generation
  const generateHexGradient = (index: number) => {
    const colors = [
      "from-purple-600 to-blue-500",
      "from-pink-600 to-rose-500",
      "from-emerald-600 to-teal-500",
      "from-amber-600 to-yellow-500",
      "from-indigo-600 to-violet-500",
    ];
    return colors[index % colors.length];
  };

  // Simplified user data
  const userData = {
    name: user?.username,
    role: user?.role,
  };

  return (
    <aside
      className={cn(
    "flex flex-col",
    "h-screen sticky top-0", // Use sticky instead of fixed if possible
    "z-20 overflow-hidden transition-all duration-500 ease-in-out",
    sidebarOpen ? "w-72" : "w-24",
    "bg-gradient-to-b from-gray-900 to-gray-800",
    "border-r border-gray-700/50",
    mouseEnter && "shadow-2xl shadow-cyan-500/10"
  )}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      {/* Hexagonal Brand Area */}
      <div
        className={cn(
          "relative flex items-center justify-center py-2",
          "before:absolute before:content-[''] before:-top-4 before:left-0 before:w-full before:h-4",
          "before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBsNTAgMTBsNTAtMTB6Ii8+PC9zdmc+')]",
          "after:absolute after:content-[''] after:-bottom-4 after:left-0 after:w-full after:h-4",
          "after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDEwbDUwLTEwIDUwIDEweiIvPjwvc3ZnPg==')]"
        )}
      >

        <div className="absolute z-50 right-0 top-0 text-white">
           <MdOutlineKeyboardDoubleArrowRight
          className={`text-2xl my-3 cursor-pointer rounded-full transition-transform duration-300 ease-in-out ${
            open ? "" : "rotate-180"
          }`}
          onClick={() => {
            if (open) {
              onClose();
            } else {
              sidebarOpen();
            }
          }}
        />
        </div>

        <div
          className={cn(
            "relative flex items-center justify-center",
            "before:absolute before:content-[''] before:inset-0 before:rotate-60 before:bg-gradient-to-r from-cyan-400 to-blue-600 before:opacity-20",
            "after:absolute after:content-[''] after:inset-0 after:-rotate-60 after:bg-gradient-to-r from-purple-500 to-pink-600 after:opacity-20"
          )}
        >
          
          <Link href="/" className="z-10">
            <div
              className={cn(
                "flex items-center justify-center rounded-xl",
                "bg-gradient-to-br from-gray-800 to-gray-900",
                "border border-gray-700/50",
                "shadow-lg shadow-black/30",
                "transition-all duration-300 hover:scale-105",
                sidebarOpen ? "p-1" : "p-1"
              )}
            >
              <LucideHexagon
                className={cn(
                  "text-cyan-400",
                  sidebarOpen ? "h-8 w-8" : "h-6 w-6"
                )}
              />
              {sidebarOpen && (
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  {ABOUT_ME.myName.en}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* User Profile */}
      <div
        className={cn(
          "flex items-center px-4 py-3 mx-4 rounded-xl mb-6",
          "bg-gradient-to-r from-gray-800/50 to-gray-900/50",
          "border border-gray-700/30",
          !sidebarOpen && "justify-center"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center rounded-full",
            "bg-gradient-to-br from-cyan-500 to-blue-600",
            "h-10 w-10 text-white font-bold",
            !sidebarOpen && "h-8 w-8"
          )}
        >
          {userData?.name?.charAt(0)}
        </div>
        {sidebarOpen && (
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-gray-200 truncate">
              {userData?.name}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto scroll-hidden px-2">
        <Accordion type="multiple" className="space-y-1">
          {ADMIN_NAVIGATION_LINKS?.map((groupLink, groupIndex) => (
            <AccordionItem
              key={groupIndex}
              value={groupIndex.toString()}
              className="border-b-0"
            >
              <AccordionTrigger
                className={cn(
                  "group px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors",
                  "text-gray-300 hover:text-white",
                  "flex items-center justify-between",
                  !sidebarOpen && "justify-center"
                )}
              >
                <div className="flex items-center">
                  <div
                    className={cn(
                      "p-2 rounded-lg mr-3",
                      `bg-gradient-to-br ${generateHexGradient(groupIndex)}`,
                      "shadow-md shadow-black/20",
                      "group-hover:shadow-lg group-hover:shadow-black/30 transition-shadow"
                    )}
                  >
                    {groupLink?.icon &&
                      React.createElement(groupLink.icon, {
                        className: "h-5 w-5 text-white",
                      })}
                  </div>
                  {sidebarOpen && (
                    <span className="font-medium">{groupLink?.label?.en}</span>
                  )}
                </div>
              </AccordionTrigger>

              <AccordionContent className="pt-1 pb-0 pl-0">
                {groupLink?.subLinks?.map((subLink, subLinkIndex) => {
                const fullHref = `/${lang}${subLink.href}`;
                  const isActive = pathname === fullHref
                  return (
                    <>
                      <Link
                        key={subLinkIndex}
                        href={`/${lang}${subLink.href}`}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-lg mx-1 mb-1 transition-all",
                          "text-gray-400 hover:text-white",
                          "hover:bg-gray-800/30",
                          isActive && "bg-gray-900 text-white",
                          !sidebarOpen && "justify-center"
                        )}
                      >
                        <div
                          className={cn(
                            "h-2 w-2 rounded-full mr-3",
                            "bg-gradient-to-br from-cyan-400 to-blue-500",
                            !sidebarOpen && "mx-auto"
                          )}
                        />
                        {sidebarOpen && (
                          <span className="text-sm">{subLink?.label?.en}</span>
                        )}
                        {!sidebarOpen &&
                          subLink?.icon &&
                          React.createElement(subLink.icon, {
                            className: "h-5 w-5",
                          })}
                      </Link>
                    </>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700/50">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              className={cn(
                "w-full flex items-center justify-center",
                "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800",
                "text-gray-300 hover:text-white",
                "border border-gray-700/50 hover:border-gray-600/50",
                "rounded-lg py-2 px-4",
                "transition-all duration-300",
                "shadow-md hover:shadow-lg",
                !sidebarOpen && "px-2"
              )}
            >
              <LucideLogOut
                className={cn("mr-2 h-4 w-4", !sidebarOpen && "mr-0")}
              />
              {sidebarOpen && "Logout"}
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-gray-900 border-gray-800">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-gray-100">
                Confirm Logout
              </AlertDialogTitle>
              <AlertDialogDescription className="text-gray-400">
                You'll be signed out of your current session. Are you sure?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700 hover:text-white">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleLogout}
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500"
              >
                Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {sidebarOpen && (
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">
             V {ABOUT_ME.version} • {new Date().getFullYear()}
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
