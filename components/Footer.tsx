import { mainWebsite } from "@/constants";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="h-14 bg-muted border-t">
      <div className="container h-full mx-auto flex items-center justify-center">
        <h2 className="text-center text-sm sm:text-normal text-muted-foreground">
          {t("copyright")} © {new Date().getFullYear()}{" "}
          <Link
            href={mainWebsite}
            target="_blank"
            className="hover:underline text-primary tracking-wide"
          >
            IzePhanthakarn
          </Link>{" "}
          | {t("allRightsReserved")}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
