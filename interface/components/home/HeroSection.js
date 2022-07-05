import React, { useContext, useEffect } from "react";

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
	SunIcon,
	TwitterIcon,
} from "../../assets/Icons";
import { ActionContext } from "../../lib/contextapis/ActionsProviders";
import AboutOverlay from "../overlays/AboutOverlay";
import { Slide } from "react-awesome-reveal";
import { ThemeContext } from "../../lib/contextapis/ThemeProvider";

const HeroSection = () => {
	const { openabout, setopenabout } = useContext(ActionContext);
	const { Changetheme, dashtheme } = useContext(ThemeContext);

	const route = useRouter();
	const active = {
		backgroundColor: " var(--backgroundColor)",
		paddingLeft: "10px",
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
												color: "var(--faintTextColor)",
												fontSize: "18px",
											}}
										/>
									</button>
									<div className="home-pages-routes-dropdown">
										<div className="home-pages-routes-dropdown-container">
											<Link href="/">
												<span
													className={`home-pages-routes-inner-name-wrapper ${
														route.pathname === "/"
															? "home-pages-routes-inner-name-wrapper2"
															: ""
													} `}>
													<span
														style={
															route.pathname ===
															"/"
																? active
																: {}
														}
														className="home-pages-routes-inner-name-container">
														<p>Home</p>
													</span>
												</span>
											</Link>
											<Link href="#showcase">
												<span className="home-pages-routes-inner-name-wrapper">
													<span
														style={
															route.pathname ===
															"/#projects"
																? active
																: {}
														}
														className="home-pages-routes-inner-name-container">
														<p>Showcase</p>
													</span>
												</span>
											</Link>
											<span className="home-pages-routes-inner-name-wrapper">
												<span
													onClick={() => {
														setopenabout(true);
													}}
													className="home-pages-routes-inner-name-container">
													<p>About me</p>
												</span>
											</span>
										</div>
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
												route.asPath === "/" ||
												route.asPath === "/#showcase"
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
								<Link href="mailto:daarich470@gmail.com">
									<button>
										<p>Hire me</p>
									</button>
								</Link>
							</div>
							<div className="herosection-content-social-wrapper">
								<Link href="https://github.com/Kwameowusu">
									<a target="_blank" className="github">
										<GitHubIcon
											style={{
												color: "white",
												fontSize: "26px",
											}}
										/>
									</a>
								</Link>

								<span className="herosection-content-social-container">
									<Slide
										// triggerOnce="true"
										direction="up"
										cascade="true"
										duration={500}
										fraction={0.8}>
										<Link
											href="https://twitter.com/B_Owusu_kwame"
											passHref>
											<a target="_blank" className="twitter">
												<TwitterIcon
													style={{
														color: "white",
														fontSize: "18px",
													}}
												/>
											</a>
										</Link>

										<Link href="https://www.facebook.com/kwame.owusu.12382923">
											< a target="_blank" className="twitter">
												<FacebookIcon
													style={{
														color: "white",
														fontSize: "18px",
													}}
												/>
											</a>
										</Link>
										<Link href="https://www.linkedin.com/in/kwame-owusu-osk/">
											<a target="_blank" className="twitter">
												<LinkedInIcon
													style={{
														color: "white",
														fontSize: "18px",
													}}
												/>
											</a>
										</Link>
										<Link href="https://www.instagram.com/b_owusu_kwame/">
											<a target="_blank" className="twitter">
												<InstagramIcon
													style={{
														color: "white",
														fontSize: "18px",
													}}
												/>
											</a>
										</Link>
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
                                        
										width={315}
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
								<span
									onClick={Changetheme}
									className="herosection-content-theme-wrapper">
									{dashtheme === "light" ? (
										<MoonIcon
											className="moon"
											style={{
												color: "var(--faintTextColor)",
												fontSize: "30px",
											}}
										/>
									) : (
										<SunIcon
											className="sun"
											style={{
												color: "var(--faintTextColor)",
												fontSize: "30px",
											}}
										/>
									)}
								</span>
								<span className="download-cv">
									<span className="download-cv-icon">
										{" "}
										<DownloadIcon
											style={{
												color: "var(--faintTextColor)",
												fontSize: "25px",
											}}
										/>{" "}
									</span>
									<p>Resume</p>
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
