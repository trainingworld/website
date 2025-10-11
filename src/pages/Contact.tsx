import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

import { handleWhatsApp, handleCall, handleEmail } from "@/lib/utils";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <div className="mb-4 text-xs uppercase tracking-widest font-semibold">
            Get In Touch
          </div>
          <h1>Contact Us</h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed text-white/80">
            Ready to transform your fitness journey? Reach out and let's talk.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Primary CTA - WhatsApp */}
            <div className="bg-black text-white p-12 hover:scale-105 transition-transform duration-300">
              <MessageCircle className="h-12 w-12 mb-6" />
              <h2 className="text-2xl mb-4">Message on WhatsApp</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                The fastest way to get in touch. Send us a message and we'll
                respond quickly to discuss your fitness goals.
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsApp}
                className="gap-3"
              >
                <MessageCircle className="h-5 w-5" />
                Start WhatsApp Chat
              </Button>
            </div>

            {/* Secondary CTA - Call */}
            <div className="border-2 border-black p-12 hover:bg-black hover:text-white transition-all duration-300 group">
              <Phone className="h-12 w-12 mb-6 group-hover:text-white" />
              <h2 className="text-2xl mb-4 group-hover:text-white">Call Us</h2>
              <p className="text-muted-foreground group-hover:text-white/70 mb-8 leading-relaxed">
                Prefer to talk? Give us a call and we'll answer any questions
                you have about our programs.
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={handleCall}
                className="gap-3 group-hover:border-white group-hover:text-white group-hover:hover:bg-white group-hover:hover:text-black"
              >
                <Phone className="h-5 w-5" />
                +91 99999 99999
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <Mail className="h-10 w-10 mx-auto mb-4" />
              <h3 className="mb-3">Email</h3>
              <button
                onClick={handleEmail}
                className="text-muted-foreground hover:text-black transition-colors text-sm"
              >
                info@trainingworld.com
              </button>
            </div>

            <div className="text-center p-8">
              <MapPin className="h-10 w-10 mx-auto mb-4" />
              <h3 className="mb-3">Location</h3>
              <p className="text-muted-foreground text-sm">Delhi NCR, India</p>
            </div>

            <div className="text-center p-8">
              <Clock className="h-10 w-10 mx-auto mb-4" />
              <h3 className="mb-3">Hours</h3>
              <p className="text-muted-foreground text-sm">
                Mon - Sat: 6:00 AM - 9:00 PM
                <br />
                Sun: By Appointment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest font-semibold mb-4">
              Quick Answers
            </div>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            <div className="border-b border-white/20 pb-8">
              <h3 className="mb-3">Do I need prior fitness experience?</h3>
              <p className="text-white/70 leading-relaxed">
                Not at all! We work with people at all fitness levels, from
                complete beginners to experienced athletes. Our programs are
                fully customized to your current fitness level.
              </p>
            </div>

            <div className="border-b border-white/20 pb-8">
              <h3 className="mb-3">How many people train at once?</h3>
              <p className="text-white/70 leading-relaxed">
                We limit entries per hour to maintain a focused, non-crowded
                environment. This ensures you get the attention and space you
                need.
              </p>
            </div>

            <div className="border-b border-white/20 pb-8">
              <h3 className="mb-3">
                What should I bring for my first session?
              </h3>
              <p className="text-white/70 leading-relaxed">
                Just bring comfortable workout clothes, indoor training shoes, a
                water bottle, and a towel. We provide all equipment.
              </p>
            </div>

            <div className="border-b border-white/20 pb-8">
              <h3 className="mb-3">Do you offer online training?</h3>
              <p className="text-white/70 leading-relaxed">
                While our primary focus is in-person training at our facility,
                we can discuss customized programs for your specific needs.
                Message us to learn more.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="mb-3">How do I get started?</h3>
              <p className="text-white/70 leading-relaxed">
                Simply send us a message on WhatsApp or give us a call. We'll
                discuss your goals, schedule a tour of the facility, and create
                a personalized plan for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6">Ready to Begin?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't wait. Your fitness journey starts with a simple message.
          </p>
          <Button
            variant="whatsapp"
            size="lg"
            onClick={handleWhatsApp}
            className="gap-3"
          >
            <MessageCircle className="h-5 w-5" />
            Get Started on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
