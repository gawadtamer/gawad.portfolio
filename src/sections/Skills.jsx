import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/data";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to design and build modern web experiences."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
