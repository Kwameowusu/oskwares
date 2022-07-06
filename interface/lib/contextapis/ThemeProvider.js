import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("");
const ThemeProvider = ({ children }) => {
	const [dashtheme, setdashtheme] = useState("");

	useEffect(() => {
		const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
		const currentTheme = localStorage.getItem("theme");

		if (darkTheme.matches && currentTheme === null) setdashtheme("dark");
		else if (currentTheme !== null) setdashtheme(currentTheme);
	}, []);

	useEffect(() => {
		let meta = [...document.querySelectorAll("meta")].find(
			(e) => e.name === "theme-color"
		);

		if (dashtheme) {
			localStorage.setItem("theme", dashtheme);
			document.documentElement.setAttribute("theme", dashtheme);

			if (document.documentElement.getAttribute("theme") === "dark") {
				meta.content = "#000000";
				document.head.appendChild(meta);
				return;
			}
			if (document.documentElement.getAttribute("theme") === "light") {
				meta.content = "#ffffff";
				document.head.appendChild(meta);
				return;
			}
		}
	}, [dashtheme]);

	const Changetheme = () => {


		if (document.documentElement.getAttribute("theme") === "light") {
			setdashtheme("dark");
		} else {
			setdashtheme("light");
		}
	};

	return (
		<ThemeContext.Provider value={{ dashtheme, Changetheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
