import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="navbar-container10">
        <div>
          <div className="navbar-container12">
            <React.Fragment>
              <Script>{`
              (function(){
  function initNavbar() {
    const navToggle = document.querySelector(".nav-toggle")
    if (navToggle) {
      navToggle.addEventListener("click", function () {
        const navMenu = document.querySelector(".nav-menu")
        this.classList.toggle("active")
        navMenu.classList.toggle("active")

        if (this.classList.contains("active")) {
          this.querySelectorAll(".bar")[0].style.transform =
            "translateY(9px) rotate(45deg)"
          this.querySelectorAll(".bar")[1].style.opacity = "0"
          this.querySelectorAll(".bar")[2].style.transform =
            "translateY(-9px) rotate(-45deg)"
        } else {
          this.querySelectorAll(".bar")[0].style.transform = "none"
          this.querySelectorAll(".bar")[1].style.opacity = "1"
          this.querySelectorAll(".bar")[2].style.transform = "none"
        }
      })
    }

    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar")
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.padding = "10px 0"
          navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"
        } else {
          navbar.style.padding = "15px 0"
          navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)"
        }
      }
    })
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar)
  } else {
    initNavbar()
  }
})()
              `}</Script>
            </React.Fragment>
          </div>
        </div>
        <div className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="navbar-text33">
                      <img alt="Food Control Logo" src="assets/logo.png" />
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <nav className="nav-menu">
              <ul className="nav-list list">
                <li className="nav-item list-item">
                  <span className="nav-link active">
                    {props.text1 ?? (
                      <Fragment>
                        <span className="navbar-text31">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_XjJ708'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="nav-item list-item">
                  <span className="nav-link">
                    {props.text2 ?? (
                      <Fragment>
                        <span className="navbar-text30">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_8qeW9Z'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="nav-item list-item">
                  <span className="nav-link">
                    {props.text3 ?? (
                      <Fragment>
                        <span className="navbar-text36">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_HIIwl4'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="nav-item list-item">
                  <span className="nav-link">
                    {props.text4 ?? (
                      <Fragment>
                        <span className="navbar-text32">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_UwKhYP'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="nav-item list-item">
                  <span className="nav-link">
                    {props.text5 ?? (
                      <Fragment>
                        <span className="navbar-text35">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_9KPjwV'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="nav-item list-item">
                  <span className="nav-link">
                    {props.text6 ?? (
                      <Fragment>
                        <span className="navbar-text34">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_uLIa3z'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="language-selector nav-item list-item">
                  <select>
                    <option value="en" selected>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_z6GZQf'),
                        }}
                      ></span>
                    </option>
                    <option value="hu">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_gGyNKi'),
                        }}
                      ></span>
                    </option>
                  </select>
                </li>
              </ul>
            </nav>
            <div className="nav-toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
        <div>
          <div className="navbar-container19">
            <React.Fragment>
              <Script>{`
              (function(){
  function initNavbar() {
    const navToggle = document.querySelector(".navbar-toggle")
    if (navToggle) {
      navToggle.addEventListener("click", function () {
        const navMenu = document.querySelector(".navbar-menu")
        this.classList.toggle("active")
        navMenu.classList.toggle("active")

        if (this.classList.contains("active")) {
          this.querySelectorAll(".navbar-bar")[0].style.transform =
            "translateY(9px) rotate(45deg)"
          this.querySelectorAll(".navbar-bar")[1].style.opacity = "0"
          this.querySelectorAll(".navbar-bar")[2].style.transform =
            "translateY(-9px) rotate(-45deg)"
        } else {
          this.querySelectorAll(".navbar-bar")[0].style.transform = "none"
          this.querySelectorAll(".navbar-bar")[1].style.opacity = "1"
          this.querySelectorAll(".navbar-bar")[2].style.transform = "none"
        }
      })
    }

    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar-section")
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.padding = "10px 0"
          navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"
        } else {
          navbar.style.padding = "15px 0"
          navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)"
        }
      }
    })
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar)
  } else {
    initNavbar()
  }
})()
              `}</Script>
            </React.Fragment>
          </div>
        </div>
        <div className="navbar-section">
          <div className="navbar-container">
            <div className="navbar-logo">
              <span>
                <img src="assets/logo.png" alt="Food Control Logo" />
              </span>
            </div>
            <nav className="navbar-menu">
              <ul className="navbar-list list">
                <li className="navbar-item list-item">
                  <span className="navbar-link active">
                    {props.text7 ?? (
                      <Fragment>
                        <span className="navbar-text37">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_hDtIFE'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="navbar-item list-item">
                  <span className="navbar-link">
                    {props.text8 ?? (
                      <Fragment>
                        <span className="navbar-text38">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_bksrhv'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="navbar-item list-item">
                  <span className="navbar-link">
                    {props.text9 ?? (
                      <Fragment>
                        <span className="navbar-text39">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Es2r9T'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="navbar-item list-item">
                  <span className="navbar-link">
                    {props.text10 ?? (
                      <Fragment>
                        <span className="navbar-text40">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_xOW5rZ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="navbar-item list-item">
                  <span className="navbar-link">
                    {props.text11 ?? (
                      <Fragment>
                        <span className="navbar-text41">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_872h12'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="navbar-item list-item">
                  <span className="navbar-link">
                    {props.text12 ?? (
                      <Fragment>
                        <span className="navbar-text42">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_eNu-7E'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="navbar-item navbar-language-selector list-item">
                  <select>
                    <option value="en" selected>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_UmSJ1o'),
                        }}
                      ></span>
                    </option>
                    <option value="hu">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kFc8kD'),
                        }}
                      ></span>
                    </option>
                  </select>
                </li>
              </ul>
            </nav>
            <div className="navbar-toggle">
              <span className="navbar-bar"></span>
              <span className="navbar-bar"></span>
              <span className="navbar-bar"></span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-container10 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .navbar-container12 {
            display: contents;
          }
          .navbar-container19 {
            display: contents;
          }
          .navbar-text30 {
            display: inline-block;
          }
          .navbar-text31 {
            display: inline-block;
          }
          .navbar-text32 {
            display: inline-block;
          }
          .navbar-text33 {
            display: inline-block;
          }
          .navbar-text34 {
            display: inline-block;
          }
          .navbar-text35 {
            display: inline-block;
          }
          .navbar-text36 {
            display: inline-block;
          }
          .navbar-text37 {
            display: inline-block;
          }
          .navbar-text38 {
            display: inline-block;
          }
          .navbar-text39 {
            display: inline-block;
          }
          .navbar-text40 {
            display: inline-block;
          }
          .navbar-text41 {
            display: inline-block;
          }
          .navbar-text42 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  text2: undefined,
  text1: undefined,
  text4: undefined,
  text: undefined,
  text6: undefined,
  text5: undefined,
  text3: undefined,
  text7: undefined,
  text8: undefined,
  text9: undefined,
  text10: undefined,
  text11: undefined,
  text12: undefined,
}

Navbar.propTypes = {
  text2: PropTypes.element,
  text1: PropTypes.element,
  text4: PropTypes.element,
  text: PropTypes.element,
  text6: PropTypes.element,
  text5: PropTypes.element,
  text3: PropTypes.element,
  text7: PropTypes.element,
  text8: PropTypes.element,
  text9: PropTypes.element,
  text10: PropTypes.element,
  text11: PropTypes.element,
  text12: PropTypes.element,
}

export default Navbar
