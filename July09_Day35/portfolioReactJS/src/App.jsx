import "./App.css";

export default function App() {

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Java",
        "Python",
        "C",
        "C++",
        "Data Structures"
    ];

    const projects = [
        {
            title: "Personal Portfolio",
            desc: "A modern responsive portfolio website built using React.js, CSS animations and glassmorphism UI design."
        },
        {
            title: "Netflix Clone",
            desc: "A Netflix-inspired user interface created using React.js with reusable components and responsive design."
        },
        {
            title: "A OG Gym Website",
            desc: "A startup idea that connects businesses with verified manufacturers for small batch production."
        },
        {
            title: "Nutrition Store Website",
            desc: "An online supplement store UI developed using HTML, CSS and JavaScript with product management."
        }
    ];


    return (

        <div className="page">

            {/* Navbar */}

            <nav className="nav">

                <h2 className="logo">
                    Omkar Subhash Ghodke
                </h2>

                <div>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#contact">Contact</a>
                </div>

            </nav>



            {/* Hero Section */}

            <header className="hero">

                <div>

                    <p className="intro">
                        Hello, I'm
                    </p>


                    <h1>
                        Omkar Ghodke
                    </h1>


                    <h3>
                        Diploma IT Student | MERN Stack Developer Intern
                    </h3>


                    <p>
                        I am a passionate Information Technology student who loves
                        building modern web applications and solving real-world problems
                        using technology.
                    </p>


                    <button>
                        Hire Me
                    </button>

                    <button className="secondary">
                        View Projects
                    </button>


                </div>

            </header>




            {/* About */}

            <section id="about">

                <h2>
                    About Me
                </h2>


                <p>
                    I am a third-year Diploma Information Technology student with
                    strong knowledge of programming and web development.

                    I have experience with C, C++, Java, Python, HTML, CSS,
                    JavaScript and React.js.

                    Currently, I am working as a MERN Stack Intern at Linkcode
                    Technologies where I am improving my skills in frontend and
                    backend development.
                </p>


            </section>





            {/* Skills */}

            <section id="skills">

                <h2>
                    Technical Skills
                </h2>


                <div className="chips">

                    {
                        skills.map(skill => (
                            <span key={skill}>
                                {skill}
                            </span>
                        ))
                    }

                </div>


            </section>





            {/* Projects */}


            <section id="projects">

                <h2>
                    Projects
                </h2>


                <div className="cards">

                    {
                        projects.map((project,index)=>(

                            <div className="card" key={index}>

                                <h3>
                                    {project.title}
                                </h3>

                                <p>
                                    {project.desc}
                                </p>

                                <button>
                                    View Project
                                </button>

                            </div>

                        ))
                    }


                </div>


            </section>





            {/* Education */}


            <section id="education">

                <h2>
                    Education
                </h2>


                <div className="cards">


                    <div className="card">

                        <h3>
                            Diploma in Information Technology
                        </h3>

                        <p>
                            Maharashtra State Board of Technical Education
                            (MSBTE)
                        </p>

                        <p>
                            Currently pursuing Third Year Diploma
                        </p>

                    </div>



                    <div className="card">

                        <h3>
                            Internship
                        </h3>

                        <p>
                            MERN Stack Developer Intern
                        </p>

                        <p>
                            Linkcode Technologies
                        </p>

                    </div>


                </div>


            </section>






            {/* Achievements */}


            <section>

                <h2>
                    What I Do
                </h2>


                <div className="cards">


                    <div className="card">

                        <h3>
                            Web Development
                        </h3>

                        <p>
                            Creating responsive and user-friendly websites
                            using modern frontend technologies.
                        </p>

                    </div>


                    <div className="card">

                        <h3>
                            Problem Solving
                        </h3>

                        <p>
                            Strong foundation in programming,
                            Data Structures and logical thinking.
                        </p>

                    </div>



                    <div className="card">

                        <h3>
                            Learning & Growth
                        </h3>

                        <p>
                            Continuously exploring new technologies and
                            improving development skills.
                        </p>

                    </div>


                </div>


            </section>





            {/* Contact */}


            <section id="contact">


                <h2>
                    Contact Me
                </h2>


                <p>
                    Email:
                    <br/>
                    og7836755@gmail.com
                </p>


                <p>
                    LinkedIn:
                    <br/>
                    linkedin.com/in/omkarg
                </p>


                <p>
                    GitHub:
                    <br/>
                    github.com/omkarr29
                </p>


            </section>




            <footer>

                © 2026 Omkar Ghodke | MERN Stack Developer

            </footer>



        </div>

    );
}