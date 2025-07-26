import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Image } from "react-bootstrap";

const BITOBodiesSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/bodies`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  if (!data) return null; // Optionally add loading state

  return (
    <Container className="py-5 text-center">
      <h1 className="text-center section-3-heading">{data.title}</h1>

      <p dangerouslySetInnerHTML={{ __html: data.description }} />

      <div className="d-flex justify-content-center gap-5 gap-sm-4 my-5 flex-wrap bodies">

        <div className="d-flex flex-column align-items-center px-sm-5 startup">
          <Image
            className="section-2-img p-3"
            src={data.mimage}
            alt="Startup & Incubation"
            width={100}
            height={100}
          />
          <strong>
            {data.subtitle}
          </strong>
        </div>

        <div className="d-flex flex-column align-items-center px-sm-5 section-2-container asmita">
          <Image
            className="section-2-img p-3"
            src={data.eimage}
            alt="Asmita Foundation"
            width={100}
            height={100}
          />
          <strong>
            {data.mubtitle}
          </strong>
        </div>

        <div className="d-flex flex-column align-items-center px-sm-5 industries">
          <Image
            className="section-2-img p-3"
            src={data.timage}
            alt="Industries Association"
            width={100}
            height={100}
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

export default BITOBodiesSection;