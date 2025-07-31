'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'


const stats = [
  { number: '5000+', label: 'Lives Impacted', icon: '❤️' },
  { number: '₹2.5Cr', label: 'Funds Raised', icon: '💰' },
  { number: '100+', label: 'Active Projects', icon: '🚀' },
  { number: '50+', label: 'Volunteers', icon: '👥' },
]

const teamMembers = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Founder & CEO',
    image: '/family.webp',
    bio: 'With over 15 years in social work, Dr. Sharma founded our organization to create sustainable change in underserved communities.',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Program Director',
    image: '/family.webp',
    bio: 'Rajesh leads our community development initiatives and has successfully implemented over 50 projects across rural India.',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Anita Patel',
    role: 'Finance Manager',
    image: '/family.webp',
    bio: 'Ensuring transparency and accountability, Anita manages our financial operations with complete integrity.',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Vikram Singh',
    role: 'Outreach Coordinator',
    image: '/family.webp',
    bio: 'Vikram builds partnerships with local communities and coordinates our volunteer programs nationwide.',
    linkedin: '#',
    twitter: '#'
  }
]

const values = [
  {
    title: 'Transparency',
    description: 'We maintain complete transparency in all our operations, ensuring donors know exactly how their contributions are used.',
    icon: '🔍',
    color: 'blue'
  },
  {
    title: 'Sustainability',
    description: 'Our programs are designed for long-term impact, creating self-sustaining solutions for communities.',
    icon: '🌱',
    color: 'green'
  },
  {
    title: 'Integrity',
    description: 'We operate with the highest ethical standards, ensuring every action aligns with our mission.',
    icon: '⚖️',
    color: 'purple'
  },
  {
    title: 'Collaboration',
    description: 'We believe in working together with communities, partners, and volunteers to create lasting change.',
    icon: '🤝',
    color: 'orange'
  }
]

const milestones = [
  { year: '2018', event: 'Organization Founded', description: 'Started with a small team dedicated to community development' },
  { year: '2019', event: 'First Major Project', description: 'Successfully implemented clean water project for 500 families' },
  { year: '2020', event: 'COVID Relief Efforts', description: 'Distributed essential supplies to over 2,000 families during pandemic' },
  { year: '2021', event: 'Education Initiative Launch', description: 'Launched scholarship program supporting 200+ students' },
  { year: '2022', event: 'Environmental Projects', description: 'Planted 10,000 trees and launched waste management programs' },
  { year: '2023', event: 'Expansion Milestone', description: 'Extended operations to 15 states across India' },
  { year: '2024', event: 'Digital Platform Launch', description: 'Launched online platform for transparent fund tracking' }
]

const StatCard = ({ stat, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  
  return (
    <motion.div
      ref={ref}
      className="text-center p-6 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, type: "spring", damping: 20 }}
      whileHover={{ y: -10, scale: 1.05 }}
    >
      <motion.div 
        className="text-4xl mb-3"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
      >
        {stat.icon}
      </motion.div>
      <motion.div 
        className="text-3xl font-bold text-gray-900 mb-2"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring" }}
      >
        {stat.number}
      </motion.div>
      <p className="text-gray-600 font-medium">{stat.label}</p>
    </motion.div>
  )
}

const TeamCard = ({ member, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  
  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", damping: 20 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <motion.div 
        className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </motion.div>
      
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
        
        <div className="flex justify-center space-x-3">
          <motion.a
            href={member.linkedin}
            className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
          <motion.a
            href={member.twitter}
            className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const ValueCard = ({ value, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  }
  
  return (
    <motion.div
      ref={ref}
      className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, type: "spring", damping: 20 }}
      whileHover={{ y: -5 }}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorClasses[value.color]}`}></div>
      
      <motion.div 
        className="text-4xl mb-4"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
      >
        {value.icon}
      </motion.div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
      <p className="text-gray-600 leading-relaxed">{value.description}</p>
    </motion.div>
  )
}

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-[#FDF2E9] via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, type: "spring", damping: 20 }}
            >
              About Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Since our founding in 2018, we have been dedicated to creating sustainable positive change in communities across India through innovative programs, transparent operations, and collaborative partnerships.
            </motion.p>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/family.webp"
                  alt="Our mission in action"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Creating Change Together</h3>
                  <p className="text-sm opacity-90">Building stronger communities through collaboration</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To empower underserved communities across India by providing sustainable solutions in education, healthcare, economic development, and environmental conservation, fostering self-reliance and dignity for all.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">👁️</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    A world where every individual has access to basic necessities, quality education, and opportunities to thrive, regardless of their background or circumstances.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every action we take
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals working tirelessly to create positive change
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to create lasting change
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div 
                      className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"
                      initial={{ scale: 0 }}
                      animate={timelineInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                    />
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Whether through donations, volunteering, or partnerships, there are many ways to get involved and make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <motion.button
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate Now
                </motion.button>
              </Link>
              <Link href="/volunteer">
                <motion.button
                  className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Volunteer with Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
