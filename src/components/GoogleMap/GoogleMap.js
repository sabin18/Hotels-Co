import React from "react";

const GoogleMap = () => {
  return (
    <section className="contact-page-google-map">
      <iframe
       src="https://maps.google.com/maps?q=kigali&t=&z=13&ie=UTF8&iwloc=&output=embed" 
        className="contact-page-google-map__one"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default GoogleMap;
