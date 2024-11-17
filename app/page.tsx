"use client";

import Footer from "@/components/Footer";
import AboutMe from "@/modules/AboutMe";
import Experience from "@/modules/Experience";
import Projects from "@/modules/Projects";
import Sidebar from "@/modules/Sidebar";
import ScrollToTopButton from "@/components/ScrollToTopButton ";
import FloatingMenu from "@/components/FloatingMenu";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
const Home = () => {
  const { i18n } = useTranslation();
  const [isI18nReady, setIsI18nReady] = useState(false);

  useEffect(() => {
    const initI18n = async () => {
      await i18n.init();
      setIsI18nReady(true);
    };
    initI18n();
  }, [i18n]);

  if (!isI18nReady) {
    return <Loading />;
  }
  return (
    <section className="min-h-screen bg-background relative flex flex-col justify-between font-noto-sans-thai">
      <FloatingMenu />
      <ScrollToTopButton />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Sidebar />
          <main className="lg:col-span-2">
            <AboutMe />
            <Projects />
            <Experience />
          </main>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
