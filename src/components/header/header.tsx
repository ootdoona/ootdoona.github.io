import React from 'react';
import './header.css';
import { title, titleEn, language, overview, overviewEn } from '../../contents';
import LangIcon from "../../assets/icon/lang.png";
import MenuIcon from "../../assets/icon/menu.png";
import CloseIcon from "../../assets/icon/close.png";
import { scroller } from "react-scroll";


interface HeaderProps {
  lang: string;
  version: number;
  nav: string;
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

interface HeaderProps {
  lang: string;
  version: number;
}

interface HeaderState {
  showMenu: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  public state = {
    showMenu: false
  };

  public executeScroll = (id: string) => {
    scroller.scrollTo(id, {
      offset: -50,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });

    this.setState({
      showMenu: false
    })
  }

  public showMenu = () => {
    this.setState({
      showMenu: true
    });
  }

  public render() {
    const langToSwitch = this.props.lang === "ko" ? language.en : language.ko;
    const content = this.props.lang === "ko" ? title : titleEn;
    const pathToRoute = this.props.lang === "ko" ? "/#/en" : "/";

    let subComponent;
    let langButton;
    let menuButton;
    let menu;
    if (this.props.version === 0) {
      subComponent = 
        <div className="title-date">{content.date}</div>
      langButton = 
        <a href={pathToRoute} className="language">
          <img src={LangIcon} className="btn-lang-image"/>
        </a>
    } else if (this.props.version === -1) {
      subComponent = 
        <div className="nav-button">
        </div>
      langButton = 
        <div className="language" style={{marginRight: isMobile.any() ? '4px':'15px'}}>
          <a href={pathToRoute} className={"language " + (this.props.lang === "en" ? "bold" : "")}>EN</a>
          <a href={pathToRoute} className="language">/</a>
          <a href={pathToRoute} className={"language " + (this.props.lang === "ko" ? "bold" : "")}>KO</a>
        </div>
    } else {
      if (isMobile.any()) {
        subComponent = <div></div>;
        menuButton =
          <div className="menu-button" onClick={this.showMenu}>
            <img src={MenuIcon} className="btn-menu-image"/>
          </div>;
        menu = 
          <Menu visibility={this.state.showMenu} lang={this.props.lang} scrollTo={this.executeScroll} close={() => this.setState({showMenu: false})} version={this.props.version}/>;
        if (this.props.version === 2) {
          langButton = 
            <a href={pathToRoute} className="language">
              {langToSwitch}
            </a>
        }
      } else {
        if (this.props.version === -1) {
          subComponent = 
            <div className="nav-button">
            </div>
          langButton = 
            <div className="language">
              <a href={pathToRoute} className={"language " + (this.props.lang === "en" ? "bold" : "")}>EN</a>
              <a href={pathToRoute} className="language">/</a>
              <a href={pathToRoute} className={"language " + (this.props.lang === "ko" ? "bold" : "")}>KO</a>
            </div>
        } else if (this.props.version === 3) {
          subComponent = 
            <div className="nav-button">
              <a className={this.props.nav === "now" ? "nav-button-bold" : "nav-button"} style={{cursor: 'pointer'}} href={this.props.lang === "ko" ? "/#/" : "/#/en"}>
                Now
              </a>
              <div>/</div>
              <a className={this.props.nav === "previous" ? "nav-button-bold" : "nav-button"} style={{cursor: 'pointer'}} href={this.props.lang === "ko" ? "/#/previous" : "/#/en/previous"}>
                Previous
              </a>
            </div>
          let pathToRouteEn, pathToRouteKo;
          if (this.props.nav === "now") {
            pathToRouteEn = "/#/en";
            pathToRouteKo = "/#/";
          } else {
            pathToRouteEn = "/#/en/previous";
            pathToRouteKo = "/#/previous";
          }
          langButton = 
            <div className="language">
              <a href={pathToRouteEn} className={"language " + (this.props.lang === "en" ? "bold" : "")}>EN</a>
              <a className="language">/</a>
              <a href={pathToRouteKo} className={"language " + (this.props.lang === "ko" ? "bold" : "")}>KO</a>
            </div>
        } else {
          subComponent = 
            <div className="nav-button">
              <div className="nav-button" style={{cursor: 'pointer'}} onClick={() => this.executeScroll("section-live")}>
                ACT II
              </div>
              <div className="nav-button" style={{cursor: 'pointer'}} onClick={() => this.executeScroll("section-archive")}>
                ACT I
              </div>
            </div>
          langButton = 
            <a href={pathToRoute} className="language">
              {langToSwitch}
            </a>
        }
      }
    }
    return (
      <header className="header header-section">
        <div className="wrapper clearfix">
          {menu}
          {menuButton}
          <div className="title-text">{content.text}</div>
          {subComponent}
          {langButton}
        </div>
      </header>
    );
  }
}

export default Header;


interface MenuProps {
  visibility: boolean;
  lang: string;
  version: number;
  scrollTo: (id: string) => void;
  close: () => void;
}
interface MenuState {
}
class Menu extends React.Component<MenuProps, MenuState> {
  public state = {
  };

