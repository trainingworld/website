import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { Button } from "./ui/button";
import WhatsAppIcon from "./WhatsAppIcon";
import { handleWhatsAppHyrox, handleWhatsAppTrainingWorld } from "@/lib/utils";
import Logo from "./Logo";

const WhatsAppSidebar = () => {
  return (
    <SheetContent side="right" className="bg-black text-white sm:max-w-md">
      <SheetHeader className="text-left">
        <SheetTitle>Get in touch</SheetTitle>
        <SheetDescription className="text-white/70 pb-8">
          Choose how you'd like to connect with us.
        </SheetDescription>
      </SheetHeader>

      <div className="mt-6 space-y-6">
        {/* Section A: Hyrox */}
        <div className="space-y-4">
          <div className="flex flex-col items-start gap-8">
            <img
              src="/logos/HYROX-Logo.svg"
              alt="HYROX Logo"
              className="h-8 w-auto"
            />
            <div>
              {/* <h3 className="text-lg font-semibold">HYROX</h3> */}
              <p className="text-sm text-white/70">
                The world's fastest growing fitness racing series. Race against
                the clock in this unique combination of running and functional
                fitness.
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleWhatsAppHyrox}
            className="w-full text-white border-white hover:bg-white hover:text-black"
            aria-label="Learn more about Hyrox"
          >
            Learn More About HYROX
          </Button>
        </div>

        {/* Section B: Training World */}
        <div className="space-y-4 pt-16">
          <div className="flex flex-col items-start gap-4">
            <Logo isCentered={false} />
            <div>
              {/* <h3 className="text-lg font-semibold">
              Training World
            </h3> */}
              <p className="text-sm text-white/70">
                Your premier destination for functional fitness training, HYROX
                preparation, and personalized coaching to help you achieve your
                goals.
              </p>
            </div>
          </div>
          <Button
            variant="whatsapp"
            size="sm"
            onClick={handleWhatsAppTrainingWorld}
            className="w-full gap-2"
            aria-label="Contact Training World"
          >
            <WhatsAppIcon />
            Contact Training World
          </Button>
        </div>
      </div>
    </SheetContent>
  );
};

export default WhatsAppSidebar;
