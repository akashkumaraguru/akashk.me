'use client';

const SKILLS = [
  { name: 'Product Thinking', category: 'design' },
  { name: 'User-Centered Design', category: 'design' },
  { name: 'Wireframing', category: 'design' },
  { name: 'Prototyping', category: 'design' },
  { name: 'User Research', category: 'design' },
  { name: 'Heuristic Evaluation', category: 'design' },
  { name: 'UX Audits', category: 'design' },
  { name: 'Data-Driven Design Decisions', category: 'design' },
  { name: 'Design Systems', category: 'design' },
  { name: 'Developer Handoff', category: 'design' },
  { name: 'React.js', category: 'dev' },
  { name: 'TypeScript', category: 'dev' },
  { name: 'Tailwind CSS', category: 'dev' },
  { name: 'Responsive Development', category: 'dev' },
  { name: 'Git & GitHub', category: 'dev' },
  { name: 'Prompt Engineering', category: 'dev' },
];

export default function SkillsCard() {
  return (
    <div className="flex flex-col justify-between h-full space-y-3 font-sans pt-1">
      <div>
        <span className="text-[15px] text-[#b0aea5] block uppercase font-bold tracking-wider font-sans mb-1">
          Skills Stack
        </span>
        <p className="text-[15px] text-[#5c5a53] leading-tight font-serif italic">
          Core design and development skills I bring to every project.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 my-2">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className={`text-[14px] font-bold px-3 py-2 rounded-xl border ${
              skill.category === 'design'
                ? 'bg-[#d97757]/10 text-[#d97757] border-[#d97757]/20'
                : 'bg-[#6a9bcc]/10 text-[#6a9bcc] border-[#6a9bcc]/20'
            }`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
