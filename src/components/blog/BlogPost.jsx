import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bloglist from "../../editable-stuff/blog";

const BlogPost = () => {
  const { id } = useParams();
  const post = bloglist[id];
  const [visible, setVisible] = useState(false);
  const [contentOpacity, setContentOpacity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Apply a small delay before starting the fade transition
    const fadeTimer = setTimeout(() => {
      setVisible(true);

      // Delay content opacity for smoother text fade
      setTimeout(() => {
        setContentOpacity(1);
      }, 100);
    }, 50);

    // Add transition class to body
    document.body.classList.add("fade-in-transition");

    // Clean up on unmount
    return () => {
      clearTimeout(fadeTimer);
      setVisible(false);
      setContentOpacity(0);
      document.body.classList.remove("fade-in-transition");
    };
  }, []);

  // Content style for smooth text transition
  const contentStyle = {
    opacity: contentOpacity,
    transition: "opacity 0.4s ease-in-out",
  };

  // Handle navigation with fade transition
  const handleNavigateBack = () => {
    setVisible(false);
    setContentOpacity(0);

    // Add fade-out class to body
    document.body.classList.remove("fade-in-transition");
    document.body.classList.add("fade-out-transition");

    // Wait for animation to complete before navigating
    setTimeout(() => {
      navigate("/blog");
    }, 400); // Slightly shorter than the animation duration
  };

  return (
    <div
      className={`container-lg mt-5 ${
        visible ? "blog-fade-in" : "blog-fade-out"
      }`}
    >
      {post && (
        <div style={contentStyle}>
          <button
            onClick={handleNavigateBack}
            className="btn btn-outline-light mb-4"
            style={{ transition: "opacity 0.3s ease" }}
          >
            &larr; Back to Blogs
          </button>
          <h1 className="display-2 text-center">{post.title}</h1>
          <img className="img-fluid mb-2" src={post.image} alt={post.title} />
          {post.getBlog()}
        </div>
      )}
      {!post && (
        <div style={contentStyle}>
          <button
            onClick={handleNavigateBack}
            className="btn btn-outline-light mb-4"
            style={{ transition: "opacity 0.3s ease" }}
          >
            &larr; Back to Blogs
          </button>
          <h1 className="display-1 text-center">404 - Page not found</h1>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
