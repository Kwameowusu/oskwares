import ThemeProvider from "../interface/lib/contextapis/ThemeProvider";
import ActionProvider from "../interface/lib/contextapis/ActionsProviders";
import "../styles/global/globals.css";
import "../styles/home/HomeScreen.css";
import "../styles/home/HeroSection.css";
import "../styles/overlay/AboutOverlay.css";
import "../styles/projects/ProjectScreen.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
	const [theme, settheme] = useState(false);
	useEffect(() => {
		settheme(!theme);
        console.log(typeof window === 'undefined')
	}, []);
        console.log(typeof window );

	return (
		<>
			<ThemeProvider>
				<ActionProvider>
					{theme && <Component {...pageProps} />}
				</ActionProvider>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
