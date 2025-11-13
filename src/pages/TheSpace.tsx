import {
  MessageCircle,
  Wind,
  Thermometer,
  Users2,
  Dumbbell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { handleWhatsAppTrainingWorld } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Badge } from "@/components/ui/badge";

import heroSpace from "@/assets/hero-space.jpg";
import wallBalls from "@/assets/exercises/wall-balls.jpg";
import treadmill from "@/assets/exercises/treadmill-runs.jpg";
import rowing from "@/assets/exercises/rowing.jpg";
import weights from "@/assets/exercises/weights.jpg";
import farmer from "@/assets/exercises/famer-carry.jpg";

const TheSpace = () => {
  const exercises = [
    {
      name: "Lunge walks",
      image:
        "https://plus.unsplash.com/premium_photo-1663050848227-c272a44b4b8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      name: "Burpee broad jumps",
      image: "https://cdn.mos.cms.futurecdn.net/fS6KSNRUCamBX8Yz3AiteG.jpg",
    },
    {
      name: "Sled pull and push",
      image:
        "https://thetibbarguy.com/cdn/shop/files/The_Push-Pull_Sled_FAQ.jpg?v=1744134913",
    },
    {
      name: "Wall balls at Training World",
      image: wallBalls,
    },
    {
      name: "Farmer carry at Training World",
      image: farmer,
    },
    {
      name: "Treadmill runs at Training World",
      image: treadmill,
    },
    {
      name: "Rowing at Training World",
      image: rowing,
    },
    {
      name: "Sprint drills",
      image:
        "https://fastandfittraining.com/wp-content/uploads/RodDaveWarmup.jpg",
    },
    {
      name: "Weighted workouts at Training World",
      image: weights,
    },
    {
      name: "Functional Cardio",
      image:
        "https://www.endomondo.com/wp-content/uploads/2024/12/Improve-Functional-Ability-endomondo.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSpace})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in">
          <Badge variant="outline" className="mb-4">
            The Facility
          </Badge>
          <h1>The Space</h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed">
            Delhi NCR's only state-of-the-art indoor free space training area
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-2 sm:px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in-up">
              <div className="text-xs uppercase tracking-widest font-semibold mb-4">
                Purpose Built
              </div>
              <h2 className="mb-6">Designed for Performance</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our space is purpose-built and designed for indoor sports drills
                and various strength and conditioning training formats.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                It is close to 3000sqft and has a rubberized training floor. It
                is HEPA filtered so the PM2.5 AQI stays under 30 during the
                harshest of weather in Delhi. It is temperature controlled so
                people can focus on their workouts without worrying about the
                environment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                It is the only state-of-the-art indoor free space training area
                of its kind in Delhi NCR.
              </p>

              <Button
                variant="whatsapp"
                onClick={handleWhatsAppTrainingWorld}
                className="gap-2"
              >
                <WhatsAppIcon />
                Book a Visit
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="border-2 border-black p-4 sm:p-8 hover:bg-black hover:text-white transition-all duration-300 group">
                <Wind className="h-8 w-8 mb-4 group-hover:text-white" />
                <h3 className="text-base mb-2">HEPA Filtered</h3>
                <p className="text-sm opacity-70">PM2.5 AQI under 30</p>
              </div>

              <div className="bg-black text-white p-4 sm:p-8 hover:scale-105 transition-transform duration-300">
                <Thermometer className="h-8 w-8 mb-4" />
                <h3 className="text-base mb-2">Climate Control</h3>
                <p className="text-sm text-white/70">Optimal temperature</p>
              </div>

              <div className="bg-black text-white p-4 sm:p-8 hover:scale-105 transition-transform duration-300">
                <Users2 className="h-8 w-8 mb-4" />
                <h3 className="text-base mb-2">Limited Entry</h3>
                <p className="text-sm text-white/70">
                  No crowds, focused training
                </p>
              </div>

              <div className="border-2 border-black p-4 sm:p-8 hover:bg-black hover:text-white transition-all duration-300 group">
                <Dumbbell className="h-8 w-8 mb-4 group-hover:text-white" />
                <h3 className="text-base mb-2">
                  3000 <span>Sq Ft</span>
                </h3>
                <p className="text-sm opacity-70">Open training floor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Options */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest font-semibold mb-4">
              What You Can Do
            </div>
            <h2>Exercises & Training</h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              One can easily work on a variety of functional movements and
              exercises.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {exercises.map((exercise, index) => (
              <div
                key={index}
                className="group overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-black border-t border-white/20">
                  <p className="text-sm font-semibold uppercase tracking-wide text-white">
                    {exercise.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 pt-16">
            <h3 className="text-2xl mb-8 text-center">Our Philosophy</h3>
            <div className="max-w-3xl mx-auto space-y-3 text-white/70 text-center">
              <p className="leading-relaxed">
                Training World focuses on the classical free weight method of
                training.
              </p>
              <p className="leading-relaxed text-lg font-semibold text-white">
                No heavy machinery. No mirrors. No loud music. No crowd.
              </p>
              <p className="leading-relaxed">
                We limit the number of entries per hour to ensure a focused,
                distraction-free environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Men's Group Workout Section */}
      <section className="py-12 sm:py-24 px-0 sm:px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-700 to-slate-800"> */}
          <div className="relative overflow-hidden rounded-2xl bg-black">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Text Content - Left 2/3 */}
              <div className="lg:col-span-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-white/80 mb-4">
                  Men's Group Training
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Morning{" "}
                  <span className="font-normal text-3xl md:text-3xl lg:text-4xl">
                    Group Workouts
                  </span>
                </h2>
                <div className="mt-6 space-y-2">
                  <p className="text-white text-lg md:text-xl font-semibold">
                    Every Tuesday & Friday
                  </p>
                  <p className="text-white/90 text-base md:text-lg">
                    7:45am - 8:45am
                  </p>
                </div>
              </div>

              {/* Image - Right 1/3 */}
              <div className="lg:col-span-1 relative">
                <img
                  src="https://whatsnewinfitness.com.au/wp-content/uploads/benefits-of-group-exercise-for-men.jpg"
                  alt="Men's group workout"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6">Experience the Space</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            Visit us and see why Training World is different from any gym you've
            been to.
          </p>
          <Button
            variant="whatsapp"
            size="lg"
            onClick={handleWhatsAppTrainingWorld}
            className="gap-3"
          >
            <WhatsAppIcon />
            Schedule a Visit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TheSpace;
