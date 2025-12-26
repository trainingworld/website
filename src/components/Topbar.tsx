import React from "react";

type TopbarProps = {
  message?: string;
};

const Topbar: React.FC<TopbarProps> = ({
  message = "Accepting enquiries. Launching on January 12th, 2026.",
}) => {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
        <div className="container mx-auto py-4 sm:px-4 sm:py-1.5 text-center">
          <p className="text-sm font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
