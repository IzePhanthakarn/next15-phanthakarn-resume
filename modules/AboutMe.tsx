import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{t("aboutMe.title")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground text">
          {t("aboutMe.description1")}
        </p>
        <p className="text-muted-foreground text">
          {t("aboutMe.description2")}
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
