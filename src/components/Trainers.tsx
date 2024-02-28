"use client"
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'

const trainers = [
    {
      "id": 1,
      "name": "Ana Fariya",
      "designation": "Certified Personal Trainer",
      "image": "/ana1.jpg"
    },
    {
      "id": 2,
      "name": "Muskaan",
      "designation": "Strength & Conditioning Coach",
      "image": "/ana2.jpg"
    },
    {
      "id": 3,
      "name": "Sarah Thompson",
      "designation": "Yoga Instructor",
      "image": "/ana3.jpg"
    },
    {
      "id": 4,
      "name": "Miss Fariya",
      "designation": "Powerlifting Coach",
      "image": "/ana4.jpg"
    }
  ]
  

function Trainers() {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
        <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
            <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Trainers</h2>
            <p className='text-base md:text-lg text-white text-center mb-4'>Discover the talented professionals who will guide your fitness journey</p>
            <div className='flex flex-row items-center justify-center mb-10 w-full'>
                <AnimatedTooltip
                items = {trainers}
                />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Trainers