import { useEffect, useState } from "react";
import Section3 from "../assets/chirag-paswan.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button, Image, Modal } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

const MeetOurVisionaryLeader = (props) => {
  const baseURL = import.meta.env.VITE_API_URL;
  const [modalShow, setModalShow] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [cmsData, setCmsData] = useState(null);
  const [testimonial, setTestimonial] = useState(null);
  const [loading, setLoading] = useState(true);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const fetchCmsData = axios.get(`${baseURL}/cms/about`);
    const fetchTestimonial = axios.get(`${baseURL}/testimonial`);

    Promise.all([fetchCmsData, fetchTestimonial])
      .then(([cmsResponse, testimonialResponse]) => {
        setCmsData(cmsResponse.data);
        setTestimonial(testimonialResponse.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleShowModal = (testim) => {
    setSelectedTestimonial(testim);
    setModalShow3(true);
  };

  const handleClose3 = () => {
    setModalShow3(false);
    setSelectedTestimonial(null);
  };

    const handleClose = () => setModalShow(false);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="container py-5">
          {/* DESKTOP DESIGN LAYOUT  */}

          <h1 className="text-center section-3-heading d-none d-sm-block pb-5">
            Meet Our Visionary Leaders
          </h1>
          {/* MOBILE DESIGN LAYOUT  */}
          <h1 className="text-center section-3-heading d-sm-none d-block pb-5">
            Meet Our <br />
            Visionary Leaders
          </h1>

          <div className="row section-2-row">
            {/* Right div for image */}
            <div className="right-side-div col-lg-6">
              <Image
                className="section-2-img"
                src={cmsData?.image || Section3}
                alt="section-2 img"
              />
            </div>
            {/* Left div for content */}
            {/* Modal Popup for Chirag Paswan */}
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={modalShow}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  <h2 className="section-2-head new-heading">
                    {cmsData?.cms_name_title || "Default Title"}
                  </h2>
                  <p className="chairman">
                    {cmsData?.cms_subtitle || "Default Title"}
                  </p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      cmsData?.cms_contant || "Default description text here.",
                  }}
                />
              </Modal.Body>
            </Modal>
            <div className="left-side-div col-lg-6">
              <small className="new-heading">
                {cmsData?.cms_name_title || "Default Title"}
              </small>
              <p className="chairman">
                {cmsData?.cms_subtitle || "Default Title"}
              </p>
              <div className="section-para">
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      cmsData?.cms_description ||
                      "Default description text here.",
                  }}
                />
              </div>

              <div>
                <Button
                  onClick={() => setModalShow(true)}
                  className="section-3-btn px-4 py-2"
                >
                  Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </Button>
              </div>
            </div>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              speed={1200}
              loop={true}
              autoplay={{
                delay: 20000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              modules={[Autoplay, Pagination]}
              className="mt-5"
            >
              {testimonial.map((testimon, index) => (
                <SwiperSlide key={testimon.id || index}>
                  <div className="col-12">
                    <div className="president-card premond">
                      <div className="upper-title">
                        <Image
                          className="img-2-president"
                          src={testimon.image}
                          alt={testimon.title}
                          width={200}
                          height={200}
                        />
                        <div className="name-div">
                          <h2 className="name-div-head">{testimon.title}</h2>
                          <p className="name-div-subhead">{testimon.post_by}</p>
                          <p className="chairmain-inner">
                            {testimon.sort_description}
                          </p>
                        </div>
                      </div>
                      <div
                        className="chairmain-msg"
                        dangerouslySetInnerHTML={{
                          __html:
                            testimon.description ||
                            "Default description text here.",
                        }}
                      ></div>
                      <div>
                        <Button
                          onClick={() => handleShowModal(testimon)}
                          className="section-3-btn px-4 py-2"
                        >
                          Read More{" "}
                          <i
                            className="fa fa-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {selectedTestimonial && (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={modalShow3}
              onHide={handleClose3}
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  <h2 className="name-div-head">{selectedTestimonial.title}</h2>
                  <p className="name-div-subhead">
                    {selectedTestimonial.post_by}
                  </p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p
                  className="chairmain-msg"
                  dangerouslySetInnerHTML={{
                    __html:
                      selectedTestimonial.long_description ||
                      "Default description text here.",
                  }}
                ></p>
              </Modal.Body>
            </Modal>
          )}
        </section>
      )}
    </>
  );
};

export default MeetOurVisionaryLeader;
