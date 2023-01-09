import popularToursTwo from "@/data/popularToursTwo";
import React,{ useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleHotels";
import { useQuery,useInfiniteQuery } from 'react-query'
import CatalogMagic from "../Preloader/postLoader";

const { tagline, title, popularTours } = popularToursTwo;

const PopularToursTwo = ({ toursPage = false }) => {
const [page, setPage] = useState(1);

const fetchPlanets = async () => {
  const res = await fetch(`https://63b3f31cea89e3e3db51e15b.mockapi.io/api/v1/hotels?page=${page}&limit=8`);
  return res.json();
}

const {
  isLoading,
  isError,
  error,
  data,
  fetchNextPage,
  isFetching,
  isFetchingNextPage,
  hasNextPage
} = useInfiniteQuery(['hotels'],fetchPlanets, {
  getNextPageParam: (lastPage, pages) => {
    return lastPage.page + 1
  }
})

useEffect(() => {
  let fetching = false;
  const handleScroll = async (e) => {
    const {scrollHeight, scrollTop, clientHeight} = e.target.scrollingElement;
    if(!fetching && scrollHeight - scrollTop <= clientHeight * 1.7) {
      fetching = true
      if(hasNextPage && page!==10) await setPage(page+1)
      if(page===10) await setPage(1)
      if(hasNextPage) await fetchNextPage()
      fetching = false
    }
  }
  document.addEventListener('scroll', handleScroll)
  return () => {
    document.removeEventListener('scroll', handleScroll)
  }
}, [fetchNextPage, hasNextPage,page])

if (isLoading) {
  return <CatalogMagic />
}

if (isError) {
  return <h2>{error.message}</h2>
}

  return (
    <section className="pt-4 popular-tours-two">
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <Row>
        {data?.pages?.map(page =>
                    page.map((hotels) => (
            <Col
              key={hotels.id}
              xl={3}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
               <SingleTour hotels={hotels} userSelect />
            </Col>
          )))}

<div>{isFetchingNextPage ? <CatalogMagic />: null}</div>            

<div>{isFetching && !isFetchingNextPage ? <CatalogMagic /> : null}</div>
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;
