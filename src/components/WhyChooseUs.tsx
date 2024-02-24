"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

const gymContent = [
    {
      title: "Personalized Training Programs",
      description:
        "Get personalized training programs tailored to your fitness goals, whether you're looking to build muscle, lose weight, or improve your overall health. Our certified trainers will design a program specifically for you, taking into account your current fitness level, medical history, and lifestyle.",
    },
    {
      title: "Strength Training",
      description:
        "Build strength and muscle mass with our comprehensive strength training programs. Whether you're a beginner or an experienced lifter, our trainers will guide you through proper form and technique to maximize your results. From bench presses to deadlifts, we've got you covered.",
    },
    {
      title: "Powerlifting",
      description:
        "Take your strength to the next level with our powerlifting programs. Our experienced coaches will teach you the fundamentals of powerlifting, including the squat, bench press, and deadlift. Train with like-minded individuals in a supportive environment and watch your strength soar.",
    },
    {
      title: "Cardio Workouts",
      description:
        "Improve your cardiovascular health and endurance with our dynamic cardio workouts. Whether you prefer running, cycling, or rowing, our trainers will help you design a cardio program that suits your needs and preferences. Get your heart pumping and burn calories while having fun.",
    },
    {
      title: "Yoga and Pilates",
      description:
        "Rejuvenate your body and mind with our yoga and Pilates classes. Strengthen your core, improve your flexibility, and find inner peace through these ancient practices. Our experienced instructors will guide you through each pose and help you achieve a deeper mind-body connection.",
    },
    {
      title: "Nutrition Guidance",
      description:
        "Achieve your fitness goals faster with our nutrition guidance services. Our certified nutritionists will create a customized diet plan tailored to your unique needs and preferences. Whether you want to lose weight, gain muscle, or improve your overall health, we'll help you make the right food choices to fuel your body.",
    },
  ];
  

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={gymContent}/>
    </div>
  )
}

export default WhyChooseUs