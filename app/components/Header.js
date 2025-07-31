'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-current">
    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16 5 16H17M17 13V16M9 19C9.6 19 10 19.4 10 20S9.6 21 9 21 8 20.6 8 20 8.4 19 9 19ZM20 19C20.6 19 21 19.4 21 20S20.6 21 20 21 19 20.6 19 20 19.4 19 20 19Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Hamburger Icon Component
const HamburgerIcon = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50 relative"
    aria-label="Toggle menu"
  >
    <motion.span
      animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      className="block w-6 h-0.5 bg-gray-800 origin-center"
    />
    <motion.span
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="block w-6 h-0.5 bg-gray-800"
    />
    <motion.span
      animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      className="block w-6 h-0.5 bg-gray-800 origin-center"
    />
  </button>
)

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/cause', label: 'Causes' },
    { href: '/volunter', label: 'Volunteer' },
    { href: '/more', label: 'More' }
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Mobile Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Donate Button */}
              <div className="p-6 border-t border-gray-200">
                <Link href="/donate" onClick={onClose}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Donate Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="bg-white py-4 border-b border-gray-200 relative z-30">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <Link href="/" onClick={closeMobileMenu}>
              <h1 className="text-3xl font-light italic text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200">
                NGO
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <span className="nav-item text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="nav-item text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer">
                About Us
              </span>
            </Link>
            <Link href="/cause">
              <span className="nav-item text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer">
                Causes
              </span>
            </Link>
            <Link href="/volunter">
              <span className="nav-item text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer">
                Volunteer
              </span>
            </Link>
            <Link href="/more">
              <span className="nav-item text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer">
                More
              </span>
            </Link>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Donate Button */}
            <Link href="/donate" className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Donate Now
              </motion.button>
            </Link>

            {/* Mobile Donate Button (smaller) */}
            <Link href="/donate" className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Donate
              </motion.button>
            </Link>

            {/* Hamburger Menu */}
            <HamburgerIcon isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}
