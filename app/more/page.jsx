'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const categories = [
  { id: 'all', label: 'All Projects', icon: '🌟' },
  { id: 'education', label: 'Education', icon: '📚' },
  { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
  { id: 'environment', label: 'Environment', icon: '🌱' },
  { id: 'community', label: 'Community Development', icon: '🏘️' }
]

const projects = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    category: 'community',
    location: 'Rural Maharashtra',
    beneficiaries: '2,500 families',
    status: 'Completed',
    completionDate: 'March 2024',
    budget: '₹15,00,000',
    image: '/family.webp',
    description: 'Installed 25 water purification systems across 10 villages, providing clean drinking water to over 2,500 families.',
    impact: [
      'Reduced waterborne diseases by 80%',
      'Improved school attendance by 45%',
      'Empowered 50 local women as water system operators'
    ],
    gallery: ['/family.webp', '/family.webp', '/family.webp']
  },
  {
    id: 2,
    title: 'Digital Literacy Program',
    category: 'education',
    location: 'Urban Delhi',
    beneficiaries: '1,200 students',
    status: 'Ongoing',
    completionDate: 'Expected Dec 2024',
    budget: '₹8,50,000',
    image: '/family.webp',
    description: 'Teaching digital skills and computer literacy to underprivileged children in government schools.',
    impact: [
      'Trained 1,200 students in basic computer skills',
      'Set up 15 computer labs',
      'Trained 45 teachers in digital pedagogy'
    ],
    gallery: ['/family.webp', '/family.webp', '/family.webp']
  },
  {
    id: 3,
    title: 'Mobile Health Clinics',
    category: 'healthcare',
    location: 'Rural Rajasthan',
    beneficiaries: '5,000+ patients',
    status: 'Ongoing',
    completionDate: 'Continuous Program',
    budget: '₹25,00,000/year',
    image: '/family.webp',
    description: 'Mobile medical units providing healthcare services to remote villages with limited medical access.',
    impact: [
      'Treated 5,000+ patients',
      'Conducted 200+ health camps',
      'Trained 30 community health workers'
    ],
    gallery: ['/family.webp', '/family.webp', '/family.webp']
  },
  {
    id: 4,
    title: 'Reforestation Drive',
    category: 'environment',
    location: 'Himachal Pradesh',
    beneficiaries: '15 villages',
    status: 'Completed',
    completionDate: 'October 2023',
    budget: '₹12,00,000',
    image: '/family.webp',
    description: 'Planted 50,000 saplings and created sustainable forest cover in degraded hill areas.',
    impact: [
      'Planted 50,000 native tree saplings',
      'Restored 500 acres of forest land',
      'Created employment for 200 local residents'
    ],
    gallery: ['/family.webp', '/family.webp', '/family.webp']
  },
  {
    id: 5,
    title: 'Women Empowerment Program',
    category: 'community',
    location: 'Rural Gujarat',
    beneficiaries: '800 women',
    status: 'Ongoing',
    completionDate: 'Long-term Program',
    budget: '₹18,00,000',
    image: '/family.webp',
    description: 'Skill development and microfinance program to empower rural women with sustainable livelihoods.',
    impact: [
      'Trained 800 women in various skills',
      'Started 150 micro-enterprises',
      'Average income increase of 300%'
    ],
    gallery: ['/family.webp', '/family.webp', '/family.webp']
  },
  {
    id: 6,
    title: 'School Infrastructure Development',
    category: 'education',
    location: 'Rural Tamil Nadu',
    beneficiaries: '3,000 students',
    status: 'Completed',
    completionDate: 'August 2023',
    budget: '₹22,00,000',
    image: '/family.webp',
    description: 'Renovated and equipped 12 government schools with modern facilities and learning resources.',
    impact: [
      'Renovated 12 school buildings',
      'Provided furniture for 3,000 students',
      'Built 24 new classrooms and 8 libraries'
    ],
    gallery: ['/family.webp', '/family.webp', '/family.webp']
  }
]

const stats = [
  { number: '45+', label: 'Projects Completed', icon: '✅' },
  { number: '25,000+', label: 'Lives Transformed', icon: '👥' },
  { number: '₹5.2Cr', label: 'Total Investment', icon: '💰' },
  { number: '15', label: 'States Covered', icon: '🗺️' }
]

const testimonials = [
  {
    name: 'Sunitha Devi',
    role: 'Village Sarpanch',
    project: 'Clean Water Initiative',
    message: 'The water purification system has transformed our village. Children no longer fall sick, and women don\'t have to walk miles for clean water.',
    image: '/family.webp',
    location: 'Maharashtra'
  },
  {
    name: 'Ramesh Kumar',
    role: 'School Principal',
    project: 'Digital Literacy Program',
    message: 'Our students now have access to technology and digital skills that will help them compete in the modern world.',
    image: '/family.webp',
    location: 'Delhi'
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Community Health Worker',
    project: 'Mobile Health Clinics',
    message: 'These mobile clinics have brought healthcare to our doorstep. Maternal mortality has decreased significantly in our area.',
    image: '/family.webp',
    location: 'Rajasthan'
  }
]

const ProjectCard = ({ project, index, onViewDetails }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const statusColors = {
    'Completed': 'bg-green-100 text-green-800',
    'Ongoing': 'bg-blue-100 text-blue-800',
    'Planned': 'bg-yellow-100 text-yellow-800'
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-gray-700">
            {categories.find(cat => cat.id === project.category)?.icon}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {project.location}
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm">
            <span className="text-gray-500">Beneficiaries:</span>
            <span className="font-semibold text-gray-900 ml-1">{project.beneficiaries}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Budget:</span>
            <span className="font-semibold text-blue-600 ml-1">{project.budget}</span>
          </div>
        </div>
        
        <button
          onClick={() => onViewDetails(project)}
          className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          View Details
        </button>
      </div>
    </motion.div>
  )
}

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null

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
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-3xl">
              <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              {/* Hero Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Project Info Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Project Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{project.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Completion:</span>
                        <span className="font-medium">{project.completionDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium text-blue-600">{project.budget}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Impact Achieved</h3>
                  <ul className="space-y-2">
                    {project.impact.map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Project Description</h3>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
              
              {/* Gallery */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Project Gallery</h3>
                <div className="grid grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function ViewMorePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const handleViewDetails = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

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

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            Our <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Impact Stories</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto"
          >
            Discover how your support has transformed communities across India. Every project tells a story of hope, progress, and sustainable change.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Projects
            </button>
            <button className="text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Download Report
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                <span className="mr-2 text-xl">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </AnimatePresence>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Voices from the Ground</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from the communities and individuals whose lives have been transformed by our initiatives
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
                    <p className="text-xs text-blue-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.message}"
                </blockquote>
                
                <div className="text-sm text-gray-500">
                  Related to: <span className="text-blue-600 font-medium">{testimonial.project}</span>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold mb-6">Be Part of Our Next Success Story</h2>
            <p className="text-xl mb-10 opacity-90">
              Your support can help us reach even more communities and create lasting change. Together, we can build a better tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Donate Now
              </motion.button>
            </Link>

            <Link href="/volunter">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Partner with Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  )
}
