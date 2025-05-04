import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Subscribing email:', email);
    setIsSubscribed(true);
    setEmail('');
  };
  
  return (
    <section className="py-16 bg-secondary-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-secondary-300 mb-8">
            Be the first to know about new collections, exclusive offers, and style inspiration.
          </p>
          
          {isSubscribed ? (
            <div className="bg-secondary-700 p-6 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent-light mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-white font-medium">
                Thank you for subscribing! Check your inbox for a welcome gift.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-light"
              />
              <button 
                type="submit" 
                className="bg-accent-light text-white px-6 py-3 rounded-md font-medium hover:bg-accent-light/90 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
