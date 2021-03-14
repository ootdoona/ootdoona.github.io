import React from 'react';
import './misc.css';
import { notification, teamInfo, partnerInfo } from '../../contents';

function Misc() {
	return (
		<section className="section-misc">
			<div className="inner">
				<div className="notification">
					<p>{notification.title}</p>
					<p>{notification.statement}</p>
				</div>
				<div className="team-info">
					<div className="title">
						<p>{teamInfo.title}</p>
					</div>
					<div className="team-member">
						<p>{teamInfo.sound.role}</p>
						<p>{teamInfo.sound.name}</p>
					</div>
					<div className="team-member">
						<p>{teamInfo.transmission.role}</p>
						<p>{teamInfo.transmission.name}</p>
					</div>
					<div className="team-member">
						<p>{teamInfo.design.role}</p>
						<p>{teamInfo.design.name}</p>
					</div>
					<div className="team-member">
						<p>{teamInfo.development.role}</p>
						<p>{teamInfo.development.name}</p>
					</div>
				</div>
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