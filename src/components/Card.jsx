import React from "react";

export default function Card({ children, className, hover = true }) {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden ${hover ? 'transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl' : ''} ${className}`}
    >
      {children}
    </div>
  );
}