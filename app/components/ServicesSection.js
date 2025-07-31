'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

const MedicineIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 36c-8.837 0-16-7.163-16-16S15.163 8 24 8s16 7.163 16 16-7.163 16-16 16z" fill="currentColor"/>
    <path d="M31 23h-6v-6c0-.552-.448-1-1-1s-1 .448-1 1v6h-6c-.552 0-1 .448-1 1s.448 1 1 1h6v6c0 .552.448 1 1 1s1-.448 1-1v-6h6c.552 0 1-.448 1-1s-.448-1-1-1z" fill="currentColor"/>
  </svg>
)

const BuildIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M24 2l20 12v20L24 46 4 34V14L24 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 2v44M4 14l20 12 20-12" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const CareIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M24 42c-1.1 0-2-.9-2-2 0-1.1.9-2 2-2s2 .9 2 2c0 1.1-.9 2-2 2zm12-6H12c-2.2 0-4-1.8-4-4V20c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4z" fill="currentColor"/>
    <circle cx="18" cy="26" r="2" fill="white"/>
    <circle cx="30" cy="26" r="2" fill="white"/>
  </svg>
)

const ServiceCard = ({ icon, title, description, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        scale: 1,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      } : {}}
      className="bg-[#FDF2E9] rounded-2xl p-8 flex items-start space-x-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-gray-600 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-medium text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" })

  return (
    <section className="bg-beige-100 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title Section */}
          <div className="lg:sticky lg:top-20">
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isTitleInView ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              } : {}}
            >
              <p className="text-sm text-gray-500 mb-4 tracking-wider uppercase">What We Do</p>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-800 leading-tight mb-8">
                Why people choose<br />
                Cause?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Cause, we prioritize transparency, integrity, and inclusivity. These values guide our actions as we work tirelessly to bridge the gap between those in need and those willing to help.
              </p>
              <Link href="/donate">
                <motion.button
                  className="bg-gray-800 text-white px-8 py-3 rounded-full text-sm hover:bg-gray-900 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                Donate Now
              </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Service Cards with Scroll Animation */}
          <div className="space-y-8">
            <ServiceCard
              icon={<MedicineIcon />}
              title="Medicine Help"
              description="Our commitment to health and wellness extends across borders."
              delay={0.2}
            />
            
            <ServiceCard
              icon={<BuildIcon />}
              title="We Build and Create"
              description="We invest in sustainable community development projects to create positive change."
              delay={0.4}
            />
            
            <ServiceCard
              icon={<CareIcon />}
              title="We Care About"
              description="In times of crisis, Cause responds swiftly to provide emergency relief."
              delay={0.6}
            />
          </div>
        </div>
      </div>

    </section>
  )
}
