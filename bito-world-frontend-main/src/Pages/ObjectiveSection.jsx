import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const ObjectiveSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/objective`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("API fetch error:", err);
      });
  }, []);

  if (!data) return null; // Optional: Loading state

  return (
    <Container className="py-5 d-flex objective-container">
      <div className="objective-container-div read-center">
        <h2 className="section-3-heading" style={{ position: "relative" }}>
          {data.title}
        </h2>
        <p className="pt-3" dangerouslySetInnerHTML={{ __html: data.description }} />

        <div className="d-flex flex-wrap">
          <div className="d-flex flex-wrap flex-grow-1 my-4 mx-1 domtrack">
            <div className="w-50 px-3 domtrack1">
              <Image src={data.simage} alt="Economic Empowerment" />
              <p className="pt-3" style={{ fontSize: "14px" }}>
                <strong>{data.subtitle}</strong>
              </p>
            </div>
            <div className="w-50 px-3 pb-4 border-start domtrack">
              <Image src={data.mimage} alt="Cultural Preservation" />
              <p className="pt-3" style={{ fontSize: "14px" }}>
                <strong>{data.mubtitle}</strong>
              </p>
            </div>
          </div>
          <div className="d-flex px-3 flex-wrap pt-4 flex-grow-1 collaboration">
            <div className="w-50">
              <Image src={data.eimage} alt="Global Collaboration" />
              <p className="pt-3" style={{ fontSize: "14px" }}>
                <strong>{data.eubtitle}</strong>
              </p>
            </div>
            <div className="w-50 px-3 border-start">
              <Image src={data.timage} alt="Inclusitivity" />
              <p className="pt-3" style={{ fontSize: "14px" }}>
                <strong>{data.nubtitle}</strong>
              </p>
            </div>
          </div>
        </div>

        <a href="https://bitoworld.in/old-site/about.php">
          <button className="my-4 section-3-btn px-4 py-2 btn btn-primary">
            Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </a>
      </div>

      <div className="w-50 m-auto w-sm-100">
        <Image src={data.nimage} alt="" className="objective-img" />
      </div>
    </Container>
  );
};

export default ObjectiveSection;
