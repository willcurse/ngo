'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Link from 'next/link'

const ContactIcon = ({ children, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, rotate: -180 }}
      animate={inView ? { 
        scale: 1, 
        rotate: 0,
        transition: { 
          delay, 
          duration: 0.5, 
          type: "spring",
          damping: 15 
        }
      } : {}}
      className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center shadow-lg"
    >
      {children}
    </motion.div>
  )
}

const InputField = ({ label, type = "text", name, placeholder, required = false, isTextarea = false, delay }) => {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const InputComponent = isTextarea ? 'textarea' : 'input'

  return (
    <motion.div
      ref={ref}
      className="space-y-3"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { 
        opacity: 1, 
        x: 0,
        transition: { delay, duration: 0.4 }
      } : {}}
    >
      <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.01 }}
      >
        <InputComponent
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={isTextarea ? 5 : undefined}
          className={`
            w-full px-5 py-4 border-2 rounded-lg transition-all duration-300 text-gray-900
            ${focused 
              ? 'border-blue-500 bg-white shadow-lg ring-2 ring-blue-100' 
              : 'border-gray-300 bg-gray-50 hover:border-gray-400'
            }
            ${isTextarea ? 'resize-none' : ''}
            focus:outline-none focus:ring-2 focus:ring-blue-100
            placeholder:text-gray-400 text-base
          `}
        />
        {value && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute right-4 top-4 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center"
          >
            <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Individual refs for different sections to control animations better
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [contactInfoRef, contactInfoInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! We will get back to you within 24 hours.')
    }, 2500)
  }

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Professional Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={headerInView ? { 
              opacity: 1, 
              scale: 1,
              transition: { delay: 0.1, duration: 0.4, type: "spring" }
            } : {}}
          >
            <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
              Contact Our Professional Team
            </p>
          </motion.div>
          
          <motion.h1 
            className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.3, rotate: -5 }}
            animate={headerInView ? { 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              transition: { 
                delay: 0.2, 
                duration: 0.7, 
                type: "spring", 
                damping: 25 
              }
            } : {}}
          >
            Let's Connect &<br />
            <span className="bg-black bg-clip-text text-transparent">
              Collaborate
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.3, duration: 0.5 }
            } : {}}
          >
            We're committed to excellence in everything we do. Reach out to our professional team for expert guidance, partnership opportunities, or comprehensive support services.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-20 items-start">
          {/* Professional Contact Information */}
          <motion.div 
            ref={contactInfoRef}
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={contactInfoInView ? { 
              opacity: 1, 
              x: 0,
              transition: { delay: 0.1, duration: 0.6 }
            } : {}}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              
              {/* Address */}
              <motion.div 
                className="flex items-start space-x-5 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl mb-6"
                whileHover={{ scale: 1.02, y: -3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contactInfoInView ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.2, duration: 0.4, type: "spring" }
                } : {}}
              >
                <ContactIcon delay={0.2}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </ContactIcon>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Corporate Headquarters</h4>
                  <p className="text-gray-600 leading-relaxed">
                    123, Professional Tower,<br />
                    Sector 18, Cyber City,<br />
                    Gurugram - 122001, Haryana
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex items-start space-x-5 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl mb-6"
                whileHover={{ scale: 1.02, y: -3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contactInfoInView ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.3, duration: 0.4, type: "spring" }
                } : {}}
              >
                <ContactIcon delay={0.3}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </ContactIcon>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Business Line</h4>
                  <p className="text-gray-600 mb-1">
                    <a href="tel:+911244567890" className="hover:text-blue-600 transition-colors font-medium">
                      +91 124 456 7890
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+919876543210" className="hover:text-blue-600 transition-colors font-medium">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="flex items-start space-x-5 p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl mb-6"
                whileHover={{ scale: 1.02, y: -3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contactInfoInView ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.4, duration: 0.4, type: "spring" }
                } : {}}
              >
                <ContactIcon delay={0.4}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </ContactIcon>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Email Support</h4>
                  <p className="text-gray-600 mb-1">
                    <a href="mailto:contact@professional.org.in" className="hover:text-blue-600 transition-colors font-medium">
                      contact@professional.org.in
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:partnerships@professional.org.in" className="hover:text-blue-600 transition-colors font-medium">
                      partnerships@professional.org.in
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div 
                className="flex items-start space-x-5 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl"
                whileHover={{ scale: 1.02, y: -3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contactInfoInView ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.5, duration: 0.4, type: "spring" }
                } : {}}
              >
                <ContactIcon delay={0.5}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L11 12.5V7h1.5v4.5l3.5 2V15l-4-2.5V7z"/>
                  </svg>
                </ContactIcon>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Business Hours</h4>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold">Mon - Fri:</span> 9:00 AM - 7:00 PM<br />
                    <span className="font-semibold">Saturday:</span> 10:00 AM - 5:00 PM<br />
                    <span className="font-semibold">Sunday:</span> Appointment Only
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Contact Form */}
          <motion.div
            ref={formRef}
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={formInView ? { 
              opacity: 1, 
              x: 0, 
              scale: 1,
              transition: { delay: 0.1, duration: 0.6 }
            } : {}}
          >
            <motion.div 
              className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2, duration: 0.4 }
                } : {}}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Send Professional Message</h3>
                <p className="text-gray-600 text-lg">We'll respond within 24 hours with personalized assistance.</p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <InputField
                    label="Full Name"
                    name="name"
                    placeholder="Enter your complete name"
                    required
                    delay={0.3}
                  />
                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    delay={0.4}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="your.email@company.com"
                    required
                    delay={0.5}
                  />
                  <InputField
                    label="Company/Organization"
                    name="company"
                    placeholder="Your organization name"
                    delay={0.6}
                  />
                </div>

                <InputField
                  label="Subject"
                  name="subject"
                  placeholder="Brief description of your inquiry"
                  required
                  delay={0.7}
                />

                <InputField
                  label="Detailed Message"
                  name="message"
                  placeholder="Please provide comprehensive details about your requirements, partnership interests, or questions..."
                  required
                  isTextarea
                  delay={0.8}
                />

                {/* Professional Send Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full py-5 px-8 rounded-xl text-white font-bold text-lg
                    transition-all duration-300 shadow-lg relative overflow-hidden
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 hover:shadow-2xl'
                    }
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.9, duration: 0.4 }
                  } : {}}
                  whileHover={!isSubmitting ? { 
                    scale: 1.02, 
                    y: -3,
                    boxShadow: "0 15px 35px rgba(16, 185, 129, 0.3)"
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <motion.div 
                      className="flex items-center justify-center"
                    >
                      <motion.div
                        className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="ml-3 font-semibold">Processing Your Message...</span>
                    </motion.div>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="mr-3">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                      Send Professional Message
                    </span>
                  )}
                </motion.button>

                {/* Professional Footer Info */}
                <motion.div
                  className="text-center pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={formInView ? { 
                    opacity: 1,
                    transition: { delay: 1.0, duration: 0.4 }
                  } : {}}
                >
                  <p className="text-sm text-gray-500">
                    🔒 Your information is secured with enterprise-grade encryption<br />
                    📧 Professional response guaranteed within 24 hours
                  </p>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Professional Bottom CTA */}
        <motion.div 
          ref={ctaRef}
          className="text-center mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={ctaInView ? { 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.2, duration: 0.6 }
          } : {}}
        >
          <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">Ready for Professional Partnership?</h3>
              <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
                Join industry leaders and successful organizations who trust our expertise. Let's create exceptional results together.
              </p>
              
              <Link href="/donate">
                <motion.button
                  className="bg-transparent text-white px-4 py-2 rounded-lg text-lg font-medium hover:bg-gray-100 hover:text-black transition-colors duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(16, 185, 129, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate Now
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
