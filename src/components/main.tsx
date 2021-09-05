import React from 'react';
import Header from './header/header';
import Intro from './intro/intro';
import Archive from './archive/archive';
import Live from './live/live';
import Misc from './misc/misc';

import LiveTest from './livetest/livetest';

export function MainKo() {
  const lang = "ko";
	return (
		<div className="root">
      <Header lang={lang} version={0}/>
      <Intro lang={lang} />
      <Live lang={lang} />
      <Misc lang={lang} act={0} whiteBg={false} />
		</div>
	);
}

export function MainEn() {
  const lang = "en";
	return (
		<div className="root">
      <Header lang={lang} version={0}/>
      <Intro lang={lang} />
      <Live lang={lang} />
      <Misc lang={lang} act={0} whiteBg={false}/>
		</div>
	);
}

export function Test() {
  const lang = "ko";
	return (
		<div className="root">
      <Header lang="ko" version={1}/>
      <Intro lang="ko" />
      <Live lang="ko" />
      {/* <Misc lang="ko" act={2} whiteBg={false}/> */}
      <Archive lang="ko" />
      <Misc lang="ko" act={1} whiteBg={true}/>
		</div>
	);
}

export function TestEn() {
  const lang = "en"
	return (
		<div className="root">
      <Header lang="en" version={1}/>
      <Intro lang="en" />
      <Live lang="en" />
      {/* <Misc lang="en" act={2} whiteBg={false}/> */}
      <Archive lang="en" />
      <Misc lang="en" act={1} whiteBg={true}/>
		</div>
	);
}