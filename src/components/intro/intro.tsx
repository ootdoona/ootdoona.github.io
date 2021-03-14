import React from 'react';
import './intro.css';
import { introContent, personalInfo } from '../../contents';
import poster from "../../assets/poster.png";

function Intro() {
	return (
		<section className="section-intro">
				<div className="wrapper">
					<div className="poster">
						<img src={poster} alt="poster" className="poster-image"/>
					</div>
					<div className="title">
						{introContent.title}
					</div>
					<div className="line">-</div>
					<div className="para">
						{introContent.para1}
					</div>
					<div className="line">-</div>
					<div className="para">
						{introContent.para2}
					</div>
					<div className="line">-</div>

					<div className="artist-info">
						<div className="bold">{personalInfo.nameKo}  {personalInfo.nameEn}</div>
						<div>{personalInfo.email}</div>
						<div>{personalInfo.phone}</div>
						<div>{personalInfo.web}</div>
					</div>
				</div>
		</section>
	);
}
export default Intro;