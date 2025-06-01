import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const ScientificProjects = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="scientific-projects-container10">
        <Head>
          <title>scientific-projects - Indere</title>
          <meta property="og:title" content="scientific-projects - Indere" />
        </Head>
        <Navbar
          link1={
            <Fragment>
              <span className="scientific-projects-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Zi3s04'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="scientific-projects-text101">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Orft5X'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="scientific-projects-text102">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WvGHNY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="scientific-projects-text103">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AYDaI2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="scientific-projects-text104">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_60ytE_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="scientific-projects-text105">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ucra2u'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="scientific-projects-text106">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kJAy8T'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="scientific-projects-text107">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_k0REdC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="scientific-projects-text108">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_68yNIy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navbarroot-class-name4"
        ></Navbar>
        <section className="projects-intro">
          <section className="projects-intro">
            <h1 className="scientific-projects-text109 research-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_CxlbMV'),
                }}
              ></span>
            </h1>
          </section>
          <div className="projects-intro-container">
            <div className="projects-intro-content">
              <p className="scientific-projects-text110">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_juthWu'),
                  }}
                ></span>
              </p>
              <p className="scientific-projects-text111">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5RK8I8'),
                  }}
                ></span>
              </p>
              <p>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dK6B6q'),
                  }}
                ></span>
              </p>
            </div>
          </div>
        </section>
        <section className="projects-section">
          <div className="projects-container">
            <div className="project-card">
              <div className="project-image">
                <img
                  alt="Microbiological Control System"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/projects/projekt1-1200w.webp"
                  srcSet="/projects//projekt1-1200w.webp 1200w, /projects/projekt1-tablet.webp 800w, /projects/projekt1-mobile.webp 480w"
                />
              </div>
              <div className="project-content">
                <h3>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xlfhtm'),
                    }}
                  ></span>
                </h3>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Zk01lW'),
                    }}
                  ></span>
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gfvkuD'),
                    }}
                  ></span>
                </p>
                <div className="project-funding">
                  <img
                    alt="NKFIA Support"
                    sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                    src="/projects/nkfi-1200w.webp"
                    srcSet="/projects//nkfi-1200w.webp 1200w, /projects/nkfi-tablet.webp 800w, /projects/nkfi-mobile.webp 480w"
                  />
                </div>
              </div>
            </div>
            <div className="reverse project-card">
              <div className="project-image">
                <img
                  alt="Food Waste Research"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/projects/projekt2-1200w.webp"
                  srcSet="/projects//projekt2-1200w.webp 1200w, /projects/projekt2-tablet.webp 800w, /projects/projekt2-mobile.webp 480w"
                />
              </div>
              <div className="project-content">
                <h3>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kndQAp'),
                    }}
                  ></span>
                </h3>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ANRJlM'),
                    }}
                  ></span>
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_AIm9_0'),
                    }}
                  ></span>
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Wn_B_4'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img
                  alt="Rapid Microbiological Control"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/projects/projekt3-1200w.webp"
                  srcSet="/projects//projekt3-1200w.webp 1200w, /projects/projekt3-tablet.webp 800w, /projects/projekt3-mobile.webp 480w"
                />
              </div>
              <div className="project-content">
                <h3>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6cu4x3'),
                    }}
                  ></span>
                </h3>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Tt9I66'),
                    }}
                  ></span>
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_J7LBDO'),
                    }}
                  ></span>
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gFcn3-'),
                    }}
                  ></span>
                </p>
                <div className="project-link">
                  <a
                    href="http://kapinfood.hu/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="project-btn">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_JccQGB'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="reverse project-card">
              <div className="project-image">
                <img
                  alt="Dietary Cooking Management"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/projects/projekt4-1200w.webp"
                  srcSet="/projects//projekt4-1200w.webp 1200w, /projects/projekt4-tablet.webp 800w, /projects/projekt4-mobile.webp 480w"
                />
              </div>
              <div className="project-content">
                <h3>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WmCpOZ'),
                    }}
                  ></span>
                </h3>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-C6FeO'),
                    }}
                  ></span>
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_a77aKY'),
                    }}
                  ></span>
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SAVAfk'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img
                  alt="Plant Proteins Research"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/projects/projekt5-1200w.webp"
                  srcSet="/projects//projekt5-1200w.webp 1200w, /projects/projekt5-tablet.webp 800w, /projects/projekt5-mobile.webp 480w"
                />
              </div>
              <div className="project-content">
                <h3>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gM6lom'),
                    }}
                  ></span>
                </h3>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_hSPv7t'),
                    }}
                  ></span>
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_20PTeK'),
                    }}
                  ></span>
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bd7upD'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
            <div className="reverse project-card">
              <div className="project-image">
                <img
                  alt="Contract Catering Regulations"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/projects/projekt6-1200w.webp"
                  srcSet="/projects//projekt6-1200w.webp 1200w, /projects/projekt6-tablet.webp 800w, /projects/projekt6-mobile.webp 480w"
                />
              </div>
              <div className="project-content">
                <h3>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CjTTzo'),
                    }}
                  ></span>
                </h3>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zEsZeY'),
                    }}
                  ></span>
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_KIwRXr'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="publications-section">
          <div className="publications-container">
            <h2 className="publications-title">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_dK-ZQG'),
                }}
              ></span>
            </h2>
            <div className="publications-grid">
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_L0YStv'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_bRJ1zM'),
                      }}
                    ></span>
                  </h4>
                  <p className="publication-authors">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_B8lx3n'),
                      }}
                    ></span>
                  </p>
                  <p className="publication-journal">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Bxnutc'),
                      }}
                    ></span>
                  </p>
                  <a
                    href="https://www.mdpi.com/2076-3417/11/18/8309"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ipvMmr'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_IFit78'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wyjReI'),
                      }}
                    ></span>
                  </h4>
                  <p className="publication-authors">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5h57Ay'),
                      }}
                    ></span>
                  </p>
                  <p className="publication-journal">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_T6tZKJ'),
                      }}
                    ></span>
                  </p>
                  <a
                    href="https://potravinarstvo.com/journal1/index.php/potravinarstvo/article/view/1111"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7Y-RSy'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_oK72KQ'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_AMntn7'),
                      }}
                    ></span>
                  </h4>
                  <p className="publication-authors">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_b067x5'),
                      }}
                    ></span>
                  </p>
                  <p className="publication-journal">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kfEG_S'),
                      }}
                    ></span>
                  </p>
                  <a
                    href="https://doi.org/10.1111/jfs.12480"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_bUzVII'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_U2-dsd'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wq4PGe'),
                      }}
                    ></span>
                  </h4>
                  <p className="publication-authors">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_rFNNYI'),
                      }}
                    ></span>
                  </p>
                  <p className="publication-journal">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ZCvGuZ'),
                      }}
                    ></span>
                  </p>
                  <a
                    href="https://www.food.actapol.net/pub/7_2_2018.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_aTTz6t'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_rfistn'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_zBncdH'),
                      }}
                    ></span>
                  </h4>
                  <p className="publication-authors">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_eVPOgx'),
                      }}
                    ></span>
                  </p>
                  <p className="publication-journal">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_DLNr3U'),
                      }}
                    ></span>
                  </p>
                  <a
                    href="https://doi.org/10.1016/j.foodcont.2016.09.011"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_fhX64U'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_VVQhKy'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ckJWxW'),
                      }}
                    ></span>
                  </h4>
                  <p className="publication-authors">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_deSC9Z'),
                      }}
                    ></span>
                  </p>
                  <p className="publication-journal">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_0UqPOU'),
                      }}
                    ></span>
                  </p>
                  <a
                    href="https://doi.org/10.1504/IJIL.2015.071554"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_z5EaoC'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_iqy2zS'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_6zRnOu'),
                      }}
                    ></span>
                  </h4>
                  <p className="publication-authors">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_pehBe2'),
                      }}
                    ></span>
                  </p>
                  <p className="publication-journal">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_MvBlFA'),
                      }}
                    ></span>
                  </p>
                  <a
                    href="https://doi.org/10.17626/dBEM.ICoM.P00.2015.p091"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7QMVjs'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_FLmnqV'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_b-6sA9'),
                      }}
                    ></span>
                  </h4>
                  <p className="publication-authors">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_i-LpjA'),
                      }}
                    ></span>
                  </p>
                  <p className="publication-journal">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_f2JW-l'),
                      }}
                    ></span>
                  </p>
                  <a href="#">
                    <span target="_blank" className="publication-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_L1qZDW'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_efoSjA'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_TqPa--'),
                      }}
                    ></span>
                  </h4>
                  <p className="publication-authors">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_M8hL0y'),
                      }}
                    ></span>
                  </p>
                  <p className="publication-journal">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_alyw5g'),
                      }}
                    ></span>
                  </p>
                  <a
                    href="https://doi.org/10.17626/dBEM.ICoM.P00.2015.p089"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kKnQED'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kay61o'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_6PzBYz'),
                      }}
                    ></span>
                  </h4>
                  <p className="publication-authors">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Cp-rG5'),
                      }}
                    ></span>
                  </p>
                  <p className="publication-journal">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_4sP2to'),
                      }}
                    ></span>
                  </p>
                  <a
                    href="https://doi.org/10.1016/j.foodcont.2014.06.019"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_nKrNOi'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_c-r-vT'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_cJUGxX'),
                      }}
                    ></span>
                  </h4>
                  <p className="publication-authors">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_cWE9iF'),
                      }}
                    ></span>
                  </p>
                  <p className="publication-journal">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_HNK7XM'),
                      }}
                    ></span>
                  </p>
                  <a href="#">
                    <span target="_blank" className="publication-link">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_18n2g7'),
                        }}
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer1
          text={
            <Fragment>
              <span className="scientific-projects-text192">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lCILj_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="scientific-projects-text193">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xyjgVM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="scientific-projects-text194">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eieIHL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="scientific-projects-text195">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JGo3Mh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="scientific-projects-text196">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yoaPWF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="scientific-projects-text197">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zmdGK9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="scientific-projects-text198">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4a77jf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="scientific-projects-text199">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_R-tL9Z'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="scientific-projects-text200">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lqCWAX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text91={
            <Fragment>
              <span className="scientific-projects-text201">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_819RpL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="scientific-projects-text202">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_94eMH6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text131={
            <Fragment>
              <span className="scientific-projects-text203">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ckO-bT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text132={
            <Fragment>
              <span className="scientific-projects-text204">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hDkoVw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text133={
            <Fragment>
              <span className="scientific-projects-text205">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7t8fzn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="scientific-projects-text206">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1c9IFA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer1root-class-name4"
        ></Footer1>
      </div>
      <style jsx>
        {`
          .scientific-projects-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .scientific-projects-text100 {
            display: inline-block;
          }
          .scientific-projects-text101 {
            display: inline-block;
          }
          .scientific-projects-text102 {
            display: inline-block;
          }
          .scientific-projects-text103 {
            display: inline-block;
          }
          .scientific-projects-text104 {
            display: inline-block;
          }
          .scientific-projects-text105 {
            display: inline-block;
          }
          .scientific-projects-text106 {
            display: inline-block;
          }
          .scientific-projects-text107 {
            display: inline-block;
          }
          .scientific-projects-text108 {
            display: inline-block;
          }
          .scientific-projects-text109 {
            margin: 0;
          }
          .scientific-projects-text192 {
            display: inline-block;
          }
          .scientific-projects-text193 {
            display: inline-block;
          }
          .scientific-projects-text194 {
            display: inline-block;
          }
          .scientific-projects-text195 {
            display: inline-block;
          }
          .scientific-projects-text196 {
            display: inline-block;
          }
          .scientific-projects-text197 {
            display: inline-block;
          }
          .scientific-projects-text198 {
            display: inline-block;
          }
          .scientific-projects-text199 {
            display: inline-block;
          }
          .scientific-projects-text200 {
            display: inline-block;
          }
          .scientific-projects-text201 {
            display: inline-block;
          }
          .scientific-projects-text202 {
            display: inline-block;
          }
          .scientific-projects-text203 {
            display: inline-block;
          }
          .scientific-projects-text204 {
            display: inline-block;
          }
          .scientific-projects-text205 {
            display: inline-block;
          }
          .scientific-projects-text206 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .scientific-projects-text110 {
              text-align: justify;
            }
            .scientific-projects-text111 {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

export default ScientificProjects

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
