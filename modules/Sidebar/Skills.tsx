import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/constants";
import { useTranslation } from "react-i18next";

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div className="flex flex-col gap-2 pt-4">
    <h2 className="text-lg">{title}</h2>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} variant="secondary" className="cursor-default">
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-xl font-bold mb-4 ml-2">{t("skills")}</h2>
      <Card>
        <CardContent>
          <SkillSection title="Front-end" skills={skills.frontend} />
          <SkillSection title="Back-end" skills={skills.backend} />
          <SkillSection title="Tools" skills={skills.tools} />
        </CardContent>
      </Card>
    </>
  );
};

export default Skills;
