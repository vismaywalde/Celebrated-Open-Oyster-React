import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <div className="hero9-actions">
            <button className="thq-button-outline hero9-button">
              <span className="hero9-text1 thq-body-small">
                {props.action2}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  image1Alt: 'AI Projects Image',
  content1:
    'Explore innovative AI projects and stay updated with the latest advancements in artificial intelligence.',
  action1: 'Learn More',
  heading1: 'Welcome to our  Project Website',
  action2: 'Get Started',
  image1Src:
    'https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODQ2MjkxNnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero9.propTypes = {
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero9
