import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Features from '../components/features'
import Practice from '../components/practice'
import Doctor from '../components/doctor'
import Footer from '../components/footer'

const HomeBackup = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-backup-container1">
        <Head>
          <title>HomeBackup - Indere</title>
          <meta property="og:title" content="HomeBackup - Indere" />
        </Head>
        <div data-modal="practices" className="home-backup-modal1">
          <div className="home-backup-practices1">
            <div className="home-backup-heading10">
              <span className="home-backup-header10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Header_RFrjX9'),
                  }}
                ></span>
              </span>
              <svg
                viewBox="0 0 1024 1024"
                data-close="practices"
                className="home-backup-close"
              >
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
            <div className="home-backup-grid1">
              <div className="home-backup-section1">
                <div className="home-backup-heading11">
                  <span className="home-backup-header11">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_kgAcs7'),
                      }}
                    ></span>
                  </span>
                  <span className="home-backup-caption1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_DniZrR'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-backup-text100">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_2mjaGQ'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-backup-image10"
                  />
                </div>
              </div>
              <div className="home-backup-section2">
                <div className="home-backup-heading12">
                  <span className="home-backup-header12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_VXTBij'),
                      }}
                    ></span>
                  </span>
                  <span className="home-backup-caption2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_uIqXkj'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-backup-text101">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_C_6VlR'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-backup-image11"
                  />
                </div>
              </div>
              <div className="home-backup-section3">
                <div className="home-backup-heading13">
                  <span className="home-backup-header13">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_7FeiTc'),
                      }}
                    ></span>
                  </span>
                  <span className="home-backup-caption3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_kTdKs2'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-backup-text102">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_MKdpyS'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-backup-image12"
                  />
                </div>
              </div>
              <div className="home-backup-section4">
                <div className="home-backup-heading14">
                  <span className="home-backup-header14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_eubQj-'),
                      }}
                    ></span>
                  </span>
                  <span className="home-backup-caption4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_ka2Nu8'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-backup-text103">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kSfNNL'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-backup-image13"
                  />
                </div>
              </div>
              <div className="home-backup-section5">
                <div className="home-backup-heading15">
                  <span className="home-backup-header15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_umO_7s'),
                      }}
                    ></span>
                  </span>
                  <span className="home-backup-caption5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_j_b4P7'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-backup-text104">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_oanEzm'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-backup-image14"
                  />
                </div>
              </div>
              <div className="home-backup-section6">
                <div className="home-backup-heading16">
                  <span className="home-backup-header16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_Afh1wt'),
                      }}
                    ></span>
                  </span>
                  <span className="home-backup-caption6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_LHPq3j'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-backup-text105">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kNNWy7'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-backup-image15"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-backup-hero">
          <Header
            link1={
              <Fragment>
                <span className="home-backup-text106">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gDBOmg'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            link2={
              <Fragment>
                <span className="home-backup-text107">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_g1jn7O'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            link3={
              <Fragment>
                <span className="home-backup-text108">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3mEn7S'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            link4={
              <Fragment>
                <span className="home-backup-text109">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fJL2jz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            link5={
              <Fragment>
                <span className="home-backup-text110">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Sw8913'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home-backup-text111">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_nf2A5r'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home-backup-text112">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BMgGpL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home-backup-text113">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yd58VJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="home-backup-text114">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fGVT66'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="home-backup-text115">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LoGopK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
          ></Header>
          <div className="home-backup-main1">
            <div className="home-backup-content10">
              <div className="home-backup-heading17">
                <h1 className="home-backup-header17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_x6SmVu'),
                    }}
                  ></span>
                </h1>
                <p className="home-backup-caption7">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Caption_aNSPQM'),
                    }}
                  ></span>
                </p>
              </div>
              <button className="button button-main home-backup-book1">
                <img
                  alt="image"
                  src="/Icons/calendar.svg"
                  className="home-backup-image16"
                />
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Fl4LGT'),
                    }}
                  ></span>
                </span>
              </button>
            </div>
            <div className="home-backup-image17">
              <img
                alt="image"
                src="/doctor-image-1500w.png"
                className="home-backup-image18"
              />
            </div>
          </div>
          <div id="features" className="home-backup-features1">
            <div className="home-backup-content11">
              <Features
                title1={
                  <Fragment>
                    <span className="home-backup-text117">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Gb8ERJ'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="home-backup-text118">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_3V-43f'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
              ></Features>
              <Features
                title="Virtual Clinic"
                title1={
                  <Fragment>
                    <span className="home-backup-text119">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Oe3BY5'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="home-backup-text120">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Im5GAK'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
              ></Features>
              <Features
                title="Clinical results"
                title1={
                  <Fragment>
                    <span className="home-backup-text121">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_YiahbB'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                description1={
                  <Fragment>
                    <span className="home-backup-text122">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_r3G1YF'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
              ></Features>
            </div>
          </div>
          <div className="home-backup-background"></div>
        </section>
        <section className="home-backup-practices2">
          <div className="home-backup-heading18">
            <h2 className="home-backup-text123">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_20PAWE'),
                }}
              ></span>
            </h2>
            <p className="home-backup-text124">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_1eSh8H'),
                }}
              ></span>
            </p>
          </div>
          <div className="home-backup-content12">
            <div className="home-backup-grid2">
              <Link href="/">
                <a>
                  <div className="home-backup-practice-wrapper1">
                    <Practice
                      title1={
                        <Fragment>
                          <span className="home-backup-text125">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_1RDoZN'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                      description1={
                        <Fragment>
                          <span className="home-backup-text126">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_jNZ_dv'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-backup-practice-wrapper2">
                    <Practice
                      title="Orthopedics"
                      title1={
                        <Fragment>
                          <span className="home-backup-text127">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_05QGi9'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                      description1={
                        <Fragment>
                          <span className="home-backup-text128">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_PI3Et4'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-backup-practice-wrapper3">
                    <Practice
                      title="Ophtalmology"
                      title1={
                        <Fragment>
                          <span className="home-backup-text129">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ffvOL9'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                      description1={
                        <Fragment>
                          <span className="home-backup-text130">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_a3yYXm'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-backup-practice-wrapper4">
                    <Practice
                      title="Pediatrics"
                      title1={
                        <Fragment>
                          <span className="home-backup-text131">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_0-ETpM'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                      description1={
                        <Fragment>
                          <span className="home-backup-text132">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Hw0EdZ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-backup-practice-wrapper5">
                    <Practice
                      title="Nutrition"
                      title1={
                        <Fragment>
                          <span className="home-backup-text133">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_b2YfSa'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                      description1={
                        <Fragment>
                          <span className="home-backup-text134">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_IXeTaw'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-backup-practice-wrapper6">
                    <Practice
                      title="General"
                      title1={
                        <Fragment>
                          <span className="home-backup-text135">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_mqrh4b'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                      description1={
                        <Fragment>
                          <span className="home-backup-text136">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_VmI-YF'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      }
                    ></Practice>
                  </div>
                </a>
              </Link>
            </div>
            <button data-open="practices" className="button button-main">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PzIDlg'),
                  }}
                ></span>
              </span>
            </button>
          </div>
        </section>
        <section id="how-it-works" className="home-backup-why">
          <div className="home-backup-heading19">
            <h2 className="home-backup-header18">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Header__hDu6P'),
                }}
              ></span>
            </h2>
            <p className="home-backup-header19">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Header_Cwe-7T'),
                }}
              ></span>
            </p>
          </div>
          <div className="home-backup-content13">
            <div className="home-backup-video1">
              <video
                src
                poster="/video-1500w.png"
                className="home-backup-video2"
              ></video>
              <div className="home-backup-play">
                <img
                  alt="image"
                  src="/Icons/play.svg"
                  className="home-backup-image19"
                />
              </div>
            </div>
            <div className="home-backup-caption8">
              <h3 className="home-backup-header20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Header_KpKJ4Z'),
                  }}
                ></span>
              </h3>
              <p className="home-backup-header21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Header__DV6KC'),
                  }}
                ></span>
              </p>
            </div>
          </div>
        </section>
        <section className="home-backup-features2">
          <div className="home-backup-section7">
            <div className="home-backup-content14">
              <div className="home-backup-header22">
                <h2 className="home-backup-heading20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Heading_0CKQN3'),
                    }}
                  ></span>
                </h2>
                <p className="home-backup-capton1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Capton_QMCYkt'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="read-more">
                <span className="home-backup-text138">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wy4VLg'),
                    }}
                  ></span>
                </span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-backup-image20"
                />
              </div>
            </div>
            <img
              alt="image"
              src="/xray-1500w.png"
              className="home-backup-image21"
            />
          </div>
          <div className="home-backup-section8">
            <div className="home-backup-content15">
              <div className="home-backup-header23">
                <h2 className="home-backup-heading21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Heading_RFZeQ3'),
                    }}
                  ></span>
                </h2>
                <p className="home-backup-capton2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Capton_ppw1c-'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="read-more">
                <span className="home-backup-text139">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lpw8pC'),
                    }}
                  ></span>
                </span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-backup-image22"
                />
              </div>
            </div>
            <img
              alt="image"
              src="/lab-1500w.png"
              className="home-backup-image23"
            />
          </div>
          <div className="home-backup-section9">
            <div className="home-backup-content16">
              <div className="home-backup-header24">
                <h2 className="home-backup-heading22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Heading_l5xiNb'),
                    }}
                  ></span>
                </h2>
                <p className="home-backup-capton3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Capton_E03r_H'),
                    }}
                  ></span>
                </p>
              </div>
              <button className="button button-main home-backup-book2">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_x6HEJ5'),
                    }}
                  ></span>
                </span>
              </button>
            </div>
            <img
              alt="image"
              src="/examination-1500w.png"
              className="home-backup-image24"
            />
          </div>
          <button className="home-backup-book3 button button-main">
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_1L_iP1'),
                }}
              ></span>
            </span>
          </button>
        </section>
        <section id="schedule" className="home-backup-schedule">
          <div className="home-backup-content17">
            <div className="home-backup-header25">
              <h2 className="home-backup-heading23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Heading_hrJMk-'),
                  }}
                ></span>
              </h2>
              <p className="home-backup-caption9">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Caption_Wj4mcf'),
                  }}
                ></span>
              </p>
            </div>
            <div className="home-backup-types1">
              <a
                href="#book"
                className="home-backup-book-person1 button button-main button-white"
              >
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CDlEri'),
                    }}
                  ></span>
                </span>
              </a>
              <button className="button button-main button-white home-backup-book-person2">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6oi3Ul'),
                    }}
                  ></span>
                </span>
              </button>
            </div>
          </div>
        </section>
        <div className="home-backup-search1">
          <div className="home-backup-heading24">
            <h2 className="home-backup-text144">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_0-DlzL'),
                }}
              ></span>
            </h2>
            <p className="home-backup-text145">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_OHxFLK'),
                }}
              ></span>
            </p>
          </div>
          <div className="home-backup-content18">
            <div className="home-backup-type-one">
              <div className="home-backup-alphabet">
                <div data-letter="a" className="letter">
                  <span className="home-backup-text146">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_gaeU2D'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="b" className="letter">
                  <span className="home-backup-text147">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_qJgQ7f'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="c" className="letter">
                  <span className="home-backup-text148">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_fVTGSS'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="d" className="letter">
                  <span className="home-backup-text149">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_MD24zl'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="e" className="letter">
                  <span className="home-backup-text150">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_8CHqjq'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="f" className="letter">
                  <span className="home-backup-text151">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_eWmY2f'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="g" className="letter">
                  <span className="home-backup-text152">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SNNqgn'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="h" className="letter">
                  <span className="home-backup-text153">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ITR4SR'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="i" className="letter">
                  <span className="home-backup-text154">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Ift9LM'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="j" className="letter">
                  <span className="home-backup-text155">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_0eqbYf'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="k" className="letter">
                  <span className="home-backup-text156">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_gsdGmU'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="l" className="letter">
                  <span className="home-backup-text157">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_3l2eUj'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="m" className="letter">
                  <span className="home-backup-text158">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ahllLC'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="n" className="letter">
                  <span className="home-backup-text159">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_OElJ0y'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="o" className="letter">
                  <span className="home-backup-text160">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_mjUdUC'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="p" className="letter">
                  <span className="home-backup-text161">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wLzJoj'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="q" className="letter">
                  <span className="home-backup-text162">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kLHH0K'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="r" className="letter">
                  <span className="home-backup-text163">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SqjMuJ'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="s" className="letter">
                  <span className="home-backup-text164">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_FbDnMZ'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="t" className="letter">
                  <span className="home-backup-text165">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_zn_9-X'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="u" className="letter">
                  <span className="home-backup-text166">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text__2shG0'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="v" className="letter">
                  <span className="home-backup-text167">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ehq5r6'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="w" className="letter">
                  <span className="home-backup-text168">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dqFSEm'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="x" className="letter">
                  <span className="home-backup-text169">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_7DODwK'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="y" className="letter">
                  <span className="home-backup-text170">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_w0CD7d'),
                      }}
                    ></span>
                  </span>
                </div>
                <div data-letter="z" className="letter">
                  <span className="home-backup-text171">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_gFAHQ5'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <p className="home-backup-text172">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GQWQzU'),
                  }}
                ></span>
              </p>
              <div data-teleport="results" className="home-backup-results">
                <span className="home-backup-heading25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Heading_-Uaiov'),
                    }}
                  ></span>
                </span>
                <div data-results="letters" className="home-backup-list1"></div>
              </div>
            </div>
            <div className="home-backup-type-two">
              <div className="home-backup-heading26">
                <h3 className="home-backup-text173">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_35FEob'),
                    }}
                  ></span>
                </h3>
                <p className="home-backup-text174">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_t5HW29'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="home-backup-symptoms1">
                <div className="home-backup-row1">
                  <div className="symptom">
                    <span className="home-backup-text175">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_irZ_ZZ'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text176">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7gUurk'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text177">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ZtGm9w'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text178">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_NPF1uV'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text179">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_4e4iKI'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
                <div className="home-backup-row2">
                  <div className="symptom">
                    <span className="home-backup-text180">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9bkrvD'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text181">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_TNh0sW'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text182">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_bbsCSq'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text183">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_H-BqW5'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text184">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Uoc3oq'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
                <div className="home-backup-row3">
                  <div className="symptom">
                    <span className="home-backup-text185">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__-h1_e'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text186">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_RvgEpd'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text187">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_QE1GHP'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text188">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_axbtWN'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="symptom">
                    <span className="home-backup-text189">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_T9eQCU'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="book" className="home-backup-book4">
          <div className="home-backup-heading27">
            <h2 className="home-backup-text190">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_t_Zq30'),
                }}
              ></span>
            </h2>
            <p className="home-backup-text191">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text__Q-J1p'),
                }}
              ></span>
            </p>
          </div>
          <div className="home-backup-form">
            <div className="home-backup-types2">
              <div className="book-type">
                <span className="home-backup-text192">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9hI_ZA'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="book-type">
                <span className="home-backup-text193">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1rxbvl'),
                    }}
                  ></span>
                </span>
              </div>
            </div>
            <div className="home-backup-inputs">
              <input
                type="text"
                placeholder="Name"
                autoComplete="name"
                className="input book-input"
              />
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="input book-input"
              />
              <input
                type="tel"
                placeholder="Phone"
                autoComplete="tel"
                className="input book-input"
              />
              <div className="home-backup-date1">
                <input
                  type="date"
                  placeholder="Date"
                  className="input book-input"
                />
                <img
                  alt="image"
                  src="/Icons/calendar-2.svg"
                  className="home-backup-image25"
                />
              </div>
              <input
                type="text"
                placeholder="Practice"
                className="input book-input"
              />
              <div className="home-backup-lower">
                <p className="home-backup-text194">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_31ZlJy'),
                    }}
                  ></span>
                </p>
                <div className="home-backup-button">
                  <button className="home-backup-book5 button button-main">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_EMwjBl'),
                        }}
                      ></span>
                    </span>
                  </button>
                  <p className="home-backup-text196">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_9dIJxb'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-backup-meet">
          <div className="home-backup-heading28">
            <h2 className="home-backup-text197">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_HJogxt'),
                }}
              ></span>
            </h2>
            <p className="home-backup-text198">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_cB2Qag'),
                }}
              ></span>
            </p>
          </div>
          <div className="home-backup-list2">
            <div className="home-backup-controls">
              <img
                alt="image"
                src="/Icons/circle-arrow.svg"
                data-doctors="previous"
                className="arrow"
              />
              <img
                alt="image"
                src="/Icons/circle-arrow.svg"
                data-doctors="next"
                className="home-backup-forward arrow"
              />
            </div>
            <div data-teleport="doctors" className="home-backup-doctors1">
              <Doctor
                text1={
                  <Fragment>
                    <span className="home-backup-text199">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_GM9hO1'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                heading1={
                  <Fragment>
                    <span className="home-backup-text200">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_rMCs6b'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
              ></Doctor>
              <Doctor
                text1={
                  <Fragment>
                    <span className="home-backup-text201">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_dlaXEq'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                heading1={
                  <Fragment>
                    <span className="home-backup-text202">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_qf9g8k'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                imageSrc="/Doctors/doctor-2-300w.png"
              ></Doctor>
              <Doctor
                text1={
                  <Fragment>
                    <span className="home-backup-text203">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_sWDNWh'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                heading1={
                  <Fragment>
                    <span className="home-backup-text204">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_I7_SDy'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                imageSrc="/Doctors/doctor-3-300w.png"
              ></Doctor>
              <Doctor
                text1={
                  <Fragment>
                    <span className="home-backup-text205">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_rHNmfZ'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                heading1={
                  <Fragment>
                    <span className="home-backup-text206">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_LoLM7W'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                imageSrc="/Doctors/doctor-4-300w.png"
              ></Doctor>
            </div>
          </div>
          <div className="home-backup-search2">
            <input
              type="text"
              placeholder="Search by name"
              className="home-backup-textinput6 input book-input"
            />
            <button className="button button-main home-backup-book6">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dJXPVV'),
                  }}
                ></span>
              </span>
            </button>
          </div>
        </section>
        <section className="home-backup-news">
          <div className="home-backup-heading29">
            <h2 className="home-backup-text208">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_1Ksh30'),
                }}
              ></span>
            </h2>
            <p className="home-backup-text209">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_kXcJf0'),
                }}
              ></span>
            </p>
          </div>
          <div className="home-backup-list3">
            <div className="home-backup-item1">
              <div className="home-backup-image26">
                <img
                  alt="image"
                  src="/News/news-logo-1500w.png"
                  className="home-backup-image27"
                />
              </div>
              <div className="home-backup-content19">
                <div className="home-backup-details1">
                  <span className="home-backup-date2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Date_S6aXT1'),
                      }}
                    ></span>
                  </span>
                  <p className="home-backup-quick-description1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('QuickDescription_frzyVF'),
                      }}
                    ></span>
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-backup-text210">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_AFzFc0'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-backup-image28"
                  />
                </div>
              </div>
            </div>
            <div className="home-backup-item2">
              <div className="home-backup-image29">
                <img
                  alt="image"
                  src="/News/news-1-1500w.png"
                  className="home-backup-image30"
                />
              </div>
              <div className="home-backup-content20">
                <div className="home-backup-details2">
                  <span className="home-backup-date3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Date_jy2PYP'),
                      }}
                    ></span>
                  </span>
                  <p className="home-backup-quick-description2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('QuickDescription_iNy_Ly'),
                      }}
                    ></span>
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-backup-text211">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_r7EruQ'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-backup-image31"
                  />
                </div>
              </div>
            </div>
            <div className="home-backup-item3">
              <div className="home-backup-image32">
                <img
                  alt="image"
                  src="/News/news-2-1500w.png"
                  className="home-backup-image33"
                />
              </div>
              <div className="home-backup-content21">
                <div className="home-backup-details3">
                  <span className="home-backup-date4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Date_5EKlYF'),
                      }}
                    ></span>
                  </span>
                  <p className="home-backup-quick-description3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('QuickDescription_K-Y9j_'),
                      }}
                    ></span>
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-backup-text212">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_h3cZko'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-backup-image34"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-backup-download">
          <div className="home-backup-main2">
            <img
              alt="image"
              src="/phone-1500w.png"
              className="home-backup-image35"
            />
            <div className="home-backup-content22">
              <h2 className="home-backup-text213">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dzBh_a'),
                  }}
                ></span>
              </h2>
              <div className="home-backup-buttons">
                <button className="home-backup-ios button button-main">
                  <img
                    alt="image"
                    src="/Icons/apple.svg"
                    className="home-backup-image36"
                  />
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_9WPZL7'),
                      }}
                    ></span>
                  </span>
                </button>
                <button className="button button-main home-backup-android">
                  <img
                    alt="image"
                    src="/Icons/android.svg"
                    className="home-backup-image37"
                  />
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_WGKmEY'),
                      }}
                    ></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer
          header2={
            <Fragment>
              <span className="home-backup-text216">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_55I0v2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link102={
            <Fragment>
              <span className="home-backup-text217">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PaaMri'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link112={
            <Fragment>
              <span className="home-backup-text218">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4aG6Hx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          header21={
            <Fragment>
              <span className="home-backup-text219">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PghG8f'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link1121={
            <Fragment>
              <span className="home-backup-text220">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sjt0ZT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer>
        <div>
          <div className="home-backup-container3">
            <React.Fragment>
              <React.Fragment>
                <Script>{`
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
`}</Script>
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
        <div>
          <div className="home-backup-container5">
            <React.Fragment>
              <React.Fragment>
                <Script>{`
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
`}</Script>
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
        <div>
          <div className="home-backup-container7">
            <React.Fragment>
              <Script>{`
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
`}</Script>
            </React.Fragment>
          </div>
        </div>
        <div>
          <div className="home-backup-container9">
            <React.Fragment>
              <Script>{`
              (function(){
  // Add Font Awesome for icons const fontAwesome = document.createElement('link'); fontAwesome.rel = 'stylesheet'; fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'; document.head.appendChild(fontAwesome);
})()
              `}</Script>
            </React.Fragment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-backup-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            scroll-behavior: smooth;
          }
          .home-backup-modal1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            z-index: 200;
            position: fixed;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            backdrop-filter: blur(4px);
            justify-content: center;
          }
          .home-backup-practices1 {
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            box-shadow: 0px 0px 25px -2px rgba(66, 68, 90, 0.4);
            align-items: center;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-backup-heading10 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-backup-header10 {
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-backup-close {
            width: 24px;
            cursor: pointer;
            height: 24px;
            transition: 0.3s;
          }
          .home-backup-close:hover {
            opacity: 0.5;
          }
          .home-backup-grid1 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-backup-section1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-backup-heading11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-header11 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-backup-caption1 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-backup-text100 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-backup-image10 {
            width: 12px;
            object-fit: cover;
          }
          .home-backup-section2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-backup-heading12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-header12 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-backup-caption2 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-backup-text101 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-backup-image11 {
            width: 12px;
            object-fit: cover;
          }
          .home-backup-section3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-backup-heading13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-header13 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-backup-caption3 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-backup-text102 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-backup-image12 {
            width: 12px;
            object-fit: cover;
          }
          .home-backup-section4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-backup-heading14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-header14 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-backup-caption4 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-backup-text103 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-backup-image13 {
            width: 12px;
            object-fit: cover;
          }
          .home-backup-section5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-backup-heading15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-header15 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-backup-caption5 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-backup-text104 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-backup-image14 {
            width: 12px;
            object-fit: cover;
          }
          .home-backup-section6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-backup-heading16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-header16 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-backup-caption6 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-backup-text105 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-backup-image15 {
            width: 12px;
            object-fit: cover;
          }
          .home-backup-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-backup-text106 {
            display: inline-block;
          }
          .home-backup-text107 {
            display: inline-block;
          }
          .home-backup-text108 {
            display: inline-block;
          }
          .home-backup-text109 {
            display: inline-block;
          }
          .home-backup-text110 {
            display: inline-block;
          }
          .home-backup-text111 {
            display: inline-block;
          }
          .home-backup-text112 {
            display: inline-block;
          }
          .home-backup-text113 {
            display: inline-block;
          }
          .home-backup-text114 {
            display: inline-block;
          }
          .home-backup-text115 {
            display: inline-block;
          }
          .home-backup-main1 {
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1440px;
            align-items: stretch;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-backup-content10 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .home-backup-heading17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-backup-header17 {
            width: 100%;
            font-size: 62px;
            max-width: 750px;
            font-style: normal;
            font-weight: 600;
            line-height: 74px;
          }
          .home-backup-caption7 {
            width: 100%;
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-backup-image16 {
            width: 18px;
            object-fit: cover;
          }
          .home-backup-image17 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-backup-image18 {
            height: 95%;
            object-fit: cover;
          }
          .home-backup-features1 {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            background-color: #2461ff;
          }
          .home-backup-content11 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
          }
          .home-backup-text117 {
            display: inline-block;
          }
          .home-backup-text118 {
            display: inline-block;
          }
          .home-backup-text119 {
            display: inline-block;
          }
          .home-backup-text120 {
            display: inline-block;
          }
          .home-backup-text121 {
            display: inline-block;
          }
          .home-backup-text122 {
            display: inline-block;
          }
          .home-backup-background {
            right: 0px;
            width: 37%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #d0f4fd;
          }
          .home-backup-practices2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: 120px;
            flex-direction: row;
            padding-bottom: 120px;
          }
          .home-backup-heading18 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-text123 {
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
          }
          .home-backup-text124 {
            font-size: 18px;
            max-width: 385px;
            line-height: 27px;
          }
          .home-backup-content12 {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-grid2 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-backup-practice-wrapper1 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-backup-text125 {
            display: inline-block;
          }
          .home-backup-text126 {
            display: inline-block;
          }
          .home-backup-practice-wrapper2 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-backup-text127 {
            display: inline-block;
          }
          .home-backup-text128 {
            display: inline-block;
          }
          .home-backup-practice-wrapper3 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-backup-text129 {
            display: inline-block;
          }
          .home-backup-text130 {
            display: inline-block;
          }
          .home-backup-practice-wrapper4 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-backup-text131 {
            display: inline-block;
          }
          .home-backup-text132 {
            display: inline-block;
          }
          .home-backup-practice-wrapper5 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-backup-text133 {
            display: inline-block;
          }
          .home-backup-text134 {
            display: inline-block;
          }
          .home-backup-practice-wrapper6 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-backup-text135 {
            display: inline-block;
          }
          .home-backup-text136 {
            display: inline-block;
          }
          .home-backup-why {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #d0f4fd;
          }
          .home-backup-heading19 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-backup-header18 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-backup-header19 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-backup-content13 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-backup-video1 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-backup-video2 {
            width: 100%;
          }
          .home-backup-play {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            cursor: pointer;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-backup-play:hover {
            background-color: rgba(0, 0, 0, 0.3);
          }
          .home-backup-image19 {
            width: 80px;
            object-fit: cover;
          }
          .home-backup-caption8 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-backup-header20 {
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 36px;
          }
          .home-backup-header21 {
            max-width: 600px;
            text-align: center;
            line-height: 24px;
          }
          .home-backup-features2 {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-backup-section7 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-backup-content14 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-header22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-heading20 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-backup-capton1 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-backup-text138 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-backup-image20 {
            width: 12px;
            object-fit: cover;
          }
          .home-backup-image21 {
            width: 400px;
            object-fit: cover;
          }
          .home-backup-section8 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: space-between;
          }
          .home-backup-content15 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-header23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-heading21 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-backup-capton2 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-backup-text139 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-backup-image22 {
            width: 12px;
            object-fit: cover;
          }
          .home-backup-image23 {
            width: 520px;
            object-fit: cover;
          }
          .home-backup-section9 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-backup-content16 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-header24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-heading22 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-backup-capton3 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-backup-image24 {
            width: 580px;
            object-fit: cover;
          }
          .home-backup-book3 {
            display: none;
          }
          .home-backup-schedule {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-backup-content17 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: column;
            background-color: #2461ff;
          }
          .home-backup-header25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-backup-heading23 {
            color: #ffffff;
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-backup-caption9 {
            color: rgba(255, 255, 255, 0.8);
            font-size: 18px;
            max-width: 900px;
            text-align: center;
            line-height: 27px;
          }
          .home-backup-types1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-backup-book-person1 {
            text-decoration: none;
          }
          .home-backup-search1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: stretch;
            border-color: #b4b9c6;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: 110px;
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-backup-heading24 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-text144 {
            font-size: 56px;
            max-width: 385px;
            font-style: normal;
            font-weight: 600;
          }
          .home-backup-text145 {
            font-size: 18px;
            max-width: 385px;
            line-height: 27px;
          }
          .home-backup-content18 {
            gap: var(--dl-layout-space-fiveunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-type-one {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #b4b9c6;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-backup-alphabet {
            display: grid;
            grid-gap: var(--dl-layout-space-oneandhalfunits);
            align-items: center;
            justify-content: center;
            grid-template-columns: repeat(10, minmax(60px, 1fr));
          }
          .home-backup-text146 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text147 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text148 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text149 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text150 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text151 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text152 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text153 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text154 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text155 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text156 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text157 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text158 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text159 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text160 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text161 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text162 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text163 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text164 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text165 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text166 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text167 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text168 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text169 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text170 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text171 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-backup-text172 {
            max-width: 700px;
            line-height: 24px;
          }
          .home-backup-results {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-heading25 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-list1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-type-two {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-heading26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-text173 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
          }
          .home-backup-text174 {
            max-width: 700px;
            line-height: 24px;
          }
          .home-backup-symptoms1 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            grid-gap: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-row1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-backup-text175 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text176 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text177 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text178 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text179 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-row2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-backup-text180 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text181 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text182 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text183 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text184 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-row3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-backup-text185 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text186 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text187 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text188 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text189 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-book4 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 120px;
            border-color: #b4b9c6;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-backup-heading27 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-backup-text190 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-backup-text191 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-backup-form {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-backup-types2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-backup-text192 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-text193 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-backup-inputs {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-backup-date1 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-backup-image25 {
            width: 20px;
            object-fit: cover;
            border-color: #b4b9c6;
            padding-bottom: var(--dl-layout-space-unit);
            border-bottom-width: 1px;
          }
          .home-backup-lower {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-text194 {
            font-size: 10px;
            max-width: 700px;
            text-align: left;
            line-height: 15px;
          }
          .home-backup-button {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-backup-book5 {
            width: 100%;
          }
          .home-backup-text196 {
            font-size: 10px;
            max-width: 700px;
            text-align: left;
            line-height: 15px;
          }
          .home-backup-meet {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #d0f4fd;
          }
          .home-backup-heading28 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-backup-text197 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-backup-text198 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-backup-list2 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: row;
          }
          .home-backup-controls {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-backup-forward {
            transform: rotate(180deg);
          }
          .home-backup-doctors1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-backup-text199 {
            display: inline-block;
          }
          .home-backup-text200 {
            display: inline-block;
          }
          .home-backup-text201 {
            display: inline-block;
          }
          .home-backup-text202 {
            display: inline-block;
          }
          .home-backup-text203 {
            display: inline-block;
          }
          .home-backup-text204 {
            display: inline-block;
          }
          .home-backup-text205 {
            display: inline-block;
          }
          .home-backup-text206 {
            display: inline-block;
          }
          .home-backup-search2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 570px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-backup-textinput6 {
            flex: 1;
            height: 100%;
          }
          .home-backup-news {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 200px;
          }
          .home-backup-heading29 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-backup-text208 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-backup-text209 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-backup-list3 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: row;
          }
          .home-backup-item1 {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #2461ff;
          }
          .home-backup-image26 {
            width: 100%;
            height: 275px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-backup-image27 {
            height: 50px;
            object-fit: cover;
          }
          .home-backup-content19 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-backup-details1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-date2 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-backup-quick-description1 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-backup-text210 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-backup-image28 {
            width: 12px;
            object-fit: cover;
          }
          .home-backup-item2 {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f5f5f7;
          }
          .home-backup-image29 {
            width: 100%;
            height: 274px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-backup-image30 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-backup-content20 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-backup-details2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-date3 {
            color: #000000;
            line-height: 24px;
          }
          .home-backup-quick-description2 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-backup-text211 {
            color: #000000;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-backup-image31 {
            width: 12px;
            object-fit: cover;
          }
          .home-backup-item3 {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f5f5f7;
          }
          .home-backup-image32 {
            width: 100%;
            height: 274px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-backup-image33 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-backup-content21 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-backup-details3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-backup-date4 {
            color: #000000;
            line-height: 24px;
          }
          .home-backup-quick-description3 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-backup-text212 {
            color: #000000;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-backup-image34 {
            width: 12px;
            object-fit: cover;
          }
          .home-backup-download {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-backup-main2 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
            background-color: #d0f4fd;
          }
          .home-backup-image35 {
            height: 565px;
            margin-top: -80px;
            object-fit: cover;
          }
          .home-backup-content22 {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: 130px;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-backup-text213 {
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
            line-height: 48px;
          }
          .home-backup-buttons {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-backup-ios {
            gap: var(--dl-layout-space-halfunit);
          }
          .home-backup-image36 {
            width: 16px;
            object-fit: cover;
          }
          .home-backup-image37 {
            width: 16px;
            object-fit: cover;
          }
          .home-backup-text216 {
            display: inline-block;
          }
          .home-backup-text217 {
            display: inline-block;
          }
          .home-backup-text218 {
            display: inline-block;
          }
          .home-backup-text219 {
            display: inline-block;
          }
          .home-backup-text220 {
            display: inline-block;
          }
          .home-backup-container3 {
            display: contents;
          }
          .home-backup-container5 {
            display: contents;
          }
          .home-backup-container7 {
            display: contents;
          }
          .home-backup-container9 {
            display: contents;
          }
          @media (max-width: 1200px) {
            .home-backup-header17 {
              font-size: 62px;
              font-style: normal;
              font-weight: 600;
              line-height: 74px;
            }
          }
          @media (max-width: 991px) {
            .home-backup-hero {
              flex: 1;
              height: 0px;
            }
            .home-backup-main1 {
              flex-direction: column;
            }
            .home-backup-content10 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-backup-header17 {
              max-width: 75%;
            }
            .home-backup-caption7 {
              max-width: 75%;
            }
            .home-backup-image17 {
              flex: 0 0 auto;
              align-items: flex-end;
              padding-right: var(--dl-layout-space-twounits);
              justify-content: flex-end;
            }
            .home-backup-features1 {
              padding-top: var(--dl-layout-space-fourunits);
              flex-direction: row;
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-backup-content11 {
              flex-direction: column;
            }
            .home-backup-background {
              left: 0px;
              width: 100%;
              bottom: 0px;
              height: 55%;
              position: absolute;
              justify-content: flex-end;
            }
            .home-backup-practices2 {
              flex-direction: column;
            }
            .home-backup-why {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-backup-features2 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-backup-section7 {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-backup-image21 {
              width: 100%;
            }
            .home-backup-section8 {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-backup-image23 {
              width: 100%;
            }
            .home-backup-section9 {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-backup-image24 {
              width: 100%;
            }
            .home-backup-schedule {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-backup-types1 {
              width: 100%;
              flex-direction: column;
            }
            .home-backup-book-person1 {
              width: 50%;
            }
            .home-backup-book-person2 {
              width: 50%;
            }
            .home-backup-search1 {
              width: 100%;
              flex-direction: column;
            }
            .home-backup-heading24 {
              align-items: center;
            }
            .home-backup-text144 {
              max-width: 100%;
              text-align: center;
            }
            .home-backup-text145 {
              text-align: center;
            }
            .home-backup-content18 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-backup-type-one {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              align-items: center;
              padding-bottom: var(--dl-layout-space-threeunits);
              justify-content: center;
            }
            .home-backup-alphabet {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-backup-text172 {
              text-align: center;
            }
            .home-backup-type-two {
              gap: var(--dl-layout-space-twounits);
            }
            .home-backup-heading26 {
              align-items: center;
            }
            .home-backup-text173 {
              text-align: center;
            }
            .home-backup-text174 {
              text-align: center;
            }
            .home-backup-symptoms1 {
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-backup-row1 {
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: center;
            }
            .home-backup-row2 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-backup-row3 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-backup-meet {
              padding-right: 0px;
            }
            .home-backup-heading28 {
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-backup-list2 {
              position: relative;
              flex-direction: column-reverse;
            }
            .home-backup-controls {
              gap: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-fiveunits);
              flex-direction: row;
            }
            .home-backup-doctors1 {
              overflow: hidden;
            }
            .home-backup-search2 {
              gap: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-fiveunits);
              flex-direction: column;
            }
            .home-backup-book6 {
              width: 100%;
            }
            .home-backup-list3 {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .home-backup-item1 {
              height: auto;
            }
            .home-backup-image26 {
              height: 280px;
            }
            .home-backup-content19 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-twounits);
              justify-content: flex-start;
            }
            .home-backup-quick-description1 {
              font-size: 18px;
            }
            .home-backup-item2 {
              height: auto;
            }
            .home-backup-image29 {
              height: 280px;
            }
            .home-backup-content20 {
              gap: var(--dl-layout-space-twounits);
              padding: var(--dl-layout-space-twounits);
              justify-content: flex-start;
            }
            .home-backup-quick-description2 {
              font-size: 18px;
            }
            .home-backup-item3 {
              height: auto;
            }
            .home-backup-image32 {
              height: 280px;
            }
            .home-backup-content21 {
              gap: var(--dl-layout-space-twounits);
              padding: var(--dl-layout-space-twounits);
              justify-content: flex-start;
            }
            .home-backup-quick-description3 {
              font-size: 18px;
            }
            .home-backup-content22 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .home-backup-main1 {
              gap: var(--dl-layout-space-threeunits);
              align-items: flex-end;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .home-backup-header17 {
              font-size: 32px;
              max-width: 70%;
              line-height: 38px;
            }
            .home-backup-caption7 {
              font-size: 16px;
              max-width: 70%;
              line-height: 24px;
            }
            .home-backup-content11 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-backup-practices2 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-backup-heading18 {
              gap: var(--dl-layout-space-unit);
            }
            .home-backup-text123 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-backup-text124 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-backup-content12 {
              gap: var(--dl-layout-space-threeunits);
              width: 100%;
            }
            .home-backup-grid2 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-backup-why {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-backup-header18 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-backup-header19 {
              font-size: 14px;
              max-width: 60%;
              line-height: 21px;
            }
            .home-backup-content13 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-backup-header20 {
              font-size: 22px;
              line-height: 33px;
            }
            .home-backup-header21 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-backup-features2 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-backup-content14 {
              gap: var(--dl-layout-space-unit);
            }
            .home-backup-heading20 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-backup-capton1 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-backup-heading21 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-backup-capton2 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-backup-heading22 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-backup-capton3 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-backup-book2 {
              display: none;
            }
            .home-backup-book3 {
              width: 100%;
              display: flex;
            }
            .home-backup-schedule {
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-backup-content17 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-backup-heading23 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-backup-caption9 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-backup-types1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-backup-book-person1 {
              width: 80%;
            }
            .home-backup-book-person2 {
              width: 80%;
            }
            .home-backup-search1 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-backup-heading24 {
              gap: var(--dl-layout-space-unit);
            }
            .home-backup-text144 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-backup-text145 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-backup-alphabet {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-backup-symptoms1 {
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .home-backup-book4 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-backup-heading27 {
              gap: var(--dl-layout-space-unit);
            }
            .home-backup-text190 {
              font-size: 24px;
            }
            .home-backup-text191 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-backup-form {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-backup-types2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-backup-inputs {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-backup-meet {
              gap: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-backup-heading28 {
              gap: var(--dl-layout-space-unit);
              padding-right: 0px;
            }
            .home-backup-text197 {
              font-size: 24px;
            }
            .home-backup-text198 {
              font-size: 14px;
              max-width: 80%;
            }
            .home-backup-list2 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-backup-controls {
              padding-right: 0px;
            }
            .home-backup-doctors1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-backup-search2 {
              padding-right: 0px;
            }
            .home-backup-news {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-backup-heading29 {
              gap: var(--dl-layout-space-unit);
            }
            .home-backup-text208 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-backup-text209 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-backup-date2 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-backup-date3 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-backup-date4 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-backup-main2 {
              align-items: center;
              flex-direction: column-reverse;
            }
            .home-backup-image35 {
              height: 620px;
              margin-top: 0px;
            }
            .home-backup-content22 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-backup-text213 {
              max-width: 500px;
            }
            .home-backup-buttons {
              width: 100%;
              flex-direction: column;
            }
            .home-backup-ios {
              width: 80%;
            }
            .home-backup-android {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .home-backup-content10 {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-backup-header17 {
              max-width: 80%;
            }
            .home-backup-caption7 {
              max-width: 100%;
            }
            .home-backup-book1 {
              width: 100%;
            }
            .home-backup-image18 {
              max-height: 500px;
            }
            .home-backup-types2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default HomeBackup

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
