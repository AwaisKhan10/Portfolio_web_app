import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
  techStack,
}) => {
  return (
    <Col lg={4} md={6} sm={12} className="mb-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <div className="card project-card border-0 shadow-lg">
          <div className="card-img-top project-img">
            <img src={imgUrl} alt={title} className="img-fluid" />
          </div>
          <div className="card-body">
            <h5 className="card-title text-white fw-bold">{title}</h5>
            <p className="card-text text-muted">{description}</p>
            <div className="tech-stack">
              {techStack?.map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge  me-1 "
                  onClick={(e) => e.stopPropagation()}
                >
                  {tech.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};
