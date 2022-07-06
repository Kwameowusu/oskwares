import ThemeProvider from "../interface/lib/contextapis/ThemeProvider";
import ActionProvider from "../interface/lib/contextapis/ActionsProviders";
import "../styles/global/globals.css";
import "../styles/home/HomeScreen.css";
import "../styles/home/HeroSection.css";
import "../styles/overlay/AboutOverlay.css";
import "../styles/projects/ProjectScreen.css";
import { useEffect, useState } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
	const [theme, settheme] = useState(false);
	useEffect(() => {
        console.log(window )
        setTimeout(() => {
		settheme(!theme);
            
        }, 100);
	}, []);
     

	return (
		<>
			<Script
				pages="*"
				async
				type="text/javascript"
				src="/noflash.js"
				strategy="beforeInteractive"
			/>
			<ThemeProvider>
				<ActionProvider>
					{/* {theme && } */}
					<Component {...pageProps} />
				</ActionProvider>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
