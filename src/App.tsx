import React, { useState, useEffect } from 'react';
import { Course, CartItem } from './types';
import { courses } from './data/courses';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { CourseCard } from './components/CourseCard';
import { CourseDetails } from './components/CourseDetails';
import { NotesViewer } from './components/NotesViewer';
import { Cart } from './components/Cart';
import { PaymentForm } from './components/PaymentForm';
import { PaymentSuccess } from './components/PaymentSuccess';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { FAQ } from './components/FAQ';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Chatbot } from './components/Chatbot';
import { courseNotes } from './data/notes';

interface PurchasedCourse {
  courseId: string;
  purchaseDate: Date;
  orderId: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedCourseForNotes, setSelectedCourseForNotes] = useState<Course | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [purchasedCourses, setPurchasedCourses] = useState<PurchasedCourse[]>([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('learnhub-cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart).map((item: any) => ({
          ...item,
          addedAt: new Date(item.addedAt)
        }));
        setCartItems(parsedCart);
      }
      
      // Check if user is logged in
      const savedUser = localStorage.getItem('learnhub-user');
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        setIsLoggedIn(true);
        setUserEmail(userData.email);
      }
      
      // Load purchased courses
      const savedPurchases = localStorage.getItem('learnhub-purchases');
      if (savedPurchases) {
        const parsedPurchases = JSON.parse(savedPurchases).map((purchase: any) => ({
          ...purchase,
          purchaseDate: new Date(purchase.purchaseDate)
        }));
        setPurchasedCourses(parsedPurchases);
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem('learnhub-cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }, [cartItems]);

  // Save purchased courses to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('learnhub-purchases', JSON.stringify(purchasedCourses));
    } catch (error) {
      console.error('Error saving purchases:', error);
    }
  }, [purchasedCourses]);

  // Filter courses based on category and search query
  useEffect(() => {
    let filtered = courses;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    setFilteredCourses(filtered);
  }, [selectedCategory, searchQuery]);

  const addToCart = (course: Course) => {
    const existingItem = cartItems.find(item => item.courseId === course.id);
    if (!existingItem) {
      const newItem: CartItem = {
        courseId: course.id,
        course,
        addedAt: new Date()
      };
      setCartItems(prev => [...prev, newItem]);
    }
  };

  const removeFromCart = (courseId: string) => {
    setCartItems(prev => prev.filter(item => item.courseId !== courseId));
  };

  const isInCart = (courseId: string) => {
    return cartItems.some(item => item.courseId === courseId);
  };

  const isPurchased = (courseId: string) => {
    return purchasedCourses.some(purchase => purchase.courseId === courseId);
  };

  const getNotesForCourse = (courseId: string) => {
    return courseNotes.find(notes => notes.courseId === courseId);
  };

  const handleViewNotes = (course: Course) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }
    
    if (!isPurchased(course.id)) {
      alert('Please purchase this course to access the study notes.');
      return;
    }
    
    setSelectedCourseForNotes(course);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSelectedCategory('all');
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
      setShowCart(false);
      return;
    }
    // Proceed to payment
    setShowCart(false);
    setShowPayment(true);
  };

  const handleLogin = (email: string, password: string) => {
    // Basic email validation
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    if (!password || password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    
    try {
      // Simulate login - in real app, this would call an API
      const userData = { email, name: email.split('@')[0] };
      localStorage.setItem('learnhub-user', JSON.stringify(userData));
      setIsLoggedIn(true);
      setUserEmail(email);
      setShowLogin(false);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  const handleSignup = (name: string, email: string, password: string) => {
    // Basic validation
    if (!name || name.trim().length < 2) {
      alert('Please enter a valid name (at least 2 characters)');
      return;
    }
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    if (!password || password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    
    try {
      // Simulate signup - in real app, this would call an API
      const userData = { email, name: name.trim() };
      localStorage.setItem('learnhub-user', JSON.stringify(userData));
      setIsLoggedIn(true);
      setUserEmail(email);
      setShowSignup(false);
      alert('Account created successfully!');
    } catch (error) {
      alert('Account creation failed. Please try again.');
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('learnhub-user');
      localStorage.removeItem('learnhub-purchases');
      setIsLoggedIn(false);
      setUserEmail('');
      setPurchasedCourses([]);
      setCartItems([]); // Clear cart on logout
      localStorage.removeItem('learnhub-cart');
      alert('Logged out successfully!');
    } catch (error) {
      console.error('Logout error:', error);
      // Still perform logout even if localStorage fails
      setIsLoggedIn(false);
      setUserEmail('');
      setPurchasedCourses([]);
      setCartItems([]);
    }
  };

  const handlePaymentSuccess = (orderId: string) => {
    // Add purchased courses to the list
    const newPurchases = cartItems.map(item => ({
      courseId: item.courseId,
      purchaseDate: new Date(),
      orderId: orderId
    }));
    setPurchasedCourses(prev => [...prev, ...newPurchases]);
    
    setCurrentOrderId(orderId);
    setShowPayment(false);
    setShowPaymentSuccess(true);
  };

  const handlePaymentClose = () => {
    setShowPaymentSuccess(false);
    setCurrentOrderId('');
    setCartItems([]); // Clear cart after successful payment
  };

  const handleAddToCart = (course: Course) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }
    addToCart(course);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItems={cartItems} 
        onCartClick={() => setShowCart(true)}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        searchResults={filteredCourses}
        onCourseSelect={setSelectedCourse}
        onAddToCart={handleAddToCart}
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setShowLogin(true)}
        userEmail={userEmail}
        onLogout={handleLogout}
      />
      
      <Hero onSearch={handleSearch} />
      
      <About />
      <Features />
      <Testimonials />
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {searchQuery ? `Search Results for "${searchQuery}"` : 
               selectedCategory === 'all' ? 'All Courses' : selectedCategory}
            </h2>
            <p className="text-gray-600 mt-2">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📚</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No courses found</h3>
            <p className="text-gray-600 mb-8">
              {searchQuery 
                ? `No courses match your search for "${searchQuery}"`
                : `No courses available in ${selectedCategory}`
              }
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Courses
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onAddToCart={handleAddToCart}
                onViewDetails={setSelectedCourse}
                onViewNotes={handleViewNotes}
                isInCart={isInCart(course.id)}
                isPurchased={isPurchased(course.id)}
              />
            ))}
          </div>
        )}
      </main>

      <Newsletter />
      <FAQ />
      <Footer />
      
      {/* AI Chatbot */}
      <Chatbot courses={courses} />

      {/* Course Details Modal */}
      {selectedCourse && (
        <CourseDetails
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onAddToCart={handleAddToCart}
          onViewNotes={handleViewNotes}
          isInCart={isInCart(selectedCourse.id)}
          isPurchased={isPurchased(selectedCourse.id)}
        />
      )}

      {/* Notes Viewer Modal */}
      {selectedCourseForNotes && getNotesForCourse(selectedCourseForNotes.id) && (
        <NotesViewer
          courseNotes={getNotesForCourse(selectedCourseForNotes.id)!}
          onClose={() => setSelectedCourseForNotes(null)}
        />
      )}
      {/* Cart Modal */}
      {showCart && (
        <Cart
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onRemoveItem={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}

      {/* Login Modal */}
      {showLogin && (
        <LoginForm
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {/* Signup Modal */}
      {showSignup && (
        <SignupForm
          onClose={() => setShowSignup(false)}
          onSignup={handleSignup}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}

      {/* Payment Modal */}
      {showPayment && (
        <PaymentForm
          cartItems={cartItems}
          total={cartItems.reduce((sum, item) => sum + item.course.price, 0)}
          onClose={() => setShowPayment(false)}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

      {/* Payment Success Modal */}
      {showPaymentSuccess && (
        <PaymentSuccess
          orderId={currentOrderId}
          cartItems={cartItems}
          total={cartItems.reduce((sum, item) => sum + item.course.price, 0)}
          onClose={handlePaymentClose}
        />
      )}
    </div>
  );
}

export default App;