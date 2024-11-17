"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: "en-US" | "th-TH") => {
    i18n.changeLanguage(lng);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => changeLanguage(i18n.language === "en-US" ? "th-TH" : "en-US")}
    >
      {i18n.language === "en-US" ? "TH" : "EN"}
    </Button>
  );
};

export default LanguageSwitcher;
