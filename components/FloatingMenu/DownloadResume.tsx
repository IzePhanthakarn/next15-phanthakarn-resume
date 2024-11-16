"use client";

import React from "react";
import { Button } from "../ui/button";
import { LineMdDownloadingLoop } from "../icon/LineMdDownloadingLoop";

const DownloadResume = () => {
  return (
    <Button variant="outline" size="icon" onClick={() => window.open("/Phanthakarn's-Resume.pdf", "_blank")}>
      <LineMdDownloadingLoop className="scale-125" />
    </Button>
  );
};

export default DownloadResume;
