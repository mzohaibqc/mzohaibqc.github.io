import PropTypes from "prop-types";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Section from './Section';

export default function Writings() {
  return (
    <Section id="blog">
      <h1
        className="section-big-title til hidden-xs hidden-sm"
        data-in-effect="fadeInUp"
        data-out-effect="fadeInDown"
      >
        blogging
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-holder">
              <div className="icon-holder i-size-big">
                <i className="ion-ios7-albums-outline"></i>
              </div>
              <h3> My Writings </h3>

              <div className="row">
                {/* <div className="col-xs-2 view-btn-holder">
                  <a
                    href="blog/index.html"
                    className="btn btn-cl btn-view-blog"
                  >
                    VIEW ALL
                  </a>
                </div> */}
                <OwlCarousel
                  className="article-holder  owl-theme"
                  loop
                  nav
                  items={3}
                  navText={[
                    '<span class="ion-ios7-arrow-left"></span>',
                    '<span class="ion-ios7-arrow-right"></span>'
                  ]}
                >
                  <div className="item">
                    <Article
                      title="Ant Design - Live Theme"
                      url="https://medium.com/@mzohaib.qc/ant-design-live-theme-588233ea2bbc"
                      image="antd-live-theme.png"
                      date="April 8, 2018"
                    />

                    <Article
                      title="Basics of MetaProgramming"
                      url="http://www.qc-technologies.com/single-post/2017/01/02/Basics-of-MetaProgramming"
                      image="antd-live-theme.png"
                      date="January 10, 2017"
                    />
                  </div>
                  <div className="item">

                    <Article
                      title="Ant Design Amplify Components"
                      url="https://medium.com/@mzohaib.qc/ant-design-amplify-components-94060212382f"
                      image="antd-amplify-components.png"
                      date="October 8, 2018"
                    />
                    <Article
                      title="Using Sass/Scss with CRA v1"
                      url="https://medium.com/@mzohaib.qc/ant-design-amplify-components-94060212382f"
                      image="sass-react.png"
                      date="April 13, 2018"
                    />
                  </div>
                  <div className="item">
                    <Article
                      title="Iterators and Generators"
                      url="https://medium.com/@mzohaib.qc/iterators-and-generators-9f140a3faee"
                      image="python-iterators-and-generators-n.jpg"
                      date="July 15, 2018"
                    />
                    <Article
                      title="Ant Design Dynamic/Runtime Theme"
                      url="https://medium.com/@mzohaib.qc/ant-design-dynamic-runtime-theme-1f9a1a030ba0"
                      image="antd-live-theme.png"
                      date="April 25, 2018"
                    />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}


const Article = ({
  title,
  url,
  image,
  date
}) => {
  return (
    <div className="col-sm-12">
      <div className="box-it">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={`/assets/images/${image}`}
            className="img-responsive reading-img"
            alt={title}
          />
          <div className="box-inner">
            <h4>{title}</h4>
            <h5 className="entry-date"> {date} </h5>
          </div>
        </a>
      </div>
    </div>
  )
}
Article.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
