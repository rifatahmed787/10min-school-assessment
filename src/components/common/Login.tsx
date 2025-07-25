"use client";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { useUserLoginMutation } from "@/redux/features/auth/authApi";
import CheckBox from "@/components/form-items/Check-box/Checkbox";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { loginSchema } from "@/schemas/admin/login_schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginArgs } from "@/types/auth.types";
import { ABOUT_ME } from "@/utils/constant/appConfiguration";
import TextInput from "../ui/TextInput";
import Button from "./Button";

const SignInForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [login, { isLoading }] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const loginData = { ...data };

      const result = await login(loginData as ILoginArgs);
      console.log(result);
      if ("data" in result && result.data?.success) {
        toast({
          title: "User Login Message",
          description: result.data!.message,
        });
        reset();
        router.push("/en/dashboard");
      } else if ("error" in result) {
        const error = result.error;

        // Check if error has a 'data' property
        if (
          (error as FetchBaseQueryError)?.data &&
          typeof (error as FetchBaseQueryError).data === "object"
        ) {
          const errorData = (error as FetchBaseQueryError).data as {
            message?: string;
            errorMessages?: string[];
            stack?: string;
          };

          // Extract error message: use message, errorMessages, or stack (for "Invalid password")
          let errorMessage =
            errorData.message ||
            errorData.errorMessages?.[0] ||
            "An error occurred";

          // If the stack contains "Invalid password", extract that information
          if (errorData.stack && errorData.stack.includes("Invalid password")) {
            errorMessage = "Invalid password";
          }

          toast({
            title: "User Login Error",
            description: errorMessage,
          });
        } else {
          // Handle generic errors if no specific data is present
          toast({
            title: "User Login Error",
            description: "An error occurred while logging in.",
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className="h-screen flex items-center bg-cover bg-center rounded-b-full"
      style={{
        backgroundImage: `url(${ABOUT_ME.netBanner})`,
      }}
    >
      <div
        className={`mx-5 p-7 shadow-default border border-primary-100 rounded-xl bg-opacity-80 md:mx-auto lg:w-1/3 md:w-2/5 w-11/12`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 lg:gap-8">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextInput
                  type="email"
                  placeHolder=""
                  currentValue={field.value}
                  onChange={(e) => field.onChange(e)}
                  required={false}
                  id="email"
                  htmlFor="email"
                  label="Enter Email"
                  errorMessage={
                    errors.email?.message
                      ? String(errors.email?.message)
                      : undefined
                  }
                  className="text-gray-300"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextInput
                  type="password"
                  placeHolder=""
                  currentValue={field.value}
                  onChange={(e) => field.onChange(e)}
                  required={false}
                  id="password"
                  htmlFor="password"
                  label="Enter Password"
                  errorMessage={
                    errors.password?.message
                      ? String(errors.password?.message)
                      : undefined
                  }
                />
              )}
            />
            <div className="flex items-center justify-between gap-10">
              <div className="flex items-center">
                <CheckBox id="remember-me" />
                <label
                  className="text-[#6F6F6F] text-xs lg:text-sm ml-2"
                  htmlFor="remember-me"
                >
                  Remember me
                </label>
              </div>
              <div>
                <label
                  htmlFor="Forgot password"
                  className="text-xs lg:text-sm text-[#6F6F6F]"
                >
                  Forgot Password
                </label>
              </div>
            </div>
            <Button
              type="submit"
              title="Submit"
              className=" bg-primary w-full text-base font-medium rounded text-white"
            >
              <span className="flex items-center gap-2">
                Sign In
                {isLoading && <Loader />}
              </span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignInForm;
