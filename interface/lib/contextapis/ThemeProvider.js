import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("");
const ThemeProvider = ({ children }) => {
	const [dashtheme, setdashtheme] = useState("");
	const [theme, settheme] = useState(false);

	useEffect(() => {
		const darkTheme = window.matchMedia("(prefers-color-scheme: light)");
		const currentTheme = localStorage.getItem("theme");

		if (darkTheme.matches && currentTheme === null) setdashtheme("light");
		else if (currentTheme !== null) setdashtheme(currentTheme);
	}, []);

	useEffect(() => {
		let body = document.getElementsByTagName("BODY")[0];
		// console.log(dashtheme);

		if (dashtheme) {
			localStorage.setItem("theme", dashtheme);
			body.classList.replace(body.className, dashtheme);
		}
	}, [dashtheme]);

	const Changetheme = () => {
		let body = document.getElementsByTagName("BODY")[0];

		if (body.className === "light") {
			setdashtheme("dark");
		} else {
			setdashtheme("light");
		}
	};

	return (
		<ThemeContext.Provider value={{ theme,dashtheme, Changetheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
