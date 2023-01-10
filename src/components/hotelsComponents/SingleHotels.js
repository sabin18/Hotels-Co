import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ hotels = {}, userSelect = false }) => {
  const { images, names, price, location, ratings,id } = hotels;

  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="bg-slate-200 popular-tours__single pt-0 shadow-sm"
      >
        <div className="popular-tours__img">
          <Image
            src={"https://assets.hospitalityonline.com/photos/employers/241693/537233_l.jpg"}
            alt=""
          />
          <div className="popular-tours__icon">
            <Link  href={{ pathname: "/tour-details", query: { id:id } }}>
              <a>
                <i className="fa fa-heart"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content font-bold text-slate-700 text-xs pt-2">
          <h5 className="font-bold text-xs pt-0 text-slate-700">
          <Link  href={{ pathname: "/tour-details", query: { id:id } }} className="text-slate-700">{names}</Link>
          </h5>
          <p className="popular-tours__rate">
            <span>${price}</span> / Per Night
          </p>
          <div className="popular-tours__stars">
            <i className="fa fa-star"></i> {ratings}
          </div>
          <ul className="popular-tours__meta list-unstyled bg-slate-400">
              <li>
                <Link  href={{ pathname: "/tour-details", query: { id:id } }}>{location}</Link>
              </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
