import React from "react";
import ProjectScreen from "../interface/allscreens/projectscreen/ProjectScreen";
import Head from "next/head";

const projects = () => {
	return (
		<>
			<Head>
				<title>Oskwares projects</title>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,height=device-height"
				/>

				<link rel="canonical" href={`https://oskwares.vercel.app/`} />
				<meta name="theme-color" content="#1e228d" />

				<meta
					name="facebook-domain-verification"
					content="sdfgjhkl;gsjhkfjkshadjkf"
				/>
				<meta
					name="google-site-verification"
					content="gfjhkljjkbhdsgfh"
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:site_name" content="Oskwares" />
				<meta
					property="og:url"
					content={`https://oskwares.vercel.app/`}
				/>
				<meta property="og:type" content="Personal" />
				<meta property="og:article:section" content="personal" />
				<meta property="og:title" content="Oskwares" />
				<meta
					property="og:description"
					content="Boye Owusu Kwame popularly none as OSK is a web developer who build website and web applications. You can hire or contract him for your web projects"
				/>

				<meta property="og:image" content="" />
				<meta property="og:image:secure_url" content="" />
				<meta property="og:image:width" content="1079" />
				<meta property="og:image:height" content="970" />
				<meta
					property="og:image:alt"
					content="Boye Owusu Kwame popularly none as OSK is a web developer who build website and web applications. You can hire or contract him for your web projects"
				/>

				<meta property="og:site_name" content="Oskwares" />

				<meta
					property="article:published_time"
					content="2021-11-21T21:52:10+00:00"
				/>
				<meta
					property="article:modified_time"
					content="2021-11-21T21:52:17+00:00"
				/>

				<meta name="twitter:title" content="Oskwares" />
				<meta
					name="twitter:description"
					content="Boye Owusu Kwame popularly none as OSK is a web developer who build website and web applications. You can hire or contract him for your web projects"
				/>
				<meta name="twitter:image" content="0" />

				<meta property="article:author" content="@B_Owusu_kwame" />
				<meta name="twitter:site" content="@B_Owusu_kwame" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content={`https://oskwares.vercel.app/`}
				/>
				<meta
					property="twitter:url"
					content={`https://oskwares.vercel.app/`}
				/>

				<meta name="twitter:label1" content="Posted by" />
				<meta name="twitter:data1" content="Oskwares" />
				<meta name="twitter:label2" content="More items" />
				<meta name="twitter:data2" content="3 minutes" />
			</Head>
			<ProjectScreen />
		</>
	);
};

export default projects;
