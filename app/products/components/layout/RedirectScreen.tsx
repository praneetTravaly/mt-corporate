"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface RedirectScreenProps {
  url: string;
  logoText: string;
  logoBgColor: string;
}

export default function RedirectScreen({
  url,
  logoText,
  logoBgColor,
}: RedirectScreenProps) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = url;
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [url]);

  return (
    <div className="fixed inset-0 bg-[#F7F5F0] flex flex-col items-center justify-center z-[999]">
      
      {/* Loader Circle */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        
        {/* Spinning Border */}
        <div className="absolute inset-0 rounded-full border-[6px] border-[#B08D57] border-t-transparent animate-spin" />

        
          <div
            className="w-16 h-16 flex items-center justify-center"
            style={{ backgroundColor: logoBgColor }}
          >
            <span className="text-white font-bold text-xl">
              {logoText}
            </span>
          </div>
        
      </div>

      {/* Text */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-medium text-gray-800">
          You’re being redirected
        </h2>
        <p className="mt-2 text-[#B08D57] underline text-lg">
          {url.replace("https://", "")}
        </p>
      </div>
    </div>
  );
}