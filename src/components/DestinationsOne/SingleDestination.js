import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestination = ({ destination = {} }) => {
  const { image, title, tours, subTitle, col } = destination;

  return (
    <Col xl={col} lg={col}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
          <Image
             src={"https://assets.hospitalityonline.com/photos/employers/241693/537233_l.jpg"}
            alt=""
          />
          <div className="destinations-one__content">
            {subTitle && (
              <p className="destinations-one__sub-title">{subTitle}</p>
            )}
            <h2 className="destinations-one__title">
              <Link href="/destinations-details">{title}</Link>
            </h2>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleDestination;
