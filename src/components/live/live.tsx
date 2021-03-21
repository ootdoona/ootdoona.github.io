import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './live.css';
import { liveContent, liveContentEn, personalInfo } from '../../contents';
import { timeline, showTime, fblink } from '../../config';
import MapIcon from "../../assets/icon/map.png";
import InstaIcon from "../../assets/icon/insta.png";
import moment from 'moment';
import 'moment-timezone';

interface LiveProps {
  lang: string;
}

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface LiveState {
  curTime: moment.Moment;
  nextShow: number;
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
    nextShow: 0
  }

  componentDidMount() {
    // set nextShow based on timeline
    const cur = moment().utc();
    let nextShow = timeline.length;
    for (let i = 0; i < timeline.length; i++) {
      const base = moment.tz(timeline[i], "Asia/Seoul").utc();
      const diff = +(new Date(base.format())) - +(new Date(cur.format()));
      if (diff > 0) {
        nextShow = i;
        break;
      }
      const howlong = +(new Date(cur.format())) - +(new Date(base.format()));
      let days = Math.floor(howlong / (1000 * 60 * 60 * 24));
      let hours = Math.floor((howlong / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((howlong / 1000 / 60) % 60);
    	if (days === 0 && hours === 0 && minutes < showTime){
        nextShow = i;
        break;
      }
    }
    console.log(`next show is ${nextShow}`);
    this.setState({
    	nextShow
    });
    let myInterval = setInterval(() => {
      const cur = moment().utc();
    	this.setState({
    		curTime: cur
    	});
    }, 100);
  }

  componentWillUnmount() {
	  //TODO release myInterval
  }

  render() {
    const content = this.props.lang === "ko" ? liveContent : liveContentEn;
    // if next show is 0 
    // if current time is before timeline[next show], show count down based on timeline[next show]
    // else if timeline[next show] <= current time < timeline[next show] + 30m, show live stream,
    // else if current time > timeline[next show] + 30m, next show += 1
    let timeLeft: Time = {days: 0, hours: 0, minutes: 0, seconds: 0};
    const cur = moment().utc();
    const base = moment.tz(timeline[this.state.nextShow], "Asia/Seoul").utc();
    const difference = +(new Date(base.format())) - +(new Date(cur.format()));
    let showCountdown = true;

    if (this.state.nextShow >= timeline.length) {
      showCountdown = false; // all show is over
    } else if (difference > 0) { // we are waiting for the show
      showCountdown = true;
      timeLeft = calculateTime(base, cur);
    } else if (difference < 0) { // show has started
      const timeDiff = calculateTime(cur, base); // how long show is going on
      // if within 30m
      if (timeDiff.days === 0 && timeDiff.hours === 0 && timeDiff.minutes < showTime) {
        showCountdown = false;
      } else if (this.state.nextShow + 1 >= timeline.length) {
        showCountdown = false; // all show is over
      } else {
        this.setState({
          nextShow: this.state.nextShow + 1
        });
        showCountdown = true;
        timeLeft = calculateTime(base, cur); // base - cur
      }
    }

    if (showCountdown) {
      return (
        <section className="section-live">
          <div className="wrapper">
            <div className="title">
            	{content.title}
            </div>
            <Button className="btn">
		          <img src={InstaIcon} className="btn-insta-image" onClick={()=> window.open(personalInfo.insta, "_blank")}/>
            </Button>
            <Button className="btn">
		          <img src={MapIcon} className="btn-map-image"/>
            </Button>
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
            <div className="line">-</div>
            <div className="para">
              {content.para1}
            </div>
          </div>
        </section>
      );
    } else {
      const videoLink = fblink[this.state.nextShow < timeline.length ? this.state.nextShow : timeline.length - 1];
      return (
        <section className="section-live">
          <div className="wrapper">
            <div className="title">
            	{content.title}
            </div>
            <div className="livestream facebook-responsive">
              {/* <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwoojaega%2Fvideos%2F913576439405391%2F&width=1280" width="1280" height="720" style={{border: "none", overflow:"hidden"}} scrolling="no" frameBorder={0} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe> */}
              <iframe src={videoLink} width="1280" height="720" style={{border: "none", overflow:"hidden"}} scrolling="no" frameBorder={0} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
              {/* <iframe src={`${videoLink}&width=1280`} width="1280" height="720" style={{border: "none", overflow:"hidden"}} scrolling="no" frameBorder={0} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe> */}
            </div>
            <div className="line">-</div>
            <div className="para">
              {content.para1}
            </div>
          </div>
        </section>
      );
    }
  }
}