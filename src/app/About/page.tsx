export default function About() {
    return (
        <div className="min-h-screen bg-slate-300">
            {/* Header Section */}
            <h1 className="flex justify-center pl-4 md:pl-8 lg:pl-12 text-4xl md:text-6xl lg:text-8xl shadow-2xl font-serif">
                About Me
            </h1>
            
            {/* Introduction Section */}
            <div className="px-4 md:px-16 lg:px-32 pt-10 text-lg md:text-2xl lg:text-3xl">
                <p>
                    Hello! This site is Muhammad Rayan. I am a Frontend Developer skilled in 
                    HTML5, CSS3, JavaScript, Next.js, TypeScript. <br /> Proficient in Agile 
                    Methodologies, version control systems (Git, SVN), and UI/UX design principles. 
                    Results-driven web developer with 6 months of experience driving digital innovation. <br />
                    Skilled in web development technologies (HTML5, CSS3, JavaScript, React, Angular), 
                    database management (MySQL, MongoDB), and UI/UX design. Proven track of delivering 
                    high-quality web applications on time and on budget. Currently pursuing BS-English.
                </p>
            </div>

            {/* Education Section */}
            <h1 className="flex justify-center md:justify-start pl-4 md:pl-8 lg:pl-12 pt-12 font-serif text-3xl md:text-4xl lg:text-5xl">
                Education:
            </h1>
            <div className="px-4 md:px-16 lg:px-32 pt-8 text-lg md:text-2xl lg:text-3xl">
                <p>
                    <strong>Matriculation:</strong> New Life School (2007 - 2020)
                </p>
                <br />
                <p>
                    <strong>Intermediate:</strong> Painite College (2021 - 2022)
                </p>
                <br />
                <p>
                    <strong>University:</strong> Undergraduate 2nd Year (BS-English)
                </p>
            </div>
        </div>
    );
}
