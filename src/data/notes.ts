export interface Note {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedReadTime: string;
}

export interface TopicNotes {
  topicId: string;
  topicTitle: string;
  notes: Note[];
}

export interface CourseNotes {
  courseId: string;
  courseTitle: string;
  topics: TopicNotes[];
}

// Data Structures & Algorithms Notes
const dsaTopics: TopicNotes[] = [
  {
    topicId: 'arrays-strings',
    topicTitle: 'Arrays & Strings',
    notes: [
      {
        id: 'array-basics',
        title: 'Array Fundamentals',
        content: `Arrays are linear data structures that store elements of the same type in contiguous memory locations. They provide constant-time access to elements using indices.

**Key Characteristics:**
- Fixed size (in most languages)
- Elements stored in contiguous memory
- Zero-based indexing
- Constant time access O(1)

**Common Operations:**
- Access: O(1)
- Search: O(n)
- Insertion: O(n) worst case
- Deletion: O(n) worst case`,
        examples: [
          'int arr[5] = {1, 2, 3, 4, 5}; // C++',
          'let arr = [1, 2, 3, 4, 5]; // JavaScript',
          'arr = [1, 2, 3, 4, 5] # Python'
        ],
        keyPoints: [
          'Arrays provide O(1) random access',
          'Memory is allocated contiguously',
          'Size is typically fixed at declaration',
          'Cache-friendly due to locality of reference'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '10 minutes'
      },
      {
        id: 'string-manipulation',
        title: 'String Manipulation Techniques',
        content: `Strings are sequences of characters and are fundamental in programming. Understanding string manipulation is crucial for many algorithms.

**Common String Operations:**
- Concatenation: Joining strings together
- Substring: Extracting part of a string
- Search: Finding patterns within strings
- Comparison: Lexicographic ordering

**Important Algorithms:**
- String matching (KMP, Rabin-Karp)
- Palindrome checking
- Anagram detection
- String reversal`,
        examples: [
          'str.substring(0, 5) // Extract first 5 characters',
          'str1 + str2 // Concatenation',
          'str.indexOf("pattern") // Pattern search'
        ],
        keyPoints: [
          'Strings are immutable in many languages',
          'StringBuilder/StringBuffer for efficient concatenation',
          'ASCII vs Unicode considerations',
          'Pattern matching algorithms are important'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '12 minutes'
      }
    ]
  },
  {
    topicId: 'linked-lists',
    topicTitle: 'Linked Lists',
    notes: [
      {
        id: 'singly-linked-list',
        title: 'Singly Linked Lists',
        content: `A singly linked list is a linear data structure where elements are stored in nodes, and each node contains data and a reference to the next node.

**Structure:**
- Node: Contains data and next pointer
- Head: Points to the first node
- Tail: Last node points to null

**Advantages:**
- Dynamic size
- Efficient insertion/deletion at beginning
- Memory efficient (no wasted space)

**Disadvantages:**
- No random access
- Extra memory for pointers
- Not cache-friendly`,
        examples: [
          'class Node { int data; Node next; }',
          'Node head = new Node(1);',
          'head.next = new Node(2);'
        ],
        keyPoints: [
          'Dynamic memory allocation',
          'O(1) insertion at head',
          'O(n) search and access',
          'Useful for implementing stacks and queues'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '15 minutes'
      },
      {
        id: 'doubly-linked-list',
        title: 'Doubly Linked Lists',
        content: `Doubly linked lists have nodes with references to both next and previous nodes, allowing bidirectional traversal.

**Structure:**
- Node: Contains data, next, and prev pointers
- Head and tail pointers for efficient operations
- Circular variants possible

**Advantages:**
- Bidirectional traversal
- Efficient deletion when node reference is given
- Better for certain algorithms (like LRU cache)

**Use Cases:**
- Browser history navigation
- Undo/Redo functionality
- LRU Cache implementation`,
        examples: [
          'class DNode { int data; DNode next, prev; }',
          'DNode head, tail;',
          'node.prev.next = node.next; // Deletion'
        ],
        keyPoints: [
          'Extra memory overhead for prev pointer',
          'More complex insertion/deletion logic',
          'Enables efficient bidirectional operations',
          'Common in system-level programming'
        ],
        difficulty: 'Intermediate',
        estimatedReadTime: '18 minutes'
      }
    ]
  }
];

// Full Stack Web Development Notes
const webDevTopics: TopicNotes[] = [
  {
    topicId: 'html-css',
    topicTitle: 'HTML & CSS Fundamentals',
    notes: [
      {
        id: 'html-structure',
        title: 'HTML Document Structure',
        content: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure and content of web documents.

**Basic HTML Structure:**
- DOCTYPE declaration
- HTML root element
- Head section (metadata)
- Body section (visible content)

**Semantic HTML:**
- Use meaningful tags (header, nav, main, article, section, footer)
- Improves accessibility and SEO
- Makes code more maintainable

**HTML5 Features:**
- New semantic elements
- Form enhancements
- Audio and video support
- Canvas for graphics`,
        examples: [
          '<!DOCTYPE html>',
          '<html lang="en">',
          '<head><title>Page Title</title></head>',
          '<body><h1>Hello World</h1></body>'
        ],
        keyPoints: [
          'HTML provides structure, not styling',
          'Always use semantic elements when possible',
          'Proper nesting and closing tags are essential',
          'Accessibility should be considered from the start'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '20 minutes'
      },
      {
        id: 'css-styling',
        title: 'CSS Styling and Layout',
        content: `CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the visual presentation of HTML elements.

**CSS Fundamentals:**
- Selectors: Target HTML elements
- Properties: Define styling aspects
- Values: Specify property settings
- Cascade: How styles are applied and inherited

**Layout Methods:**
- Flexbox: One-dimensional layouts
- Grid: Two-dimensional layouts
- Float: Legacy layout method
- Position: Absolute, relative, fixed, sticky

**Responsive Design:**
- Media queries for different screen sizes
- Flexible units (%, em, rem, vw, vh)
- Mobile-first approach`,
        examples: [
          '.container { display: flex; justify-content: center; }',
          '@media (max-width: 768px) { .mobile { display: block; } }',
          'h1 { color: #333; font-size: 2rem; }'
        ],
        keyPoints: [
          'CSS follows the cascade and specificity rules',
          'Flexbox and Grid are modern layout solutions',
          'Responsive design is essential for modern web',
          'CSS custom properties (variables) improve maintainability'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '25 minutes'
      }
    ]
  },
  {
    topicId: 'javascript',
    topicTitle: 'JavaScript Essentials',
    notes: [
      {
        id: 'js-fundamentals',
        title: 'JavaScript Fundamentals',
        content: `JavaScript is a high-level, interpreted programming language that enables interactive web pages. It's an essential part of web development.

**Core Concepts:**
- Variables and data types
- Functions and scope
- Objects and arrays
- Control structures (if/else, loops)

**ES6+ Features:**
- Arrow functions
- Template literals
- Destructuring
- Modules (import/export)
- Promises and async/await

**DOM Manipulation:**
- Selecting elements
- Modifying content and attributes
- Event handling
- Creating dynamic interfaces`,
        examples: [
          'const greeting = (name) => `Hello, ${name}!`;',
          'const [first, second] = array;',
          'document.querySelector(".button").addEventListener("click", handler);'
        ],
        keyPoints: [
          'JavaScript is dynamically typed',
          'Functions are first-class objects',
          'Asynchronous programming is crucial',
          'Modern ES6+ syntax improves code quality'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '30 minutes'
      }
    ]
  }
];

// Python Programming Notes
const pythonTopics: TopicNotes[] = [
  {
    topicId: 'python-basics',
    topicTitle: 'Python Basics',
    notes: [
      {
        id: 'python-syntax',
        title: 'Python Syntax and Data Types',
        content: `Python is a high-level, interpreted programming language known for its simplicity and readability. It's perfect for beginners and powerful for experts.

**Python Philosophy:**
- Readability counts
- Simple is better than complex
- There should be one obvious way to do it

**Basic Data Types:**
- Numbers: int, float, complex
- Strings: immutable sequences of characters
- Booleans: True/False
- Lists: mutable sequences
- Tuples: immutable sequences
- Dictionaries: key-value pairs
- Sets: unordered collections of unique elements

**Variables and Assignment:**
- Dynamic typing
- No need to declare variable types
- Multiple assignment possible`,
        examples: [
          'name = "Python"  # String',
          'age = 25  # Integer',
          'scores = [95, 87, 92]  # List',
          'person = {"name": "Alice", "age": 30}  # Dictionary'
        ],
        keyPoints: [
          'Python uses indentation for code blocks',
          'Variables are dynamically typed',
          'Everything in Python is an object',
          'Python has a rich standard library'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '15 minutes'
      },
      {
        id: 'control-structures',
        title: 'Control Structures and Functions',
        content: `Control structures allow you to control the flow of program execution. Functions help organize code into reusable blocks.

**Conditional Statements:**
- if, elif, else statements
- Comparison operators
- Logical operators (and, or, not)
- Ternary operator

**Loops:**
- for loops: iterate over sequences
- while loops: repeat while condition is true
- break and continue statements
- else clause with loops

**Functions:**
- def keyword to define functions
- Parameters and arguments
- Return values
- Default parameters
- *args and **kwargs`,
        examples: [
          'if age >= 18:\n    print("Adult")\nelse:\n    print("Minor")',
          'for item in items:\n    print(item)',
          'def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"'
        ],
        keyPoints: [
          'Indentation is syntactically significant',
          'Functions are first-class objects',
          'Python supports functional programming concepts',
          'List comprehensions provide concise syntax'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '20 minutes'
      }
    ]
  }
];

// Operating Systems Notes
const osTopics: TopicNotes[] = [
  {
    topicId: 'os-intro',
    topicTitle: 'Introduction to Operating Systems',
    notes: [
      {
        id: 'os-overview',
        title: 'Operating System Overview',
        content: `An Operating System (OS) is system software that manages computer hardware and software resources and provides common services for computer programs.

**Main Functions:**
- Process Management
- Memory Management
- File System Management
- Device Management
- Security and Protection

**Types of Operating Systems:**
- Batch Operating Systems
- Time-Sharing Systems
- Distributed Systems
- Real-Time Systems
- Mobile Operating Systems

**OS Structure:**
- Monolithic Kernel
- Microkernel
- Hybrid Kernel
- Layered Architecture`,
        examples: [
          'Windows, macOS, Linux - Desktop OS',
          'Android, iOS - Mobile OS',
          'RTOS - Real-Time Operating Systems'
        ],
        keyPoints: [
          'OS acts as an interface between user and hardware',
          'Provides abstraction for hardware resources',
          'Ensures system security and stability',
          'Manages multiple processes concurrently'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '18 minutes'
      }
    ]
  },
  {
    topicId: 'process-management',
    topicTitle: 'Process Management',
    notes: [
      {
        id: 'processes-threads',
        title: 'Processes and Threads',
        content: `A process is a program in execution. Process management is one of the most important functions of an operating system.

**Process States:**
- New: Process is being created
- Ready: Process is waiting to be assigned to processor
- Running: Instructions are being executed
- Waiting: Process is waiting for some event
- Terminated: Process has finished execution

**Process Control Block (PCB):**
- Process ID
- Process State
- Program Counter
- CPU Registers
- Memory Management Information

**Threads:**
- Lightweight processes
- Share memory space within a process
- Faster context switching
- Better resource utilization`,
        examples: [
          'fork() - Create new process in Unix',
          'pthread_create() - Create thread',
          'Process scheduling algorithms'
        ],
        keyPoints: [
          'Processes are isolated from each other',
          'Threads share memory within a process',
          'Context switching has overhead',
          'Proper synchronization is crucial'
        ],
        difficulty: 'Intermediate',
        estimatedReadTime: '25 minutes'
      }
    ]
  }
];

// Database Management Systems Notes
const dbmsTopics: TopicNotes[] = [
  {
    topicId: 'database-fundamentals',
    topicTitle: 'Database Fundamentals & ER Modeling',
    notes: [
      {
        id: 'database-concepts',
        title: 'Database System Concepts',
        content: `A Database Management System (DBMS) is software that enables users to define, create, maintain, and control access to databases.

**Key Concepts:**
- Data: Raw facts and figures
- Information: Processed data
- Database: Collection of related data
- DBMS: Software to manage databases

**Advantages of DBMS:**
- Data Independence
- Efficient Data Access
- Data Integrity and Security
- Concurrent Access
- Crash Recovery

**Database Architecture:**
- Three-Schema Architecture
- External/View Level
- Conceptual/Logical Level
- Internal/Physical Level`,
        examples: [
          'MySQL, PostgreSQL, Oracle - Relational DBMS',
          'MongoDB, Cassandra - NoSQL DBMS',
          'SQLite - Embedded DBMS'
        ],
        keyPoints: [
          'DBMS provides data abstraction',
          'ACID properties ensure reliability',
          'Normalization reduces redundancy',
          'Indexing improves query performance'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '20 minutes'
      },
      {
        id: 'er-modeling',
        title: 'Entity-Relationship Modeling',
        content: `ER modeling is a conceptual design technique used to model the data requirements of an information system.

**ER Model Components:**
- Entities: Real-world objects or concepts
- Attributes: Properties of entities
- Relationships: Associations between entities
- Cardinality: Number of instances in relationships

**Types of Attributes:**
- Simple vs Composite
- Single-valued vs Multi-valued
- Stored vs Derived
- Key Attributes

**Relationship Types:**
- One-to-One (1:1)
- One-to-Many (1:M)
- Many-to-Many (M:N)

**ER Diagram Symbols:**
- Rectangle: Entity
- Ellipse: Attribute
- Diamond: Relationship
- Lines: Connect components`,
        examples: [
          'Student entity with attributes: ID, Name, Age',
          'Enrollment relationship between Student and Course',
          'Professor teaches Course (1:M relationship)'
        ],
        keyPoints: [
          'ER diagrams visualize database structure',
          'Proper modeling prevents design issues',
          'Cardinality constraints are important',
          'ER model translates to relational schema'
        ],
        difficulty: 'Intermediate',
        estimatedReadTime: '22 minutes'
      }
    ]
  }
];

// Computer Networks Notes
const networkTopics: TopicNotes[] = [
  {
    topicId: 'network-fundamentals',
    topicTitle: 'Network Fundamentals & OSI Model',
    notes: [
      {
        id: 'network-basics',
        title: 'Computer Network Basics',
        content: `A computer network is a collection of interconnected devices that can communicate and share resources.

**Network Components:**
- Nodes: Computers, servers, devices
- Links: Physical or wireless connections
- Protocols: Rules for communication
- Network Interface Cards (NICs)

**Network Types:**
- LAN (Local Area Network)
- WAN (Wide Area Network)
- MAN (Metropolitan Area Network)
- PAN (Personal Area Network)

**Network Topologies:**
- Bus Topology
- Star Topology
- Ring Topology
- Mesh Topology
- Hybrid Topology

**Transmission Media:**
- Guided: Twisted pair, Coaxial, Fiber optic
- Unguided: Radio waves, Microwaves, Infrared`,
        examples: [
          'Ethernet LAN in office building',
          'Internet as global WAN',
          'Wi-Fi as wireless LAN'
        ],
        keyPoints: [
          'Networks enable resource sharing',
          'Topology affects performance and reliability',
          'Protocols ensure standardized communication',
          'Bandwidth determines data transfer rate'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '18 minutes'
      },
      {
        id: 'osi-model',
        title: 'OSI Reference Model',
        content: `The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes network communication functions.

**Seven Layers:**
1. Physical Layer: Bit transmission over physical medium
2. Data Link Layer: Frame transmission, error detection
3. Network Layer: Routing, logical addressing (IP)
4. Transport Layer: End-to-end delivery (TCP/UDP)
5. Session Layer: Session management
6. Presentation Layer: Data formatting, encryption
7. Application Layer: Network services to applications

**Layer Functions:**
- Each layer provides services to the layer above
- Each layer uses services from the layer below
- Peer-to-peer communication between same layers
- Encapsulation and decapsulation of data

**Benefits:**
- Modular design
- Standardization
- Interoperability
- Troubleshooting aid`,
        examples: [
          'HTTP operates at Application Layer',
          'TCP operates at Transport Layer',
          'IP operates at Network Layer',
          'Ethernet operates at Data Link Layer'
        ],
        keyPoints: [
          'OSI model is conceptual, not implementation',
          'TCP/IP model is more practical',
          'Understanding layers helps in troubleshooting',
          'Each layer adds its own header'
        ],
        difficulty: 'Intermediate',
        estimatedReadTime: '25 minutes'
      }
    ]
  }
];

// Object-Oriented Programming Notes
const oopTopics: TopicNotes[] = [
  {
    topicId: 'oop-fundamentals',
    topicTitle: 'OOP Fundamentals',
    notes: [
      {
        id: 'oop-concepts',
        title: 'Object-Oriented Programming Concepts',
        content: `Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which contain data (attributes) and code (methods).

**Core OOP Principles:**
1. Encapsulation: Bundling data and methods together
2. Inheritance: Creating new classes based on existing ones
3. Polymorphism: Same interface, different implementations
4. Abstraction: Hiding complex implementation details

**Key Concepts:**
- Class: Blueprint for creating objects
- Object: Instance of a class
- Attribute: Data stored in an object
- Method: Function defined in a class

**Benefits of OOP:**
- Code reusability
- Modularity
- Maintainability
- Scalability
- Real-world modeling`,
        examples: [
          'class Car { String brand; void start() { } }',
          'Car myCar = new Car();',
          'myCar.brand = "Toyota";',
          'myCar.start();'
        ],
        keyPoints: [
          'Objects model real-world entities',
          'Classes define object structure and behavior',
          'OOP promotes code organization',
          'Encapsulation provides data security'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '20 minutes'
      },
      {
        id: 'inheritance-polymorphism',
        title: 'Inheritance and Polymorphism',
        content: `Inheritance allows classes to inherit properties and methods from other classes. Polymorphism enables objects of different types to be treated as instances of the same type.

**Inheritance Types:**
- Single Inheritance: One parent class
- Multiple Inheritance: Multiple parent classes
- Multilevel Inheritance: Chain of inheritance
- Hierarchical Inheritance: Multiple child classes

**Inheritance Benefits:**
- Code reuse
- Method overriding
- IS-A relationship modeling
- Extensibility

**Polymorphism Types:**
- Compile-time: Method overloading
- Runtime: Method overriding
- Interface-based polymorphism

**Method Overriding:**
- Child class provides specific implementation
- Same method signature as parent
- Runtime binding (dynamic dispatch)`,
        examples: [
          'class Animal { void makeSound() { } }',
          'class Dog extends Animal { void makeSound() { bark(); } }',
          'Animal pet = new Dog(); pet.makeSound(); // Calls Dog\'s version'
        ],
        keyPoints: [
          'Inheritance creates IS-A relationships',
          'Polymorphism enables flexible code',
          'Method overriding provides specialization',
          'Abstract classes and interfaces support polymorphism'
        ],
        difficulty: 'Intermediate',
        estimatedReadTime: '25 minutes'
      }
    ]
  }
];

// Machine Learning Notes
const mlTopics: TopicNotes[] = [
  {
    topicId: 'ml-fundamentals',
    topicTitle: 'ML Fundamentals',
    notes: [
      {
        id: 'ml-introduction',
        title: 'Introduction to Machine Learning',
        content: `Machine Learning (ML) is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed.

**Types of Machine Learning:**
1. Supervised Learning: Learning with labeled data
2. Unsupervised Learning: Finding patterns in unlabeled data
3. Reinforcement Learning: Learning through interaction and feedback

**Supervised Learning:**
- Classification: Predicting categories/classes
- Regression: Predicting continuous values
- Examples: Email spam detection, house price prediction

**Unsupervised Learning:**
- Clustering: Grouping similar data points
- Association: Finding relationships between variables
- Dimensionality Reduction: Reducing feature space

**Key Concepts:**
- Training Data: Data used to train the model
- Test Data: Data used to evaluate model performance
- Features: Input variables
- Target: Output variable (in supervised learning)`,
        examples: [
          'Email classification: Spam or Not Spam',
          'Customer segmentation using clustering',
          'Recommendation systems',
          'Image recognition'
        ],
        keyPoints: [
          'ML learns patterns from data',
          'Quality of data affects model performance',
          'Different algorithms suit different problems',
          'Evaluation metrics measure model success'
        ],
        difficulty: 'Beginner',
        estimatedReadTime: '22 minutes'
      }
    ]
  }
];

export const courseNotes: CourseNotes[] = [
  {
    courseId: '1',
    courseTitle: 'Complete Data Structures & Algorithms Masterclass',
    topics: dsaTopics
  },
  {
    courseId: '2',
    courseTitle: 'Full Stack Web Development Bootcamp',
    topics: webDevTopics
  },
  {
    courseId: '3',
    courseTitle: 'Python Programming for Beginners',
    topics: pythonTopics
  },
  {
    courseId: '7',
    courseTitle: 'Operating Systems Fundamentals',
    topics: osTopics
  },
  {
    courseId: '8',
    courseTitle: 'Database Management Systems (DBMS)',
    topics: dbmsTopics
  },
  {
    courseId: '9',
    courseTitle: 'Computer Networks & Network Security',
    topics: networkTopics
  },
  {
    courseId: '10',
    courseTitle: 'Object-Oriented Programming Mastery',
    topics: oopTopics
  },
  {
    courseId: '5',
    courseTitle: 'Machine Learning with Python',
    topics: mlTopics
  }
];