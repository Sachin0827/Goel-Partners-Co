import React from "react";

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  ...props 
}) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-900",
    secondary: "bg-white text-blue-900 border border-blue-200 hover:bg-blue-50 active:bg-blue-100",
    outline: "bg-transparent border-2 border-blue-700 text-blue-700 hover:bg-blue-50 active:bg-blue-100",
    text: "bg-transparent text-blue-700 hover:text-blue-900 hover:underline",
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "px-6 py-3",
    lg: "text-lg px-8 py-4",
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}