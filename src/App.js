import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";
import picture from "./picture.json"
import './App.css';

class App extends Component {
  state = {
    picture,
    clickedPicture: [],
    tally: 0
  };

  handleClick = event => {
    const currentPic = event.target.alt;
    const clickedPic = this.state.clickedPicture.indexOf(currentPic) > -1;

    if (clickedPic) {
      this.setState({
        picture: this.state.picture.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPicture: [],
        tally: 0
      });
      alert("Wroooooong! Play again?");
    } else {
      this.setState({ 
        picture: this.state.picture.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
      clickedPicture: this.state.clickedPicture.concat(
        currentPic
      ),
      tally: this.state.tally + 1
    },
        () => {
          if (this.state.tally === 12) {
            alert("You wooooooon!");
            this.setState({ picture: this.state.picture.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedPicture: [],
            tally: 0  
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar
          tally={this.state.tally}
        />
        <h1 className="offset-5s">
          Click the Pics!
        </h1>
        <div className="wrapper">
          {this.state.picture.map(picture => (
            <Card
              handleClick={this.handleClick}
              id={picture.id}
              key={picture.id}
              image={picture.image}
            />
          ))}
        </div>
        <Footer />    
      </div>
    );
  }
}

export default App;
