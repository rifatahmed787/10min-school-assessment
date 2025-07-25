import { LucideArrowDownCircle, LucideArrowUpCircle, LucideBarChart4, LucideClipboardSignature, LucideContact2, LucideGanttChartSquare, LucideLineChart } from "lucide-react";
import { LucideIcon } from "lucide-react";
import {
  LuArrowRightLeft,
  LuArrowUpDown,
  LuBadgeAlert,
  LuBoxes,
  LuCommand,
  LuFileSpreadsheet,
  LuGitFork,
  LuLayoutGrid,
  LuLayoutList,
  LuListChecks,
  LuListEnd,
  LuListOrdered,
  // LuListTodo,
  LuMapPin,
  LuPackage,
  LuPackageOpen,
  LuPiggyBank,
  LuPrinter,
  LuQrCode,
  LuRepeat,
  LuScale,
  LuScrollText,
  LuSettings,
  LuSettings2,
  LuSnowflake,
  LuSplit,
  LuSunSnow,
  LuTags,
  LuTarget,
  LuUsers,
} from "react-icons/lu";

export interface INavigationLinks {
  icon?: string | LucideIcon;
  label: {
    bn: string;
    en: string;
  };
  key: string;
  href: string;
  subLinks?: INavigationLinks[];
}

// USER MANAGEMENT LINKS
export const user_management_links_admin = {
  icon: LuUsers,
  label: { bn: "ব্যবহারকারী অ্যাকাউন্ট ব্যবস্থাপনা", en: "User Management" },
  key: "user_management",
  href: "user_management",
  subLinks: [
    {
      icon: LuListOrdered,
      label: { bn: "সদস্য তালিকা", en: "User List" },
      key: "users_list",
      href: "users_list",
    },
    {
      icon: LuGitFork,
      label: { bn: "শাখা তালিকা", en: "Branch List" },
      key: "branch_list",
      href: "branch_list",
    },
    {
      icon: LuTarget,
      label: { bn: "শাখা তালিকা", en: "Branch Targets" },
      key: "branch_targets",
      href: "branch_targets",
    },
    {
      "icon": LuTarget,
      "label": { "bn": "বিক্রয় প্রতিনিধি বিক্রয় তালিকা", "en": "Salesman Targets" },
      "key": "salesman_targets",
      "href": "salesman_targets"
    },  
    {
      "icon": LuTarget,
      "label": { "bn": "বিক্রয় প্রতিনিধি লক্ষ্যমাত্রা", "en": "Salesman Sales Reports" },
      "key": "salesman_sales_reports",
      "href": "salesman_sales_reports"
    }    
  ],
};
export const user_management_links_others = {
  icon: LuUsers,
  label: { bn: "ব্যবহারকারী অ্যাকাউন্ট ব্যবস্থাপনা", en: "User Management" },
  key: "user_management",
  href: "user_management",
  subLinks: [
    {
      icon: LuListOrdered,
      label: { bn: "সদস্য তালিকা", en: "User List" },
      key: "users_list",
      href: "users_list",
    },
    {
      icon: LuTarget,
      label: { bn: "শাখা তালিকা", en: "Branch Targets" },
      key: "branch_targets",
      href: "branch_targets",
    },
    {
      icon: LuTarget,
      label: { bn: "শাখা লেজার", en: "Branch Ledger" },
      key: "branch_ledger",
      href: "branch_ledger",
    },
  ],
};

// CONTACTS LINKS
const contacts_links = {
  icon: LucideContact2,
  label: { bn: "যোগাযোগ", en: "Contacts" },
  key: "contacts",
  href: "contacts",
  subLinks: [
    {
      icon: LuListOrdered,
      label: { bn: "গ্রাহক তালিকা", en: "Customer List" },
      key: "customers_list",
      href: "customers_list",
    },
    {
      icon: LuListOrdered,
      label: { bn: "বার্তা গ্রাহক", en: "Message Customer" },
      key: "message_customers",
      href: "message_customers",
    },
    // supplier
    {
      icon: LuListOrdered,
      label: { bn: "সরবরাহকারী তালিকা", en: "Supplier List" },
      key: "suppliers_list",
      href: "suppliers_list",
    },
  ],
};

