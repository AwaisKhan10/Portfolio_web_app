import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={title} className="text-white">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx" >
          <h4 className="">{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
