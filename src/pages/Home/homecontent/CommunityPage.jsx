import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Calendar, BookOpen, Megaphone, ArrowRight, Sparkles, Target, Globe, Star } from 'lucide-react';
import logo from '../../../assets/image 839.png';
import girl from '../../../assets/girl-2.png';
import full from '../../../assets/full red mike.png';
import full2 from '../../../assets/suitcase.png';
import upcoming from '../../../assets/upcoming image.png';
import laptop from '../../../assets/laptop image.png';
import mike from '../../../assets/mike - image.png';
import Talent from '../../../assets/Talent Image.png';
import Thinking from '../../../assets/Thinking image.png';
import Attitude from '../../../assets/Atitude image.png';
import BigBasket from '../../../assets/big basket.jpg';
import Unacademy from '../../../assets/unacademy.png';
import Svamitva from '../../../assets/svamitva.png';
import Flobiz from '../../../assets/flobiz.png';



import './CommunityPage.css';

const CommunityPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const first = [
    {
      title: "Upcoming Events",
      description: "Join exclusive networking sessions, workshops, and community meetups",
      gradient: "from-purple-500 to-pink-500",
      image: upcoming
    },
    {
      title: "New Courses & Upskilling",
      description: "Access cutting-edge courses designed for modern freelancers",
      gradient: "from-blue-500 to-cyan-500",
      image: laptop
    },
    {
      title: "Community Announcements",
      description: "Stay updated with the latest opportunities and platform updates",
      gradient: "from-orange-500 to-red-500",
      image: mike
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who can join Streelancer?",
      answer: "Streelancer is open to talented freelancers from all backgrounds and skill levels. Whether you're a seasoned professional or just starting your freelance journey, we welcome designers, developers, writers, marketers, consultants, and professionals from various industries. Our platform is designed to connect skilled individuals with clients who need their expertise."
    },
    {
      question: "Do I need prior work experience to apply?",
      answer: "While prior work experience is valuable, it's not always mandatory. We evaluate candidates based on their skills, portfolio, and potential. If you're new to freelancing, focus on building a strong portfolio that showcases your abilities. We also offer guidance and resources to help newcomers establish themselves in the freelance market."
    },
    {
      question: "How does the hiring process work?",
      answer: "Our hiring process is streamlined and efficient. First, create your profile and showcase your skills and portfolio. Clients post projects and browse through freelancer profiles. When there's a match, you can submit proposals or clients can invite you directly. After initial discussions, terms are agreed upon, and work begins. We facilitate secure payments and provide support throughout the project lifecycle."
    },
    {
      question: "Are all roles remote?",
      answer: "Yes, the majority of roles on Streelancer are remote, allowing you to work from anywhere in the world. This flexibility is one of our key advantages, enabling you to collaborate with clients globally without geographical constraints. However, some clients may prefer freelancers in specific time zones or locations for better collaboration, which will be clearly mentioned in the project requirements."
    },
    {
      question: "I'm an employer. How do I start hiring?",
      answer: "Getting started as an employer is simple. Create your company account, complete your profile with relevant business information, and verify your identity. Then you can post detailed project descriptions, browse freelancer profiles, and start connecting with potential candidates. Our platform provides tools for project management, communication, and secure payment processing to ensure a smooth hiring experience."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: "Upcoming Events",
      description: "Join exclusive networking sessions, workshops, and community meetups",
      gradient: "from-purple-500 to-pink-500",
      image: Talent
    },
    {
      title: "New Courses & Upskilling",
      description: "Access cutting-edge courses designed for modern freelancers",
      gradient: "from-blue-500 to-cyan-500",
      image: Attitude
    },
    {
      title: "Community Announcements",
      description: "Stay updated with the latest opportunities and platform updates",
      gradient: "from-orange-500 to-red-500",
      image: Thinking
    }
  ];

  const stats = [
    { number: "100K+", label: "Active Members" },
    { number: "50K+", label: "Projects Completed" },
    { number: "200+", label: "Countries" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <div className="community-page">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>

      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo-container">
              <img 
                src={logo} 
                alt="Streelancer Logo" 
                className="logo"
              />
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
              <a href="#" className="nav-link">Home</a>
              <a href="#" className="nav-link">Remote Talent Network</a>
              <div className="nav-dropdown">
                <a href="#" className="nav-link dropdown-trigger">
                  DEI Talent Network
                  <ChevronDown className="dropdown-icon" />
                </a>
              </div>
              <a href="#" className="nav-link">Academy</a>
              <a href="#" className="nav-link nav-link-active">Community</a>
            </div>

            {/* Join Us Button */}
            <button className="join-btn">
              <span>Join Us</span>
              <ArrowRight className="btn-icon" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Community Badge */}
          <div className="community-badge">
            <Users className="badge-icon" />
            <span className="badge-text">+100K community of active people</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading">
            <span className="heading-line heading-line-1">
              Be Part of a Purpose-Driven
            </span>
            <br />
            <span className="heading-line heading-line-2">
              Community Redefining
            </span>
            <br />
            <span className="heading-line heading-line-3">
              the Future of Work
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Connect with changemakers, explore stories, share resources, and grow
            <br />
            with a network built for inclusive, second-career, and diverse talent.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <button className="cta-btn cta-btn-primary">
              <Target className="btn-icon" />
              <span>Join as an Organization</span>
            </button>
            <button className="cta-btn cta-btn-secondary">
              <Globe className="btn-icon" />
              <span>Join as an Individual</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features -1 Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-grid">
            {first.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${activeCard === index ? 'feature-card-active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Image */}
                <div className="feature-image">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="feature-img"
                  />
                  <div className="feature-overlay"></div>
                </div>

                {/* Content */}
                <div className="feature-content">
                  <div className={`feature-badge bg-gradient-to-r ${feature.gradient}`}>
                    <Sparkles className="feature-badge-icon" />
                    <span>Featured</span>
                  </div>
                  
                  <h3 className="feature-title">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="text-section">
        <div className="text-container">
          <h3 className="text-heading">
            From the Community Blog
          </h3>
          <p className="text-description">
            Insights, journeys and ideas -- written by and for the Streetlancer network.
          </p>
        </div>
      </section>

      {/* Features -2 Section */}
      <section className="features-section-2">
        <div className="features-container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card-2 ${activeCard === index ? 'feature-card-active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Image */}
                <div className="feature-image">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="feature-img"
                  />
                  <div className="feature-overlay"></div>
                </div>
                
                {/* Content */}
                <div className="feature-content-2">
                  <div className={`feature-icon bg-gradient-to-r ${feature.gradient}`}>
                  </div>
                  <h3 className="feature-title-2">
                    {feature.title}
                  </h3>
                  <p className="feature-description">
                    {feature.description}
                  </p>
                  <button className="feature-btn">
                    <span>Learn More</span>
                    <ArrowRight className="feature-btn-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Purpose-Aligned Partners Section */}
      <section className="partners-section">
        <div className="partners-container">
          <h2 className="partners-heading">
            Our Purpose-Aligned Partners
          </h2>
          <p className="partners-description">
            We collaborate with organizations, brands, and changemakers who believe in inclusive growth, 
            remote-first teams, and empowering underrepresented talent.
          </p>
          
          {/* Partner Logos - Scrolling Container */}
          <div className="partners-scroll-container">
            <div className="partners-scroll">
              {/* First set of logos */}
              <div className="partner-logo">
                <div className="partner-logo-container">
                  <img src={BigBasket} alt="Logo 5" className="partner-img" />
                </div>
              </div>
              
              <div className="partner-logo">
                <div className="partner-logo-container">
                  <img src={Unacademy} alt="Logo 6" className="partner-img" />
                </div>
              </div>
              
              <div className="partner-logo">
                <div className="partner-logo-container">
                  <img src={Svamitva} alt="Logo 7" className="partner-img" />
                </div>
              </div>
              
              <div className="partner-logo">
                <div className="partner-logo-container">
                  <img src={Flobiz} alt="Logo 8" className="partner-img" />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="partner-logo">
                <div className="partner-logo-container">
                  <img src={BigBasket} alt="Logo 5" className="partner-img" />
                </div>
              </div>
              
              <div className="partner-logo">
                <div className="partner-logo-container">
                  <img src={Unacademy} alt="Logo 6" className="partner-img" />
                </div>
              </div>
              
              <div className="partner-logo">
                <div className="partner-logo-container">
                  <img src={Svamitva} alt="Logo 7" className="partner-img" />
                </div>
              </div>
              
              <div className="partner-logo">
                <div className="partner-logo-container">
                  <img src={Flobiz} alt="Logo 8" className="partner-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="stories-section">
        <div className="stories-container">
          <h2 className="stories-heading">
            Real Stories, Real Impact
          </h2>
          <p className="stories-description">
            Hear from women whose journeys transformed through Streelancer — 
            from upskilling to meaningful work.
          </p>
          
          {/* Testimonials Carousel */}
          <div className="testimonial-container">
            <div className="testimonial-bg">
              {/* Decorative background elements */}
              <div className="testimonial-decorations">
                <div className="decoration decoration-1"></div>
                <div className="decoration decoration-2"></div>
                <div className="decoration decoration-3"></div>
              </div>
              
              {/* Testimonial Card */}
              <div className="testimonial-card">
                <div className="testimonial-content">
                  {/* Profile Image */}
                  <div className="testimonial-profile">
                    <div className="profile-image-container">
                      <div className="profile-image">
                        <img 
                          src={girl} 
                          alt="Ritika S. - Social Media Manager" 
                          className="profile-img"
                        />
                      </div>
                    </div>
                    {/* Decorative quote mark */}
                    <div className="quote-mark">
                      <span className="quote-text">"</span>
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="testimonial-text">
                    <div className="testimonial-quote">
                      <p className="quote">
                        "Streelancer helped me restart after 5 years. I completed their course and now freelance for a global client from home!"
                      </p>
                    </div>
                    
                    <div className="testimonial-author">
                      <h4 className="author-name">Ritika S., Mumbai</h4>
                      <p className="author-role">Social Media Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="testimonial-nav">
                <button className="nav-btn">
                  <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="nav-btn">
                  <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Carousel Indicators */}
              <div className="testimonial-indicators">
                <div className="indicator indicator-active"></div>
                <div className="indicator"></div>
                <div className="indicator"></div>
                <div className="indicator"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="full-width-container">
        {/* First Section - Looking for Skilled, DEI-Verified Talent & Want to Become Job-Ready */}
        <div className="dual-section">
          <div className="dual-container">
            <div className="dual-grid">
              
              {/* Left Side - Looking for Skilled Talent */}
              <div className="dual-item">
                <h2 className="dual-heading">
                  Looking for Skilled, DEI-Verified Talent?
                </h2>
                
                <div className="dual-icon-container">
                  <div className="dual-icon">
                    <div className="dual-icon-bg">
                      <img src={full} alt="Icon 1" className="dual-icon-img1" />
                    </div>
                  </div>
                </div>
                
                <button className="dual-btn">
                  Hire Now
                </button>
              </div>

              {/* Right Side - Want to Become Job-Ready */}
              <div className="dual-item">
                <h2 className="dual-heading">
                  Want to Become Job-Ready & Work Remotely?
                </h2>
                
                <div className="dual-icon-container">
                  <div className="dual-icon-2">
                    <img src={full2} alt="Icon 2" className="dual-icon-img" />
                  </div>
                </div>
                
                <button className="dual-btn dual-btn-spaced">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Stay in the Loop */}
        <div className="loop-section">
          <div className="loop-container">
            <button className="loop-badge">
              Get Updated
            </button>
            
            <h2 className="loop-heading">
              Stay in the Loop with Streelancer
            </h2>
            
            <p className="loop-description">
              Get updates on new job roles, training programs, DEI hiring tips, and inspiring community stories — right in your inbox.
            </p>
            
            <button className="loop-btn">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-section">
        <div className="contact-container">
          {/* Header Section */}
          <div className="contact-header">
            <h1 className="contact-heading">
              Get in Touch With Us
            </h1>
            <p className="contact-description">
              We'd love to hear from you! Whether you're a job-seeker, hiring partner, or just curious — drop us a message and we'll get back to you soon.
            </p>
          </div>

          {/* Form Section */}
          <div className="contact-form">
            {/* Full Name Field */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone Number Field */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone no.
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="form-textarea"
                placeholder="Tell us about your inquiry or how we can help you..."
              />
            </div>

            {/* Submit Button */}
            <div className="form-submit">
              <button
                onClick={handleSubmit}
                className="submit-btn"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="faq-container">
          {/* Header Section */}
          <div className="faq-header">
            <h1 className="faq-heading">
              Frequently Asked Questions
            </h1>
            <p className="faq-description">
              Still curious? Here are quick answers to what most people ask us.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="faq-items">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="faq-item"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-question"
                >
                  <div className="faq-question-content">
                    <span className="faq-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="faq-question-text">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`faq-chevron ${openIndex === index ? 'faq-chevron-open' : ''}`}
                  />
                </button>

                {/* Answer Content */}
                <div 
                  className={`faq-answer ${openIndex === index ? 'faq-answer-open' : ''}`}
                >
                  <div className="faq-answer-content">
                    <div className="faq-divider"></div>
                    <p className="faq-answer-text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="faq-cta">
            <div className="faq-cta-content">
              <h3 className="faq-cta-heading">
                Still have questions?
              </h3>
              <p className="faq-cta-description">
                Can't find the answer you're looking for? Our support team is here to help you get started.
              </p>
              <button className="faq-cta-btn">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;