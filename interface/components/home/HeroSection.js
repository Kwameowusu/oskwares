import React, { useContext,useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import AdinkraHeroBack from "../../assets/svgs/AdinkraHeroBack";
import heroprofile from "../../assets/images/heroprofile.png";

import Image from "next/image";
import { BackSVG } from "../../assets/svgs/BackSVG";
import {
	DotsHorizonIcons,
	DownloadIcon,
	FacebookIcon,
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
	MoonIcon,
	TwitterIcon,
} from "../../assets/Icons";
import { ActionContext } from "../../lib/contextapis/ActionsProviders";
import AboutOverlay from "../overlays/AboutOverlay";
import { Slide } from "react-awesome-reveal";

const HeroSection = () => {
	const {openabout, setopenabout } = useContext(ActionContext);

	const route = useRouter();
	const active = {
		backgroundColor: "#ffffff",
		paddingLeft: "18px",
		fontWeight: "700",
	};

    	useEffect(() => {
			if (openabout === true) {
				document.querySelector("body").style.overflow = "hidden";
			}
			if (openabout === null || openabout === false)
				document.querySelector("body").style.overflow = "initial";
		}, [openabout]);


	return (
		<>
			<div className="herosection-wrapper">
				<div className="herosection-adinkra-background">
					<div className="herosection-adinkra-background-container">
						<AdinkraHeroBack />
					</div>
					<div className="herosection-adinkra-background-container">
						<AdinkraHeroBack />
					</div>
					<div className="herosection-adinkra-background-container">
						<AdinkraHeroBack />
					</div>
					<div className="herosection-bubbles1"></div>
					<div className="herosection-bubbles2"></div>
				</div>
				<div className="herosection-content-wrapper">
					<div className="herosection-navbar-wrapper">
						<div className="herosection-navbar-container">
							<span className="herosection-navbar-brand-name">
								<p>Oskwares</p>
							</span>
							<div className="herosection-navbar-menu-button-wrapper">
								<div className="herosection-navbar-menu-button-container">
									<button className="herosection-navbar-menu-button">
										<DotsHorizonIcons
											style={{
												color: "#828282",
												fontSize: "18px",
											}}
										/>
									</button>
									<div className="home-pages-routes-dropdown">
										<span className="home-pages-routes-inner-name-wrapper">
											<span
												style={
													route.pathname === "/"
														? active
														: {}
												}
												className="home-pages-routes-inner-name-container">
												<Link href="/">Home</Link>
											</span>
										</span>
										<span className="home-pages-routes-inner-name-wrapper">
											<span
												style={
													route.pathname ===
													"/#projects"
														? active
														: {}
												}
												className="home-pages-routes-inner-name-container">
												<Link href="/#showcase">
													Showcase
												</Link>
											</span>
										</span>
										<span className="home-pages-routes-inner-name-wrapper">
											<span
												onClick={() => {
													setopenabout(true);
												}}
												className="home-pages-routes-inner-name-container">
												<p>About Us</p>
											</span>
										</span>
									</div>
								</div>
							</div>
							<div className="herosection-nav-buttons-wrapper">
								<Link
									href="/"
									className="herosection-nav-button-link-wrapper">
									<div className="herosection-nav-button-link-container">
										<span
											className={`herosection-nav-button-link ${
												route.asPath === "/"
													? "herosection-nav-button-link-active"
													: ""
											}`}>
											<p>Home</p>
										</span>
									</div>
								</Link>
								<Link
									href="#showcase"
									className="herosection-nav-button-link-wrapper">
									<div className="herosection-nav-button-link-container">
										<span className="herosection-nav-button-link">
											<p>Showcase</p>
										</span>
									</div>
								</Link>
								<div className="herosection-nav-button-about">
									<div className="herosection-nav-button-link-container">
										<span
											onClick={() => {
												setopenabout(true);
											}}
											className="herosection-nav-button-link">
											<p>About</p>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="herosection-content-container">
						<div className="herosection-content-text-wrapper">
							<span className="herosection-content-text-boldtext-wrapper">
								<p className="herosection-content-heading">
									Hola!<s>🤙🏿</s>
									<span> {"h "}</span>
									<span> {"."}</span> I am{" "}
									<strong>Osk</strong>
								</p>
								<p className="herosection-content-heading-details">
									I build websites and <br></br> Web
									Applications
								</p>
							</span>

							<div className="herosection-content-calltopaction-wrapper">
								<button>
									<p>Hire me</p>
								</button>
							</div>
							<div className="herosection-content-social-wrapper">
								<button className="github">
									<GitHubIcon
										style={{
											color: "white",
											fontSize: "26px",
										}}
									/>
								</button>
								<span className="herosection-content-social-container">
									<Slide
										triggerOnce="true"
										direction="up"
										cascade="true"
										duration={500}
										fraction={0.8}
                                        
                                        >
										<button className="twitter">
											<TwitterIcon
												style={{
													color: "white",
													fontSize: "18px",
												}}
											/>
										</button>
										<button className="twitter">
											<FacebookIcon
												style={{
													color: "white",
													fontSize: "18px",
												}}
											/>
										</button>
										<button className="twitter">
											<LinkedInIcon
												style={{
													color: "white",
													fontSize: "18px",
												}}
											/>
										</button>
										<button className="twitter">
											<InstagramIcon
												style={{
													color: "white",
													fontSize: "18px",
												}}
											/>
										</button>
									</Slide>
								</span>
							</div>
						</div>
						<div className="herosection-content-image-decorations">
							<div className="herosection-content-image-back">
								<BackSVG />
							</div>
							<div className="herosection-content-image-wrapper">
								<span className="herosection-content-image-container">
									<Image
										src={heroprofile.src}
										// objectFit="cover"
										// layout="fill"
										width={320}
										height={480}
									/>
								</span>
								<div className="herosection-content-image-services">
									<div className="herosection-content-image-services-container">
										<div className="herosection-content-image-services-dot-wrapper">
											<span className="dots"></span>
											<span className="dot2"></span>
											<span className="dot3"></span>
											<span className="dot4"></span>
											<span className="dot5"></span>
										</div>
										<div className="herosection-content-image-service-text-wrapper">
											<p>Ecommerce website</p>
											<p>Magazine website</p>
											<p>Portfolio website</p>
											<p>Web apps </p>
											<p>blogging website</p>
										</div>
									</div>
								</div>
							</div>
							<div className="herosection-content-image-tag1">
								<span className="herosection-content-image-tag-dot"></span>
								<p>Web development</p>
							</div>
							<div className="herosection-content-image-tag2">
								<span className="herosection-content-image-tag-dot"></span>
								<p>Online Shops</p>
							</div>
							<div className="herosection-content-image-tag3">
								<span className="herosection-content-image-tag-dot"></span>
								<p>Web application</p>
							</div>
						</div>
						<div className="herosection-content-cv-theme-wrapper">
							<div className="herosection-content-cv-theme-container">
								<span className="herosection-content-theme-wrapper">
									<MoonIcon
                                    className="moon"
										style={{
											color: "#4F4F4F",
											fontSize: "30px",
										}}
									/>
								</span>
								<span className="download-cv">
									<span className="download-cv-icon">
										{" "}
										<DownloadIcon
											style={{
												color: "#828282",
												fontSize: "25px",
											}}
										/>{" "}
									</span>
									<p>Download my CV</p>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<AboutOverlay />
		</>
	);
};

export default HeroSection;
