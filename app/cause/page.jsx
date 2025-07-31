"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const causes = [
  {
    id: 1,
    title: "Education for All",
    subtitle: "Breaking barriers to quality education",
    description:
      "Every child deserves access to quality education. We work to eliminate educational inequalities and provide learning opportunities to underprivileged children across India.",
    longDescription:
      "Education is the foundation of progress and the key to breaking the cycle of poverty. Our comprehensive education programs focus on providing quality learning opportunities to children who lack access to proper schooling. We work in remote villages, urban slums, and marginalized communities to ensure no child is left behind. Through innovative teaching methods, infrastructure development, and community engagement, we are creating a generation of educated, empowered individuals who will shape India's future.",
    image: "/family.webp",
    icon: "📚",
    color: "blue",
    stats: {
      beneficiaries: "15,000+",
      projects: "45",
      locations: "12 states",
      impact: "89% improved literacy rates",
    },
    urgency: "high",
    funding: {
      required: "₹50,00,000",
      raised: "₹32,00,000",
      percentage: 64,
    },
    keyIssues: [
      "Limited access to quality schools in rural areas",
      "High dropout rates due to poverty",
      "Lack of digital literacy and modern teaching resources",
      "Gender disparities in education access",
    ],
    solutions: [
      "Building and renovating schools in underserved areas",
      "Providing scholarships and educational materials",
      "Training teachers in modern pedagogical methods",
      "Implementing digital literacy programs",
    ],
    gallery: ["/family.webp", "/family.webp", "/family.webp", "/family.webp"],
  },
  {
    id: 2,
    title: "Healthcare Access",
    subtitle: "Healthcare is a human right, not a privilege",
    description:
      "Millions lack access to basic healthcare services. We provide medical care, health education, and preventive services to underserved communities.",
    longDescription:
      "Healthcare disparities continue to plague rural and marginalized communities across India. Our healthcare initiatives focus on providing comprehensive medical services, preventive care, and health education to those who need it most. Through mobile health clinics, community health worker training, and awareness campaigns, we are working to ensure that quality healthcare reaches every corner of our country. Our programs address everything from maternal health to chronic disease management, creating healthier communities one patient at a time.",
    image: "/family.webp",
    icon: "🏥",
    color: "green",
    stats: {
      beneficiaries: "25,000+",
      projects: "28",
      locations: "8 states",
      impact: "75% reduction in preventable diseases",
    },
    urgency: "critical",
    funding: {
      required: "₹75,00,000",
      raised: "₹45,00,000",
      percentage: 60,
    },
    keyIssues: [
      "Limited healthcare infrastructure in rural areas",
      "Shortage of qualified medical professionals",
      "High cost of medical treatment",
      "Lack of awareness about preventive healthcare",
    ],
    solutions: [
      "Operating mobile health clinics",
      "Training community health workers",
      "Providing free medical camps and consultations",
      "Conducting health awareness programs",
    ],
    gallery: ["/family.webp", "/family.webp", "/family.webp", "/family.webp"],
  },
  {
    id: 3,
    title: "Clean Water & Sanitation",
    subtitle: "Clean water saves lives",
    description:
      "Access to clean water and proper sanitation is fundamental to human dignity. We install water systems and promote hygiene practices in water-scarce regions.",
    longDescription:
      "Water scarcity and poor sanitation affect millions of people across India, leading to waterborne diseases and perpetuating the cycle of poverty. Our water and sanitation programs focus on providing sustainable access to clean drinking water and promoting proper hygiene practices. We install water purification systems, build wells and toilets, and conduct hygiene education programs. These initiatives not only improve health outcomes but also empower communities, especially women and children, by reducing the time spent collecting water and increasing school attendance.",
    image: "/family.webp",
    icon: "💧",
    color: "cyan",
    stats: {
      beneficiaries: "30,000+",
      projects: "62",
      locations: "15 states",
      impact: "80% reduction in waterborne diseases",
    },
    urgency: "high",
    funding: {
      required: "₹40,00,000",
      raised: "₹28,00,000",
      percentage: 70,
    },
    keyIssues: [
      "Contaminated water sources",
      "Lack of proper sanitation facilities",
      "Poor hygiene practices",
      "Long distances to access clean water",
    ],
    solutions: [
      "Installing water purification systems",
      "Building wells and bore holes",
      "Constructing sanitation facilities",
      "Conducting hygiene education programs",
    ],
    gallery: ["/family.webp", "/family.webp", "/family.webp", "/family.webp"],
  },
  {
    id: 4,
    title: "Women Empowerment",
    subtitle: "Empowering women transforms communities",
    description:
      "When women are empowered with skills, resources, and opportunities, entire communities prosper. We focus on economic empowerment and leadership development.",
    longDescription:
      "Women empowerment is crucial for sustainable development and social progress. Our programs focus on providing women with the skills, resources, and opportunities they need to become economically independent and socially empowered. Through vocational training, microfinance initiatives, leadership development, and advocacy programs, we are helping women break barriers and achieve their full potential. Empowered women not only improve their own lives but also contribute significantly to their families and communities.",
    image: "/family.webp",
    icon: "👩",
    color: "pink",
    stats: {
      beneficiaries: "12,000+",
      projects: "35",
      locations: "10 states",
      impact: "300% average income increase",
    },
    urgency: "medium",
    funding: {
      required: "₹35,00,000",
      raised: "₹25,00,000",
      percentage: 71,
    },
    keyIssues: [
      "Limited economic opportunities for women",
      "Gender-based discrimination and violence",
      "Lack of access to financial services",
      "Limited participation in decision-making",
    ],
    solutions: [
      "Providing vocational training and skill development",
      "Facilitating access to microfinance and credit",
      "Creating women's self-help groups",
      "Advocating for gender equality and women's rights",
    ],
    gallery: ["/family.webp", "/family.webp", "/family.webp", "/family.webp"],
  },
  {
    id: 5,
    title: "Environmental Conservation",
    subtitle: "Protecting our planet for future generations",
    description:
      "Climate change and environmental degradation threaten our future. We promote sustainable practices and conservation efforts to protect our environment.",
    longDescription:
      "Environmental conservation is critical for the survival of our planet and future generations. Our environmental programs focus on addressing climate change, protecting biodiversity, and promoting sustainable practices. We work on reforestation projects, waste management initiatives, renewable energy promotion, and environmental awareness campaigns. By engaging communities in conservation efforts and promoting eco-friendly practices, we are working towards a sustainable future where humans and nature can coexist harmoniously.",
    image: "/family.webp",
    icon: "🌱",
    color: "emerald",
    stats: {
      beneficiaries: "50,000+",
      projects: "40",
      locations: "18 states",
      impact: "100,000+ trees planted",
    },
    urgency: "critical",
    funding: {
      required: "₹60,00,000",
      raised: "₹35,00,000",
      percentage: 58,
    },
    keyIssues: [
      "Deforestation and habitat destruction",
      "Air and water pollution",
      "Climate change and global warming",
      "Unsustainable waste management practices",
    ],
    solutions: [
      "Planting trees and restoring forests",
      "Promoting renewable energy solutions",
      "Implementing waste management programs",
      "Conducting environmental awareness campaigns",
    ],
    gallery: ["/family.webp", "/family.webp", "/family.webp", "/family.webp"],
  },
  {
    id: 6,
    title: "Disaster Relief & Rehabilitation",
    subtitle: "Standing with communities in times of crisis",
    description:
      "Natural disasters can devastate communities in moments. We provide immediate relief and long-term rehabilitation to help communities rebuild stronger.",
    longDescription:
      "India faces numerous natural disasters each year, from floods and cyclones to droughts and earthquakes. Our disaster relief and rehabilitation programs provide immediate emergency response and long-term recovery support to affected communities. We supply emergency supplies, establish temporary shelters, provide medical aid, and help communities rebuild infrastructure. Our focus is not just on recovery but on building resilience to prevent future disasters from having the same devastating impact.",
    image: "/family.webp",
    icon: "🆘",
    color: "red",
    stats: {
      beneficiaries: "40,000+",
      projects: "25",
      locations: "12 states",
      impact: "95% successful rehabilitation",
    },
    urgency: "critical",
    funding: {
      required: "₹80,00,000",
      raised: "₹55,00,000",
      percentage: 69,
    },
    keyIssues: [
      "Frequent natural disasters affecting vulnerable communities",
      "Inadequate emergency preparedness and response",
      "Loss of livelihoods and displacement",
      "Lack of resilient infrastructure",
    ],
    solutions: [
      "Providing immediate emergency relief",
      "Building disaster-resilient infrastructure",
      "Training communities in disaster preparedness",
      "Supporting livelihood restoration programs",
    ],
    gallery: ["/family.webp", "/family.webp", "/family.webp", "/family.webp"],
  },
];

