import Link from "next/link";

export default function MissionSection() {
  return (
    <section className="bg-beige-100 py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed text-gray-800">
            We are dedicated to providing hope and help to those in need. Our organization offers essential services such as food, shelter, medical care, and counseling. By addressing these basic needs, we pave the way for individuals and families to rebuild their lives and achieve stability.
          </p>
        </div>

        {/* More About Button */}
        <div className="text-center mb-20">
          <Link href="/more">
          <button className="bg-white border border-gray-300 text-gray-800 px-8 py-3 rounded-full text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
            More About
          </button>
          </Link>
        </div>

        {/* Statistics Section */}
        <div className="text-center">
          <p className="text-sm text-gray-600 italic mb-12">Cause by the numbers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
            {/* Statistic 1 */}
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-gray-800 mb-4">
                331
              </div>
              <p className="text-gray-600 text-sm">
                People helped this month
              </p>
            </div>

            {/* Statistic 2 */}
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-gray-800 mb-4">
                34k+
              </div>
              <p className="text-gray-600 text-sm">
                Meals served
              </p>
            </div>

            {/* Statistic 3 */}
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-gray-800 mb-4">
                100
              </div>
              <p className="text-gray-600 text-sm">
                Volunteers active
              </p>
            </div>

            {/* Statistic 4 */}
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-gray-800 mb-4">
                1st
              </div>
              <p className="text-gray-600 text-sm">
                In community impact
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
