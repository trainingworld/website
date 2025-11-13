import React from "react";

const Exercises = () => {
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
      image:
        "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/wall-balls_n2lsgy",
    },
    {
      name: "Farmer carry at Training World",
      image:
        "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/famer-carry_weiko1",
    },
    {
      name: "Treadmill runs at Training World",
      image:
        "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/treadmill-runs_jkes49",
    },
    {
      name: "Rowing at Training World",
      image:
        "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/rowing_yakbwk",
    },
    {
      name: "Sprint drills",
      image:
        "https://fastandfittraining.com/wp-content/uploads/RodDaveWarmup.jpg",
    },
    {
      name: "Weighted workouts at Training World",
      image:
        "https://res.cloudinary.com/dnplzkpot/image/upload/f_auto/q_auto/weights_y8at2l",
    },
    {
      name: "Functional Cardio",
      image:
        "https://www.endomondo.com/wp-content/uploads/2024/12/Improve-Functional-Ability-endomondo.jpg",
    },
  ];
  return (
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
              loading="lazy"
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
  );
};

export default Exercises;
