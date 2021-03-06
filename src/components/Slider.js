import React, { Component } from 'react';
import { images } from '../images.json';
import './Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      interval: null,
      images
    };
    this.handleStartSlideshow = this.handleStartSlideshow.bind(this);
    this.handleStopSlideshow = this.handleStopSlideshow.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.createTimer = this.createTimer.bind(this);
  }
  nextSlide() {
    let index = this.state.currentSlide;
    if (index === 5) {
      index = 0;
      this.setState({
        currentSlide: index
      });
      return;
    }
    index = index + 1;
    this.setState({
      currentSlide: index
    });
  }
  prevSlide() {
    let index = this.state.currentSlide;
    if (index === 0) {
      index = 5;
      this.setState({
        currentSlide: index
      });
      return;
    }
    index = index - 1;
    this.setState({
      currentSlide: index
    });
  }
  createTimer() {
    const interval = setInterval(() => this.nextSlide(), 1500);
    this.setState({
      interval: interval
    });
  }
  handleStartSlideshow() {
    this.createTimer();
  }
  handleStopSlideshow() {
    clearInterval(this.state.interval);
  }
  render() {
    const image = this.state.images[this.state.currentSlide];
    return (
      <div className="Slider">
        <div className="slides">
          <picture className="slide">
            <img src={image.url} alt={image.alternate} />
            <div className="slide-caption">
              {image.caption}
            </div>
          </picture>
        </div>
        <div className="btns">
          <button className="btn" onClick={this.prevSlide}>
            Prev
          </button>
          <button className="btn" onClick={this.handleStartSlideshow}>
            Start
          </button>
          <button className="btn" onClick={this.handleStopSlideshow}>
            Stop
          </button>
          <button className="btn" onClick={this.nextSlide}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
