import { Shield, Lightbulb, TrendingUp, GraduationCap, CheckCircle } from "lucide-react"

export default function WhyJoinUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Unwavering Integrity",
      description: "We uphold the highest standards of integrity in all our services, ensuring reliable and accurate investment advice.",
    },
    {
      icon: Lightbulb,
      title: "Absolute Transparency",
      description: "Our transparent processes build trust and confidence through clear and open communication about every recommendation.",
    },
    {
      icon: TrendingUp,
      title: "Strategic Discipline",
      description: "We help you develop a disciplined investment strategy, focusing on long-term goals to maximize consistent returns.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Embark on a journey of growth with our educational resources and expert guidance to enhance your investment skills.",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-purple-900 via-black to-green-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400">
            Why Join Us?
          </span>
        </h2>
        
        {/* SEBI Registration Highlight */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-12 transform transition duration-500 hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-400 mr-2" />
            <h3 className="text-2xl font-semibold text-center">SEBI Registered</h3>
          </div>
          <p className="text-xl text-center text-green-300 font-semibold mb-2">
            SEBI Research Analyst No: INH100008984
          </p>
          <p className="text-gray-300 text-center">
            Rakesh Bansal Ventures is proudly registered under SEBI (Research Analyst) Regulations, 2014, 
            ensuring compliance with the highest regulatory standards in the industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:bg-white/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-green-500 rounded-full mb-6 mx-auto">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{reason.title}</h3>
              <p className="text-gray-300 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            At Rakesh Bansal Ventures, we believe in a simple yet powerful approach to achieving success in the stock market. 
            Join us and experience the difference with our SEBI-registered expertise.
          </p>
          <a
            href="#join-now"
            className="inline-block bg-gradient-to-r from-purple-500 to-green-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  )
}