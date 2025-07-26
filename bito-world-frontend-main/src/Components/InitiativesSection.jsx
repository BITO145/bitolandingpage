import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Image } from "react-bootstrap";

const InitiativesSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/initiatives`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  if (!data) return null; // Optional: add spinner here

  return (
    <Container className="text-center my-5 Initiatives">
      <h1 className="text-center section-3-heading">{data.title}</h1>

      <p dangerouslySetInnerHTML={{ __html: data.description }} />

      <div className="d-flex justify-content-center gap-5 my-5 custom-wrap desktoponly flex-wrap">

        <div className="d-flex flex-column align-items-center px-sm-5">
          <Image
            className="section-2-img p-3"
            src={data.simage}
            alt="Bihar University"
            width={80}
            height={80}
          />
          <strong>
            {data.subtitle}
          </strong>
        </div>

        <div className="d-flex flex-column align-items-center px-sm-5">
          <Image
            className="section-2-img p-3"
            src={data.mimage}
            alt="Business Connect"
            width={80}
            height={80}
          />
          <strong>
            {data.mubtitle}
          </strong>
        </div>

        <div className="d-flex flex-column align-items-center px-sm-5 section-2-container">
          <Image
            className="section-2-img p-3"
            src={data.eimage}
            alt="Global Bihar Heritage"
            width={80}
            height={80}
          />
          <strong>
            {data.eubtitle}
          </strong>
        </div>

        <div className="d-flex flex-column align-items-center px-sm-5 section-2-container">
          <Image
            className="section-2-img p-3"
            src={data.nimage}
            alt="Hospital"
            width={80}
            height={80}
          />
          <strong>
            {data.nubtitle}
          </strong>
        </div>
      </div>

      <a href={`https://bitoworld.in/${data.slug}`}>
        <button className="section-3-btn px-4 py-2 btn btn-primary">
          Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </a>
    </Container>
  );
};

export default InitiativesSection;