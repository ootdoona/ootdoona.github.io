import React from 'react';
import Header from './header/header';
import Intro from './intro/intro';
import Live from './live/live';
import Misc from './misc/misc';

import LiveTest from './livetest/livetest';

export function MainKo() {
	return (
		<div className="root">
      <Header lang="ko" />
      <Intro lang="ko" />
      <Live lang="ko" />
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