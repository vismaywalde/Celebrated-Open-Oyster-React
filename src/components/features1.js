import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <h2 className="thq-heading-2 features1-text">
              {props.sectionTitle}
            </h2>
          </div>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2ImageAlt: 'Machine Learning Models Image',
  feature2Title: 'Machine Learning Models',
  feature3ImageAlt: 'Natural Language Processing Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1717501805972-6f44905bc53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODQ2MjkxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  mainAction: 'Upload File',
  slogan: 'Innovative AI Solutions',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1591199496609-952567151dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODQ2MjkxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Advanced Algorithms Image',
  feature3Title: 'Natural Language Processing',
  sectionTitle: 'Features',
  feature3Description:
    'Enhancing communication through AI-powered natural language processing capabilities',
  feature1Description:
    'Utilizing cutting-edge algorithms to drive AI innovation',
  feature1Title: 'Advanced Algorithms',
  secondaryAction: 'Download File',
  sectionDescription: 'Explore the key features of our AI projects',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1676411237170-ddca6e4c158a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODQ2MjkxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Implementing state-of-the-art machine learning models for optimal performance',
}

Features1.propTypes = {
  feature2ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  mainAction: PropTypes.string,
  slogan: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
  secondaryAction: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
}

export default Features1
