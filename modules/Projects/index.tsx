import React from "react";
import { FeaturedProjects } from "./FeaturedProjects";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{t("featuredProjects.title")}</h2>
      <FeaturedProjects />
    </div>
  );
};

export default Projects;
