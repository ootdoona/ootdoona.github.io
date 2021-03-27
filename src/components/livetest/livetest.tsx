import { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './livetest.css';
import { liveContent, liveContentEn, personalInfo } from '../../contents';
import { timelineTest, showTime, livelinkURL } from '../../config';
import MapIcon from "../../assets/icon/map.png";
import InstaIcon from "../../assets/icon/insta.png";
import SpinnerIcon from "../../assets/icon/spinner.gif";
import moment from 'moment';
import 'moment-timezone';

interface LiveTestProps {
  lang: string;
}

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface LiveTestState {
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

export default class LiveTest extends Component<LiveTestProps, LiveTestState> {
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
    let nextShow = timelineTest.length;
    let showOn = false;
    for (let i = 0; i < timelineTest.length; i++) {
      const base = moment.tz(timelineTest[i], "Asia/Seoul").utc();
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
      fetch(livelinkURL[nextShow])
        .then(res => res.text())
        .then((res: string) => {
          this.setState({
            liveLink: res
          });
        });
    }
    if (nextShow === livelinkURL.length) {
      showOn = true;
      fetch(livelinkURL[nextShow - 1])
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
      const base = moment.tz(timelineTest[this.state.nextShow], "Asia/Seoul").utc();
      const difference = +(new Date(base.format())) - +(new Date(cur.format()));
      let showOn = false;
      let nextShow = this.state.nextShow;
      let liveLink = this.state.liveLink;

      if (this.state.nextShow >= timelineTest.length) {
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
        } else if (this.state.nextShow + 1 >= timelineTest.length) { // all show is over
          showOn = true;
        } else { // waiting for the next show
          showOn = false;
          nextShow = nextShow + 1;
          timeLeft = calculateTime(base, cur); // base - cur
          // if (liveLink != "") {
          //   liveLink = "";
          // }
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
    const content = this.props.lang === "ko" ? liveContent : liveContentEn;

    if (this.state.showOn && this.state.liveLink === "") {
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
		          <img src={MapIcon} className="btn-map-image" onClick={() => window.open(personalInfo.location, "_blank")}/>
            </Button>
            <div className="livestream facebook-responsive">
              <div className="spinner-container">
              <img src={SpinnerIcon} className="spinner" />
              </div>
            </div>
            <div className="line">-</div>
            <div className="para">
              {content.para1}
            </div>
            <div className="small">
              {content.para2}
            </div>
          </div>
        </section>
      );
    }

    let timeLeft = this.state.timeLeft;
    if (!this.state.showOn) {
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
		          <img src={MapIcon} className="btn-map-image" onClick={() => window.open(personalInfo.location, "_blank")}/>
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
            <div className="small">
              {content.para2}
            </div>
          </div>
        </section>
      );
    } else {
      console.log(`fetch result: ${this.state.liveLink}`);
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
		          <img src={MapIcon} className="btn-map-image" onClick={() => window.open(personalInfo.location, "_blank")}/>
            </Button>
            <div className="livestream facebook-responsive">
              {/* <iframe src={"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjinhee.park.0410%2Fvideos%2F3662436637186821%2F&show_text=false"} width="1280" height="720" style={{border: "none", overflow:"hidden"}} scrolling="no" frameBorder={0} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe> */}
              <iframe src={this.state.liveLink} width="1280" height="720" style={{border: "none", overflow:"hidden"}} scrolling="no" frameBorder={0} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
            </div>
            <div className="line">-</div>
            <div className="para">
              {content.para1}
            </div>
            <div className="small">
              {content.para2}
            </div>
          </div>
        </section>
      );
    }
  }
}