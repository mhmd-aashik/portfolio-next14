import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      {/* HERO */}
      <section id="hero" className="snap-start">
        <div>
          <Hero />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* EXPERIENCE */}

      {/* SKILLS */}

      {/* PROJECTS */}

      {/* CONTECT ME */}
    </div>
  );
}