// PRODUCT MANAGEMENT LINKS
const product_management_links = {
  icon: LuBoxes,
  label: { bn: "পণ্য ব্যবস্থাপনা", en: "Project Management" },
  key: "product_management",
  href: "product_management",
  subLinks: [
    // PRODUCT
    {
      icon: LuPackageOpen,
      label: { bn: "পণ্য", en: "Add Project" },
      key: "project_add",
      href: "/dashboard/add-project",
    },
    {
      icon: LuPackageOpen,
      label: { bn: "পণ্য", en: "Project List" },
      key: "project_list",
      href: "/dashboard/project-list",
    },
    // BRAND
    {
      icon: LuTags,
      label: { bn: "ব্র্যান্ড", en: "Add Package" },
      key: "add_package",
      href: "/dashboard/add-package",
    },
    {
      icon: LuTags,
      label: { bn: "ব্র্যান্ড", en: "Package List" },
      key: "brand_list",
      href: "brand_list",
    },
  
    // CATEGORY
    {
      icon: LuLayoutGrid,
      label: { bn: "বিভাগ", en: "Category List" },
      key: "category_list",
      href: "category_list",
    },
    {
      icon: LuLayoutGrid,
      label: { bn: "বিভাগ", en: "Add Gallery" },
      key: "add-gallery",
      href: "/dashboard/add-gallery",
    },
    
  ],
};

// PRODUCT PURCHASE LINKS
const product_purchase_links = {
  icon: LucideArrowDownCircle,
  label: { bn: "পণ্য ক্রয়", en: "Purchase" },
  key: "product_purchase",
  href: "product_purchase",
  subLinks: [
    // PURCHASE LIST
    {
      icon: LuListChecks,
      label: { bn: "ক্রয় পণ্য তালিকা", en: "Purchase List" },
      key: "purchase_list",
      href: "purchase_list",
    },
    {
      icon: LuLayoutList,
      label: { bn: "পণ্য বিক্রয় তালিকা", en: "Back Order List" },
      key: "supplier_back_order_list",
      href: "supplier_back_order_list",
    },

    {
      icon: LuListOrdered,
      label: { bn: "ক্রয় ফেরত তালিকা", en: "Return List" },
      key: "purchase_exchange_return_list",
      href: "purchase_exchange_return_list",
    },
  ],
};

// SELL LINKS
const product_sell_links = {
  icon: LucideArrowUpCircle,
  label: { bn: "পণ্য বিক্রয়", en: "Sale & POS" },
  key: "product_sale",
  href: "product_sale",
  subLinks: [
    // {
    //   icon: LuListTodo,
    //   label: { bn: "পণ্য বিক্রয় তালিকা", en: "Sale List" },
    //   key: "sale_list",
    //   href: "sale_list",
    // },
    {
      icon: LuListChecks,
      label: { bn: "পণ্য বিক্রয় তালিকা", en: "POS List" },
      key: "pos_list",
      href: "pos_list",
    },
    {
      "icon": LuListChecks,
      "label": { "bn": "অনলাইন বিক্রয় তালিকা", "en": "Online Sale List" },
      "key": "online_sale_list",
      "href": "online_sale_list"
    },    
    {
      "icon": LuListChecks,
      "label": { "bn": "ডিসকাউন্ট", "en": "Discount" },
      "key": "discount_list",
      "href": "discount_list"
    },    
    {
      icon: LuLayoutList,
      label: { bn: "পণ্য বিক্রয় তালিকা", en: "Back Order List" },
      key: "customer_back_order_list",
      href: "customer_back_order_list",
    },
    {
      icon: LuListEnd,
      label: { bn: "বিক্রয় ফেরত তালিকা", en: "Exchange/ Return List" },
      key: "sale_pos_exchange_return_list",
      href: "sale_pos_exchange_return_list",
    },
  ],
};

