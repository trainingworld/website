import {
  MessageCircle,
  Wind,
  Thermometer,
  Users2,
  Dumbbell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import heroSpace from "@/assets/hero-space.jpg";
import { handleWhatsAppTrainingWorld } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useState } from "react";

const TheSpace = () => {
  const exercises = [
    "Lunge walks",
    "Burpee broad jumps",
    "Sled pull and push",
    "Wall balls",
    "Farmer carry",
    "Treadmill runs",
    "Rowing",
    "Sprint drills",
    "Weighted workouts",
    "Functional Cardio",
  ];

  // Create a mapping of exercise names to placeholder images
  const exerciseImages = exercises.reduce((acc, exercise, index) => {
    acc[
      exercise
    ] = `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center&auto=format&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
    return acc;
  }, {} as Record<string, string>);

  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

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
          <div className="mb-4 text-xs uppercase tracking-widest font-semibold">
            The Facility
          </div>
          <h1>The Space</h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed">
            Delhi NCR's only state-of-the-art indoor free space training area
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 bg-white">
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
            <div className="grid grid-cols-2 gap-6">
              <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group">
                <Wind className="h-8 w-8 mb-4 group-hover:text-white" />
                <h3 className="text-base mb-2">HEPA Filtered</h3>
                <p className="text-sm opacity-70">PM2.5 AQI under 30</p>
              </div>

              <div className="bg-black text-white p-6 hover:scale-105 transition-transform duration-300">
                <Thermometer className="h-8 w-8 mb-4" />
                <h3 className="text-base mb-2">Climate Control</h3>
                <p className="text-sm text-white/70">Optimal temperature</p>
              </div>

              <div className="bg-black text-white p-6 hover:scale-105 transition-transform duration-300">
                <Users2 className="h-8 w-8 mb-4" />
                <h3 className="text-base mb-2">Limited Entry</h3>
                <p className="text-sm text-white/70">
                  No crowds, focused training
                </p>
              </div>

              <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group">
                <Dumbbell className="h-8 w-8 mb-4 group-hover:text-white" />
                <h3 className="text-base mb-2">3000 Sq Ft</h3>
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
              exercises, click on the exercise to learn more about them!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {exercises.map((exercise, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className={`border border-white/20 p-6 text-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 cursor-pointer ${
                      index === exercises.length - 1 &&
                      exercises.length % 3 === 1
                        ? "md:col-start-2"
                        : ""
                    }`}
                    onClick={() => setSelectedExercise(exercise)}
                  >
                    <p className="text-sm font-semibold uppercase tracking-wide">
                      {exercise}
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-black border-white/20">
                  <div className="relative">
                    <img
                      src={exerciseImages[exercise]}
                      alt={exercise}
                      className="w-full h-auto max-h-[80vh] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold uppercase tracking-wide">
                        {exercise}
                      </h3>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
            Schedule a Tour on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TheSpace;
