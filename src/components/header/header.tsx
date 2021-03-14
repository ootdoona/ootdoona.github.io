import React from 'react';
import './header.css';
import { title, language } from '../../contents';

function Header() {
	return (
		<header className="header header-section">
			<div className="wrapper clearfix">
				<div className="title-text">
					<p>{title.text}</p>
				</div>
				<div className="title-date">
					<p>{title.date}</p>
				</div>
				<div className="language">
					<p>{language.en}</p>
				</div>
			</div>
		</header>
	);
}
export default Header;