import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Handshake } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'Symphony Orchestra',
      logo: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: 'Providing performance opportunities and professional mentorship.',
    },
    {
      name: 'Music Academy International',
      logo: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: 'Collaborative programs and student exchange opportunities.',
    },
    {
      name: 'Global Music Foundation',
      logo: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: 'Supporting music education initiatives and scholarships.',
    },
  ];

  const benefits = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Industry Connections',
      description: 'Access to professional networks and performance opportunities.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence Recognition',
      description: 'Prestigious certifications and accreditations.',
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Collaborative Growth',
      description: 'Joint programs and shared resources for enhanced learning.',
    },
  ];

  return (
    <div className="space-y-20 py-16">
      {/* Partners Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Partners</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading institutions to provide our students with the best opportunities in music education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-48 object-cover"<boltAction type="file" filePath="src/pages/Partners.tsx">
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships create valuable opportunities for our students and community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-indigo-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Partnering with Vivace?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join our network of distinguished music institutions and organizations
            </p>
            <a
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-50 transition-colors duration-300 inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;