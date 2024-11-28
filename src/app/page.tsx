"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const App = () => {
  const navigate = useRouter();
  useEffect(() => {
    navigate.push("/dashboard");
  }, [navigate]);
  return <div className="bg-[#F9F9F9]"></div>;
};

export default App;
