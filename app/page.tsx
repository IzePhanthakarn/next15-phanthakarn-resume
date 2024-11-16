import Footer from "@/components/Footer";
import AboutMe from "@/modules/AboutMe";
import Experience from "@/modules/Experience";
import Projects from "@/modules/Projects";
import Sidebar from "@/modules/Sidebar";
import ScrollToTopButton from "@/components/ScrollToTopButton ";
import FloatingMenu from "@/components/FloatingMenu";
const Home = () => {
  return (
    <section className="min-h-screen bg-background relative flex flex-col justify-between">
      <FloatingMenu />
      <ScrollToTopButton />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Sidebar />
          <main className="md:col-span-2">
            <AboutMe />
            <Projects />
            <Experience />
          </main>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Home;