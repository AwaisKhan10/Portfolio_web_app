import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MJ from "../assets/img/MJ.jpeg";
import chaimma from "../assets/img/chaimma.jpeg";
import rayman_khan from "../assets/img/rayman_khan.jpeg";
import abeskek from "../assets/img/abeshek.jpeg";
const reviews = [
  {
    name: "pandesgn12",
    country: "Canada",
    platform: "Fiverr",
    review:
      "Amazing developer, easy to work with, definitely going to work with him in the future.",
    image: MJ,
  },
  {
    name: "rayman_khan",
    country: "Netherlands",
    platform: "Fiverr",
    review:
      "It is the second time we work together. Excellent and quality work.",
    image: chaimma,
  },
  {
    name: "shaimaa_codes",
    country: "Morocco",
    platform: "Fiverr",
    review:
      "Awais Khan did an outstanding job on my project. He was professional and delivered high-quality work.",
    image: rayman_khan,
  },
  {
    name: "Abe shek",
    country: "United States",
    platform: "Upwork",
    review: "Did a good job.",
    image: abeskek,
  },
  {
    name: "alderpayyan",
    country: "United States",
    platform: "Upwork",
    review: "Awais did a great job.",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "aminakhan384",
    country: "United States",
    platform: "Fiverr",
    review: "good work with understanding",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "alderpayyan",
    country: "United States",
    platform: "Fiverr",
    review: "Great to work with.",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "nyaruita",
    country: "Kenya",
    platform: "Fiverr",
    review:
      "Awais exceeded expectations in our Flutter project. He followed instructions precisely, delivered a bug-free product on time, and provided excellent communication and documentation. Highly recommended!",
    image: "https://i.pravatar.cc/300",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // Show 2 items per row
  slidesToScroll: 2,
  rows: 2, // Show 2 rows
  slidesPerRow: 1, // 1 slide per column
  autoplay: true,
  autoplaySpeed: 3000,
};

const Reviews = () => {
  return (
    <section className="client-reviews">
      <Container>
        <h2 className="text-center title">Testimonials</h2>
        <Slider {...settings} autoplaySpeed={4000} arrows={false}>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <img
                  src={review.image}
                  alt={review.name}
                  className="review-img"
                />
                <div className="review-info">
                  <div className="stars">★★★★★</div>
                  <h5 className="review-name">{review.name}</h5>
                  <p className="review-country">{review.country}</p>
                  <p className="review-text">{review.review}</p>
                </div>
                <span className="platform">{review.platform}</span>
              </div>
              {/* <div className="review-body">
                
              </div> */}
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Reviews;
