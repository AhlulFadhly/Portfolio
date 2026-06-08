
const aboutItems = [
  {
    label: 'Project done',
    number: 5
  },
  {
    label: 'Years of learning',
    number: 4
  }
];



const About = () => {
  return (
    <section
    id="about"
    className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Hello! I'm Ahlul Fadhly, an Informatics graduate who loves turning ideas and data into practical solutions. My interests span data analytics, machine learning, and web development. I enjoy exploring datasets, building intelligent systems, and developing user-friendly web applications. With hands-on experience in Python, SQL, and various development frameworks, I'm continuously learning and seeking opportunities to create meaningful technology that helps people and businesses make better decisions.

                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                    aboutItems.map(({label, number}, key) => (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                            </div>
                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))
                    }

                    <img 
                    src="/images/code.png" 
                    alt="logo"
                    width={30}
                    height={30} 
                    className="ml-auto md:w-[40px] md:h-[40px]" />
                </div>
            </div>

        </div>

    </section>
  );
}

export default About;