// EXPENSE LINKS
const expense_links = {
  icon: LuSplit,
  label: { bn: "ব্যয়", en: "Expense" },
  key: "expense",
  href: "expense",
  subLinks: [
    {
      icon: LuListOrdered,
      label: { bn: "ব্যয় তালিকা", en: "Expense List" },
      key: "expenses_list",
      href: "expenses_list",
    },

    {
      icon: LuSnowflake,
      label: { bn: "ব্যয় বিভাগ", en: "Expense Category" },
      key: "expense_category",
      href: "expense_category",
    },

    {
      icon: LuSunSnow,
      label: { bn: "উপ-ব্যয় বিভাগ", en: "Expense Sub-category" },
      key: "expense_sub_category",
      href: "expense_sub_category",
    },
  ],
};
// PAYMENT ACCOUNT LINKS
const payment_account_links = {
  icon: LuPiggyBank,
  label: { bn: "পেমেন্ট অ্যাকাউন্ট", en: "Payment Accounts" },
  key: "payment_accounts",
  href: "payment_accounts",
  subLinks: [
    // ACCOUNT LIST
    {
      icon: LuListOrdered,
      label: { bn: "অ্যাকাউন্ট তালিকা", en: "Account List" },
      key: "account_list",
      href: "account_list",
    },

    {
      icon: LuListOrdered,
      label: { bn: "বিনিয়োগ তালিকা", en: "Investor List" },
      key: "investor_list",
      href: "investor_list",
    },
    // INVESTING LIST
    {
      icon: LuListOrdered,
      label: { bn: "ইনভেস্টিং তালিকা", en: "Finance List" },
      key: "finance_list",
      href: "finance_list",
    },
    {
      icon: LuListOrdered,
      label: { bn: "পেমেন্ট তালিকা", en: "Payment List" },
      key: "payment_list",
      href: "payment_list",
    },    

    // // INVEST LIST
    // {
    //   icon: LuListOrdered,
    //   label: { bn: "বিনিয়োগ তালিকা", en: "Invest List" },
    //   key: "invest_list",
    //   href: "invest_list",
    // },
    // BALANCE SHEET
    {
      icon: LuFileSpreadsheet,
      label: { bn: "ব্যালেন্স শিট", en: "Balance Sheet" },
      key: "balance_sheet",
      href: "balance_sheet",
    },
    // TRAIL BALANCE
    {
      icon: LuScale,
      label: { bn: "ট্রায়াল ব্যালেন্স", en: "Trail Balance" },
      key: "trail_balance",
      href: "trail_balance",
    },
    // CASH FLOW
    {
      icon: LuRepeat,
      label: { bn: "ক্যাশ ফ্লো", en: "Cash Flow" },
      key: "cash_flow",
      href: "cash_flow",
    },
  ],
};
// DETAILS REPORTS LINKS
const reports_links = {
  icon: LuBadgeAlert,
  label: { bn: "বিস্তারিত রিপোর্ট", en: "Reports" },
  key: "detail_reports",
  href: "detail_reports",
  subLinks: [
    {
      icon: LuArrowUpDown,
      label: { bn: "লাভ/ক্ষতির রিপোর্ট", en: "Profit & Loss Reports" },
      key: "profit_loss_reports",
      href: "profit_loss_reports",
    },
    {
      icon: LuArrowUpDown,
      label: { bn: "প্রোডাক্ট অনুযায়ী SKU রিপোর্ট", en: "Product Wise Sku Report" },
      key: "productwise_sku_reports",
      href: "productwise_sku_reports",
    },
    {
      icon: LuArrowUpDown,
      label: { bn: "শাখা অনুযায়ী পণ্য প্রতিবেদন", en: "Branch Wise Product Report" },
      key: "branch_wise_product_reports",
      href: "branch_wise_product_reports",
    },
    {
      icon: LucideBarChart4,
      label: { bn: "স্টক রিপোর্ট", en: "Stock Reports" },
      key: "stock_reports",
      href: "stock_reports",
    },
    {
      icon: LucideClipboardSignature,
      label: { bn: "আইটেম রিপোর্ট", en: "Day-book Reports" },
      key: "day_book_reports",
      href: "day_book_reports",
    },
    {
      icon: LuScrollText,
      label: { bn: "বকেয়া সংগ্রহ", en: "Customer Due Reports" },
      key: "customer_due_collection_reports",
      href: "customer_due_collection_reports",
    },
    {
      icon: LucideLineChart,
      label: { bn: "পেমেন্ট রিপোর্ট তালিকা", en: "Expense Reports" },
      key: "expense_reports",
      href: "expense_reports",
    },
    {
      icon: LuListOrdered,
      label: { bn: "বকেয়া সংগ্রহ তালিকা", en: "Supplier Due Reports" },
      key: "supplier_due_collection_reports",
      href: "supplier_due_collection_reports",
    },
    {
      icon: LuListOrdered,
      label: { bn: "স্টাফ পেমেন্ট রিপোর্ট তালিকা", en: "Staff Salary Reports" },
      key: "staff_salary_reports",
      href: "staff_salary_reports",
    },
    {
      icon: LuListOrdered,
      label: {
        bn: "স্টাফ উপস্থিতি রিপোর্ট তালিকা",
        en: "Staff Attendance Reports",
      },
      key: "staff_attendance_reports",
      href: "staff_attendance_reports",
    },
  ],
};

