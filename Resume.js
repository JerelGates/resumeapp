import React, {Component} from 'react';
class Resume extends Component {
    render() {
        if(this.props.data){
            var skills = this.props.data.skills;
        }
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Molloy College</h3>
                                <p className="info">Bachelor of Information System & Business Management<span>&bull;</span> <em className="date">May
                                    2019</em></p>
                                <p className="info">Minor Computer Science</p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Udemy Web Development BootCamp <span>Certification</span></h3>
                                <p className="info">Completion<span>&bull;</span> <em
                                    className="date">April 2019</em>
                                </p>
                            </div>
                        </div>

                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Udemy CCENT BootCamp <span>Certification</span></h3>
                                <p className="info">Excepted Completion<span>&bull;</span> <em
                                    className="date">September 2019</em>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Raymour & Flanigan </h3>
                                <p className="info">Customer Service <span>&bull;</span> <em className="date">June 2016-Current
                                    2016</em></p>
                                <p>
                                    <ul>
                                        <li>Answer high volume of calls addressing inquiries, solving problems and providing new product information, while assisting customers in person and via telephone.</li>
                                        <li>Managed daily heavy flow of paperwork and cooperated with the accounting departments on invoicing.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>


                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Desmond Levi Production</h3>
                                <p className="info">UX Web Designer <span>&bull;</span> <em className="date">March
                                    2016</em></p>
                                <p>
                                    Create and customize wordpress websites and create graphic designs on a daily basis, for the user needs.
                                </p>
                            </div>
                        </div>

                        <div className="row item">

                            <div className="twelve columns">

                                <h3>Fragrancenet</h3>
                                <p className="info">Junior Admin <span>&bull;</span> <em className="date">June 2018 -
                                    February 2019</em></p>

                                <p>
                                    <ul>
                                    <li>Coordinated with a System Administer regarding infrastructure improvements.</li>
                                    <li>Worked in an extreme agile development process</li>
                                    <li>Documentation of  technical manual of task</li>
                                    <li>Maintaining workstation troubleshoot problems regarding: printing, network, software configuration, remote access, email, viruses.</li>
                                    <li>Built, installed and configured workstations and mobile device for workflow, with frequent desktop support. Install, configure and troubleshoot VOIP telephones</li>
                                    <li>Worked in an extreme agile development process</li>
                                        </ul>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">

                        <p className="info">Systems: <em className="date">ParrotOS, KaliLinux, Mac OS, Window 7/8/10, Windows Server 2008 R2</em></p>
                        <p className="info">Stack: <em className="date">JavaScript, React, TypeScript, SQL, MongoDB, Git, Jquery</em></p>
                        <div className="bars">
                            <ul className="skills">
                                <li><span className="bar-expand photoshop"></span><em>Linux Parrot OS {skills}</em></li>
                                <li><span className="bar-expand illustrator"></span><em>JavaScript</em></li>
                                <li><span className="bar-expand wordpress"></span><em>Wordpress</em></li>
                                <li><span className="bar-expand css"></span><em>CSS</em></li>
                                <li><span className="bar-expand html5"></span><em>HTML5</em></li>

                            </ul>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Resume;