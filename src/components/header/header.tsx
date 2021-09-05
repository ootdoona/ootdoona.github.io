import React from 'react';
import './header.css';
import { title, titleEn, language } from '../../contents';
import LangIcon from "../../assets/icon/lang.png";
import { scroller } from "react-scroll";

interface HeaderProps {
  lang: string;
  version: number;
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

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
  let langButton;
  if (props.version === 0) {
    subComponent = 
      <div className="title-date">{content.date}</div>
    langButton = 
      <a href={pathToRoute} className="language">
        <img src={LangIcon} className="btn-lang-image"/>
      </a>
  } else {
    if (isMobile.any()) {
      subComponent = <div></div>;
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
    langButton = 
      <a href={pathToRoute} className="language">
        {langToSwitch}
      </a>
  }
	return (
		<header className="header header-section">
			<div className="wrapper clearfix">
				<div className="title-text">
					{content.text}
				</div>
        {subComponent}
        {langButton}
			</div>
		</header>
	);
}
export default Header;