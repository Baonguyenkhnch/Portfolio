import { Col, Row } from "react-bootstrap";
import { PROJECTS } from "../helpers/data";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/sections/project/project.card";


export const APP_DATA = {
  INSTAGRAM_URL: "https://www.instagram.com/indisputably59/",
  TIKTOK_URL: "https://www.tiktok.com/@b.ngz05?lang=vi-VN",
  GITHUB_URL: "https://github.com/Baonguyenkhnch",
  FACEBOOK_URL: "https://www.facebook.com/bao.nguyen.380729/?locale=vi_VN"
};

const Project = () => {
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Col xs={12}>
          <h3 className="text-center">
            {t("project.title.part1")}{" "}
            <span className="brand-red">{t("project.title.part2")}</span>
          </h3>
          <h6 className="text-center mb-md-5 mb-2">
            {t("project.subtitle")}
          </h6>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {PROJECTS.map((item) => (
          <Col md={4} className="project-card" key={item.id}>
            <ProjectCard
              imgPath={item.imgPath}
              title={t(`project.items.${item.id}.title`)}
              description={t(`project.items.${item.id}.desc`)}
              githubLink={item.githubLink}
              demoLink={item.demoLink}
            />
          </Col>
        ))}
      </Row>
<div className="mb-3"></div> 

      {/* <div className="mb-7"></div> */}
    </>
  );
};

export default Project;
