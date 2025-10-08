import React from 'react';
import { 
  Play, 
  Download, 
  Users, 
  Award, 
  Clock, 
  Smartphone, 
  HeadphonesIcon, 
  BookOpen,
  CheckCircle,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Play,
      title: 'HD Video Lectures',
      description: 'Crystal clear video content with professional production quality',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Download,
      title: 'Offline Access',
      description: 'Download courses and learn anywhere, anytime without internet',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with fellow learners and get help from our active community',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Verified Certificates',
      description: 'Industry-recognized certificates to boost your career prospects',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Lifetime Access',
      description: 'Once purchased, access your courses forever with all future updates',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Learning',
      description: 'Learn on-the-go with our mobile-optimized platform and apps',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock support team',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BookOpen,
      title: 'Hands-on Projects',
      description: 'Build real-world projects to strengthen your portfolio and skills',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: CheckCircle,
      title: 'Progress Tracking',
      description: 'Monitor your learning progress with detailed analytics and insights',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Learn from anywhere in the world with multi-language support',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Your data and payments are protected with enterprise-grade security',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Zap,
      title: 'Fast Loading',
      description: 'Optimized platform for lightning-fast content delivery worldwide',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose LearnHub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the most comprehensive learning platform with features designed 
            to accelerate your programming journey and career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        
      </div>
    </div>
  );
};