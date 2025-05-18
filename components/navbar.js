import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="navbar-container1">
        <div>
          <div className="navbar-container3">
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
                    <span className="navbar-text23">
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
                        <span className="navbar-text21">
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
                        <span className="navbar-text20">
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
                        <span className="navbar-text26">
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
                        <span className="navbar-text22">
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
                        <span className="navbar-text25">
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
                        <span className="navbar-text24">
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
      </div>
      <style jsx>
        {`
          .navbar-container1 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .navbar-container3 {
            display: contents;
          }
          .navbar-text20 {
            display: inline-block;
          }
          .navbar-text21 {
            display: inline-block;
          }
          .navbar-text22 {
            display: inline-block;
          }
          .navbar-text23 {
            display: inline-block;
          }
          .navbar-text24 {
            display: inline-block;
          }
          .navbar-text25 {
            display: inline-block;
          }
          .navbar-text26 {
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
}

Navbar.propTypes = {
  text2: PropTypes.element,
  text1: PropTypes.element,
  text4: PropTypes.element,
  text: PropTypes.element,
  text6: PropTypes.element,
  text5: PropTypes.element,
  text3: PropTypes.element,
}

export default Navbar
