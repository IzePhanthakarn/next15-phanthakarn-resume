import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { t } = useTranslation();
  return (
    <Card className="mb-6">
      <CardHeader className="py-2 px-4 mb-0'">
        <h2 className="font-semibold text-primary text-lg">{t("personalInfo.language")}</h2>
      </CardHeader>
      <CardContent className="flex justify-between text-xs px-2 pl-8 sm:pl-6 pb-4">
        <ul className="list-disc">
            <li className="personalinfo_language-value">{t("personalInfo.language1")}</li>
            <li className="whitespace-nowrap personalinfo_language-value">{t("personalInfo.language2")}</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Language;
