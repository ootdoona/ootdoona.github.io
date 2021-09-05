import React from 'react';
import './dots.css';

interface DotsProps {
  imagePaths: string[];
  img: string;
  curIndex: number;
  onClickDot: (index: number) => void;
}

interface DotsState {
  index: number;
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

export class Dots extends React.Component<DotsProps, DotsState> {
  public state = {
    index: 0
  };

  public render() {
    const thumbnailSize = 6;
    const buttonWidth = ((100 - thumbnailSize) / (this.props.imagePaths.length - 1));
    const buttonHeight = isMobile.any() ? 30 : 40;
    return (
      <div className='dots' style={{height: buttonHeight}}>
        {
          this.props.imagePaths.map((path, index) => {
            if (index == this.props.curIndex) {
              return (
                <div className='dot-button' 
                     style={{width: `${thumbnailSize}%`, 
                             height: `${buttonHeight}px`}}>
                  <img src={require(`../../assets/archive/${path}`).default}
                      className='dot-button-img'/>
                </div>
              )
            } else {
              return (
                <div className='dot-button' onClick={()=>this.onClickDot(index)}
                    style={{width: `${buttonWidth}%`, height: `${buttonHeight}px`}} >
                  <div className='dot-button-overlay' 
                      style={{backgroundColor: '#4e4e4e',
                              width: `${buttonWidth}%`, height: `${buttonHeight}px`}}>
                  </div>
                  <img src={require(`../../assets/archive/${path}`).default}
                      width={`100%`}
                      height={`100%`}
                      />
                </div>
              )
            }
          })
        }
      </div>
    );
  }

  public componentDidUpdate(prevPros: DotsProps) {
  }

  private onClickDot = (index: number) => {
    this.setState({
      index
    });
    this.props.onClickDot(index);
  }
}

export default Dots;