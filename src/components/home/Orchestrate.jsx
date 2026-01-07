import React from 'react';
import { Jumbotron } from './migration';
import { Container, Row, Col } from "react-bootstrap";

const Orchestrate = ({ orchestrate }) => {
  const features = [
    {
      title: "Opening Splash and Sign In",
      description: "The opening splash is the front door to the experience. You choose whether to sign in with Spotify or Apple Music, and the app uses that connection for personalization, artist images, genres, and music playback throughout the rest of the flow.",
      video: require("../../assets/img/orchestrate/openingSplash.webm"),
    },
    {
      title: "How It Works",
      description: "A quick tour of the full journey: Connect your Spotify or Apple Music account, choose a location and date range to search for shows, then select your favorites, grab tickets, and share your lineup.",
      video: require("../../assets/img/orchestrate/howItWorks.webm"),
    },
    {
      title: "Scheduling Flow: Quick Find or Custom Schedule",
      description: "The scheduling flow handles two different ways of planning: a fast \"what is happening now\" browse, or a deeper multi-stop schedule that matches your listening profile. Pick Quick Find for \"This Week\" or \"This Weekend\", or build a custom schedule with multiple travel stops.",
      video: require("../../assets/img/orchestrate/schedulingFlow.webm"),
    },
    {
      title: "Loading Screen: Personalization in Progress",
      description: "After you kick off a search, the app shows a playful loading screen while it builds the personalized results. The messaging changes based on what the app is doing—aggregating favorite artists, expanding your taste profile, and searching multiple ticketing sources.",
      video: require("../../assets/img/orchestrate/loadingScreen.webm"),
    },
    {
      title: "Schedule Timeline and Card Interactions",
      description: "The schedule timeline groups shows by day and treats each day as a stack of cards. Tap a stack to expand it into a horizontal coverflow, then swipe through shows. Each card reveals venue details, show metadata, artist bios, recent setlists, and in-app music playback.",
      video: require("../../assets/img/orchestrate/cardInteractions.webm"),
    },
    {
      title: "Buy Tickets and Save to My Shows",
      description: "Your chosen shows are grouped by date and presented as animated cards, with immediate actions for tickets and saving. Buy Tickets opens the best available ticket URL, and you can save events to your personal library for easy revisiting.",
      video: require("../../assets/img/orchestrate/buyTickets.webm"),
    },
    {
      title: "Spotlight Menu and My Shows Library",
      description: "A persistent header keeps navigation within reach. The My Shows page is your personal archive of saved concerts, built for long-term use. Saved shows are grouped by date with clear headers, and upcoming events keep the Buy Tickets action available.",
      video: require("../../assets/img/orchestrate/spotlightMyShows.webm"),
    },
    {
      title: "Poster Designer: Build and Share Your Lineup",
      description: "Poster Designer turns your selected shows into a festival-style lineup poster. It's a hands-on, mobile-friendly canvas with visual coaching. Scroll to cycle through backgrounds, swipe to change fonts, and customize every detail before sharing directly to Instagram or X, or downloading a high-quality image.",
      video: require("../../assets/img/orchestrate/posterUi.webm"),
    },
  ];

  return (
    <section className="section">
      <Jumbotron fluid id="orchestrate" className="bg-white m-0" style={{ borderTop: '2px solid #e9ecef', paddingTop: '4rem' }}>
        <Container>
          {/* Logo Header */}
          <Row className="justify-content-center mb-5">
            <Col xs={12} className="text-center">
              <a 
                href="https://orchestrate.live" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-block',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  backgroundColor: '#78a1bb',
                  borderRadius: '20px',
                  padding: '2rem',
                  marginBottom: '2rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.opacity = '1';
                }}
              >
                <img 
                  src={require("../../assets/img/orchestrate/orchestrate-transparent.png")} 
                  alt="Orchestrate Logo" 
                  style={{ 
                    maxWidth: '400px', 
                    width: '100%', 
                    height: 'auto',
                    cursor: 'pointer',
                    display: 'block'
                  }} 
                />
              </a>
            </Col>
          </Row>

          {/* Main Description */}
          <Row className="mb-5">
            <Col xs={12} className="text-center">
              <p className="lead" style={{ fontSize: '1.25rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto' }}>
                {orchestrate.description}
              </p>
            </Col>
          </Row>

          {/* Features Grid */}
          {features.map((feature, index) => (
            <Row key={index} className={`mb-5 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <Col lg={6} className="d-flex align-items-center mb-4 mb-lg-0">
                <div>
                  <h3 className="mb-3" style={{ color: '#333', fontWeight: '600' }}>
                    {feature.title}
                  </h3>
                  <p className="lead" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555' }}>
                    {feature.description}
                  </p>
                </div>
              </Col>
              <Col lg={6} className="d-flex align-items-center justify-content-center">
                <div 
                  style={{ 
                    width: '100%', 
                    maxWidth: '600px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                  }}
                >
                  <video 
                    src={feature.video}
                    className="img-fluid"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ 
                      width: '100%', 
                      height: 'auto',
                      display: 'block'
                    }}
                    aria-label={feature.title}
                  />
                </div>
              </Col>
            </Row>
          ))}

          {/* Key Features Summary */}
          <Row className="mt-5 pt-5" style={{ borderTop: '2px solid #e9ecef' }}>
            <Col xs={12} className="text-center mb-4">
              <h2 className="display-5 mb-4" style={{ fontWeight: '600' }}>What You Can Do</h2>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎵</div>
                <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Connect & Personalize</h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Connect Spotify or Apple Music to personalize concert recommendations and playback throughout the app.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎫</div>
                <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Browse & Plan</h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Browse shows quickly for the week or weekend, or build a multi-stop travel schedule with custom date ranges.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="text-center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Explore & Share</h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Explore show cards with bios, setlists, and venue details. Save favorites and design a sharable lineup poster.
                </p>
              </div>
            </Col>
          </Row>

          {/* Link to Orchestrate Live */}
          <Row className="mt-5 pt-4">
            <Col xs={12} className="text-center">
              <a 
                href="https://orchestrate.live" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-lg"
                style={{
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  padding: '0.75rem 2rem',
                  fontSize: '1.1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Visit orchestrate.live →
              </a>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </section>
  );
};

export default Orchestrate;
