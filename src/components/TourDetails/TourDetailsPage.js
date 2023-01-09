import React from "react";
import TourDetailsOne from "./TourDetailsOne";
import TourDetailsTwo from "./TourDetailsTwo";
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'

const TourDetailsPage = () => {
  const router = useRouter()
  const { id } = router.query

  const fetchPlanets = async () => {
    const res = await fetch(`https://63b3f31cea89e3e3db51e15b.mockapi.io/api/v1/hotels/${id}`);
    return res.json();
  }
  const {isLoading, error, data } = useQuery(['hotels'],fetchPlanets)

  return (
    <>
      <TourDetailsOne
      data={data}
      />
      <TourDetailsTwo
      data={data}
      />
    </>
  );
};

export default TourDetailsPage;
