import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  getInTouch,
  experience,
  education,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

import Experience from "./components/home/Experience";
import Education from "./components/home/Education";

// Wrap Blog component with transition handling
const BlogWithTransition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Apply a small delay before showing content to prevent "blink"
    const contentTimer = setTimeout(() => {
      setContentReady(true);
      // Only start fade-in after content is ready
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }, 100);

    // Add transition class to body when component mounts
    document.body.classList.add("fade-in-transition");
    document.body.classList.remove("fade-out-transition");

    // Clean up timers and classes when unmounting
    return () => {
      clearTimeout(contentTimer);
    };
  }, []);

  // Function to handle leaving the blog page with fade out
  const handleNavigation = (path) => {
    setIsVisible(false);
    document.body.classList.remove("fade-in-transition");
    document.body.classList.add("fade-out-transition");

    // Wait for animation to complete before navigating
    setTimeout(() => {
      navigate(path);
    }, 400); // Match the animation duration
  };

  // Return empty div if content isn't ready yet
  if (!contentReady) {
    return <div className="container-lg mt-5 bg-blue"></div>;
  }

  return <Blog visible={isVisible} onNavigate={handleNavigation} />;
};

const Home = React.forwardRef((props, ref) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start fade-in animation
    const fadeTimer = setTimeout(() => {
      setIsVisible(true);
      document.body.classList.add("fade-in-transition");
      document.body.classList.remove("fade-out-transition");
    }, 50);

    // Check if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.substring(1); // remove the # character
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    return () => {
      clearTimeout(fadeTimer);
    };
  }, [location]); // Re-run when location changes

  return (
    <div className={isVisible ? "home-fade-in" : "home-fade-out"}>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message1={about.message1}
          message2={about.message2}
          message3={about.message3}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {education.show && <Education education={education} />}
      {experience.show && <Experience experience={experience} />}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
    </div>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={"/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
        <Route path="/blog" exact element={<BlogWithTransition />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