// SETTING LINKS
const settings_links = {
  icon: LuSettings,
  label: { bn: "সেটিংস", en: "Settings" },
  key: "settings",
  href: "settings",
  subLinks: [
    {
      icon: LuSettings2,
      label: { bn: "ব্যবসার সেটিংস", en: "Business Settings" },
      key: "business_settings",
      href: "business_settings",
    },
    {
      icon: LuMapPin,
      label: { bn: "ব্যবসার অবস্থান", en: "Business Locations" },
      key: "business_locations",
      href: "business_locations",
    },
    {
      icon: LucideGanttChartSquare,
      label: { bn: "চালান সেটিংস", en: "Invoice Settings" },
      key: "invoice_settings",
      href: "invoice_settings",
    },
    {
      icon: LuQrCode,
      label: { bn: "বারকোড সেটিংস", en: "Barcode Settings" },
      key: "barcode_settings",
      href: "barcode_settings",
    },
    {
      icon: LuPrinter,
      label: { bn: "রসিদ প্রিন্টার", en: "Receipt Printers" },
      key: "receipt_printers",
      href: "receipt_printers",
    },
    {
      icon: LuPackage,
      label: { bn: "প্যাকেজ সাবস্ক্রিপশন", en: "Package Subscription" },
      key: "package_subscription",
      href: "package_subscription",
    },
  ],
};

// STOCK TRANSFER LINKS
const stock_transfer_links = {
  icon: LuArrowRightLeft,
  label: { bn: "স্টক ট্রান্সফার", en: "Stock Transf & Adj" },
  href: "stock_transfer",
  subLinks: [
    {
      icon: LuListOrdered,
      label: { bn: "স্টক ট্রান্সফার তালিকা", en: "Stock Transfer List" },
      key: "stock_transfer_list",
      href: "stock_transfer_list",
    },
    {
      icon: LuListOrdered,
      label: { bn: "স্টক ট্রান্সফার তালিকা", en: "Stock Transfer Return" },
      key: "stock_transfer_return",
      href: "stock_transfer_return",
    },
    {
      icon: LuListOrdered,
      label: { bn: "স্টক ট্রান্সফার তালিকা", en: "Stock Adjustment List" },
      key: "stock_adjustment_list",
      href: "stock_adjustment_list",
    },
    // {
    //   icon: LuListOrdered,
    //   label: { bn: "পেমেন্ট তালিকা", en: "Payment List" },
    //   key: "head_office_payment_list",
    //   href: "head_office_payment_list",
    // }    
  ],
};

