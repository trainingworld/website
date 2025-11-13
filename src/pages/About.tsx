import { MessageCircle, Award, Trophy, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAbout from "@/assets/hero-about.jpg";
import { handleWhatsApp, handleWhatsAppTrainingWorld } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[right_center] md:bg-center"
          style={{ backgroundImage: `url(${heroAbout})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Founder & Lead Coach
          </Badge>
          <h1>Richard Paiva</h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed">
            Athlete, Coach, Fitness Guide
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16 animate-fade-in-up">
            <div className="text-xs uppercase tracking-widest font-semibold mb-4">
              My Journey
            </div>
            <h2 className="mb-8">Sports as a Way of Life</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Throughout my life sports have played an integral role in
                shaping my identity, personality and career. My physical
                capacities have brought me closer to my emotional and mental
                self. It allows for a certain level of confidence to venture
                into spaces I wouldn't normally go to.
              </p>

              <p>
                So, playing competitive football made me try out marathons to
                triathlons and various endurance sports. I also realised to
                maintain longevity in these areas I must keep myself muscular
                fit and so weighted workouts became a foundation for me across
                sports or endurance events. Mindful eating came about very
                naturally.
              </p>

              <p>
                This journey taught me that fitness isn't one-size-fits-all.
                Each person has unique needs, goals, and challenges. That's why
                I started Training World in 2020 - to create a space where
                fitness is truly personalized.
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 group">
              <Heart className="h-10 w-10 mb-4 group-hover:text-white" />
              <h3 className="mb-2">Endurance Sports</h3>
              <p className="text-sm opacity-70">
                Multiple Half-Marathons & IRONMAN 113km Triathlons
              </p>
            </div>

            <div className="bg-black text-white p-8 hover:scale-105 transition-transform duration-300">
              <Trophy className="h-10 w-10 mb-4" />
              <h3 className="mb-2">Football</h3>
              <p className="text-sm text-white/70">
                National Level U-19 Player
              </p>
            </div>

            <div className="bg-black text-white p-8 hover:scale-105 transition-transform duration-300">
              <Trophy className="h-10 w-10 mb-4" />
              <h3 className="mb-2">Badminton</h3>
              <p className="text-sm text-white/70">
                Regional Level U-17 Player
              </p>
            </div>

            <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 group">
              <Award className="h-10 w-10 mb-4 group-hover:text-white" />
              <h3 className="mb-2">Field Athlete</h3>
              <p className="text-sm opacity-70">
                Regional Shot-put & Discus Throw
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest font-semibold mb-4">
              My Approach
            </div>
            <h2>Why Training World?</h2>
          </div>

          <div className="space-y-6 text-white/80 leading-relaxed text-lg">
            <p>
              I started Training World out of a desire to create customised
              workouts for individuals who dislike a commercial gym experience.
              Our aim is to work with your lifestyle and personality. For you to
              understand your body so you know what works best for you - and
              what doesn't.
            </p>

            <p>
              I've learned through my own athletic journey that true fitness
              comes from understanding yourself - your body, your mind, your
              goals, and your limitations. It's not about comparing yourself to
              others or following cookie-cutter programs.
            </p>

            <p className="text-xl text-white font-semibold">
              Fitness is a marathon, not a sprint race. Give your mind and
              muscles time to adapt to what you're embarking on.
            </p>

            <p>
              Whether you're training for your first 5K or your next IRONMAN,
              recovering from injury, or simply wanting to be healthier - I'm
              here to guide you with the same dedication and personalized
              approach that shaped my own journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            Ready to start your personalized fitness journey? Let's discuss your
            goals.
          </p>
          <Button
            variant="whatsapp"
            // size="lg"
            onClick={handleWhatsAppTrainingWorld}
            className="gap-3"
          >
            <WhatsAppIcon className="scale-150" />
            Message Richard on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
