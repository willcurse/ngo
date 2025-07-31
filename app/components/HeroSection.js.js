import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-current">
    <path d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-current">
    <rect x="2" y="2" width="5" height="5" stroke="currentColor" />
    <rect x="9" y="2" width="5" height="5" stroke="currentColor" />
    <rect x="2" y="9" width="5" height="5" stroke="currentColor" />
    <rect x="9" y="9" width="5" height="5" stroke="currentColor" />
  </svg>
)

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-current">
    <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export default function HeroSection() {
  return (
    <section className="bg-[#FDF2E9] min-h-[calc(100vh-100px)] py-16 relative">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          {/* Text Content */}
          <div className="flex flex-col space-y-8">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
              Opportunity to change<br />
              the lives of others
            </h1>
          

            <Link href="/more" className="w-fit">
              <motion.button
                className="flex items-center gap-2 px-5 py-2 border-2 border-brown-600 rounded-full text-gray-700 bg-white font-medium shadow-sm hover:text-brown-700 transition-colors duration-300"
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "#fbeee0",
                  borderColor: "#a9743a",
                  boxShadow: "0 4px 24px rgba(169,116,58,0.15)"
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <span>View More</span>
                <ArrowRight />
              </motion.button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative grid grid-cols-3 gap-4 h-[400px]">
            {/* Main Family Photo */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden">
              <Image
                src="/family.webp"
                alt="Happy family smiling together"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Side Images */}
            <div className="flex flex-col gap-4">
              {/* Hands Together Photo */}
              <div className="relative h-36 rounded-2xl overflow-hidden">
                <Image
                  src="/family.webp"
                  alt="Hands coming together in unity"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Heart/Hope Image */}
              <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-200 to-brown-600 flex items-center justify-center">
                <div className="text-white text-4xl">♡</div>
                <Image
                  src="/family.webp"
                  alt="Heart symbol representing hope"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