  public render() {
    console.log(this.props.visibility);
    const content = this.props.lang === "ko" ? overview : overviewEn;
    let bg;
    if (this.props.visibility) {
      bg = 
        <div id="bg"></div>
    }

    let subMenu;
    let langButton;
    if (this.props.version < 3 && this.props.version != -1) { // before act 3
      subMenu = 
        <div>
          <div className='menu-list-button' onClick={() => this.props.scrollTo("section-archive")}>
            <div className='menu-list-title bold'>{content.title1}</div>
          </div>
          <div className='menu-list-button' onClick={() => this.props.scrollTo("section-live")}>
            <div className='menu-list-title bold'>{content.title2}</div>
          </div>
          <div className='menu-list-button'>
            <div className='menu-list-title'>{content.title3}</div>
          </div>
        </div>
    } else if (this.props.version === 3) {
      subMenu = 
        <div>
          <a href={this.props.lang === "ko" ? "/" : "/#/en"}>
            <div className='menu-list-button bold'>
              Now
            </div>
          </a>
          <a href={this.props.lang === "ko" ? "/#/previous" : "/#/en/previous"}>
            <div className='menu-list-button bold'>
              Previous
            </div>
          </a>
        </div>
        const pathToRoute = this.props.lang === "ko" ? "/#/en" : "/";
        langButton = 
          <div className="language-mobile">
            <a href={pathToRoute} className={"language-mobile " + (this.props.lang === "en" ? "bold" : "")}>EN</a>
            <a className="language-mobile">/</a>
            <a href={pathToRoute} className={"language-mobile " + (this.props.lang === "ko" ? "bold" : "")}>KO</a>
          </div>
    } else if (this.props.version === 3) {
      subMenu = 
        <div>
          <a href={this.props.lang === "ko" ? "/#/" : "/#/en"}>
            <div className='menu-list-button bold'>
              Now
            </div>
          </a>
          <a href={this.props.lang === "ko" ? "/#/previous" : "/#/en/previous"}>
            <div className='menu-list-button bold'>
              Previous
            </div>
          </a>
        </div>
        let pathToRouteEn, pathToRouteKo;
        pathToRouteEn = "/#/en";
        pathToRouteKo = "/#/";
        langButton = 
          <div className="language-mobile">
            <a href={pathToRouteEn} className={"language-mobile " + (this.props.lang === "en" ? "bold" : "")}>EN</a>
            <a className="language-mobile">/</a>
            <a href={pathToRouteKo} className={"language-mobile " + (this.props.lang === "ko" ? "bold" : "")}>KO</a>
          </div>
    } else { // demo
      subMenu = <div></div>
      const pathToRoute = this.props.lang === "ko" ? "/#/en" : "/";
      langButton = 
        <div className="language-mobile">
          <a href={pathToRoute} className={"language-mobile " + (this.props.lang === "en" ? "bold" : "")}>EN</a>
          <a href={pathToRoute} className="language-mobile">/</a>
          <a href={pathToRoute} className={"language-mobile " + (this.props.lang === "ko" ? "bold" : "")}>KO</a>
        </div>
    }

    return (
      <div>
        <div id="flyoutMenu"
            className={this.props.visibility ? "show" : "hide"}>
          <div className='menu-list-button'>
            {langButton}
            <img src={CloseIcon} className="btn-close-image" onClick={this.props.close}/>
          </div>
          <div className='menu-list-button bold' onClick={() => this.props.scrollTo("section-intro")}>
            Eros, as a Modern Punishment
          </div>
          {subMenu}
        </div>
        {bg}
      </div>
    );
  }

  public componentDidUpdate(prevPros: MenuProps) {
  }
}