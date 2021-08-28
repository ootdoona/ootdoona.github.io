import React from 'react';
import Header from './header/header';
import Intro from './intro/intro';
import Archive from './archive/archive';
import Live from './live/live';
import Misc from './misc/misc';
import Miscnew from './miscnew/miscnew';

import LiveTest from './livetest/livetest';

export function MainKo() {
	return (
		<div className="root">
      <Header lang="ko" />
      <Intro lang="ko" />
      <Live lang="ko" />
      <Miscnew lang="ko" />
      <Archive lang="ko" />
      <Misc lang="ko" />
		</div>
	);
}

export function MainEn() {
	return (
		<div className="root">
      <Header lang="en"/>
      <Intro lang="en" />
      <Live lang="en" />
      <Miscnew lang="en" />
      <Archive lang="en" />
      <Misc lang="en" />
		</div>
	);
}

export function Test() {
	return (
		<div className="root">
      <Header lang="en"/>
      <Intro lang="en" />
      <LiveTest lang="en" />
      <Misc lang="en" />
		</div>
	);
}