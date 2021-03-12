import React from 'react';
import Header from './header/header';
import Intro from './intro/intro';
// import Skill from './Skill/Skill';
// import OpenSource from './OpenSource/OpenSource';
// import Achievement from './Achievement/Achievement';
// import Blog from './Blog/Blog';
// import Contact from './Contact/Contact';
// import Experience from './Experience/Experience';
// import Project from './Project/Project';
// import { greeting, skills, experience, openSourceProjects, projects, achievements, blogs, contactInfo } from '../portfolio';

function Main() {
	return (
		<div className="root">
			<Header />
			<Intro />
			{/* {skills.view && <Skill />}
			{experience.view && <Experience />}
			{openSourceProjects.view && <OpenSource />}
			{projects.view && <Project />}
			{achievements.view && <Achievement />}
			{blogs.view && <Blog />}
			{contactInfo.view && <Contact />} */}
			{/* <Footer /> */}
		</div>
	);
}
export default Main;