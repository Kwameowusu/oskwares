import React, { useContext, useRef } from "react";

import logo from "../../assets/images/avatar.png";

import { TimesIcon } from "../../assets/Icons";
import { ActionContext } from "../../lib/contextapis/ActionsProviders";
import AnimateTransition from "../../lib/utils/AnimateTransition";

const AboutOverlay = () => {
	const { openabout, setopenabout } = useContext(ActionContext);
	const nodeRef = useRef();
	// console.log(openabout);

	return (
		<>
			<AnimateTransition
				promptWrapeprClassName="yes"
				timeOut="400"
				EnterAnimate="slideInUp"
				ExitAnimate="slideOutDown"
				detailsError={openabout}
				nodeRef={nodeRef}>
				<div ref={nodeRef} className="aboutoverlay-wrapper">
					<div className="aboutoverlay-container">
						<div className="aboutoverlay-close-wrapper">
							<button
								onClick={() => setopenabout(false)}
								className="overlay-close-container">
								<TimesIcon
									style={{
										color: "var(--faintTextColor)",
										fontSize: "25px",
									}}
								/>
							</button>
						</div>
						<div className="aboutoverlay-brand-logo">
							<span className="aboutovelay-brand-logo-circle">
								<img
									style={{
										borderRadius: "10px",
										filter: "var(  --imageFilter)",
									}}
									onError={(e) => {
										e.target.style.display = "none";
									}}
									src={logo.src}
									width={60}
									height={60}
									// border-radius={5}
									alt=""
								/>
							</span>
						</div>
						<div className="aboutoverlay-brand-story">
							<span className="aboutoverlay-brand-story-header">
								<h3> YOKA KNUST</h3>
							</span>
							<p className="about">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Officia dolores at
								voluptatibus, magni animi et nihil suscipit
								natus quo expedita esse assumenda quasi iste
								nostrum eveniet excepturi, sapiente quos fuga.
								Dolorem id sequi at voluptatem provident aliquam
								iste nulla in velit delectus, rem repellendus
								odio itaque reprehenderit quaerat nesciunt
								minus. Officiis esse earum eligendi eius nisi
								error, suscipit minus accusamus? lorem*5
							</p>
						</div>
						{/* <div className="aboutoverlay-s-handle-wrapper">
							<SocialMedia />
						</div> */}
					</div>
				</div>
			</AnimateTransition>
		</>
	);
};

export default React.memo(AboutOverlay);
