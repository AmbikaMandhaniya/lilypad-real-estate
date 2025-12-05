import React from 'react';
import { Award, Users, Shield, Target, BarChart3 } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Become a Data-Driven Investor',
      description: 'Lillypad is the next-based template combined with easy to use React library components and customizable styles using Tailwind CSS allowing you to create powerful investment platforms.'
    },
    {
      icon: Users,
      title: 'Lillypad can help you make smarter decisions.',
      description: 'Prioritize your investment evolution and follow customizable trends to build clear value add strategies.'
    },
    {
      icon: Shield,
      title: 'Manage your Diligence',
      description: 'Evaluate managers against your objectives using feedback and metrics and centralize due diligence in a state-of-art UI'
    },
    {
      icon: Target,
      title: 'Optimize Asset Allocation',
      description: 'Understand the underlying risk drivers in your portfolio using Lillypad\'s Upside exposure Moore and then optimize your portfolio based on a variety of constraint'
    },
    {
      icon: BarChart3,
      title: 'Our Subscribers',
      description: 'Serving a combination of global subscribers through family funds of Credit, Banks, Family offices, Asset managers, Wealth Managers'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-0.5 bg-purple-600"></div>
          <span className="text-purple-600 font-medium">About Us</span>
        </div>

        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-12 lg:mb-16 leading-tight">
          Lillypad is the only Real<br />
          Estate Investment tool<br />
          you need to run your<br />
          business
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;