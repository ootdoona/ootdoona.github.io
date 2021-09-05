import React from 'react';
import './header.css';
import { title, titleEn, language } from '../../contents';
import LangIcon from "../../assets/icon/lang.png";
import { scroller } from "react-scroll";

interface HeaderProps {
  lang: string;
  version: number;
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

  let subComponent;
  if (props.version === 0) {
    subComponent = 
        <div className="title-date">{content.date}</div>
  } else {
    subComponent = 
      <div className="nav-button">
        <div className="nav-button" style={{cursor: 'pointer'}} onClick={() => executeScroll("section-live")}>
          ACT II
        </div>
        <div className="nav-button" style={{cursor: 'pointer'}} onClick={() => executeScroll("section-archive")}>
          ACT I
        </div>
      </div>
  }
	return (
		<header className="header header-section">
			<div className="wrapper clearfix">
				<div className="title-text">
					{content.text}
				</div>
        {subComponent}
        <a href={pathToRoute} className="language">
          <img src={LangIcon} className="btn-lang-image"/>
        </a>
			</div>
		</header>
	);
}
export default Header;