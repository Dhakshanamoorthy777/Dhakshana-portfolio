import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Blobs } from "@/components/portfolio/Blobs";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhakshana Moorthy B — Java Full Stack Developer" },
      { name: "description", content: "Portfolio of Dhakshana Moorthy B, Java Full Stack Developer from Chennai — Spring Boot, React, MySQL." },
      { property: "og:title", content: "Dhakshana Moorthy B — Java Full Stack Developer" },
      { property: "og:description", content: "Java Full Stack Developer portfolio. Spring Boot, React, and clean modern web." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <Blobs />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
