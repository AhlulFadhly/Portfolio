
const skillItem = [
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/laravel.svg',
    label: 'Laravel',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/flutter.svg',
    label: 'Flutter',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/php.svg',
    label: 'PHP',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/cpp.svg',
    label: 'C++',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Programming Language'
  },
  
];

import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <section 
    id="skills"
    className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className=" grid gap-3 grid-cols-[repeat(auto-fit,minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => 
                        (
                            <SkillCard  
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                            />
                        ))
                }
                
            </div>
        </div>

    </section>
  );
}

export default Skill;