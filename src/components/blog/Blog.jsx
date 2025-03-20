import React, { useState, useEffect } from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
import { Link } from "react-router-dom";

const Blog = ({ visible = false, onNavigate }) => {
  // If visible prop is not provided, manage visibility internally
  const [internalVisible, setInternalVisible] = useState(false);
  const [contentOpacity, setContentOpacity] = useState(0);

  useEffect(() => {
    // If visible prop is not provided, set visibility internally
    if (visible === undefined) {
      setInternalVisible(true);
    }

    // Control content opacity based on visible state
    // This creates a smoother text fade
    let opacityTimer;
    if (visible || internalVisible) {
      opacityTimer = setTimeout(() => {
        setContentOpacity(1);
      }, 100);
    } else {
      setContentOpacity(0);
    }

    // Clean-up function
    return () => {
      clearTimeout(opacityTimer);
      if (visible === undefined) {
        setInternalVisible(false);
        setContentOpacity(0);
      }
    };
  }, [visible, internalVisible]);

  // Use either the prop or internal state
  const isVisible = visible !== undefined ? visible : internalVisible;

  // Custom link handler for internal blog navigation
  const handleBlogLinkClick = (index, e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(`/blog/${index}`);
    }
  };

  // CSS for content transition
  const contentStyle = {
    opacity: contentOpacity,
    transition: "opacity 0.4s ease-in-out",
    display: "block",
  };

  return (
    <div
      className={`container-lg mt-5 pt-5 bg-blue ${
        isVisible ? "blog-fade-in" : "blog-fade-out"
      }`}
      style={{
        paddingTop: "2rem",
        minHeight: bloglist.length <= 1 ? "calc(100vh - 300px)" : "auto", // Add minimum height when few posts
      }}
    >
      <div style={contentStyle}>
        <h1 className="text-center">Zack's Tech Ramblings</h1>
        {bloglist.map((value, index) => {
          return (
            <BlogCard
              key={index}
              title={value.title}
              image={value.image}
              description={value.description}
              date={value.date}
              index={index}
              onNavigate={
                onNavigate ? (e) => handleBlogLinkClick(index, e) : null
              }
            />
          );
        })}
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogCard = ({ index, title, image, description, date, onNavigate }) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12" style={{ overflow: "hidden" }}>
            <img
              src={image}
              className="img-fluid w-100 h-100 object-fit-cover"
              alt={title}
              style={{
                aspectRatio: "16/9",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="text-muted mb-2">
                <small>Posted on {formatDate(date)}</small>
              </p>
              <p className="lead">{description}</p>
              {onNavigate ? (
                <a href={`/blog/${index}`} onClick={onNavigate}>
                  Read more...{" "}
                </a>
              ) : (
                <Link to={`/blog/${index}`}>Read more... </Link>
              )}
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { Blog, BlogBuilder, formatDate };
