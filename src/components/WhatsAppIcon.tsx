import React from "react";

interface WhatsAppIconProps {
  className?: string;
  variant?: "light" | "dark";
}

const WhatsAppIcon = ({ className, variant = "dark" }: WhatsAppIconProps) => {
  const iconPath =
    variant === "light"
      ? "/icons/whatsapp-white-icon.svg"
      : "/icons/whatsapp-dark-icon.svg";

  return (
    <div>
      <img
        src={iconPath}
        alt="Whatsapp icon"
        className={`h-4 w-4 ${className || ""}`}
      />
    </div>
  );
};

export default WhatsAppIcon;
