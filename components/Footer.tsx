import { mainWebsite } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-14 bg-muted border-t">
      <div className="container h-full mx-auto flex items-center justify-center">
        <h2 className="text-center text-normal text-muted-foreground">
          Copyright © {new Date().getFullYear()}{" "}
          <Link
            href={mainWebsite}
            target="_blank"
            className="hover:underline text-primary tracking-wide"
          >
            IzePhanthakarn
          </Link>{" "}
          | All Right Reserved.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
