import React, { memo } from 'react';
import { string, node } from 'prop-types';
import Parallax from 'react-scroll-parallax/lib/components/Parallax';

function HeroBanner({ image, min, max, children }) {
  return (<div className="hero-container">
      <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${image})` }}
        />
      </Parallax>
      <div className="hero-children">{children}</div>
    </div>
  );
}

HeroBanner.propTypes = {
  image: string.isRequired,
  min: string.isRequired,
  max: string.isRequired,
  children: node
}

export default memo(HeroBanner);
