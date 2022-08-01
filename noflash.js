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
	} else if (darkTheme.matches === false && currentTheme === null) {
		localStorage.setItem("theme", "light");
		document.documentElement.setAttribute("theme", "light");

		if (document.documentElement.getAttribute("theme") === "light") {
			meta.content = "#ffffff";
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
