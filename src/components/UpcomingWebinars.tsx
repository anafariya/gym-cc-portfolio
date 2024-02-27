"use client"

import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect'
function UpcomingWebinars() {

    const featuredWebinars = [
        {
          "title": "Nutrition Essentials: Fueling Your Fitness Journey",
          "description": "Join us for an informative webinar on the importance of nutrition in achieving your fitness goals. Learn about essential nutrients, meal planning, and healthy eating habits to support your active lifestyle.",
          "slug": "nutrition-essentials",
          "isFeatured": true
        },
        {
          "title": "Mastering Mindfulness: Mental Health & Fitness",
          "description": "Discover the power of mindfulness in enhancing your mental well-being and overall fitness. In this webinar, we'll explore mindfulness techniques, stress management strategies, and their impact on your physical health.",
          "slug": "mastering-mindfulness",
          "isFeatured": true
        },
        {
          "title": "Maximize Your Workout: Tips for Effective Training",
          "description": "Get ready to supercharge your workouts with expert tips and techniques! Join us as we discuss effective training methods, workout programming, and how to optimize your gym sessions for maximum results.",
          "slug": "maximize-your-workout",
          "isFeatured": true
        },
        {
          "title": "Injury Prevention & Recovery: Stay Strong, Stay Safe",
          "description": "Learn how to prevent injuries and promote faster recovery in your fitness journey. Our webinar will cover common workout injuries, injury prevention strategies, and effective techniques for rehabilitation.",
          "slug": "injury-prevention-recovery",
          "isFeatured": true
        },
        {
          "title": "Unlock Your Potential: Goal Setting & Motivation",
          "description": "Achieve your fitness dreams with effective goal setting and motivation techniques. Join us to learn how to set SMART fitness goals, stay motivated, and overcome common obstacles on your path to success.",
          "slug": "unlock-your-potential",
          "isFeatured": true
        }
      ]

  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-4xl text-teal-500 tracking-wide uppercase'>
                    upcoming webinars
                </h2>
            </div>
            <div className='mt-10'>
                <HoverEffect
                items = {featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: webinar.slug
                    }
                ))}
                />
            </div>
            <div className='mt-10 text-center'>
                <Link href="/" className='text-teal-400 font-semibold text-lg border-b-2 border-teal-400 hover:text-white hover:border-white transition duration-300'>
                    View All Webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars