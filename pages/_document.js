/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en" theme="dark">
				<Head>
					<meta charSet="utf-8" />
					<meta name="robots" content="index, follow" />
					<meta name="googlebot" content="index,follow" />
			
					<meta name="theme-color" />

					<link rel="manifest" href="/manifest.json" />

					<link
						rel="shortcut icon"
						href="/favicon.ico"
						type="image/x-icon"
					/>

					<link rel="apple-touch-icon" href="/logo192.png" />
					{/* <script src="https://www.paypal.com/sdk/js?client-id=AUUfR9lIbZPoDdDD5rwCe1D_ekfCsnAL5-rnFy0Zjc_qah80jHEUfwUtd5WqvUdOw_sCnMLWqd1PWao-&currency=USD"  ></script> */}
				</Head>
				<body>
					<script
                    type="text/javascript"
						dangerouslySetInnerHTML={{
							__html: `
                            (() => {
	const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
	const currentTheme = localStorage.getItem("theme");


	let meta = [...document.querySelectorAll("meta")].find(
		(e) => e.name === "theme-color"
	);

	if (darkTheme.matches && currentTheme === null) {
		localStorage.setItem("theme", "dark");
		document.documentElement.setAttribute("theme", "dark");

		if (document.documentElement.getAttribute("theme") === "dark") {
			meta.content = "#000000";

			return;
		}
	} else if (currentTheme !== null) {
		document.documentElement.setAttribute("theme", currentTheme);
	}

	if (document.documentElement.getAttribute("theme") === "light") {
		meta.content = "#ffffff";

		return;
	}

	if (document.documentElement.getAttribute("theme") === "dark") {
		meta.content = "#000000";

		return;
	}
})();
`,
						}}></script>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
