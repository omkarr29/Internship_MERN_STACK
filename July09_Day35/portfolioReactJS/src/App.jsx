import "./App.css";

export default function App() {

    const skills = [
        {
            name: "HTML",
            icon: "fa-brands fa-html5"
        },
        {
            name: "CSS",
            icon: "fa-brands fa-css3-alt"
        },
        {
            name: "JavaScript",
            icon: "fa-brands fa-js"
        },
        {
            name: "React.js",
            icon: "fa-brands fa-react"
        },
        {
            name: "Java",
            icon: "fa-brands fa-java"
        },
        {
            name: "Python",
            icon: "fa-brands fa-python"
        },
        {
            name: "C / C++",
            icon: "fa-solid fa-code"
        },
        {
            name: "Data Structures",
            icon: "fa-solid fa-database"
        }
    ];


    const projects = [
        {
            title:"Portfolio Website",
            description:"A modern responsive portfolio built using React.js and CSS."
        },

        {
            title:"Nutrition Store",
            description:"A web based supplement store with product management."
        },

        {
            title:"Library Management System",
            description:"Database based system using MySQL."
        }
    ];


    return (

        <div className="page">


            <nav className="nav">

                <h2 className="logo">
                    Omkar.
                </h2>


                <div className="links">

                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>

                </div>


            </nav>



            <section className="hero">


                <div className="hero-content">


                    <p className="intro">
                        Hello, I'm
                    </p>


                    <h1>
                        Omkar Ghodke
                    </h1>


                    <h3>
                        Full Stack Developer
                    </h3>


                    <p className="description">
                        IT Diploma Student passionate about Web Development,
                        Programming and Building real world applications.
                    </p>



                    <button>
                        Download CV
                    </button>


                    <button className="secondary">
                        Contact Me
                    </button>



                    <div className="social">


                        <a href="https://github.com/" target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </a>


                        <a href="https://instagram.com/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>


                        <a href="https://linkedin.com/" target="_blank">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>


                    </div>


                </div>


            </section>




            <section id="about">


                <h2>
                    About Me
                </h2>


                <p>
                    I am an IT student learning frontend and backend technologies.
                    I enjoy creating attractive websites and solving programming problems.
                </p>


            </section>





            <section id="skills">


                <h2>
                    Skills
                </h2>


                <div className="chips">


                    {
                        skills.map((skill,index)=>(

                            <span key={index}>

                                <i className={skill.icon}></i>

                                {skill.name}

                            </span>

                        ))
                    }


                </div>


            </section>






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
                                    {project.description}
                                </p>


                            </div>

                        ))
                    }


                </div>



            </section>






            <section id="contact">


                <h2>
                    Contact
                </h2>


                <p>
                    Email: omkar@example.com
                </p>


            </section>





            <footer>

                © 2026 Omkar Ghodke | All Rights Reserved

            </footer>



        </div>

    )

}