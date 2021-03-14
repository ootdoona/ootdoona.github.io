import React from 'react';
import './live.css';
import { liveContent, liveContentEn } from '../../contents';

interface LiveProps {
  lang: string;
}

function Live(props: LiveProps) {
	const content = props.lang === "ko" ? liveContent : liveContentEn;
	return (
		<section className="section-live">
			<div className="wrapper">
				<div className="title">
					{content.title}
				</div>
				<div className="livestream">
    			   <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F100001820358579%2Fvideos%2F5294837047253588%2F&width=500&show_text=false&appId=1249604281777304&height=889" width="100%" height="500" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
				</div>
				<div className="line">-</div>
				<div className="para">
					{content.para1}
				</div>
			</div>
		</section>
	);
}
export default Live;