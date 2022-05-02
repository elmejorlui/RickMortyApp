import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mt-5">
          <div className="card">
            <img src={item.image} alt="" />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p>
                Species: {item.species} <br></br>
                Location: {item.location.name} <br></br>
                Gender: {item.gender} <br></br>
                Status: {item.status} <br></br>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
