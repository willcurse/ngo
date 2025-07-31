'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const volunteerPrograms = [
  {
    id: 'education',
    title: 'Education Support',
    description: 'Help teach and mentor underprivileged children',
    icon: '📚',
    color: 'blue',
    skills: ['Teaching', 'Tutoring', 'Curriculum Development', 'Mentoring'],
    commitment: 'Flexible hours, minimum 4 hours/week',
    location: 'Schools and community centers'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Assistance',
    description: 'Support medical camps and health awareness programs',
    icon: '🏥',
    color: 'green',
    skills: ['Medical Background', 'First Aid', 'Health Education', 'Community Outreach'],
    commitment: 'Weekend medical camps',
    location: 'Rural areas and mobile clinics'
  },
  {
    id: 'environment',
    title: 'Environmental Conservation',
    description: 'Participate in tree plantation and clean-up drives',
    icon: '🌱',
    color: 'emerald',
    skills: ['Environmental Awareness', 'Community Mobilization', 'Event Organization'],
    commitment: 'Monthly events and ongoing projects',
    location: 'Various environmental sites'
  },
  {
    id: 'community',
    title: 'Community Development',
    description: 'Support skill development and empowerment programs',
    icon: '🏘️',
    color: 'purple',
    skills: ['Social Work', 'Training', 'Project Management', 'Communication'],
    commitment: 'Regular community visits',
    location: 'Rural and urban communities'
  },
  {
    id: 'fundraising',
    title: 'Fundraising & Awareness',
    description: 'Help organize events and spread awareness',
    icon: '📢',
    color: 'orange',
    skills: ['Marketing', 'Event Management', 'Social Media', 'Networking'],
    commitment: 'Event-based, flexible timing',
    location: 'Online and event venues'
  },
  {
    id: 'admin',
    title: 'Administrative Support',
    description: 'Assist with documentation, coordination, and operations',
    icon: '📋',
    color: 'gray',
    skills: ['Documentation', 'Coordination', 'Data Management', 'Office Administration'],
    commitment: 'Part-time, flexible hours',
    location: 'Office and remote work'
  }
]

const volunteerBenefits = [
  {
    icon: '🎓',
    title: 'Skill Development',
    description: 'Gain valuable experience and develop new professional skills'
  },
  {
    icon: '🤝',
    title: 'Networking',
    description: 'Connect with like-minded individuals and build meaningful relationships'
  },
  {
    icon: '🏆',
    title: 'Recognition',
    description: 'Receive certificates and recognition for your valuable contributions'
  },
  {
    icon: '💝',
    title: 'Personal Fulfillment',
    description: 'Experience the joy of making a real difference in people\'s lives'
  },
  {
    icon: '📈',
    title: 'Career Growth',
    description: 'Enhance your resume with meaningful volunteer experience'
  },
  {
    icon: '🌍',
    title: 'Social Impact',
    description: 'Be part of creating positive change in communities'
  }
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Education Volunteer',
    message: 'Volunteering with this organization has been incredibly rewarding. I\'ve not only helped children learn but have grown personally and professionally.',
    image: '/family.webp',
    duration: '2 years'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Healthcare Volunteer',
    message: 'The medical camps we organize have helped thousands of people. It\'s amazing to see the direct impact of our efforts on rural communities.',
    image: '/family.webp',
    duration: '3 years'
  },
  {
    name: 'Anita Patel',
    role: 'Environmental Volunteer',
    message: 'Through tree plantation drives and clean-up activities, we\'re making our environment better for future generations. Very fulfilling work!',
    image: '/family.webp',
    duration: '1.5 years'
  }
]

const colorSchemes = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  emerald: 'from-emerald-500 to-emerald-600',
  purple: 'from-purple-500 to-purple-600',
  orange: 'from-orange-500 to-orange-600',
  gray: 'from-gray-500 to-gray-600'
}