const urgencyColors = {
  critical: "bg-red-100 text-red-800",
  high: "bg-orange-100 text-orange-800",
  medium: "bg-yellow-100 text-yellow-800",
};

const colorSchemes = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  green: {
    gradient: "from-green-500 to-green-600",
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
  cyan: {
    gradient: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    border: "border-cyan-200",
  },
  pink: {
    gradient: "from-pink-500 to-pink-600",
    bg: "bg-pink-50",
    text: "text-pink-700",
    border: "border-pink-200",
  },
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  red: {
    gradient: "from-red-500 to-red-600",
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
  },
};

const CauseCard = ({ cause, index, onLearnMore }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const colors = colorSchemes[cause.color];

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
          src={cause.image}
          alt={cause.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Urgency Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              urgencyColors[cause.urgency]
            }`}
          >
            {cause.urgency.charAt(0).toUpperCase() + cause.urgency.slice(1)}{" "}
            Priority
          </span>
        </div>

        {/* Icon */}
        <div className="absolute top-4 right-4">
          <div
            className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}
          >
            <span className="text-2xl">{cause.icon}</span>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{cause.title}</h3>
          <p className="text-sm text-gray-200">{cause.subtitle}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {cause.description}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Funding Progress</span>
            <span className={`font-semibold ${colors.text}`}>
              {cause.funding.percentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className={`h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}
              initial={{ width: 0 }}
              animate={inView ? { width: `${cause.funding.percentage}%` } : {}}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹{cause.funding.raised}</span>
            <span>₹{cause.funding.required}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className={`font-bold text-lg ${colors.text}`}>
              {cause.stats.beneficiaries}
            </div>
            <div className="text-xs text-gray-500">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className={`font-bold text-lg ${colors.text}`}>
              {cause.stats.projects}
            </div>
            <div className="text-xs text-gray-500">Active Projects</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onLearnMore(cause)}
            className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Learn More
          </button>
          <Link href="/donate">
            <button
              className={`flex-1 bg-gradient-to-r ${colors.gradient} text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200`}
            >
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const CauseModal = ({ cause, isOpen, onClose }) => {
  if (!cause) return null;
  const colors = colorSchemes[cause.color];

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
            className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mr-4`}
                >
                  <span className="text-2xl">{cause.icon}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {cause.title}
                  </h2>
                  <p className="text-gray-600">{cause.subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              {/* Hero Section */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={cause.image}
                      alt={cause.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Gallery */}
                  <div className="grid grid-cols-4 gap-2">
                    {cause.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-16 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${cause.title} - Image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    About This Cause
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {cause.longDescription}
                  </p>

                  {/* Funding Progress */}
                  <div
                    className={`${colors.bg} rounded-2xl p-6 ${colors.border} border`}
                  >
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Funding Progress
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Goal</span>
                        <span className="font-bold">
                          {cause.funding.required}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Raised</span>
                        <span className={`font-bold ${colors.text}`}>
                          {cause.funding.raised}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full bg-gradient-to-r ${colors.gradient}`}
                          style={{ width: `${cause.funding.percentage}%` }}
                        />
                      </div>
                      <div className="text-center">
                        <span className={`text-2xl font-bold ${colors.text}`}>
                          {cause.funding.percentage}%
                        </span>
                        <span className="text-gray-600 ml-2">Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Stats */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className={`text-3xl font-bold ${colors.text} mb-1`}>
                    {cause.stats.beneficiaries}
                  </div>
                  <div className="text-gray-600">Lives Impacted</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className={`text-3xl font-bold ${colors.text} mb-1`}>
                    {cause.stats.projects}
                  </div>
                  <div className="text-gray-600">Active Projects</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className={`text-3xl font-bold ${colors.text} mb-1`}>
                    {cause.stats.locations}
                  </div>
                  <div className="text-gray-600">Coverage Area</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className={`text-3xl font-bold ${colors.text} mb-1`}>
                    {cause.stats.impact}
                  </div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>

              {/* Key Issues & Solutions */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Key Issues We Address
                  </h4>
                  <ul className="space-y-3">
                    {cause.keyIssues.map((issue, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Our Solutions
                  </h4>
                  <ul className="space-y-3">
                    {cause.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donate">
                  <button
                    className={`bg-gradient-to-r ${colors.gradient} text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300`}
                  >
                    Donate to This Cause
                  </button>
                </Link>
                <Link href="/volunter">
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors duration-300">
                    Volunteer
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function CausesPage() {
  const [selectedCause, setSelectedCause] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleLearnMore = (cause) => {
    setSelectedCause(cause);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCause(null);
  };

  const totalBeneficiaries = causes.reduce((sum, cause) => {
    return sum + parseInt(cause.stats.beneficiaries.replace(/[^\d]/g, ""));
  }, 0);

  const totalProjects = causes.reduce((sum, cause) => {
    return sum + parseInt(cause.stats.projects);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden"
      >
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
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Causes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto"
          >
            We tackle the most pressing challenges facing communities across
            India. From education and healthcare to environmental conservation
            and disaster relief, each cause represents our commitment to
            creating lasting change.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Our Causes
            </button>
            <Link href="/donate">
              <button className="text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Make a Donation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
            >
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {causes.length}
              </div>
              <div className="text-gray-600 font-medium">Active Causes</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl"
            >
              <div className="text-3xl mb-2">👥</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {totalBeneficiaries.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Lives Impacted</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl"
            >
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {totalProjects}+
              </div>
              <div className="text-gray-600 font-medium">Active Projects</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl"
            >
              <div className="text-3xl mb-2">🗺️</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">28</div>
              <div className="text-gray-600 font-medium">States Covered</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Causes Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Causes We Champion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each cause represents a critical challenge facing communities
              across India. Your support helps us address these issues with
              innovative solutions and sustainable impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause, index) => (
              <CauseCard
                key={cause.id}
                cause={cause}
                index={index}
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Choose a Cause Close to Your Heart
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Every cause needs champions. Whether you choose to donate,
              volunteer, or spread awareness, your support creates real,
              measurable impact in the lives of those who need it most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Start Donating
                </motion.button>
              </Link>
              <Link href="/volunteer">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Become a Volunteer
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cause Details Modal */}
      <CauseModal
        cause={selectedCause}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
}
