import React, { useState, useEffect } from 'react';
import Header from './header/header';
import Intro from './intro/intro';
import Archive from './archive/archive';
import Live from './live/live';
import Misc from './misc/misc';
import { scroller } from "react-scroll";

import LiveTest from './livetest/livetest';

// export function MainKo() {
//   const lang = "ko";
//   const version = 0;
// 	return (
// 		<div className="root">
//       <Header lang={lang} version={version}/>
//       <Intro lang={lang} />
//       <Live lang={lang} version={version}/>
//       <Misc lang={lang} act={0} whiteBg={false} />
// 		</div>
// 	);
// }

// export function MainEn() {
//   const lang = "en";
//   const version = 0;
// 	return (
// 		<div className="root">
//       <Header lang={lang} version={version}/>
//       <Intro lang={lang} />
//       <Live lang={lang} version={version}/>
//       <Misc lang={lang} act={0} whiteBg={false}/>
// 		</div>
// 	);
// }

export function MainKo() {
  const lang = "ko";
  const version = 2;
	return (
		<div className="root">
      <Header lang="ko" version={version} nav={""}/>
      <Intro lang="ko" version={version}/>
      <Live lang="ko" version={version}/>
      <Misc lang="ko" act={2} whiteBg={false}/>
      <Archive lang="ko" act={1} version={version} whiteBg={true}/>
      <Misc lang="ko" act={1} whiteBg={true}/>
		</div>
	);
}

export function MainEn() {
  const lang = "en"
  const version = 2;
	return (
		<div className="root">
      <Header lang="en" version={version} nav={""}/>
      <Intro lang="en" version={version}/>
      <Live lang="en" version={version}/>
      <Misc lang="en" act={2} whiteBg={false}/>
      <Archive lang="en" act={1} version={version} whiteBg={true}/>
      <Misc lang="en" act={1} whiteBg={true}/>
		</div>
	);
}

export function DevKO1() {
  const lang = "ko"
  const version = -1; // -1 for test; preparing for version 3
  const navPoint = "now";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Intro lang={lang} version={version}/>
      <Live lang={lang} version={version}/>
      <Misc lang={lang} act={5} whiteBg={false}/>
		</div>
	);
}
export function DevKO2() {
  const lang = "ko"
  const version = -1; // -1 for test; preparing for version 3
  const navPoint = "previous";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Archive lang={lang} act={1} version={version} whiteBg={false}/>
      <Misc lang={lang} act={3} whiteBg={false}/>
      <Archive lang={lang} act={2} version={version} whiteBg={false}/>
      <Misc lang={lang} act={4} whiteBg={false}/>
		</div>
	);
}
export function DevEN1() {
  const lang = "en"
  const version = -1; // -1 for test; preparing for version 3
  const navPoint = "now";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Intro lang={lang} version={version}/>
      <Live lang={lang} version={version}/>
      <Misc lang={lang} act={5} whiteBg={false}/>
		</div>
	);
}
export function DevEN2() {
  const lang = "en"
  const version = -1; // -1 for test; preparing for version 3
  const navPoint = "previous";
	return (
		<div className="root">
      <Header lang={lang} version={version} nav={navPoint}/>
      <Archive lang={lang} act={1} version={version} whiteBg={false}/>
      <Misc lang={lang} act={3} whiteBg={false}/>
      <Archive lang={lang} act={2} version={version} whiteBg={false}/>
      <Misc lang={lang} act={4} whiteBg={false}/>
		</div>
	);
}