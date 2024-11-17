"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "th") => {
    i18n.changeLanguage(lng);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => changeLanguage(i18n.language === "en" ? "th" : "en")}
    >
      {i18n.language === "en" ? "TH" : "EN"}
    </Button>
  );
};

export default LanguageSwitcher;
