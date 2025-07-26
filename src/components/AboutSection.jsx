import { cn } from "@/lib/utils";
import { Typewriter } from "react-simple-typewriter";
import meImage from "@/assets/personal/me.png";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              <Typewriter
                words={[
                  "Computer Science Undergraduate",
                  "Fast Learner",
                  "Web Developer",
                  "Software Engineer in Training",
                  "Tech Enthusiast",
                  "Automation Explorer",
                  "Problem Solver",
                  "UI/UX Learner",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </h3>

            <p className="text-muted-foreground">
              I'm a curious and adaptable Computer Science undergraduate into
              coding, troubleshooting, and bringing automation to life. My tech
              journey is driven by learning new programming languages and the
              satisfaction of solving challenging bugs.
            </p>

            <p className="text-muted-foreground">
              Now, I’m ready to take on a full-time role where I can keep
              building cool things, collaborate with great people, and make an
              impact in the ever-evolving world of tech. Let’s create something
              awesome together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Seah Wen Long Resume-en.pdf"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                )}
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="flex justify-center">
            <img
              src={meImage}
              alt="Seah Wen Long"
              className="rounded-2xl shadow-lg max-w-full w-90 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
