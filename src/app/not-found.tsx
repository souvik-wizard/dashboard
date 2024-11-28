"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ErrorPage = () => {
  const navigate = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== "/dashboard") {
      navigate.push("/dashboard");
    }
  }, [navigate, pathname]);
  return null;
};

export default ErrorPage;
