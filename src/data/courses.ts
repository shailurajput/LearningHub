import { Course, Instructor } from '../types';

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Shailendra Singh Rajput',
    title: 'Senior Software Engineer at Google',
    bio: 'Former Google engineer with 8+ years of experience in algorithms and data structures.',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 4.9,
    students: 25000,
    courses: 5
  },
  {
    id: '2',
    name: 'Satyam Rajput',
    title: 'Full Stack Developer & Tech Lead',
    bio: 'Full-stack developer with expertise in React, Node.js, and modern web technologies.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 4.8,
    students: 18000,
    courses: 7
  },
  {
    id: '3',
    name: 'Gaurav Yadav',
    title: 'Python Expert & Data Scientist',
    bio: 'Data scientist with 6+ years of experience in Python, machine learning, and AI.',
    avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 4.9,
    students: 22000,
    courses: 4
  },
  {
    id: '4',
    name: 'Naman Gupta',
    title: 'Computer Science Professor & OS Expert',
    bio: 'PhD in Computer Science with 15+ years of experience in operating systems and system programming.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 4.8,
    students: 14200,
    courses: 3
  },
  {
    id: '5',
    name: 'praveen Rajput',
    title: 'Database Systems Expert & Researcher',
    bio: 'Database systems researcher with expertise in SQL, NoSQL, and distributed databases.',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 4.9,
    students: 16800,
    courses: 2
  },
  {
    id: '6',
    name: 'Dhruv tomar',
    title: 'Network Security Specialist',
    bio: 'Cybersecurity expert with 12+ years in network security and protocol design.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 4.7,
    students: 12500,
    courses: 4
  },
  {
    id: '7',
    name: 'Abhishek Sharma',
    title: 'Software Engineering & OOP Expert',
    bio: 'Software engineering professor specializing in object-oriented design and programming languages.',
    avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 4.8,
    students: 19200,
    courses: 5
  }
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Data Structures & Algorithms Masterclass',
    description: 'Master DSA from basics to advanced level. Perfect for coding interviews at top tech companies like Google, Amazon, Microsoft.',
    instructor: 'Shailendra Singh Rajput',
    duration: '40 hours',
    level: 'Intermediate',
    price: 2999,
    originalPrice: 4999,
    rating: 4.9,
    studentsEnrolled: 15420,
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Programming',
    features: [
      '200+ coding problems with solutions',
      'Interview preparation guide',
      'Live coding sessions',
      'Lifetime access',
      'Certificate of completion',
      '24/7 community support'
    ],
    curriculum: [
      { id: '1', title: 'Arrays & Strings', lessons: 15, duration: '8 hours' },
      { id: '2', title: 'Linked Lists', lessons: 12, duration: '6 hours' },
      { id: '3', title: 'Stacks & Queues', lessons: 10, duration: '5 hours' },
      { id: '4', title: 'Trees & Graphs', lessons: 18, duration: '10 hours' },
      { id: '5', title: 'Dynamic Programming', lessons: 20, duration: '11 hours' }
    ],
    tags: ['DSA', 'Algorithms', 'Interview Prep', 'Coding']
  },
  {
    id: '2',
    title: 'Full Stack Web Development Bootcamp',
    description: 'Learn modern web development with React, Node.js, MongoDB, and deploy real-world projects.',
    instructor: 'Satyam Rajput',
    duration: '60 hours',
    level: 'Beginner',
    price: 3499,
    originalPrice: 5999,
    rating: 4.8,
    studentsEnrolled: 12890,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Web Development',
    features: [
      '10+ real-world projects',
      'HTML, CSS, JavaScript fundamentals',
      'React & Node.js mastery',
      'Database design with MongoDB',
      'Deployment on AWS/Heroku',
      'Job placement assistance'
    ],
    curriculum: [
      { id: '1', title: 'HTML & CSS Fundamentals', lessons: 20, duration: '12 hours' },
      { id: '2', title: 'JavaScript Essentials', lessons: 25, duration: '15 hours' },
      { id: '3', title: 'React Development', lessons: 30, duration: '18 hours' },
      { id: '4', title: 'Backend with Node.js', lessons: 22, duration: '12 hours' },
      { id: '5', title: 'Database & Deployment', lessons: 15, duration: '8 hours' }
    ],
    tags: ['React', 'Node.js', 'Full Stack', 'JavaScript']
  },
  {
    id: '3',
    title: 'Python Programming for Beginners',
    description: 'Start your programming journey with Python. Learn from basics to building real applications.',
    instructor: 'Gaurav Yadav',
    duration: '35 hours',
    level: 'Beginner',
    price: 1999,
    originalPrice: 3499,
    rating: 4.7,
    studentsEnrolled: 18750,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Programming',
    features: [
      'Hands-on coding exercises',
      'Real-world projects',
      'Python libraries & frameworks',
      'Data analysis basics',
      'Web scraping techniques',
      'Career guidance'
    ],
    curriculum: [
      { id: '1', title: 'Python Basics', lessons: 18, duration: '10 hours' },
      { id: '2', title: 'Data Structures in Python', lessons: 15, duration: '8 hours' },
      { id: '3', title: 'Object-Oriented Programming', lessons: 12, duration: '7 hours' },
      { id: '4', title: 'Libraries & Frameworks', lessons: 16, duration: '10 hours' }
    ],
    tags: ['Python', 'Programming', 'Beginner', 'Data Analysis']
  },
  {
    id: '4',
    title: 'Advanced JavaScript & ES6+',
    description: 'Master modern JavaScript concepts, async programming, and advanced patterns used in production.',
    instructor: 'Naman Gupta',
    duration: '25 hours',
    level: 'Advanced',
    price: 2499,
    originalPrice: 3999,
    rating: 4.9,
    studentsEnrolled: 8920,
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Programming',
    features: [
      'ES6+ features deep dive',
      'Async/await mastery',
      'Design patterns',
      'Performance optimization',
      'Testing strategies',
      'Real-world examples'
    ],
    curriculum: [
      { id: '1', title: 'Modern JavaScript Features', lessons: 12, duration: '8 hours' },
      { id: '2', title: 'Asynchronous Programming', lessons: 10, duration: '6 hours' },
      { id: '3', title: 'Advanced Patterns', lessons: 14, duration: '8 hours' },
      { id: '4', title: 'Testing & Debugging', lessons: 8, duration: '3 hours' }
    ],
    tags: ['JavaScript', 'ES6', 'Advanced', 'Async']
  },
  {
    id: '5',
    title: 'Machine Learning with Python',
    description: 'Learn machine learning algorithms, data preprocessing, and build ML models from scratch.',
    instructor: 'Praveen Rajput',
    duration: '45 hours',
    level: 'Intermediate',
    price: 3999,
    originalPrice: 6999,
    rating: 4.8,
    studentsEnrolled: 11200,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Data Science',
    features: [
      'Scikit-learn & TensorFlow',
      'Real ML projects',
      'Data visualization',
      'Model deployment',
      'Industry best practices',
      'Kaggle competition prep'
    ],
    curriculum: [
      { id: '1', title: 'ML Fundamentals', lessons: 16, duration: '10 hours' },
      { id: '2', title: 'Supervised Learning', lessons: 20, duration: '12 hours' },
      { id: '3', title: 'Unsupervised Learning', lessons: 15, duration: '9 hours' },
      { id: '4', title: 'Deep Learning Basics', lessons: 18, duration: '11 hours' },
      { id: '5', title: 'Model Deployment', lessons: 8, duration: '3 hours' }
    ],
    tags: ['Machine Learning', 'Python', 'AI', 'Data Science']
  },
  {
    id: '6',
    title: 'React Native Mobile App Development',
    description: 'Build cross-platform mobile apps with React Native. Deploy to both iOS and Android stores.',
    instructor: 'Dhruv Tomar',
    duration: '50 hours',
    level: 'Intermediate',
    price: 3299,
    originalPrice: 5499,
    rating: 4.7,
    studentsEnrolled: 9850,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Mobile Development',
    features: [
      'Cross-platform development',
      'Native device features',
      'State management with Redux',
      'API integration',
      'App store deployment',
      'Performance optimization'
    ],
    curriculum: [
      { id: '1', title: 'React Native Basics', lessons: 18, duration: '12 hours' },
      { id: '2', title: 'Navigation & UI', lessons: 22, duration: '14 hours' },
      { id: '3', title: 'State Management', lessons: 16, duration: '10 hours' },
      { id: '4', title: 'Native Features', lessons: 20, duration: '12 hours' },
      { id: '5', title: 'Deployment', lessons: 6, duration: '2 hours' }
    ],
    tags: ['React Native', 'Mobile', 'Cross-platform', 'iOS', 'Android']
  },
  {
    id: '7',
    title: 'Operating Systems Fundamentals',
    description: 'Master OS concepts including process management, memory management, file systems, and system calls. Essential for computer science students and developers.',
    instructor: 'Abhishek Sharma',
    duration: '45 hours',
    level: 'Intermediate',
    price: 2799,
    originalPrice: 4499,
    rating: 4.8,
    studentsEnrolled: 14200,
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Core CS Subjects',
    features: [
      'Process and thread management',
      'Memory management techniques',
      'File system implementation',
      'Synchronization and deadlocks',
      'System call programming',
      'Real OS case studies (Linux, Windows)'
    ],
    curriculum: [
      { id: '1', title: 'Introduction to Operating Systems', lessons: 12, duration: '8 hours' },
      { id: '2', title: 'Process Management', lessons: 15, duration: '10 hours' },
      { id: '3', title: 'Memory Management', lessons: 18, duration: '12 hours' },
      { id: '4', title: 'File Systems', lessons: 14, duration: '9 hours' },
      { id: '5', title: 'Synchronization & Deadlocks', lessons: 10, duration: '6 hours' }
    ],
    tags: ['Operating Systems', 'OS', 'System Programming', 'Computer Science']
  },
  {
    id: '8',
    title: 'Database Management Systems (DBMS)',
    description: 'Comprehensive course on database design, SQL, normalization, transactions, and modern database technologies including NoSQL.',
    instructor: 'Prof. Meera Patel',
    duration: '50 hours',
    level: 'Intermediate',
    price: 3199,
    originalPrice: 5299,
    rating: 4.9,
    studentsEnrolled: 16800,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Core CS Subjects',
    features: [
      'Database design and ER modeling',
      'Advanced SQL queries and optimization',
      'Normalization and denormalization',
      'Transaction management and ACID properties',
      'NoSQL databases (MongoDB, Cassandra)',
      'Database administration and security'
    ],
    curriculum: [
      { id: '1', title: 'Database Fundamentals & ER Modeling', lessons: 16, duration: '10 hours' },
      { id: '2', title: 'SQL and Query Optimization', lessons: 20, duration: '14 hours' },
      { id: '3', title: 'Normalization & Database Design', lessons: 12, duration: '8 hours' },
      { id: '4', title: 'Transactions & Concurrency Control', lessons: 15, duration: '10 hours' },
      { id: '5', title: 'NoSQL & Modern Databases', lessons: 18, duration: '8 hours' }
    ],
    tags: ['DBMS', 'SQL', 'Database Design', 'NoSQL', 'Computer Science']
  },
  {
    id: '9',
    title: 'Computer Networks & Network Security',
    description: 'Learn networking protocols, network architecture, security principles, and hands-on network configuration and troubleshooting.',
    instructor: 'Dr. Amit Singh',
    duration: '42 hours',
    level: 'Intermediate',
    price: 2899,
    originalPrice: 4699,
    rating: 4.7,
    studentsEnrolled: 12500,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Core CS Subjects',
    features: [
      'OSI and TCP/IP protocol stacks',
      'Routing and switching concepts',
      'Network security and cryptography',
      'Wireless and mobile networks',
      'Network troubleshooting tools',
      'Hands-on lab exercises with Cisco Packet Tracer'
    ],
    curriculum: [
      { id: '1', title: 'Network Fundamentals & OSI Model', lessons: 14, duration: '9 hours' },
      { id: '2', title: 'TCP/IP and Internet Protocols', lessons: 16, duration: '11 hours' },
      { id: '3', title: 'Routing and Switching', lessons: 18, duration: '12 hours' },
      { id: '4', title: 'Network Security', lessons: 12, duration: '7 hours' },
      { id: '5', title: 'Wireless Networks & Troubleshooting', lessons: 8, duration: '3 hours' }
    ],
    tags: ['Computer Networks', 'CN', 'Network Security', 'TCP/IP', 'Routing']
  },
  {
    id: '10',
    title: 'Object-Oriented Programming Mastery',
    description: 'Master OOP concepts with Java and C++. Learn design patterns, SOLID principles, and build scalable applications using object-oriented design.',
    instructor: 'Prof. Kavita Sharma',
    duration: '38 hours',
    level: 'Beginner',
    price: 2399,
    originalPrice: 3999,
    rating: 4.8,
    studentsEnrolled: 19200,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Core CS Subjects',
    features: [
      'OOP fundamentals: Classes, Objects, Inheritance',
      'Polymorphism and Abstraction',
      'Design patterns (Singleton, Factory, Observer)',
      'SOLID principles and clean code',
      'Java and C++ implementation',
      'Real-world project development'
    ],
    curriculum: [
      { id: '1', title: 'OOP Fundamentals', lessons: 15, duration: '10 hours' },
      { id: '2', title: 'Inheritance and Polymorphism', lessons: 12, duration: '8 hours' },
      { id: '3', title: 'Design Patterns', lessons: 16, duration: '12 hours' },
      { id: '4', title: 'SOLID Principles', lessons: 10, duration: '6 hours' },
      { id: '5', title: 'Project Development', lessons: 6, duration: '2 hours' }
    ],
    tags: ['OOP', 'Java', 'C++', 'Design Patterns', 'SOLID Principles']
  }
];