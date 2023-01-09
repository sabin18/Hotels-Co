import AboutPage from "@/components/AboutPage/AboutPage";
import BookNow from "@/components/BookNow/BookNow";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamOne from "@/components/TeamOne/TeamOne";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About">
      <AboutPage />
      <BookNow />
      <TestimonialOne aboutPage />
      <TeamOne />
    </Layout>
  );
};

export default About;
