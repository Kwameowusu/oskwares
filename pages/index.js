
import HomeScreen from "../interface/allscreens/homescreen/HomeScreen";

import Head from "next/head";


export default function Home() {
     
  return (
		<>
			<Head>
				<title>Oskwares</title>
				{/* <meta
					name="viewport"
					content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,height=device-height"
				/> */}
                <meta name="viewport" content= "width=device-width, user-scalable=no"/>

				<link rel="canonical" href={`https://oskwares.vercel.app/`} />
			

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

				<meta
					property="og:image"
					content="https://firebasestorage.googleapis.com/v0/b/oskcat-f29fe.appspot.com/o/profile%2Fprobanner%20(1)%20(1).jpg?alt=media&token=2afbded6-d688-4e97-b320-20844e283396"
				/>
				<meta
					property="og:image:secure_url"
					content="https://firebasestorage.googleapis.com/v0/b/oskcat-f29fe.appspot.com/o/profile%2Fprobanner%20(1)%20(1).jpg?alt=media&token=2afbded6-d688-4e97-b320-20844e283396"
				/>
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
				<meta
					name="twitter:image"
					content="https://firebasestorage.googleapis.com/v0/b/oskcat-f29fe.appspot.com/o/profile%2Fprobanner%20(1)%20(1).jpg?alt=media&token=2afbded6-d688-4e97-b320-20844e283396"
				/>

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
			<HomeScreen />
		</>
  );
}
