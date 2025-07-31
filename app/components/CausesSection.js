'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const causes = [
  {
    id: 'community-projects',
    title: 'Charity Community Projects',
    description: 'We invest in community development projects that aim to uplift entire communities economically.',
    goal: 67000,
    image: '/family.webp',
  },
  {
    id: 'environmental-fund',
    title: 'Environmental Conservation Fund',
    description: 'Our charity organization recognizes the financial aspect of environmental conservation efforts.',
    goal: 134000,
    image: '/family.webp',
  },
  {
    id: 'entrepreneurship-programs',
    title: 'Entrepreneurship Programs',
    description: 'Cause facilitates economic empowerment through the allocation of funds to microfinance.',
    goal: 28000,
    image: '/family.webp',
  },
]
const MotionLink = motion(Link);

export default function CausesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section ref={ref} className="py-24 bg-beige-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-[15px] text-gray-500 italic mb-1"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Who Do We Help
          </motion.p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
            <motion.h2
              className="text-[60px] font-light"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", damping: 20 }}
            >
              Our Causes
            </motion.h2>
            <motion.p
              className="max-w-xl text-gray-600 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              At Cause, we believe that the collective power of compassion and generosity can create meaningful change. Your support is crucial in enabling us to continue our mission.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {causes.map((cause, idx) => (
            <motion.div
              key={cause.id}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.9,
                rotateY: -15
              }}
              animate={inView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateY: 0
              } : {}}
              transition={{
                duration: 0.7,
                delay: idx * 0.2 + 0.6,
                type: "spring",
                damping: 25,
                stiffness: 200
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="space-y-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.h3
                className="text-xl font-semibold"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: idx * 0.2 + 0.8, duration: 0.5 }}
              >
                {cause.title}
              </motion.h3>

              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: idx * 0.2 + 1.0, duration: 0.5 }}
              >
                {cause.description}
              </motion.p>

              <motion.div
                className="relative w-full h-48 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.2 + 1.2, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>

              <motion.div
                className="flex justify-between items-center mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.2 + 1.4, duration: 0.5 }}
              >
                <span className="font-medium text-gray-800">
                  Goal: ₹{cause.goal.toLocaleString('en-IN')}
                </span>
                {/* <Link href="/donate">
                  <motion.button
                    className="bg-black text-white text-sm px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ● Donate
                  </motion.button>
                </Link> */}
                <MotionLink
                  href="/donate"
                  className="bg-black text-white text-sm px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors duration-300 inline-block"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  ● Donate
                </MotionLink>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <Link href="/causes">
            <motion.button
              className="bg-brown-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-brown-700 transition-colors duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Causes
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
