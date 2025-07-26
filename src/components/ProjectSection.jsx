import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/constants/projects";

export const ProjectSection = () => {
  const [activeId, setActiveId] = useState("project-2");

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Here are some of my recent projects — I’ve been having fun building
          these and I’ll keep adding more as I learn new things and take on new
          challenges.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-5 min-h-[420px]">
          {projects.map((project, index) => {
            const isActive = activeId === project.id;

            return (
              <motion.div
                key={project.id}
                onClick={() => setActiveId(project.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`
                  relative cursor-pointer transition-all duration-500 ease-in-out 
                  rounded-2xl overflow-hidden group shadow-xl bg-white/5 backdrop-blur-md border border-white/10
                  lg:flex-${isActive ? "[3.5]" : "[0.5]"} lg:flex-grow
                  flex-grow 
                  ${isActive ? "min-h-[420px]" : "min-h-[100px]"}
                  ${isActive ? "flex-[10]" : "flex-[2]"}
                `}
                style={{
                  flexGrow: isActive ? 10 : 2,
                }}
              >
                {!isActive && (
                  <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm rounded-2xl" />
                )}

                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute w-full h-full object-cover rounded-2xl"
                />

                {isActive ? (
                  <div className="absolute bottom-0 p-6 z-20 bg-black/60 w-full rounded-b-2xl backdrop-blur-sm">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-white/10 text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      {project.description}
                    </p>

                    <div className="flex space-x-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopenernoreferrer"
                        className="text-white hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="absolute bottom-12 left-1/2 -translate-x-1/2 -rotate-90 text-white text-lg font-bold tracking-wide z-20 lg:block hidden text-center whitespace-pre-line leading-tight">
                      {project.title}
                    </h3>
                    <h3 className="relative p-4 text-white text-lg font-bold tracking-wide z-20 lg:hidden block">
                      {project.title}
                    </h3>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/wen-long123"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
