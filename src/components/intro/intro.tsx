import React from 'react';
import './intro.css';
import { introContent, introContentEn, personalInfo } from '../../contents';
import poster from "../../assets/poster.png";

interface IntroProps {
  lang: string;
}

function Intro(props: IntroProps) {
	const content = props.lang === "ko" ? introContent : introContentEn;
	return (
		<section className="section-intro">
				<div className="wrapper">
					<div className="poster">
						<img src={poster} alt="poster" className="poster-image"/>
					</div>
					<div className="title">
						{content.title}
					</div>
					<div className="line">-</div>
					<div className="para">
						{content.para1}
					</div>
					<div className="line">-</div>
					<div className="para">
						{content.para2}
					</div>
					<div className="line">-</div>

					<div className="artist-info">
						<div className="bold">{personalInfo.nameKo}  {personalInfo.nameEn}</div>
						<div>{personalInfo.email}</div>
						<div>{personalInfo.phone}</div>
						<div><a target="_blank" href={personalInfo.web}>{personalInfo.web}</a></div>
					</div>
				</div>
		</section>
	);
}
export default Intro;