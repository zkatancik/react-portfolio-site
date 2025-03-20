import React from "react";

const Footer = (props) => {
  const bgStyle = {
    backgroundColor: "#f5f5f5",
    marginTop: "auto",
  };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      {props.children}
    </footer>
  );
};

export default Footer;
