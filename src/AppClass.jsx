import React, { Component } from 'react';
import './App.css';
import elephant from "./images/elephant.jpeg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    const data = this.imageData();
    this.setState({ images: data });
  }

  imageData = () => {
    let data = [
      { id: 1, img: elephant },
      { id: 2, img: elephant },
      { id: 3, img: elephant },
      { id: 4, img: elephant }
    ];
    return data;
  };

  render() {
    return (
      <div id='parent'>
        {this.state.images.map((imgData) => (
          <img key={imgData.id} src={imgData.img} alt={`image_${imgData.id}`} />
        ))}
      </div>
    );
  }
}

export default App;
