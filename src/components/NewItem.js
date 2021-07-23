import React from "react";
const NewItem = ({ title, urlToImage, url, description, source }) => {
  
  const imagen = urlToImage ? (
    <img
      src={urlToImage}
      className="card-img-top"
      style={{ maxHeight: "150px" }}
      alt={title}
    />
  ) : null;

  return (
    <>
      <div className="card mb-4" style={{ width: "18rem", maxHeight: "600px" }}>
        {imagen}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default NewItem;
