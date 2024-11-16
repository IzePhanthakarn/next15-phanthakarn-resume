import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import DownloadResume from "./DownloadResume";

const FloatingMenu = () => {
  return (
    <div className="fixed flex flex-col space-y-2 top-2 sm:top-4 right-2 sm:right-4 z-50">
      <ThemeSwitcher />
      <DownloadResume />
    </div>
  );
};

export default FloatingMenu;
