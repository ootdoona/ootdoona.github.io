import React from 'react';
import LeftIcon from "../../assets/icon/left.png";
import RightIcon from "../../assets/icon/right.png";
import './archive_all.css';
import { archiveAllContent, archiveAllContentEn, archiveAllAct, archiveAllText, archiveAllTextEn } from '../../contents';

interface ArchiveAllProps {
  lang: string;
  act: number;
  version: number;
  whiteBg: boolean;
}

interface ArchiveAllState {
  index: number;
  currentStage: number;
  imagePaths: string[];
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

export class ArchiveAll extends React.Component<ArchiveAllProps, ArchiveAllState> {
  public state = {
    index: 0,
    currentStage: 0,
    imagePaths: [],
  };

  componentWillMount() {
    const imagePaths = [];
    imagePaths.push(`0_0.jpg`);
    imagePaths.push(`0_1.jpg`);
    imagePaths.push(`0_2.jpg`);
    imagePaths.push(`1_0.jpg`);
    imagePaths.push(`1_1.jpg`);
    imagePaths.push(`2_0.jpg`);
    imagePaths.push(`2_1.jpg`);
    imagePaths.push(`2_2.jpg`);

    this.setState({
      imagePaths
    });
    for (let i = 0; i < imagePaths.length; i++) {
      let img: string = require(`../../assets/archive/${imagePaths[i]}`).default;
      let imgContainer = new Image();
      imgContainer.src = img;
    }
  }

  public render() {
    let content = this.props.lang === "ko" ? archiveAllContent : archiveAllContentEn;
    let text = this.props.lang === "ko" ? archiveAllText : archiveAllTextEn;
    if (this.state.imagePaths.length === 0) {
      return;
    }

    let img: string = require(`../../assets/archive/${this.state.imagePaths[this.state.index]}`).default;

    let title, subtitle;
    if (archiveAllAct[this.state.index] === 0) {
      subtitle = content.subtitle1;
    } else if (archiveAllAct[this.state.index] === 1) {
      subtitle = content.subtitle2;
    } else {
      subtitle = content.subtitle3;
    }
    if (isMobile.any()) {
      title =
        <div>
          <div className="title">
            {content.title}
          </div>
          <div className="title-bar">|</div>
          <div className="title-sub">
            {subtitle}
          </div>
        </div>
    } else {
      title =
        <div>
          <div className="title">
            {content.title}
          </div>
          <div className="title-bar">|</div>
          <div className="title-sub">
            {subtitle}
          </div>
        </div>
    }
    let bgColor = 'white';
    let fontColor = 'black';

    let leftButton;
    if (this.state.index === 0) {
      leftButton = <div></div>;
    } else {
      leftButton = <img src={LeftIcon} className="btn-left" onClick={this.goPrevious}/>
    }

    let rightButton;
    if (this.state.index === this.state.imagePaths.length - 1) {
      rightButton = <div></div>;
    } else {
      rightButton = <img src={RightIcon} className="btn-right" onClick={this.goNext}/>;
    }

    return (
      <section className="section-archive-all" style={{backgroundColor: bgColor, color: fontColor}}>
        <div className='wrapper' style={{backgroundColor: bgColor}}>
          {title}
          <div className='img-wrapper'>
            <img ref={this.setImg} src={img} 
                className="sliderimg"
                onClick={this.onClickImage}
                onContextMenu={(e)=> e.preventDefault()}></img>
            {leftButton}
            {rightButton}
          </div>
          <div className={isMobile.any() ? 'text-below-mobile' : 'text-below'}>{text[this.state.index]}</div>
        </div>
      </section>
    );
  }

  protected img?: HTMLImageElement;

  protected setImg = (img: HTMLImageElement) => {
    this.img = img;
  }
  private goPrevious = () => {
      if (this.state.index === 0) {
        return;
      }
      this.setState({
        index: this.state.index - 1
      });
  }
  private goNext = () => {
      if (this.state.index === this.state.imagePaths.length - 1) {
        return;
      }
      this.setState({
        index: this.state.index + 1
      });
  }
  private onClickImage = (evt: React.MouseEvent<HTMLElement>) => {
    const bbox = this.img!.getBoundingClientRect();

    // console.log(evt.clientX - bbox.left, evt.clientY - bbox.top, bbox.width, bbox.height);
    if (evt.clientX - bbox.left < bbox.width * 0.5) {
      this.goPrevious();
    } else {
      this.goNext();
    }
  }
}
export default ArchiveAll;