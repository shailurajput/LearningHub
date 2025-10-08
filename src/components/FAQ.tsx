import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqs = [
    {
      id: '1',
      question: 'How do I access my courses after purchase?',
      answer: 'After successful payment, you can immediately access your courses from your dashboard. All course materials, videos, and resources will be available 24/7 with lifetime access.'
    },
    {
      id: '2',
      question: 'Do you offer certificates upon course completion?',
      answer: 'Yes! Upon completing a course and passing the final assessment, you\'ll receive a verified certificate that you can add to your LinkedIn profile and resume.'
    },
    {
      id: '3',
      question: 'What if I\'m not satisfied with a course?',
      answer: 'We offer a 30-day money-back guarantee on all courses. If you\'re not completely satisfied, contact our support team for a full refund within 30 days of purchase.'
    },
    {
      id: '4',
      question: 'Are the courses suitable for beginners?',
      answer: 'Absolutely! We have courses for all skill levels. Each course clearly indicates its difficulty level (Beginner, Intermediate, Advanced) and prerequisites to help you choose the right one.'
    },
    {
      id: '5',
      question: 'Can I download course videos for offline viewing?',
      answer: 'Yes, most of our courses support offline viewing. You can download videos and materials to study without an internet connection using our mobile app.'
    },
    {
      id: '6',
      question: 'Do you provide job placement assistance?',
      answer: 'Yes! We offer career guidance, resume reviews, interview preparation, and job placement assistance for students who complete our comprehensive courses.'
    },
    {
      id: '7',
      question: 'How long do I have access to purchased courses?',
      answer: 'All courses come with lifetime access. Once you purchase a course, you can access it forever, including any future updates and additional content.'
    },
    {
      id: '8',
      question: 'Are there any prerequisites for Core CS subjects?',
      answer: 'Basic programming knowledge is recommended for Core CS subjects like OS, DBMS, and Computer Networks. However, our OOP course is suitable for beginners with no prior experience.'
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Find everything you need to know about LearnHub.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === faq.id ? (
                  <ChevronUp className="w-6 h-6 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@learnhub.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Email Support
            </a>
            <a
              href="tel:+91 8462841"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};