'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const presetAmounts = [
  { value: 500, label: '₹500', description: 'Provides meals for 5 children' },
  { value: 1000, label: '₹1,000', description: 'School supplies for 10 students' },
  { value: 2500, label: '₹2,500', description: 'Medical care for a family' },
  { value: 5000, label: '₹5,000', description: 'Clean water access for 20 people' },
  { value: 'custom', label: 'Custom', description: 'Choose your own amount' }
]

const paymentMethods = [
  { name: 'UPI', icon: '📱', description: 'Quick & Secure' },
  { name: 'Card', icon: '💳', description: 'Credit/Debit Card' },
  { name: 'Netbanking', icon: '🏦', description: 'Online Banking' },
  { name: 'QR Code', icon: '📱', description: 'Scan & Pay' }
]

const impactStats = [
  { number: '10,000+', label: 'Lives Impacted', icon: '❤️' },
  { number: '₹5Cr+', label: 'Funds Raised', icon: '💰' },
  { number: '200+', label: 'Active Projects', icon: '🚀' },
  { number: '95%', label: 'Direct Impact', icon: '🎯' }
]

const testimonials = [
  {
    name: 'Priya Sharma',
    message: 'Supporting this organization has been incredibly fulfilling. Seeing the direct impact of my donations gives me immense joy.',
    amount: '₹2,500/month',
    avatar: '/family.webp'
  },
  {
    name: 'Rajesh Kumar',
    message: 'The transparency and regular updates make me confident that my contribution is making a real difference.',
    amount: '₹5,000',
    avatar: '/family.webp'
  }
]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState('')
  const [selectedMethod, setSelectedMethod] = useState('UPI')
  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    city: '', 
    message: '',
    anonymous: false,
    newsletter: true
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showQRModal, setShowQRModal] = useState(false)

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [qrRef, qrInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const donationAmount = selectedAmount === 'custom' ? customAmount : selectedAmount

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    if (amount !== 'custom') {
      setCustomAmount('')
    }
  }

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setCustomAmount(value)
  }

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }, 2000)
  }

  const handleQRPayment = () => {
    setShowQRModal(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/family.webp" alt="" fill className="object-cover" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              1,247 people donated this month
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Transform Lives with
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Your Generosity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of compassionate donors who are creating lasting change in communities across India. Every rupee counts, every donation matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Donate Now
            </button>
            <button 
              onClick={() => window.scrollTo({ top: 1200, behavior: 'smooth' })}
              className="text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Quick QR Payment
            </button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Code Payment Section */}
      <section ref={qrRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={qrInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick QR Payment</h2>
            <p className="text-xl text-gray-600">Scan and donate instantly using any UPI app</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* QR Code Display */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={qrInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl text-center"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Scan to Donate</h3>
                <p className="text-gray-600">Use any UPI app to scan and pay</p>
              </div>
              
              {/* QR Code Container */}
              <div className="relative mb-6">
                <div className="w-64 h-64 mx-auto bg-white rounded-2xl border-4 border-blue-100 shadow-lg p-4 flex items-center justify-center">
                  {/* Replace '/qr-code.png' with your actual QR code image path */}
                  <Image 
                    src="/family.webp" 
                    alt="Donation QR Code" 
                    width={220} 
                    height={220} 
                    className="rounded-lg"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden w-full h-full bg-gray-100 rounded-lg items-center justify-center flex-col">
                    <div className="text-6xl mb-4">📱</div>
                    <div className="text-gray-600 font-medium">QR Code</div>
                    <div className="text-sm text-gray-500">Place your QR image at</div>
                    <div className="text-sm text-gray-500">/public/qr-code.png</div>
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 w-64 h-64 mx-auto">
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-blue-600 rounded-tl-lg"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-blue-600 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-blue-600 rounded-bl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-blue-600 rounded-br-lg"></div>
                </div>
              </div>

              {/* UPI ID Display */}
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <div className="text-sm text-gray-600 mb-1">UPI ID</div>
                <div className="font-mono text-lg font-semibold text-blue-700">yourorganization@upi</div>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('yourorganization@upi')
                    // You can add a toast notification here
                  }}
                  className="text-blue-600 text-sm hover:text-blue-800 transition-colors mt-2"
                >
                  📋 Copy UPI ID
                </button>
              </div>

              {/* Supported Apps */}
              <div>
                <div className="text-sm text-gray-600 mb-3">Supported UPI Apps</div>
                <div className="flex justify-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💳</span>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📲</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-2">PhonePe, GPay, Paytm, BHIM & more</div>
              </div>
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={qrInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Donate via QR</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">1</div>
                    <div>
                      <div className="font-semibold text-gray-900">Open UPI App</div>
                      <div className="text-gray-600 text-sm">Open PhonePe, GPay, Paytm or any UPI app</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">2</div>
                    <div>
                      <div className="font-semibold text-gray-900">Scan QR Code</div>
                      <div className="text-gray-600 text-sm">Point your camera at the QR code above</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">3</div>
                    <div>
                      <div className="font-semibold text-gray-900">Enter Amount</div>
                      <div className="text-gray-600 text-sm">Enter your donation amount and confirm</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">✓</div>
                    <div>
                      <div className="font-semibold text-gray-900">Donation Complete</div>
                      <div className="text-gray-600 text-sm">You'll receive a confirmation instantly</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Amount Buttons for QR */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Quick Donation Amounts</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[500, 1000, 2500, 5000].map((amount) => (
                    <motion.button
                      key={amount}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg font-semibold text-blue-700 transition-colors"
                    >
                      ₹{amount}
                    </motion.button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Remember the amount when scanning the QR code
                </p>
              </div>

              {/* Security Note */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-green-800">100% Secure</span>
                </div>
                <p className="text-green-700 text-sm">
                  All QR payments are processed through secure UPI gateways. Your payment information is never stored or shared.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Donation Form */}
      <section ref={formRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Donation Form</h2>
            <p className="text-xl text-gray-600">For those who prefer traditional payment methods or need a receipt</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Donation Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Make a Donation</h3>
                  <div className="flex items-center text-green-600">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Secure Payment</span>
                  </div>
                </div>

                {/* Donation Amounts */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Choose Amount</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {presetAmounts.map((amount, index) => (
                      <motion.button
                        key={amount.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={formInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAmountSelect(amount.value)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                          selectedAmount === amount.value
                            ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-200'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
                        }`}
                      >
                        <div className="font-bold text-lg text-gray-900">{amount.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{amount.description}</div>
                      </motion.button>
                    ))}
                  </div>

                  <AnimatePresence>
                    {selectedAmount === 'custom' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
                          <input
                            type="number"
                            min="10"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="w-full pl-8 pr-4 py-3 border-2 border-blue-200 rounded-xl text-lg font-semibold focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="Enter custom amount"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {paymentMethods.map((method) => (
                      <motion.button
                        key={method.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          if (method.name === 'QR Code') {
                            setShowQRModal(true)
                          } else {
                            setSelectedMethod(method.name)
                          }
                        }}
                        className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                          selectedMethod === method.name
                            ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-200'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="text-2xl mb-1">{method.icon}</div>
                        <div className="font-medium text-sm text-gray-900">{method.name}</div>
                        <div className="text-xs text-gray-500">{method.description}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Donor Information Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="Enter your city"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleFormChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                      placeholder="Share why you're donating (optional)"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="anonymous"
                        checked={form.anonymous}
                        onChange={handleFormChange}
                        className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">Make this donation anonymous</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={form.newsletter}
                        onChange={handleFormChange}
                        className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">Subscribe to our newsletter for impact updates</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading || !donationAmount}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white transition-all duration-300 ${
                      loading || !donationAmount
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      `Donate ₹${donationAmount || '0'} Now`
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Impact Summary */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Your Impact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Donation Amount:</span>
                      <span className="font-bold text-lg text-blue-600">₹{donationAmount || '0'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Processing Fee:</span>
                      <span className="font-medium text-gray-900">₹0</span>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Total:</span>
                      <span className="font-bold text-xl text-blue-600">₹{donationAmount || '0'}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>100%</strong> of your donation goes directly to our programs. Administrative costs are covered separately.
                    </p>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">What Donors Say</h4>
                  <div className="space-y-4">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="border-l-4 border-blue-600 pl-4">
                        <p className="text-gray-600 text-sm mb-2 italic">"{testimonial.message}"</p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                            <Image src={testimonial.avatar} alt={testimonial.name} width={32} height={32} className="object-cover" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{testimonial.name}</div>
                            <div className="text-xs text-gray-500">Donated {testimonial.amount}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Info */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Secure & Trusted</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">SSL Encrypted Payments</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">80G Tax Exemption</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">Instant Receipt</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQRModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowQRModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick QR Payment</h3>
                <p className="text-gray-600 mb-6">Scan the QR code with any UPI app to donate instantly</p>
                
                <div className="w-64 h-64 mx-auto bg-white rounded-2xl border-4 border-blue-100 shadow-lg p-4 flex items-center justify-center mb-6">
                  <Image 
                    src="/qr-code.png" 
                    alt="Donation QR Code" 
                    width={220} 
                    height={220} 
                    className="rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-100 rounded-lg items-center justify-center flex-col">
                    <div className="text-6xl mb-4">📱</div>
                    <div className="text-gray-600 font-medium">QR Code</div>
                    <div className="text-sm text-gray-500">Add your QR image</div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <div className="text-sm text-gray-600 mb-1">UPI ID</div>
                  <div className="font-mono text-lg font-semibold text-blue-700">yourorganization@upi</div>
                </div>

                <button
                  onClick={() => setShowQRModal(false)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank You Modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your generous donation of <strong>₹{donationAmount}</strong> will make a real difference in the lives of those who need it most.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                You will receive a confirmation email with your donation receipt shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
