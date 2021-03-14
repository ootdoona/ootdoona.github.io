import React from 'react';
import './header.css';
import { title, titleEn, language } from '../../contents';

interface HeaderProps {
  lang: string;
}

function Header(props: HeaderProps) {
	const langToSwitch = props.lang === "ko" ? language.en : language.ko;
	const pathToRoute = props.lang === "ko" ? "/en" : "/";
	const content = props.lang === "ko" ? title : titleEn;
	return (
		<header className="header header-section">
			<div className="wrapper clearfix">
				<div className="title-text">
					<p>{content.text}</p>
				</div>
				<div className="title-date">
					<p>{content.date}</p>
				</div>
				<div className="language">
					<a href={pathToRoute}>{langToSwitch}</a>
				</div>
			</div>
		</header>
	);
}
export default Header;