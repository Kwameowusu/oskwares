import ThemeProvider from "../interface/lib/contextapis/ThemeProvider";
import ActionProvider from "../interface/lib/contextapis/ActionsProviders";
import "../styles/global/globals.css";
import "../styles/home/HomeScreen.css";
import "../styles/home/HeroSection.css";
import "../styles/overlay/AboutOverlay.css";
import "../styles/projects/ProjectScreen.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider>
				<ActionProvider>
					<Component {...pageProps} />
				</ActionProvider>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
