import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./ClientReviews.css";

const reviews = [
  {
    name: "pandesgn12",
    country: "Canada",
    platform: "fiverr",
    review:
      "Amazing developer, easy to work with, definitely going to work with him in the future.",
    image: "/images/client1.jpg",
  },
  {
    name: "rayman_khan",
    country: "Netherlands",
    platform: "fiverr",
    review:
      "It is the second time we work together. Excellent and quality work. If ever need him again, I can easily chat with him again.",
    image: "/images/client2.jpg",
  },
  {
    name: "shaimaa_codes",
    country: "Morocco",
    platform: "fiverr",
    review:
      "Awais Khan did an outstanding job on my project. He was professional, communicated clearly, and delivered high-quality work on both the frontend and backend...",
    image: "/images/client3.jpg",
  },
  {
    name: "Abhishek Dubey",
    country: "India",
    platform: "upwork",
    review: "Did a good job.",
    image: "/images/client4.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="client-reviews">
      <Container>
        <h2 className="text-center title">HAPPY CLIENT SAY’S</h2>
        <Row>
          {reviews.map((review, index) => (
            <Col key={index} lg={6} md={12} className="mb-4">
              <div className="review-card">
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
                  </div>
                  <span className="platform">{review.platform}</span>
                </div>
                <div className="review-body">
                  <p className="review-text">{review.review}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
