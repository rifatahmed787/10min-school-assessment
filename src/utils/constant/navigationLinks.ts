import { ComponentType } from "react";
import { FaProductHunt, FaUsers } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { IconType } from "react-icons";

export interface INavigationLinks {
  icon?: IconType | ComponentType<unknown>;
  label: {
    en: string;
    bn: string;
  };
  key: string;
  href?: string;
  subLinks?: INavigationLinks[];
}

const rootLinks: INavigationLinks = {
  icon: LuContact,
  label: { en: "Courses", bn: "কোর্সসমূহ" },
  key: "home",
  href: "/courses",
};

const admissionLinks: INavigationLinks = {
  icon: MdCategory,
  label: { en: "Admission", bn: "এডমিশন" },
  key: "admission",
  href: "/admission",
  subLinks: [
    {
      icon: FaProductHunt,
      label: { en: "New Admission", bn: "নতুন এডমিশন" },
      key: "new-admission",
      href: "/admission/new",
    },
    {
      icon: FaUsers,
      label: { en: "All Students", bn: "সকল শিক্ষার্থী" },
      key: "all-students",
      href: "/admission/students",
    },
    {
      icon: MdCategory,
      label: { en: "Admission Report", bn: "এডমিশন রিপোর্ট" },
      key: "admission-report",
      href: "/admission/report",
    },
  ],
};

const skillsLinks: INavigationLinks = {
  icon: FaProductHunt,
  label: { en: "Skills", bn: "স্কিলস" },
  key: "skills",
  href: "/skills",
  subLinks: [
    {
      icon: FaProductHunt,
      label: { en: "Add New Skill", bn: "নতুন স্কিল যোগ করুন" },
      key: "add-skill",
      href: "/skills/new",
    },
    {
      icon: FaUsers,
      label: { en: "Skill Categories", bn: "স্কিল ক্যাটাগরি" },
      key: "skill-categories",
      href: "/skills/categories",
    },
  ],
};

const onlineBatchLinks: INavigationLinks = {
  icon: FaUsers,
  label: { en: "Online Batch", bn: "অনলাইন ব্যাচ" },
  key: "online-batch",
  href: "/online-batch",
  subLinks: [
    {
      icon: FaProductHunt,
      label: { en: "Create Batch", bn: "ব্যাচ তৈরি করুন" },
      key: "create-batch",
      href: "/online-batch/create",
    },
    {
      icon: FaUsers,
      label: { en: "Batch Schedule", bn: "ব্যাচ সিডিউল" },
      key: "batch-schedule",
      href: "/online-batch/schedule",
    },
    {
      icon: MdCategory,
      label: { en: "Batch Students", bn: "ব্যাচের শিক্ষার্থী" },
      key: "batch-students",
      href: "/online-batch/students",
    },
  ],
};

export const publicNavigationLinks: INavigationLinks[] = [
  {...rootLinks},
  {...admissionLinks},
  {...skillsLinks},
  {...onlineBatchLinks},
];