import React from 'react';
import { Button } from 'react-bootstrap';
import './seq_container.css';

import Dots from '../dots/dots';
import LangIcon from "../../assets/icon/lang.png";
import LeftIcon from "../../assets/icon/left.png";
import RightIcon from "../../assets/icon/right.png";

interface SeqContainerProps {
  imagePaths: string[];
  lang: string;
  act: number;
  whiteBg: boolean;
}

interface SeqContainerState {
  index: number;
  currentStage: number;
}

export class SeqContainer extends React.Component<SeqContainerProps, SeqContainerState> {
  public state = {
    index: 0,
    currentStage: 0
  };

  public render() {
    let img: string = require(`../../assets/archive/${this.props.imagePaths[this.state.index]}`).default;

    let currentStage = this.state.currentStage;
    let seqNav;
    if (this.props.act === 1) {
      if (this.state.index == 0) {
        currentStage = 0;
      } else if (this.state.index < 25) {
        currentStage = 1;
      } else {
        currentStage = 2;
      }
      seqNav =
          <div className='img-overlay'>
            <div className={"img-overlay-button " + (currentStage == 0 ? " selected" : "")}
                 style={{cursor: 'pointer'}} onClick={() => this.changeStage(0, 0)}>{this.props.lang === "en" ? "Space" : "공간"}</div>
            <div className='img-overlay-button'>/</div>
            <div className={"img-overlay-button " + (currentStage == 1 ? " selected" : "")}
                 style={{cursor: 'pointer'}} onClick={() => this.changeStage(1, 1)}>{this.props.lang === "en" ? "1st" : "1회차"}</div>
            <div className='img-overlay-button'>/</div>
            <div className={"img-overlay-button " + (currentStage == 2 ? " selected" : "")}
                 style={{cursor: 'pointer'}} onClick={() => this.changeStage(2, 25)}>{this.props.lang === "en" ? "2nd" : "2회차"}</div>
          </div>
    } else { // 2
      if (this.state.index == 0) {
        currentStage = 0;
      } else {
        currentStage = 1;
      }
      seqNav =
          <div className='img-overlay'>
            <div className={"img-overlay-button " + (currentStage == 0 ? " selected" : "")}
                 style={{cursor: 'pointer'}} onClick={() => this.changeStage(0, 0)}>{this.props.lang === "en" ? "Space" : "공간"}</div>
            <div className='img-overlay-button'>/</div>
            <div className={"img-overlay-button " + (currentStage == 1 ? " selected" : "")}
                 style={{cursor: 'pointer'}} onClick={() => this.changeStage(1, 1)}>{this.props.lang === "en" ? "Performance" : "퍼포먼스"}</div>
          </div>
    }

    let leftButton;
    if (this.state.index === 0) {
      leftButton = <div></div>;
    } else {
      leftButton = <img src={LeftIcon} className="btn-left" onClick={this.goPrevious}/>
    }

    let rightButton;
    if (this.state.index === this.props.imagePaths.length - 1) {
      rightButton = <div></div>;
    } else {
      rightButton = <img src={RightIcon} className="btn-right" onClick={this.goNext}/>;
    }

    const bgColor = this.props.whiteBg ? 'white' : '#242526';
    return (
      <div className='seq-wrapper' style={{backgroundColor: bgColor}}>
        <div className='img-wrapper'>
          <img ref={this.setImg} src={img} 
              className="sliderimg"
              onClick={this.onClickImage}/>
          {seqNav}
          {leftButton}
          {rightButton}
        </div>
        <Dots curIndex={this.state.index} imagePaths={this.props.imagePaths} img={img} onClickDot={this.moveTo} whiteBg={this.props.whiteBg}/>
      </div>
    );
  }

  protected img?: HTMLImageElement;

  protected setImg = (img: HTMLImageElement) => {
    this.img = img;
  }

  public componentDidUpdate() {
    this.renderCanvas();
  }

  protected renderCanvas = () => {

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
      if (this.state.index === this.props.imagePaths.length - 1) {
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

  public changeStage = (stageIndex: number, index: number) => {
    this.setState({
      currentStage: stageIndex,
      index
    });
  }

  public moveTo = (index: number) => {
    this.setState({
      index
    });
  }
}

export default SeqContainer;