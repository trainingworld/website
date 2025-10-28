import React from "react";

interface WhatsAppIconProps {
  className?: string;
}

const WhatsAppIcon = ({ className }: WhatsAppIconProps) => {
  return (
    <div>
      <img
        src="/icons/whatsapp-white-icon.svg"
        alt="Whatsapp icon"
        className={`h-4 w-4 ${className || ""}`}
      />
    </div>
  );
};

export default WhatsAppIcon;
