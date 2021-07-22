import React from "react";

const Header = ({ title }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            {title}
        </a>
      </div>
    </nav>
  );
};

export default Header;
