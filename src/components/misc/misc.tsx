import React from 'react';
import './misc.css';
import { notification, teamInfo, partnerInfo } from '../../contents';

function Misc() {
	return (
		<section className="section-misc">
			<div className="wrapper">
				<div className="line">-</div>
				<div className="notification">
					<div className="title">{notification.title}</div>
					<div className="consent">{notification.statement}</div>
				</div>
				<div className="line">-</div>
				<div className="team-info">
					<div className="title">
					  팀원	
					</div>
					<div className="section-team-member">
					  <div className="team-member">
					  	{teamInfo.sound.role}  {teamInfo.sound.name}
					  </div>
					  <div className="team-member">
					  	{teamInfo.transmission.role}  {teamInfo.transmission.name}
					  </div>
					  <div className="team-member">
					  	{teamInfo.design.role}  {teamInfo.design.name}
					  </div>
					  <div className="team-member">
					  	{teamInfo.development.role}  {teamInfo.development.name}
					  </div>
					</div>
				</div>
				<div className="line">-</div>
				<div className="partner-info">
					<div className="title">
						파트너
					</div>
					<div className="name">
						{partnerInfo.name}
					</div>
					
				</div>
			</div>
		</section>
	);
}
export default Misc;