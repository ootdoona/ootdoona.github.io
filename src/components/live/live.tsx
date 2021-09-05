import { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './live.css';
import { liveContent, liveContentEn, liveV2Content, liveV2ContentEn } from '../../contents';
import { timeline, showTime, livelinkURL } from '../../config';
import MapIcon from "../../assets/icon/map.png";
import FbIcon from "../../assets/icon/fb.png";
import SpinnerIcon from "../../assets/icon/spinner.gif";
import moment from 'moment';
import 'moment-timezone';

interface LiveProps {
  lang: string;
  version: number;
}

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface LiveState {
  nextShow: number;
  showOn: boolean;
  liveLink: string;
  timeLeft: Time;
}

const calculateTime = (A: moment.Moment, B: moment.Moment) => {
  const difference = +(new Date(A.format())) - +(new Date(B.format()));
  let timeLeft: Time = {days: 0, hours: 0, minutes: 0, seconds: 0};
  if (difference > 0) {
    timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
    timeLeft.seconds = Math.floor((difference / 1000) % 60);
  }
  return timeLeft;
}
const zeropad = (x: number) => {
  return x < 10 ? `0${x}` : `${x}`;
}

export default class Live extends Component<LiveProps, LiveState> {
  state = {
    curTime: moment(),
    nextShow: 0,
    showOn: false,
    liveLink: "",
    timeLeft: {days: 0, hours: 0, minutes: 0, seconds: 0}
  }

  componentDidMount() {
    // set nextShow based on timeline
    const cur = moment().utc();
    let nextShow = timeline.length;
    let showOn = false;
    for (let i = 0; i < timeline.length; i++) {
      const base = moment.tz(timeline[i], "Asia/Seoul").utc();
      const diff = +(new Date(base.format())) - +(new Date(cur.format()));
      if (diff > 0) {
        nextShow = i;
        break;
      }
      const howlong = -diff; // +(new Date(cur.format())) - +(new Date(base.format()));
      let days = Math.floor(howlong / (1000 * 60 * 60 * 24));
      let hours = Math.floor((howlong / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((howlong / 1000 / 60) % 60);
    	if (days === 0 && hours === 0 && minutes < showTime){
        nextShow = i;
        showOn = true;
        break;
      }
    }
    console.log(`next show is ${nextShow}`);

    // if show on, get the showlink
    if (showOn) {
      fetch(livelinkURL[nextShow], {cache: "no-store"})
        .then(res => res.text())
        .then((res: string) => {
          this.setState({
            liveLink: res
          });
        });
    }
    if (nextShow === livelinkURL.length) {
      showOn = true;
      fetch(livelinkURL[nextShow - 1], {cache: "no-store"})
        .then(res => res.text())
        .then((res: string) => {
          this.setState({
            liveLink: res
          });
        });
    }

    this.setState({
    	nextShow,
      showOn
    });

    let myInterval = setInterval(() => {
      // if next show is 0 
      // if current time is before timeline[next show], show count down based on timeline[next show]
      // else if timeline[next show] <= current time < timeline[next show] + 30m, show live stream,
      // else if current time > timeline[next show] + 30m, next show += 1
      let timeLeft: Time = {days: 0, hours: 0, minutes: 0, seconds: 0};
      const cur = moment().utc();
      const base = moment.tz(timeline[this.state.nextShow], "Asia/Seoul").utc();
      const difference = +(new Date(base.format())) - +(new Date(cur.format()));
      let showOn = false;
      let nextShow = this.state.nextShow;
      let liveLink = this.state.liveLink;

      if (this.state.nextShow >= timeline.length) {
        // all show is over
        showOn = true;
      } else if (difference > 0) { // we are waiting for the show
        timeLeft = calculateTime(base, cur);
        if (liveLink != "") {
          liveLink = "";
        }
      } else if (difference < 0) { // show has started
        const timeDiff = calculateTime(cur, base); // how long show is going on
        // if within 30m
        if (timeDiff.days === 0 && timeDiff.hours === 0 && timeDiff.minutes < showTime) {
          showOn = true;
          // fetch the link and before available, show spinner
          if (this.state.liveLink === "") {
            fetch(livelinkURL[this.state.nextShow], {cache: "no-store"})
              .then(res => {
                if (!res.ok) {
                  return "";
                }
                return res.text();
              })
              .then((res) => {
                this.setState({
                  liveLink: res
                });
              });
          }
        } else if (this.state.nextShow + 1 >= timeline.length) { // all show is over
          showOn = true;
        } else { // waiting for the next show
          showOn = false;
          nextShow = nextShow + 1;
          timeLeft = calculateTime(base, cur); // base - cur
        }
      }

    	this.setState({
        showOn,
        nextShow,
        timeLeft,
        liveLink
    	});
    }, 1000);
  }

  componentWillUnmount() {
	  //TODO release myInterval
  }

  render() {
    let content;
    let title;
    let smallPara;
    let liveStream;
    let timeLeft = this.state.timeLeft;
    if (this.props.version === 0) {
      content = this.props.lang === "ko" ? liveContent : liveContentEn;
      title =
        <div className="title">
        	{content.title}
        </div>
      smallPara = 
        <div className="small">
          {content.para2}
        </div>
      if (this.state.showOn && this.state.liveLink === "") {
        liveStream = 
          <div className="livestream facebook-responsive">
            <div className="spinner-container">
            <img src={SpinnerIcon} className="spinner" />
            </div>
          </div>
      } else if (!this.state.showOn) {
        liveStream = 
            <div className="livestream facebook-responsive">
              <div className="countdown">
                <div className="unit">
                  <div className="days">DAYS</div>
                  <div className="hours">HOURS</div>
                  <div className="minutes">MINUTES</div>
                  <div className="seconds">SECONDS</div>
                </div>
                <div className="numbers">
                  {zeropad(timeLeft.days)}:{zeropad(timeLeft.hours)}:{zeropad(timeLeft.minutes)}:{zeropad(timeLeft.seconds)}
                </div>
              </div>
            </div>
      } else {
        liveStream =
          <div className="livestream facebook-responsive">
            <iframe src={this.state.liveLink} width="1280" height="720" style={{border: "none", overflow:"hidden"}} scrolling="no" frameBorder={0} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
          </div>
      }
    } else { // v2
      content = this.props.lang === "ko" ? liveV2Content : liveV2ContentEn;
      title =
        <div>
          <div className="title">{content.title}</div>
          <div className="title-date">{"2021. 08. 14"}</div>
        </div>
      smallPara = <div></div>;
      liveStream = 
          <div className="livestream facebook-responsive">
            <div className="countdown">
              <div className="unit">
                <div className="days">DAYS</div>
                <div className="hours">HOURS</div>
                <div className="minutes">MINUTES</div>
                <div className="seconds">SECONDS</div>
              </div>
              <div className="numbers">
                {zeropad(0)}:{zeropad(0)}:{zeropad(0)}:{zeropad(0)}
              </div>
            </div>
          </div>
    }

    return (
      <section className="section-live">
        <div className="wrapper">
          {title}
          <Button className="btn">
		        <img src={FbIcon} className="btn-fb-image"/>
		        {/* <img src={FbIcon} className="btn-fb-image" onClick={()=> window.open(personalInfo.fb, "_blank")}/> */}
          </Button>
          <Button className="btn">
		        <img src={MapIcon} className="btn-map-image"/>
		        {/* <img src={MapIcon} className="btn-map-image" onClick={() => window.open(personalInfo.location, "_blank")}/> */}
          </Button>
          {liveStream}
          <div className="line">-</div>
          <div className="para">
            {content.para1}
          </div>
          {smallPara}
        </div>
      </section>
    );
  }
}