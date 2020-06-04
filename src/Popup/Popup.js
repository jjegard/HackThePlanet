import React, { Component } from "react";
import "./style.css";

class Popup extends Component {
  images = [
    "Images/Amber1.jpg",
    "Images/Amber2.jpg",
    "Images/Amber3.jpg",
    "Images/Amber4.jpg",
    "Images/Fran1.jpg",
    "Images/Fran2.jpg",
    "Images/Fran3.jpg",
    "Images/Fran4.jpg",
    "Images/Fran5.jpg",
    "Images/John1.jpg",
    "Images/John2.jpg",
    "Images/John3.jpg",
    "Images/John4.jpg",
    "Images/Luigi1.jpg",
    "Images/Luigi2.jpg",
    "Images/Luigi3.jpg",
    "Images/Tony1.jpg",
    "Images/Tony2.jpg"
  ];

  GetRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    return (
      <div className="popup">
        <div className="popup-inner">
          <button onClick={this.props.closePopup}>close me</button>
          <p></p>
          <img
            src={this.images[this.GetRandomInt(this.images.length + 1)]}
            alt="there is an error"
            width="297"
            height="396"
          />
        </div>
      </div>
    );
  }
}

export default Popup;
