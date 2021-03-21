import React, { Component } from 'react';
import './live.css';
import { liveContent, liveContentEn } from '../../contents';
import { timeline, showTime, fblink } from '../../config';
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
  const difference = A.diff(B);
  let timeLeft: Time = {days: 0, hours: 0, minutes: 0, seconds: 0};
  if (difference > 0) {
    timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
    timeLeft.seconds = Math.floor((difference / 1000) % 60);
  }
  return timeLeft;
}

export default class Live extends Component<LiveProps, LiveState> {
  state = {
    curTime: moment(),
    nextShow: 0
  }

  componentDidMount() {
    // set nextShow based on timeline
    const cur = new Date();
    let nextShow = timeline.length;
    for (let i = 0; i < timeline.length; i++) {
      const diff = +new Date(timeline[i]) - +cur;
      if (diff > 0) {
        nextShow = i;
        break;
      }
      const t = moment.tz(timeline[i], "Asia/Seoul");
      const howlong = moment().diff(t);
      let days = Math.floor(howlong / (1000 * 60 * 60 * 24));
      let hours = Math.floor((howlong / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((howlong / 1000 / 60) % 60);
    	if (days === 0 && hours === 0 && minutes < showTime){
        nextShow = i;
        break;
      }
    }
    console.log(`next show is ${nextShow}`);
    // const now = moment();
    // console.log(`time1: ${t}`);
    // console.log(`time2: ${now} ${now.diff(t)}`);
    this.setState({
    	nextShow
    });
    let myInterval = setInterval(() => {
      const cur = moment();
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
    const cur = moment();
    const base = moment.tz(timeline[this.state.nextShow], "Asia/Seoul");
    const difference = base.diff(cur);
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
    // showCountdown = true;

    if (showCountdown) {
      return (
        <section className="section-live">
          <div className="wrapper">
            <div className="title">
            	{content.title}
            </div>
            <div className="livestream facebook-responsive">
              <div className="countdown">
                <div className="unit">
                  DAYS HOURS MINUTES SECONDS
                </div>
                <div className="numbers">
                  {/* {difference}:{}:{}:{} */}
                  {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
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