// HUMAN RESOURCE LINKS
export const human_resource_management_links = {
  icon: LuCommand,
  label: { bn: "এইচআরএম", en: "Human Rsc Management" },
  key: "hrm",
  href: "hrm",
  subLinks: [
    // staff
    // {
    //   icon: LuPlusCircle,
    //   label: { bn: "স্টাফ নিবন্ধন", en: "Add Staff" },
    //   key: "add_staff",
    //   href: "add_staff",
    // },
    {
      icon: LuListOrdered,
      label: { bn: "পদবি তালিকা", en: "Designation List" },
      key: "designation_list",
      href: "designation_list",
    },
    {
      icon: LuListOrdered,
      label: { bn: "স্টাফ তালিকা", en: "Staff List" },
      key: "staff_list",
      href: "staff_list",
    },
    {
      icon: LuListOrdered,
      label: { bn: "স্টাফ হিসাব তালিকা", en: "Staff Acc List" },
      key: "staff_account_list",
      href: "staff_account_list",
    },

    // staff social info
    {
      icon: LuListOrdered,
      label: { bn: "স্টাফ সামাজিক তথ্য", en: "Staff Social Info" },
      key: "staff_social_info",
      href: "staff_social_info",
    },
    // {
    //   icon: LuListOrdered,
    //   label: { bn: "স্টাফ পেমেন্ট তালিকা", en: "Staff Payment List" },
    //   key: "staff_payment_list",
    //   href: "staff_payment_list",
    // },
    {
      icon: LuListOrdered,
      label: { bn: "স্টাফ বেতন তালিকা", en: "Staff Salary List" },
      key: "staff_salary_list",
      href: "staff_salary_list",
    },
    {
      icon: LuListOrdered,
      label: { bn: "স্টাফ ডকুমেন্ট তালিকা", en: "Staff Doc List" },
      key: "staff_document_list",
      href: "staff_document_list",
    },
    {
      icon: LuListOrdered,
      label: { bn: "স্টাফ কন্ট্রাক্ট তালিকা", en: "Staff Contract List" },
      key: "staff_contract_list",
      href: "staff_contract_list",
    },
    {
      icon: LuListOrdered,
      label: { bn: "স্টাফ উপস্থিতি তালিকা", en: "Staff Attend. List" },
      key: "staff_attendance_list",
      href: "staff_attendance_list",
    },
    // staff salary report
    // {
    //   icon: LuFilePieChart,
    //   label: { bn: "স্টাফ বেতন রিপোর্ট", en: "Staff Salary Report" },
    //   key: "staff_salary_reports",
    //   href: "staff_salary_reports",
    // },
    // staff Attendance
    // {
    //   icon: LuPlusCircle,
    //   label: { bn: "স্টাফ উপস্থিতি", en: "Staff Attendance" },
    //   key: "staff_attendance",
    //   href: "staff_attendance",
    // },
    // staff Attendance report
    // {
    //   icon: LuBadgeAlert,
    //   label: { bn: "স্টাফ উপস্থিতি রিপোর্ট", en: "Staff Attendance Report" },
    //   key: "staff_attendance_report",
    //   href: "staff_attendance_report",
    // },
    // over time
    // {
    //   icon: LuListOrdered,
    //   label: { bn: "ওভার টাইম", en: "Over Time" },
    //   key: "over_time_list",
    //   href: "over_time_list",
    // },
  ],
};

export const ADMIN_NAVIGATION_LINKS = [
  // CONTACT LINKS (including)
  { ...contacts_links },
  // PRODUCT MANAGEMENT LINKS (including)
  { ...product_management_links },
  // PRODUCT PURCHASE LINKS (including)
  { ...product_purchase_links },
  // SELL LINKS (including)
  { ...product_sell_links },
  //EXPENSE LINKS (including)
  { ...expense_links },
  // PAYMENT ACCOUNT LINKS
  { ...payment_account_links },
  // STOCK  LINKS
  { ...stock_transfer_links },
  // HUMAN RESOURCE MANAGEMENT LINKS
  { ...human_resource_management_links },
  // DETAILS REPORTS
  { ...reports_links },
  // SETTINGS
  { ...settings_links },
];

// NOT NEED FOR THIS PROJECT FOR NOW, DO NOT UNMASK THIS CODE
