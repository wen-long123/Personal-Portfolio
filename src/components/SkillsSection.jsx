import { useState } from "react";
import { cn } from "@/lib/utils";
import BallCanvas from "./canvas/BallCanvas";
import { skills } from "@/constants/skills";

const categories = ["all", "languages", "frameworks", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the tools and technologies I’ve picked up along the
          way — always looking to grow this stack and explore new ones as I go.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-xl shadow-md flex flex-col gap-4"
            >
              {/* Ball + Skill Name Row */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16">
                  <BallCanvas icon={skill.icon} />
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full">
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
                <div className="text-right mt-1 text-sm text-muted-foreground">
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
