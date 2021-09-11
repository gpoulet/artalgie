import React, { memo, PropsWithChildren, ReactElement } from 'react';

// @ts-ignore
import ParallaxComponent from 'react-scroll-parallax/lib/components/Parallax';

import "./_parallax.scss"

export interface ParallaxProps {
  image: string,
  min: string,
  max: string,
}

const Parallax = ({image, min, max, children}: PropsWithChildren<ParallaxProps>): ReactElement =>
  <div className="hero-container">
    <ParallaxComponent offsetYMin={min} offsetYMax={max} slowerScrollRate>
      <div
        className="hero-image"
        style={{backgroundImage: `url(${image})`}}
      />
    </ParallaxComponent>
    <div className="hero-children">{children}</div>
  </div>

export default memo(Parallax);
