import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const VisionMissionSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/mission`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, []);

  if (!data) return null; // Loading can be added if needed

  return (
    <Container>
      <Row className="mission-vision-row py-5">
        <Col className="mission-vision-row-col-1" lg={6}>
          <div className="vision">
            <div style={{ gap: "20px" }} className="d-flex align-items-center">
              <img src={data.visionimage} alt="Vision" />
              <span>{data.title}</span>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: data.missiondescription,
              }}
            ></p>
          </div>
        </Col>

        <Col className="mx-auto mission-vision-row-col-2" lg={6}>
          <div className="mission">
            <div style={{ gap: "20px" }} className="d-flex align-items-center">
              <img src={data.missionimage} alt="Mission" />
              <span>{data.vmissiontitle}</span>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: data.visiondescription,
              }}
            ></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VisionMissionSection;