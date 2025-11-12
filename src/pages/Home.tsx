import {
  MessageCircle,
  Award,
  Users,
  Target,
  Hash,
  Locate,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroHome from "@/assets/hero-home.JPG";
import { handleWhatsAppHyrox, handleWhatsAppTrainingWorld } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroHome})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-fade-in ">
          <div className="text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 mb-12">
            Official{" "}
            <img
              src="/logos/HYROX-Logo.svg"
              alt="Hyrox Training Club"
              className="h-4 sm:inline-block"
            />{" "}
            Training Club
          </div>
          <h1 className="mb-6">Training World</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Bespoke fitness training designed around your lifestyle. No
            judgement, no crowd, just focused training that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="default"
              onClick={handleWhatsAppHyrox}
              className="gap-3"
            >
              <WhatsAppIcon />
              Learn about Hyrox
            </Button>
            <Button
              variant="whatsapp"
              size="default"
              onClick={handleWhatsAppTrainingWorld}
              className="gap-3"
            >
              <WhatsAppIcon />
              Workout at Training World
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-2 sm:px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="text-xs uppercase tracking-widest font-semibold mb-4">
                Since 2020
              </div>
              <h2 className="mb-6">Your Fitness, Your Way</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Training World, started by Richard Paiva in 2020, is a bespoke
                fitness training platform. The aim is to unflinchingly focus on
                each person's way of life. How they are, their beliefs,
                philosophy on food and exercise.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To be fit is a healthy means to an end. It allows time to play
                with your children or grandchildren, to climb that mountain you
                have on your bucket list or play football on weekends with your
                old school mates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work with a combination of weighted exercises, strength
                training and cardio variations. Training World has a long term
                perspective on fitness.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="bg-black text-white p-4 sm:p-8 hover:scale-105 transition-transform duration-300">
                <Award className="h-10 w-10 mb-4" />
                <h3 className="text-lg mb-2">Official Hyrox Club</h3>
                <p className="text-sm text-white/70">
                  Certified training partner
                </p>
              </div>
              <div className="bg-muted p-4 sm:p-8 hover:scale-105 transition-transform duration-300">
                <Users className="h-10 w-10 mb-4" />
                <h3 className="text-lg mb-2">No Judgement</h3>
                <p className="text-sm text-muted-foreground">
                  All shapes & sizes welcome
                </p>
              </div>
              <div className="bg-muted p-4 sm:p-8 hover:scale-105 transition-transform duration-300">
                <Target className="h-10 w-10 mb-4" />
                <h3 className="text-lg mb-2">Bespoke Programs</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored to your goals
                </p>
              </div>
              <div className="bg-black text-white p-4 sm:p-8 hover:scale-105 transition-transform duration-300">
                <MapPin className="h-10 w-10 mb-4" />
                <div className="text-4xl font-bold mb-2">3000</div>
                <p className="text-sm text-white/70">Sq ft training space</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            {/* <div className="text-xs uppercase tracking-widest font-semibold mb-4">
              What We Do
            </div> */}
            <h2>What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/20 p-8 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <h3 className="mb-4">Strength Training</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Classical free weight method of training. Build muscular fitness
                and longevity.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Weighted workouts</li>
                <li>• Functional movements</li>
                <li>• Progressive overload</li>
              </ul>
            </div>

            <div className="border border-white/20 p-8 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <h3 className="mb-4">Hyrox Training</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Official Hyrox Training Club. Prepare for the hottest fitness
                race format.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Sled push & pull</li>
                <li>• Rowing intervals</li>
                <li>• Wall balls</li>
              </ul>
            </div>

            <div className="border border-white/20 p-8 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <h3 className="mb-4">Endurance Sports</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Specialized training for marathons, triathlons and endurance
                events.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Marathon prep</li>
                <li>• Triathlon training</li>
                <li>• Cardio variations</li>
              </ul>
            </div>
          </div>
          <Button variant="outline" className="flex mx-auto mt-8 flex-1">
            <Link to={"/the-space"}>Check out the Space</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6">Ready to Transform?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
            Message us on WhatsApp to discuss your fitness goals and book your
            first session.
          </p>
          <Button
            variant="whatsapp"
            size="lg"
            onClick={handleWhatsAppTrainingWorld}
            className="gap-3"
          >
            <WhatsAppIcon />
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
