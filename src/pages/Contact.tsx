import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  handleWhatsApp,
  handleCall,
  handleEmail,
  handleWhatsAppTrainingWorld,
} from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const heroContact =
    "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/hero-contact_rvv9vz";
  const FAQs = [
    {
      question: "Do I need prior fitness experience?",
      answer:
        "Not at all! We work with people at all fitness levels, from complete beginners to experienced athletes. Our programs are fully customized to your current fitness level.",
    },
    {
      question: "How many people train at once?",
      answer:
        "We limit entries per hour to maintain a focused, non-crowded environment. This ensures you get the attention and space you need.",
    },
    {
      question: "What should I bring for my first session?",
      answer:
        "Just bring comfortable workout clothes, indoor training shoes, a water bottle, and a towel. We provide all equipment.",
    },
    {
      question: "Do you offer online training?",
      answer:
        "While our primary focus is in-person training at our facility, we can discuss customized programs for your specific needs. Message us to learn more.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply send us a message on WhatsApp or give us a call. We'll discuss your goals, schedule a tour of the facility, and create a personalized plan for you.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContact})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h1>Contact Us</h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed text-white/80">
            Ready to transform your fitness journey? Reach out and let's talk.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 px-2 sm:px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Primary CTA - WhatsApp */}
            <div className="bg-black text-white p-6 sm:p-12 hover:scale-105 transition-transform duration-300">
              <MessageCircle className="h-12 w-12 mb-6" />
              <h2 className="text-2xl mb-4">Message on WhatsApp</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                The fastest way to get in touch. Send us a message and we'll
                respond quickly to discuss your fitness goals.
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppTrainingWorld}
                className="gap-3"
                aria-label="Whatsapp us"
              >
                <WhatsAppIcon />
                Start WhatsApp Chat
              </Button>
            </div>

            {/* Secondary CTA - Call */}
            <div className="border-2 border-black p-6 sm:p-12 hover:bg-black hover:text-white transition-all duration-300 group">
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
                className="border-black text-black gap-3 group-hover:border-white group-hover:text-white group-hover:hover:bg-white group-hover:hover:text-black"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
                +91 78385 26644
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <div className="text-center p-8">
              <Mail className="h-10 w-10 mx-auto mb-4" />
              <h3 className="mb-3">Email</h3>
              <button
                onClick={handleEmail}
                className="text-muted-foreground hover:text-black transition-colors text-sm"
              >
                info@trainingworld.com
              </button>
            </div> */}

            <div className="text-center p-8">
              <MapPin className="h-10 w-10 mx-auto mb-4" />
              <h3 className="mb-3">Location</h3>
              <p className="text-muted-foreground text-sm">
                B-5/28, <br />
                Safdarjung Enclave, <br />
                New Delhi, India
              </p>
            </div>

            <div className="text-center p-8">
              <Clock className="h-10 w-10 mx-auto mb-4" />
              <h3 className="mb-3">Hours</h3>
              <p className="text-muted-foreground text-sm">
                Open all days <br />
                7:00 AM - 9:90 PM
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16">
            <h3 className="text-center mb-8">Find Us</h3>
            <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3304869030503!2d77.1916372!3d28.5598371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d8908e7f08f%3A0x568dc48a4bac4537!2sThe%20Art%20Of%20Sport!5e0!3m2!1sen!2sin!4v1761543024303!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
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

          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="space-y-4"
          >
            {FAQs.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border-white/20"
              >
                <AccordionTrigger className="text-left py-4 hover:text-white/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6">Ready to Begin?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            Don't wait. Your fitness journey starts with a simple message.
          </p>
          <Button
            variant="whatsapp"
            // size="lg"
            onClick={handleWhatsAppTrainingWorld}
            className="gap-3"
            aria-label="Get started"
          >
            <WhatsAppIcon />
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
