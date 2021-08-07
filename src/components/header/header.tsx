import React from 'react';
import './header.css';
import { title, titleEn, language } from '../../contents';
import LangIcon from "../../assets/icon/lang.png";
import { scroller } from "react-scroll";

interface HeaderProps {
  lang: string;
}

const executeScroll = (id: string) => {
  scroller.scrollTo(id, {
    offset: -50,
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}

function Header(props: HeaderProps) {
	const langToSwitch = props.lang === "ko" ? language.en : language.ko;
	const pathToRoute = props.lang === "ko" ? "/#/en" : "/";
	const content = props.lang === "ko" ? title : titleEn;
	return (
		<header className="header header-section">
			<div className="wrapper clearfix">
				<div className="title-text">
					{content.text}
				</div>
        <div className="nav-button" onClick={() => executeScroll("section-live")}>
          {content.live}
        </div>
        <div className="nav-button">/</div>
        <div className="nav-button" onClick={() => executeScroll("section-archive")}>
          {content.archive}
        </div>
        <a href={pathToRoute} className="language">
          <img src={LangIcon} className="btn-lang-image"/>
        </a>
			</div>
		</header>
	);
}
export default Header;