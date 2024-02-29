"use client"
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
const gymTestimonialMessages = [
  {
    "quote": "I&apos;ve never felt stronger since starting Strength Training with Emily Johnson. Her expertise and motivation keep me coming back for more!",
    "name": "Michael Smith",
    "title": "Strength Training Enthusiast"
  },
  {
    "quote": "Cardio Blast with John Smith is an absolute game-changer! I&apos;ve never felt more energized and alive after a workout.",
    "name": "Emily Brown",
    "title": "Cardio Blast Devotee"
  },
  {
    "quote": "Sarah Thompson&apos;s Yoga Flow is my weekly dose of serenity. It&apos;s amazing how much better I feel after each session!",
    "name": "Olivia Johnson",
    "title": "Yoga Flow Lover"
  },
  {
    "quote": "I never knew I could lift so much until I joined Powerlifting with Michael Davis. His encouragement pushes me to new heights!",
    "name": "David Wilson",
    "title": "Powerlifting Aficionado"
  },
  {
    "quote": "Jessica Roberts&apos;s Pilates Fusion classes have transformed my posture and flexibility. I can&apos;t thank her enough!",
    "name": "Sophia Miller",
    "title": "Pilates Fusion Fanatic"
  },
  {
    "quote": "Strength Training with Emily Johnson has helped me overcome my fitness plateau. Her dedication to her craft is truly inspiring!",
    "name": "Lucas Harris",
    "title": "Strength Training Enthusiast"
  },
  {
    "quote": "I&apos;ve never been more flexible and centered since joining Sarah Thompson&apos;s Yoga Flow class. It&apos;s the highlight of my week!",
    "name": "Ava Taylor",
    "title": "Yoga Flow Lover"
  },
  {
    "quote": "Cardio Blast with John Smith is the best way to kickstart my day. I&apos;m addicted to the rush of endorphins I get after each session!",
    "name": "Ethan Johnson",
    "title": "Cardio Blast Devotee"
  },
  {
    "quote": "Michael Davis&apos;s Powerlifting class has given me newfound strength and confidence. I never thought I could deadlift so much!",
    "name": "Liam Brown",
    "title": "Powerlifting Aficionado"
  },
  {
    "quote": "Jessica Roberts&apos;s Pilates Fusion classes are like therapy for my body and mind. I leave feeling refreshed and invigorated every time!",
    "name": "Isabella Martinez",
    "title": "Pilates Fusion Fanatic"
  }
];


function GymTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:purple-800 dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-teal-500">Glowing Testimonials : What Our Clients Say</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
        items={gymTestimonialMessages}
        direction="right"
        speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default GymTestimonials