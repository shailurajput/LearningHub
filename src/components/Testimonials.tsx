import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Shailu Singh Rajput',
      role: 'Software Engineer at Microsoft',
      image: 'public/images/Thakur.jpg',
      rating: 5,
      text: "LearnHub's DSA course was a game-changer for my career. The structured approach and real-world examples helped me crack interviews at top tech companies. Highly recommended!",
      course: 'Data Structures & Algorithms'
    },
    {
      id: '2',
      name: 'Satyam Rajput',
      role: 'Full Stack Developer at Flipkart',
      image: 'public/satyam1.jpg',
      rating: 5,
      text: "The Full Stack Web Development course exceeded my expectations. The hands-on projects and expert guidance helped me transition from a beginner to a confident developer.",
      course: 'Full Stack Web Development'
    },
    {
      id: '3',
      name: 'Gaurav Yadav',
      role: 'Data Scientist at Amazon',
      image: 'public/gaurav.jpg',
      rating: 5,
      text: "The Machine Learning course provided deep insights into ML algorithms and practical implementation. The instructor's expertise and course structure are outstanding.",
      course: 'Machine Learning with Python'
    },
    {
      id: '4',
      name: 'Abhishek Sharma',
      role: 'Mobile App Developer at Zomato',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      rating: 5,
      text: "React Native course was comprehensive and practical. I built 3 real apps during the course and landed my dream job. The community support was amazing too!",
      course: 'React Native Mobile Development'
    },
    {
      id: '5',
      name: 'Sourav Gurjar',
      role: 'System Administrator at TCS',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      rating: 5,
      text: "The Operating Systems course gave me deep understanding of OS concepts. Perfect for both academic studies and practical system administration work.",
      course: 'Operating Systems Fundamentals'
    },
    {
      id: '6',
      name: 'Praveen Kirar',
      role: 'Database Engineer at Oracle',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      rating: 5,
      text: "DBMS course was incredibly detailed and practical. The SQL exercises and database design projects prepared me well for my current role at Oracle.",
      course: 'Database Management Systems'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful developers who transformed their careers with LearnHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-blue-600 font-medium">
                  Course: {testimonial.course}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};