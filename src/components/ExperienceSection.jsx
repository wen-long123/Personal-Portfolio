import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
  FileText,
} from "lucide-react";
import { timelineItems } from "@/constants/items";
import { cn } from "@/lib/utils";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Journey</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-[2px] h-full bg-primary transform -translate-x-1/2 z-0" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Desktop */}
                  <div className="hidden lg:flex items-center">
                    <div className="w-full lg:w-1/2 lg:pr-8 flex justify-end text-right">
                      {isLeft ? (
                        <Card item={item} />
                      ) : (
                        <DateBox date={item.duration} />
                      )}
                    </div>

                    {/* Icon with background cover circle */}
                    <div className="relative z-10 flex items-center justify-center mx-6">
                      {/* Background circle to cover vertical line */}
                      <div className="absolute inset-0 bg-background rounded-full" />
                      {/* Icon circle */}
                      <div className="relative w-12 h-12 rounded-full border-2 border-primary bg-gray-350 dark:bg-background shadow-md flex items-center justify-center">
                        {item.type === "education" ? (
                          <GraduationCap className="w-5 h-5 text-primary" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 lg:pl-8 flex justify-start text-left">
                      {!isLeft ? (
                        <Card item={item} />
                      ) : (
                        <DateBox date={item.duration} />
                      )}
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="lg:hidden flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-2 border-primary bg-white dark:bg-background shadow-md flex items-center justify-center">
                        {item.type === "education" ? (
                          <GraduationCap className="w-5 h-5 text-primary" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div className="w-px bg-primary flex-1 mt-1" />
                    </div>
                    <div className="flex-1">
                      <Card item={item} />
                      <div className="mt-2 text-base font-bold text-muted-foreground">
                        {item.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Resume Buttons with Icon - Desktop */}
            <div className="hidden lg:flex items-center mt-16">
              <div className="w-full lg:w-1/2 lg:pr-8 flex justify-end">
                <a
                  href="/Seah Wen Long Resume-cn.pdf"
                  download
                  className={cn(
                    "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                  )}
                >
                  Chinese Resume
                </a>
              </div>

              {/* Center Icon with background cover */}
              <div className="relative z-10 flex items-center justify-center mx-6">
                <div className="absolute inset-0 bg-background rounded-full" />
                <div className="relative w-12 h-12 rounded-full border-2 border-primary bg-gray-350 dark:bg-background shadow-md flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="w-full lg:w-1/2 lg:pl-8 flex justify-start">
                <a
                  href="/Seah Wen Long Resume-en.pdf"
                  download
                  className={cn(
                    "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                  )}
                >
                  English Resume
                </a>
              </div>
            </div>

            {/* Mobile Resume Buttons with Left Icon */}
            <div className="lg:hidden flex items-start gap-4 mt-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-primary bg-white dark:bg-background shadow-md flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="w-px bg-primary flex-1 mt-1" />
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <a
                  href="/Seah Wen Long Resume-en.pdf"
                  download
                  className={cn(
                    "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                  )}
                >
                  English Resume
                </a>
                <a
                  href="/Seah Wen Long Resume-cn.pdf"
                  download
                  className={cn(
                    "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                  )}
                >
                  Chinese Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Card Component
const Card = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const isExpanded = expanded || isDesktop;
  const toggle = () => {
    if (!isDesktop) setExpanded(!expanded);
  };

  return (
    <div
      onClick={toggle}
      className={cn(
        "w-full max-w-full border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer",
        isExpanded ? "p-6" : "p-3",
        "bg-gray-350 dark:bg-white/5 border-gray-300 dark:border-white/10 backdrop-blur-md flex flex-col gap-2 lg:flex-row lg:items-center overflow-hidden"
      )}
    >
      <div className="flex items-start gap-4 flex-wrap lg:flex-nowrap w-full">
        <img
          src={item.logo}
          alt={`${item.company} logo`}
          className={cn(
            "object-contain rounded transition-all duration-300",
            isExpanded ? "w-10 h-10" : "w-8 h-8",
            "shrink-0"
          )}
        />

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm lg:text-lg transition-all duration-300 break-words">
            {isExpanded ? (
              <>
                {item.fullTitle || item.shortTitle}{" "}
                {item.company && (
                  <span className="text-primary">@ {item.company}</span>
                )}
              </>
            ) : (
              <>{item.shortTitle}</>
            )}
          </h3>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-muted-foreground mt-1 overflow-hidden"
              >
                {item.location}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile toggle icon */}
        <div className="block lg:hidden self-center text-muted-foreground">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>
    </div>
  );
};

// DateBox Component
const DateBox = ({ date }) => (
  <div className="text-base font-bold text-muted-foreground px-4 min-w-[140px]">
    {date}
  </div>
);