// Sharing Component
const ShareModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)
  
  const currentURL = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = "Join Our Volunteer Community - Make a Difference Today!"
  const shareText = "I found this amazing volunteer opportunity! Join me in making a positive impact in communities across India. Every effort counts!"

  const shareOptions = [
    {
      name: 'Facebook',
      icon: '📘',
      color: 'bg-blue-600 hover:bg-blue-700',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}&quote=${encodeURIComponent(shareText)}`
    },
    {
      name: 'Twitter',
      icon: '🐦',
      color: 'bg-sky-500 hover:bg-sky-600',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentURL)}`
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      color: 'bg-green-500 hover:bg-green-600',
      url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + currentURL)}`
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      color: 'bg-blue-700 hover:bg-blue-800',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentURL)}`
    },
    {
      name: 'Telegram',
      icon: '✈️',
      color: 'bg-blue-500 hover:bg-blue-600',
      url: `https://t.me/share/url?url=${encodeURIComponent(currentURL)}&text=${encodeURIComponent(shareText)}`
    },
    {
      name: 'Email',
      icon: '📧',
      color: 'bg-gray-600 hover:bg-gray-700',
      url: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + '\n\n' + currentURL)}`
    }
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentURL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleShare = (url) => {
    window.open(url, '_blank', 'width=600,height=400')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Share This Page</h3>
              <p className="text-gray-600">Help us spread the word about volunteer opportunities</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {shareOptions.map((option, index) => (
                <motion.button
                  key={option.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleShare(option.url)}
                  className={`${option.color} text-white p-4 rounded-2xl text-center transition-all duration-200 hover:scale-105`}
                >
                  <div className="text-2xl mb-2">{option.icon}</div>
                  <div className="text-xs font-medium">{option.name}</div>
                </motion.button>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Page URL</label>
              <div className="flex">
                <input
                  type="text"
                  value={currentURL}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg bg-gray-50 text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className={`px-4 py-2 rounded-r-lg font-medium text-sm transition-all duration-200 ${
                    copied 
                      ? 'bg-green-600 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {copied ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Quick Share Button Component
const QuickShareButton = ({ onShare }) => {
  return (
    <motion.button
      onClick={onShare}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
      </svg>
      Share This Page
    </motion.button>
  )
}

export default function BecomeVolunteerPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [showShareModal, setShowShareModal] = useState(false)

  // Replace this URL with your actual Google Form URL
  const googleFormURL = "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform"

  const openShareModal = () => setShowShareModal(true)
  const closeShareModal = () => setShowShareModal(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/family.webp" alt="" fill className="object-cover" />
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            Become a <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Volunteer</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
          >
            Join our community of passionate volunteers and make a real difference in the lives of those who need it most. Your time, skills, and dedication can transform communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href={googleFormURL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
            >
              Apply Now
            </motion.a>
            <button 
              onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
              className="text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Learn More
            </button>
          </motion.div>

          {/* Share Button in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <QuickShareButton onShare={openShareModal} />
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Volunteer With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volunteering with our organization offers numerous benefits and opportunities for personal and professional growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from various programs that match your interests, skills, and availability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-r ${colorSchemes[program.color]} text-white`}>
                    <span className="text-2xl">{program.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Skills needed:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {program.skills.slice(0, 2).map((skill, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                        {program.skills.length > 2 && (
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            +{program.skills.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <span className="font-medium text-gray-700">Commitment:</span>
                      <span className="text-gray-600 ml-2">{program.commitment}</span>
                    </div>
                    
                    <div>
                      <span className="font-medium text-gray-700">Location:</span>
                      <span className="text-gray-600 ml-2">{program.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Volunteers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our amazing volunteers about their experiences and the impact they've made
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-blue-600">Volunteering for {testimonial.duration}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic">
                  "{testimonial.message}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Fill out our volunteer application form and take the first step towards creating positive change in communities across India.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Application Form</h3>
              <p className="text-gray-600 mb-6">
                Our application form takes about 5-10 minutes to complete. We'll review your application and get back to you within 5-7 business days.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center text-gray-600">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Quick and easy application process</span>
              </div>
              <div className="flex items-center justify-center text-gray-600">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Secure and confidential</span>
              </div>
              <div className="flex items-center justify-center text-gray-600">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Personalized volunteer matching</span>
              </div>
            </div>

            <motion.a
              href={googleFormURL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Open Application Form
            </motion.a>

            <p className="text-sm text-gray-500 mt-4">
              The form will open in a new tab. Make sure to enable pop-ups if needed.
            </p>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about volunteering or need assistance with the application, feel free to contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-700">volunteer@yourorganization.org</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-700">+91 12345 67890</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Volunteer Community Today</h2>
            <p className="text-xl mb-10 opacity-90">
              Be part of a movement that's creating lasting positive change. Your contribution, no matter how small, makes a significant difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={googleFormURL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Apply Now
              </motion.a>
              <motion.button
                onClick={openShareModal}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Share with Friends
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Share Modal */}
      <ShareModal isOpen={showShareModal} onClose={closeShareModal} />

      <Footer />
    </div>
  )
}
