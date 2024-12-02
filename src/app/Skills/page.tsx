export default function Skills() {
    return (
        <div className="min-h-screen bg-slate-300">
            <h1 className="text-4xl md:text-6xl lg:text-8xl shadow-2xl pl-4 md:pl-10 font-serif text-center md:text-left">
                Skills
            </h1>
            <div className="px-4 md:px-10">
                {/* Work Experience Section */}
                <div className="text-center mt-10">
                    <h1 className="text-3xl md:text-5xl font-serif">Work Experience</h1>
                </div>
                <ol className="text-lg md:text-2xl p-5 md:p-7 space-y-4">
                    <li>1- Developed responsive web applications using HTML5, CSS3, JavaScript, and React.</li>
                    <li>2- Developed a personal portfolio website.</li>
                    <li>3- Built a resume builder using HTML, CSS, and JavaScript.</li>
                    <li>4- Created an e-commerce website for practice.</li>
                    <li>5- Built a language translator app.</li>
                </ol>

                {/* Expertise Section */}
                <div className="text-center mt-10">
                    <h1 className="text-3xl md:text-5xl shadow-2xl font-serif">Expertise</h1>
                </div>
                <ol className="text-lg md:text-2xl p-5 md:p-7 space-y-4">
                    <li>1- Communication and teamwork.</li>
                    <li>2- Problem-solving.</li>
                    <li>3- Time management and organization.</li>
                    <li>4- Management skills.</li>
                </ol>

                {/* Languages Section */}
                <div className="text-center mt-10">
                    <h1 className="text-3xl md:text-5xl shadow-2xl font-serif">Languages</h1>
                </div>
                <ol className="text-lg md:text-2xl p-5 md:p-8 space-y-4">
                    <li>1- Urdu</li>
                    <li>2- Punjabi (mother tongue)</li>
                    <li>3- Sindhi</li>
                    <li>4- English</li>
                </ol>
            </div>
        </div>
    );
}
