import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <header className="wow animated fadeInDown">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand mb-1" href="/">
                <img src="images/logo.png" className="img-fluid" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  {/*  <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown"> <a className="dropdown-item" href="/">Action</a> <a className="dropdown-item" href="/">Another action</a> <a className="dropdown-item" href="/">Something else here</a> </div>
          </li>
          <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pricing</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown"> <a className="dropdown-item" href="/">Action</a> <a className="dropdown-item" href="/">Another action</a> <a className="dropdown-item" href="/">Something else here</a> </div>
          </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/pricing">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="clickbtn btn-bg" to="/sign-up">
                      Sign Up Free
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <section className="banner text-center">
          <div className="container">
            <h2 className="heading wow animated fadeInUp">
              Social Media Analytics Platform
            </h2>
            <p className="wow animated fadeInUp">
              Get instant access to online mentions, grow customer satisfaction
              and sales.
            </p>
            <a className="clickbtn btn-bg wow animated fadeInUp" href="/">
              Watch Video
            </a>
            <figure>
              <img src="images/banner-img.png" className="img-fluid" alt="" />
            </figure>
          </div>
        </section>
        <section className="analytics">
          <div className="container">
            <h2 className="heading text-center wow animated fadeInUp">
              Social Media Analytics Platform
            </h2>
            <div className="row">
              <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6">
                <div className="analytic-types text-center wow animated fadeInLeft">
                  <div className="iconframe get-social">
                    <img
                      src="images/get-social.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h3>
                    Get Social
                    <br />
                    Insights
                  </h3>
                  <p>
                    Discover what people are saying online about your brand - as
                    it unfolds in real time. We gives you instant access to
                    mentions
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6">
                <div className="analytic-types text-center wow animated fadeInLeft">
                  <div className="iconframe reach-customer">
                    <img
                      src="images/reach-customer.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h3>
                    Reach
                    <br />
                    Customers. Fast.
                  </h3>
                  <p>
                    React and engage quickly to real-time comments made about
                    your brand. Follow-up on positive comments from your brand
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6">
                <div className="analytic-types text-center wow animated fadeInRight">
                  <div className="iconframe better">
                    <img src="images/better.png" alt="" className="img-fluid" />
                  </div>
                  <h3>
                    Better Decisions with
                    <br />
                    Predictive Analytics
                  </h3>
                  <p>
                    Gain clarity on future company performance and receive
                    recommendations on how to improve outcomes.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6">
                <div className="analytic-types text-center wow animated fadeInRight">
                  <div className="iconframe detact">
                    <img src="images/detact.png" alt="" className="img-fluid" />
                  </div>
                  <h3>
                    Detect Sales
                    <br />
                    Opportunities.
                  </h3>
                  <p>
                    80% of consumers do research or ask online before making a
                    buying decision. Brand24 gives you the listening tools to
                    find these leads,
                  </p>
                </div>
              </div>
            </div>
            <div className="analytic-sap"></div>
            <div className="row">
              <div className="col-lg-5 col-xl-5 col-md-6">
                <div className="analytic-det wow animated fadeInLeft">
                  <h2 className="heading">
                    All-in-one hashtag
                    <br />
                    analytics tool
                  </h2>
                  <p>
                    Learn how many times a hashtag have been used on Twitter,
                    Instagram, or Facebook.Track the volume chart to see how
                    your hashtags trend.
                  </p>
                  <p>
                    <a href="/" className="clickbtntrans">
                      Track Volume
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-1 col-xl-1 hidemob"></div>
              <div className="col-lg-6 col-xl-6 col-md-6 text-right">
                <figure className="wow animated fadeInRight">
                  <img
                    src="images/all-in-one.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
            <div className="analytic-sap"></div>
            <div className="row">
              <div className="col-lg-6 col-xl-6 col-md-6">
                <figure className="wow animated fadeInLeft">
                  <img src="images/smr.png" alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="col-lg-1 col-xl-1 hidemob"></div>
              <div className="col-lg-5 col-xl-5 col-md-6">
                <div className="analytic-det wow animated fadeInRight">
                  <h2 className="heading">
                    Social media reach
                    <br />
                    of your hashtags
                  </h2>
                  <p>
                    Use hashtag analytics to find out what social media reach
                    they generate across social media platforms and other
                    sources. There's the chart, too.
                  </p>
                  <p>
                    <a href="/" className="clickbtntrans">
                      Track Reach
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="analytic-sap"></div>
            <div className="row">
              <div className="col-lg-5 col-xl-5 col-md-6">
                <div className="analytic-det wow animated fadeInLeft">
                  <h2 className="heading">
                    Most active profiles using your hashtags
                  </h2>
                  <p>
                    Hashtag analytics shows social media profiles who use your
                    hashtags most often. How about turning them into your brand
                    ambassadors?
                  </p>
                  <p>
                    <a href="/" className="clickbtntrans">
                      DISCOVER MOST ACTIVE AUTHORS
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-1 col-xl-1 hidemob"></div>
              <div className="col-lg-6 col-xl-6 col-md-6 text-right">
                <figure className="wow animated fadeInRight">
                  <img src="images/map.png" alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
            <div className="analytic-sap"></div>
            <div className="row">
              <div className="col-lg-6 col-xl-6 col-md-6">
                <figure className="wow animated fadeInLeft">
                  <img
                    src="images/all-in-one.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-lg-1 col-xl-1 hidemob"></div>
              <div className="col-lg-5 col-xl-5 col-md-6">
                <div className="analytic-det wow animated fadeInRight">
                  <h2 className="heading">
                    Daily / weekly /<br />
                    monthly reports
                  </h2>
                  <p>
                    Stay up to date with the performance of your hashtags on
                    Twitter, Instagram, Facebook, or Google+ thanks to email
                    reports delivered directly to your inbox.
                  </p>
                  <p>
                    <a href="/" className="clickbtntrans">
                      Get Hashtag Reports
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="analysis text-center">
          <div className="container">
            <h2 className="heading wow animated fadeInUp">
              Over 100,000 companies use Social Analysis to monitor the web.
            </h2>
            <p className="wow animated fadeInUp">
              Whether you're a one-person business, startup or Fortune 500
              company,
              <span>
                Social Analysis helps you discover your digital footprint
                worldwide.
              </span>
            </p>
            <a
              className="clickbtn btn-bg wow animated fadeInUp"
              href="/"
            >
              Watch Video
            </a>
            <div className="playicon wow animated fadeInUp">
              <img src="images/play-icon.png" className="img-fluid" alt="" />
              DISCOVER SOCIAL MEDIA MONITORING
            </div>
          </div>
        </section>
        <section className="app-section text-center">
          <div className="container">
            <h2 className="heading wow animated fadeInUp">
              Social Media Analytics Platform
            </h2>
            <p className="wow animated fadeInUp">
              Get instant access to online mentions, grow customer satisfaction
              and sales.
            </p>
            <p className="apps-store wow animated fadeInUp">
              <a href="/">
                <img src="images/app-store.jpg" className="img-fluid" alt="" />
              </a>
              <a href="/">
                <img src="images/play-store.jpg" className="img-fluid" alt="" />
              </a>
            </p>
            <figure>
              <img
                src="images/social-media-share.jpg"
                className="img-fluid"
                alt=""
              />
            </figure>
          </div>
        </section>
      </Fragment>
    );
  }
}
