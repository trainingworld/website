import { Button } from "@/components/ui/button";
import { handleWhatsAppTrainingWorld } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Badge } from "@/components/ui/badge";

// Add your gallery images here
const galleryImages = [
  // Each item now has an image and optional caption
  {
    image:
      "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/space_clozvl",
    caption: "Training Space",
  },
  {
    image:
      "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/rowing_mxpxfa",
    caption: "Rowing Machines",
  },
  {
    image:
      "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/rowing-2_rcd6db",
    caption: "Rowing Station",
  },
  {
    image:
      "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/farmer-carry_to1suw",
    caption: "Farmer Carry",
  },
  {
    image:
      "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/weights_ggjbkq",
    caption: "Free Weights",
  },
  {
    image:
      "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/wall-balls_iwye4j",
    caption: "Wall Balls",
  },
];

const Gallery = () => {
  // Placeholder for gallery images - user will upload their own later
  //const placeholderImages = Array(12).fill(null);

  const heroGallery =
    "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/hero-gallery_qbnk1r";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroGallery})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Our Facility
          </Badge>
          <h1>Gallery</h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed text-white/80">
            Get a glimpse of our state-of-the-art training space
          </p>
        </div>
      </section>

      {/* Coming Soon Notice */}
      {/* <section className="py-12 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-wider font-semibold">
            Brand photos coming soon - placeholder fitness imagery shown
          </p>
        </div>
      </section> */}

      {/* Gallery Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className=" hover:scale-105 transition-transform duration-300 overflow-hidden group cursor-pointer rounded-lg"
              >
                {item.image ? (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.caption || `Gallery image ${index + 1}`}
                        className="w-full h-auto max-h-[500px] object-contain"
                      />
                    </div>
                    {item.caption && (
                      <div className="px-4 py-3 bg-white border-t border-gray-200">
                        <p className="text-sm font-medium text-center text-gray-700">
                          {item.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full aspect-square flex items-center justify-center bg-black/5">
                    <p className="text-sm uppercase tracking-wider text-muted-foreground group-hover:text-black transition-colors">
                      Gallery Image {index + 1}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest font-semibold mb-4">
              What You'll See
            </div>
            <h2>Facility Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-white/20 p-8">
              <h3 className="mb-4">Open Training Floor</h3>
              <p className="text-white/70 leading-relaxed">
                3000 square feet of rubberized training floor, perfect for all
                types of functional movements and exercises.
              </p>
            </div>

            <div className="border border-white/20 p-8">
              <h3 className="mb-4">Clean Air System</h3>
              <p className="text-white/70 leading-relaxed">
                HEPA filtration keeps PM2.5 AQI under 30, ensuring you breathe
                clean air during intense workouts.
              </p>
            </div>

            <div className="border border-white/20 p-8">
              <h3 className="mb-4">Climate Controlled</h3>
              <p className="text-white/70 leading-relaxed">
                Temperature-controlled environment allows you to focus on
                training without weather distractions.
              </p>
            </div>

            <div className="border border-white/20 p-8">
              <h3 className="mb-4">Premium Equipment</h3>
              <p className="text-white/70 leading-relaxed">
                Free weights, sleds, rowing machines, wall balls, and everything
                you need for effective training.
              </p>
            </div>

            <div className="border border-white/20 p-8">
              <h3 className="mb-4">No Mirrors Policy</h3>
              <p className="text-white/70 leading-relaxed">
                Focus on how you feel, not how you look. Train with mindfulness
                and internal awareness.
              </p>
            </div>

            <div className="border border-white/20 p-8">
              <h3 className="mb-4">Limited Capacity</h3>
              <p className="text-white/70 leading-relaxed">
                Controlled entry per hour ensures a peaceful, focused training
                environment without crowds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6">See It For Yourself</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            Schedule a tour and experience the Training World difference in
            person.
          </p>
          <Button
            variant="whatsapp"
            // size="lg"
            onClick={handleWhatsAppTrainingWorld}
            className="gap-3"
            aria-label="Book a tour at Training World"
          >
            <WhatsAppIcon />
            Book a Tour
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
