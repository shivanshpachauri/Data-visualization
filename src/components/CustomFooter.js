import React from "react";

const CustomFooter = ({ name, email, phone }) => {
  return (
    <footer
      style={{
        // position: "absolute",
        // left: 0,
        width: "100%",
        bottom: 0,
        textAlign: "center",
        padding: "3px",
        backgroundColor: "DarkSalmon",
        color: "white",
      }}
    >
      <p>{name}</p>
      <a href={`mailto:${email}`}>{email}</a>
      <p>{phone}</p>
    </footer>
  );
};

export default CustomFooter;
