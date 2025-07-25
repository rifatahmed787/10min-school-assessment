import { AiOutlineHome } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
// import { FaBolt } from "react-icons/fa";
import { PiNotebookLight } from "react-icons/pi";
import { IconType } from "react-icons";
export interface INavigationLinks {
  icon?: IconType;
  label: {
    bn: string;
    en: string;
  };
  href: string;
}

export const nav_links: INavigationLinks[] = [
  {
    icon: AiOutlineHome,
    label: { bn: "হোম", en: "Home" },
    href: "/home",
  },

  {
    icon: IoBriefcaseOutline,
    label: { bn: "কাজ", en: "Work" },
    href: "/work",
  },
  {
    icon: MdOutlineWorkHistory,
    label: { bn: "অভিজ্ঞতা", en: "Experience" },
    href: "/experience",
  },
  {
    icon: FaRegCircleUser,
    label: { bn: "পরিচিতি", en: "About" },
    href: "/about",
  },
  {
    icon: PiNotebookLight,
    label: { bn: "ব্লগ", en: "Blog" },
    href: "/blog",
  },
];
