import React from 'react';
import './misc_all.css';
import { introInfoEn, introInfoKo, teamInfoAll, teamInfoAllEn, footNoteKo, footNoteEn } from '../../contents';

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

interface MiscAllProps {
  lang: string;
  type: number;
}

function MiscAll(props: MiscAllProps) {
  let bgColor = 'white';
  let fontColor = 'black';

  let content, title, footnote;
  if (props.type === 0) {
    const introInfo = props.lang === "ko" ? introInfoKo : introInfoEn;
    if (isMobile.any()) {
      content = 
        <div className="layout">
          <div className="col">
            <div className="col-title">ACT I</div>
            <div className="row">
              <div className="left">{introInfo.title1}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.date1}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.time1}</div>
            </div>
            <div className="row">
              <div className="left"></div>
            </div>
          </div>
          <div className="col">
            <div className="col-title">ACT II</div>
            <div className="row">
              <div className="left">{introInfo.title2}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.date2}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.time2}</div>
            </div>
          </div>
          <div className="col">
            <div className="col-title">ACT III</div>
            <div className="row">
              <div className="left">{introInfo.title3}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.date3}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.time3}</div>
            </div>
          </div>
          <div className="col">
            <div className="col-title">ARTIST</div>
            <div className="row">
              <div className="left">{introInfo.artist}</div>
            </div>
            <div className="row">
              <div className="left" onClick={()=> window.open(introInfo.instalink, "_blank")} style={{cursor: 'pointer'}}>{introInfo.insta}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.email}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.phone}</div>
            </div>
          </div>
        </div>

    } else {
      content = 
        <div className="layout">
          <div className="col">
            <div className="col-title">ACT I</div>
            <div className="row">
              <div className="left">{introInfo.title1}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.date1}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.time1}</div>
            </div>
            <div className="row">
              <div className="left"></div>
            </div>
          </div>
          <div className="col">
            <div className="col-title">ACT II</div>
            <div className="row">
              <div className="left">{introInfo.title2}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.date2}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.time2}</div>
            </div>
          </div>
          <div className="col">
            <div className="col-title">ACT III</div>
            <div className="row">
              <div className="left">{introInfo.title3}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.date3}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.time3}</div>
            </div>
          </div>
          <div className="col">
            <div className="col-title">ARTIST</div>
            <div className="row">
              <div className="left-odd">{introInfo.artist} 
              <div className="left-odd" onClick={()=> window.open(introInfo.instalink, "_blank")} style={{cursor: 'pointer', marginLeft: '5px'}}>{introInfo.insta}</div>
              </div>
            </div>
            <div className="row">
              <div className="left">{introInfo.email}</div>
            </div>
            <div className="row">
              <div className="left">{introInfo.phone}</div>
            </div>
          </div>
        </div>

    }
  } else { // type 1
    const teamInfoContent = props.lang === "ko" ? teamInfoAll : teamInfoAllEn;
    title = 
      <div className="title">
        {props.lang === "ko" ? "도움" : "TEAM"}
      </div>
    content = 
      <div className={isMobile.any() ? "layout-part2-mobile" : "layout"}>
        <div className="col">
          <div className="col-title">ACT I</div>
          <div className="row">
            <div className="left">{teamInfoContent.sound.role}</div>
            <div className="right">{teamInfoContent.sound.name}</div>
          </div>
          <div className="row">
            <div className="left">{teamInfoContent.space.role}</div>
            <div className="right">{teamInfoContent.space.name}</div>
          </div>
          <div className="row">
            <div className="left">{teamInfoContent.help.role}</div>
            <div className="right">{teamInfoContent.help.name}</div>
          </div>
          <div className="row">
            <div className="left"></div>
            <div className="right">{teamInfoContent.help.etc}</div>
          </div>
          <div className="row">
            <div className="left">{teamInfoContent.camera.role}</div>
            <div className="right">{teamInfoContent.camera.name}</div>
          </div>
          <div className="row">
            <div className="left">{teamInfoContent.partner.role}</div>
            <div className="right">{teamInfoContent.partner.name}</div>
          </div>
          <div className="row">
            <div className="left"></div>
            <div className="right">{teamInfoContent.partner.etc}</div>
          </div>
        </div>
        <div className="col">
          <div className="col-title">ACT II</div>
          <div className="row">
            <div className="left">{teamInfoContent.costume.role}</div>
            <div className="right">{teamInfoContent.costume.name}</div>
          </div>
          <div className="row">
            <div className="left"></div>
            <div className="right">{teamInfoContent.costume.etc}</div>
          </div>
        </div>
        <div className="col">
          <div className="col-title">ACT III</div>
          <div className="row">
            <div className="left">{teamInfoContent.help3.role}</div>
            <div className="right">{teamInfoContent.help3.name}</div>
          </div>
          <div className="row">
            <div className="left">{teamInfoContent.camera3.role}</div>
            <div className="right">{teamInfoContent.camera3.name}</div>
          </div>
          <div className="row">
            <div className="left"></div>
            <div className="right">{teamInfoContent.camera3.etc}</div>
          </div>
          <div className="row">
            <div className="left">{teamInfoContent.partner3.role}</div>
            <div className="right">{teamInfoContent.partner3.name}</div>
          </div>
        </div>
        <div className="col">
          <div className="col-title">WEB</div>
          <div className="row">
            <div className="left">{teamInfoContent.design.role}</div>
            <div className="right">{teamInfoContent.design.name}</div>
          </div>
          <div className="row">
            <div className="left">{teamInfoContent.dev.role}</div>
            <div className="right">{teamInfoContent.dev.name}</div>
          </div>
          <div className="row">
            <div className="left">{teamInfoContent.transmission.role}</div>
            <div className="right">{teamInfoContent.transmission.name}</div>
          </div>
          <div className="row">
            <div className="left">{teamInfoContent.translation.role}</div>
            <div className="right">{teamInfoContent.translation.name}</div>
          </div>
        </div>
      </div>
    const footNote = props.lang === "ko" ? footNoteKo : footNoteEn;
    footnote = 
      <div className="footnote">
        <div id="note">{footNote.note}</div>
        <div id="cc">{footNote.cc}</div>
      </div>
  }

  return (
    <section className="section-misc-all" style={{backgroundColor: bgColor, color: fontColor}}>
      <div className="wrapper">
        {title}
        {content}
        {footnote}
      </div>
    </section>
  );
}
export default MiscAll;