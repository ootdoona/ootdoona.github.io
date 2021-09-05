import React from 'react';
import Header from './header/header';
import Intro from './intro/intro';
import Archive from './archive/archive';
import Live from './live/live';
import Misc from './misc/misc';

import LiveTest from './livetest/livetest';

export function MainKo() {
  const lang = "ko";
  const version = 0;
	return (
		<div className="root">
      <Header lang={lang} version={version}/>
      <Intro lang={lang} />
      <Live lang={lang} version={version}/>
      <Misc lang={lang} act={0} whiteBg={false} />
		</div>
	);
}

export function MainEn() {
  const lang = "en";
  const version = 0;
	return (
		<div className="root">
      <Header lang={lang} version={version}/>
      <Intro lang={lang} />
      <Live lang={lang} version={version}/>
      <Misc lang={lang} act={0} whiteBg={false}/>
		</div>
	);
}

export function Test() {
  const lang = "ko";
  const version = 1;
	return (
		<div className="root">
      <Header lang="ko" version={version}/>
      <Intro lang="ko" />
      <Live lang="ko" version={version}/>
      {/* <Misc lang="ko" act={2} whiteBg={false}/> */}
      <Archive lang="ko" />
      <Misc lang="ko" act={1} whiteBg={true}/>
		</div>
	);
}

export function TestEn() {
  const lang = "en"
  const version = 1;
	return (
		<div className="root">
      <Header lang="en" version={version}/>
      <Intro lang="en" />
      <Live lang="en" version={version}/>
      {/* <Misc lang="en" act={2} whiteBg={false}/> */}
      <Archive lang="en" />
      <Misc lang="en" act={1} whiteBg={true}/>
		</div>
	);
}