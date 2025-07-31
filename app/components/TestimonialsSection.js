'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Cause has been instrumental in transforming our community. Their dedication to helping families in need is truly remarkable. The support we received during difficult times was beyond our expectations.",
    image: "/family.webp",
    donation: "₹25,000"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, NCR",
    rating: 5,
    text: "I've been supporting Cause for over 2 years now. Their transparency in fund utilization and direct impact on communities makes me confident in contributing regularly.",
    image: "/family.webp",
    donation: "₹15,000"
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "The medical assistance program helped my family when we needed it most. Cause doesn't just provide financial support, they provide hope and dignity.",
    image: "/family.webp",
    donation: "₹8,500"
  },
  {
    id: 4,
    name: "Dr. Suresh Mehta",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "As a healthcare professional, I've witnessed firsthand how Cause's medical aid program has saved lives in rural communities. Their work is invaluable.",
    image: "/family.webp",
    donation: "₹50,000"
  }
]

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "#fbbf24" : "#e5e7eb"}
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </motion.svg>
      ))}
    </div>
  )
}

const TestimonialCard = ({ testimonial, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0.3,
        rotate: -180,
        y: 100
      }}
      animate={isVisible ? {
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: 0,
        transition: {
          duration: 1.2,
          delay: index * 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
          scale: {
            type: "spring",
            damping: 20,
            stiffness: 200
          }
        }
      } : {}}
      whileHover={{
        scale: 1.05,
        y: -10,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-beige-200 rounded-full opacity-50"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 45 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ transform: 'translate(50%, -50%)' }}
      />

      {/* Profile Section */}
      <motion.div 
        className="flex items-center space-x-4 mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? {
          opacity: 1,
          x: 0,
          transition: { delay: index * 0.3 + 0.5, duration: 0.6 }
        } : {}}
      >
        <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-pink-100">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
          <div className="mt-1">
            <StarRating rating={testimonial.rating} />
          </div>
        </div>
      </motion.div>

      {/* Testimonial Text */}
      <motion.blockquote 
        className="text-gray-600 leading-relaxed mb-6 italic relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? {
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.3 + 0.7, duration: 0.6 }
        } : {}}
      >
        "{testimonial.text}"
      </motion.blockquote>

      {/* Donation Amount */}
      <motion.div 
        className="flex justify-between items-center pt-4 border-t border-gray-100"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? {
          opacity: 1,
          scale: 1,
          transition: { delay: index * 0.3 + 0.9, duration: 0.5 }
        } : {}}
      >
        <span className="text-sm text-gray-500">Total Contributed</span>
        <motion.span 
          className="font-bold text-brown-600 text-lg"
          whileHover={{ scale: 1.1, color: "#8b7355" }}
        >
          {testimonial.donation}
        </motion.span>
      </motion.div>

      {/* Quote Icon */}
      <motion.div
        className="absolute bottom-4 right-6 text-6xl text-pink-100 opacity-30"
        animate={{
          rotate: isHovered ? 15 : 0,
          scale: isHovered ? 1.1 : 1
        }}
      >
        "
      </motion.div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-beige-50 to-[#FDF2E9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-sm text-gray-500 italic mb-2 tracking-wider uppercase"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { 
              opacity: 1, 
              scale: 1,
              transition: { delay: 0.2, duration: 0.6, type: "spring" }
            } : {}}
          >
            What People Say
          </motion.p>
          
          <motion.h2 
            className="text-5xl lg:text-6xl font-light text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={inView ? { 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              transition: { 
                delay: 0.4, 
                duration: 1.0, 
                type: "spring", 
                damping: 20 
              }
            } : {}}
          >
            Stories of Impact
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.6, duration: 0.6 }
            } : {}}
          >
            Real stories from the people whose lives have been touched by our community's generosity and support. Every contribution creates ripples of positive change.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isVisible={inView}
            />
          ))}
        </div>

        {/* Statistics Bar */}
        <motion.div 
          className="mt-20 bg-white rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { delay: 2.0, duration: 0.8, type: "spring" }
          } : {}}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { 
                opacity: 1, 
                scale: 1,
                transition: { delay: 2.2, duration: 0.6, type: "spring" }
              } : {}}
            >
              <div className="text-3xl font-light text-brown-600 mb-2">98%</div>
              <p className="text-gray-600 text-sm">Satisfaction Rate</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { 
                opacity: 1, 
                scale: 1,
                transition: { delay: 2.4, duration: 0.6, type: "spring" }
              } : {}}
            >
              <div className="text-3xl font-light text-brown-600 mb-2">₹2.5Cr+</div>
              <p className="text-gray-600 text-sm">Total Raised</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { 
                opacity: 1, 
                scale: 1,
                transition: { delay: 2.6, duration: 0.6, type: "spring" }
              } : {}}
            >
              <div className="text-3xl font-light text-brown-600 mb-2">5,000+</div>
              <p className="text-gray-600 text-sm">Lives Changed</p>
            </motion.div>
            
           
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { 
                opacity: 1, 
                
                scale: 1,
                transition: { delay: 2.8, duration: 0.6, type: "spring" }
              } : {}}
            >
              <div className="text-3xl font-light text-brown-600 mb-2">4.9★</div>
              <p className="text-gray-600 text-sm">Average Rating</p>
            </motion.div>
          </div>
        </motion.div>


        {/* Call to Action */}
        {/* <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: { delay: 3.0, duration: 0.6 }
          } : {}}
        >
          <motion.button
            className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-brown-700 transition-colors duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            Share Your Story
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  )
}
