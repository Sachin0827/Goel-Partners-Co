import React from "react";

export default function Section({ 
  children, 
  title, 
  subtitle, 
  badge, 
  className = "", 
  containerClassName = "",
  dark = false,
}) {
  return (
    <section className={`py-16 md:py-24 relative overflow-hidden ${dark ? 'bg-blue-900 text-white' : ''} ${className}`}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {(title || subtitle || badge) && (
          <div className="text-center mb-16">
            {badge && (
              <span className="section-badge">{badge}</span>
            )}
            {title && (
              <h2 className={`section-title ${dark ? 'text-white' : ''}`}>{title}</h2>
            )}
            {subtitle && (
              <p className={`section-subtitle ${dark ? 'text-blue-100' : ''}`}>{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}