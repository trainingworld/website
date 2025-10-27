import { MessageCircle, Heart, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWhoNeedsUs from "@/assets/hero-who-needs-us.jpg";
import { handleWhatsApp, handleWhatsAppTrainingWorld } from "@/lib/utils";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Badge } from "@/components/ui/badge";

const WhoNeedsUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroWhoNeedsUs})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in">
          <Badge variant="outline" className="mb-4">
            For Everyone
          </Badge>
          <h1>Who Needs Us</h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed">
            Different people, different goals, same commitment to your success
          </p>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-6">Fitness Means Different Things</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We recognise the fact that healthy living and fitness is different
              for each one of us. What works for one doesn't necessarily work
              for the other. Each person has their own goals and aspirations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              While one wants to be muscular strong, another could want to be
              more athletic. We understand these different aspirations. We
              converse with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-black text-white p-8 hover:scale-105 transition-transform duration-300">
              <Users className="h-10 w-10 mb-4" />
              <h3 className="mb-4">Different Ages</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Someone in their 20s feels and wants a different plan from
                someone in their 50s or 60s. We tailor our approach to your life
                stage.
              </p>
            </div>

            <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 group">
              <Target className="h-10 w-10 mb-4 group-hover:text-white" />
              <h3 className="mb-4 group-hover:text-white">Different Goals</h3>
              <p className="text-sm leading-relaxed opacity-70">
                Whether you want strength, athleticism, endurance, or weight
                management - we create bespoke programs for your specific goals.
              </p>
            </div>

            <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 group">
              <Heart className="h-10 w-10 mb-4 group-hover:text-white" />
              <h3 className="mb-4 group-hover:text-white">Mindful Approach</h3>
              <p className="text-sm leading-relaxed opacity-70">
                Our programmes are bespoke, mindfully facilitated and completely
                non-judgmental. A world away from loud gym noise.
              </p>
            </div>

            <div className="bg-black text-white p-8 hover:scale-105 transition-transform duration-300">
              <TrendingUp className="h-10 w-10 mb-4" />
              <h3 className="mb-4">Long Term Focus</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We work closely with you on what you need today and what to
                build on for a healthier tomorrow. Fitness is a marathon, not a
                sprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Trains With Us */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest font-semibold mb-4">
              Our Clients
            </div>
            <h2>You Might Be</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/20 p-8 hover:border-white/40 transition-colors duration-300">
              <h3 className="mb-4">An Introvert</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                You prefer a quiet workout rather than the social side of
                fitness. You want to focus on training without distraction or
                small talk.
              </p>
            </div>

            <div className="border border-white/20 p-8 hover:border-white/40 transition-colors duration-300">
              <h3 className="mb-4">Self-Conscious</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                You're conscious of your body type and prefer wearing loose
                exercise attire. You want a no-judgement space where you can
                train comfortably.
              </p>
            </div>

            <div className="border border-white/20 p-8 hover:border-white/40 transition-colors duration-300">
              <h3 className="mb-4">Confident</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                You feel great about yourself and carry that confidence on the
                training floor. You want professional guidance to reach the next
                level.
              </p>
            </div>

            <div className="border border-white/20 p-8 hover:border-white/40 transition-colors duration-300">
              <h3 className="mb-4">A Busy Professional</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                You have limited time and need efficient, effective workouts
                that fit your schedule and deliver results.
              </p>
            </div>

            <div className="border border-white/20 p-8 hover:border-white/40 transition-colors duration-300">
              <h3 className="mb-4">An Athlete</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                You're training for marathons, triathlons, or endurance events.
                You need specialized programming and expert guidance.
              </p>
            </div>

            <div className="border border-white/20 p-8 hover:border-white/40 transition-colors duration-300">
              <h3 className="mb-4">A Beginner</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                You're new to fitness and need a supportive environment to learn
                proper form and build healthy habits that last.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We are mindful of these characteristics, but our focus -
              unflinchingly - is on providing you the kind of workout most
              suited for you.
            </p>
            <Button variant="outline" className="flex mx-auto mt-8 flex-1">
              <Link to={"/about"}>Hear from the Coach</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6">Find Your Fit</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            No matter who you are or where you're starting from, we're here to
            support your journey.
          </p>
          <Button
            variant="whatsapp"
            size="lg"
            onClick={handleWhatsAppTrainingWorld}
            className="gap-3"
          >
            <WhatsAppIcon />
            Chat With Us on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WhoNeedsUs;
