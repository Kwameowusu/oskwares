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
				EnterAnimate="slideUp"
				ExitAnimate="slideDown"
				detailsError={openabout}
				nodeRef={nodeRef}>
				<div ref={nodeRef} className="aboutoverlay-wrapper slideDown">
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
								<h3>Oskwares</h3>
							</span>
							<p className="about">
								I'm Boye Owusu Kwame. A web developer and
								electronic enthusiast. A Computer Engineering
								student between the year 2019 and 2023.
								<br></br> I'm a Ghanaian and I had my tertairy
								education at the Kwame Nkrumah Unviversity of
								Science and Technology(KNUST). I grew interest
								in web development during the COVID-19 period
								when the whole world was not in normal times.
								The idleness at home drove me to research on web
								development.
								<br></br> After surfing the internet for weeks,
								I launched a hundred days of Code period for
								myself. This initiative helped me to be
								determined and then focused. I also realized a
								lot of problems I can solve with web development
								in my society or in the Country.
								<br></br>
								Please contact me for your personal
								website,business website, blogging website,
								organizational website and E-commerce website
								👨🏿‍💻🎉🤩📞
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
