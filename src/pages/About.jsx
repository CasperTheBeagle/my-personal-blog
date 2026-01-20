export const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-brown-600 mb-8">
          About Us
        </h1>
        
        <div className="prose prose-lg text-brown-600">
          <p className="text-xl leading-relaxed mb-6">
            Welcome to our personal blog, where we share insights, stories, and experiences about the things we love.
          </p>
          
          <h2 className="text-2xl font-bold font-serif text-brown-600 mt-12 mb-4">
            Our Mission
          </h2>
          <p className="mb-6">
            We believe in the power of storytelling and the importance of sharing knowledge. Our mission is to create a space where ideas can flourish and readers can find inspiration for their daily lives.
          </p>
          
          <h2 className="text-2xl font-bold font-serif text-brown-600 mt-12 mb-4">
            What We Write About
          </h2>
          <p className="mb-6">
            From personal development to pet care, from technology to lifestyle tips, we cover a wide range of topics that matter to us and, hopefully, to you too.
          </p>
          
          <h2 className="text-2xl font-bold font-serif text-brown-600 mt-12 mb-4">
            Join Our Community
          </h2>
          <p className="mb-6">
            We're always happy to connect with fellow readers and writers. Feel free to explore our articles, leave comments, and share your thoughts with us.
          </p>
        </div>
      </div>
    </div>
  );
};
