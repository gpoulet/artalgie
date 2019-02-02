import React, { Component } from 'react';
import { string } from 'prop-types'
import * as $ from 'jquery'
import M from 'materialize-css';

class Parallax extends Component {

  componentDidMount() {

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems, {});
    });
  }

  render() {
    const { image, alt, title } = this.props
    if (title) {
      return (
        <div className="parallax-container">
          <div className="parallax valign-wrapper">
            <img src={`images/${image}`} alt={alt}/>
          </div>
          <div className="valign">
            <span className="white"><h1 className="center-align page-title parallax-title">{title}</h1></span>
          </div>
        </div>
      );

    }
    else {
      return (
        <div className="parallax-container">
          <div className="parallax valign-wrapper">
            <img src={`images/${image}`} alt={alt}/>
          </div>
        </div>
      );
    }
  }

}

Parallax.propTypes = {
  image: string.isRequired,
  alt: string.isRequired,
  title: string
}

export default Parallax;
