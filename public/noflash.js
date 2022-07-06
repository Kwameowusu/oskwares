(() => {
	const darkTheme = window.matchMedia("(prefers-color-scheme: light)");
	const currentTheme = localStorage.getItem("theme");
	let html = document.getElementsByTagName("html")[0];

	let meta = [...document.querySelectorAll("meta")].find(
		(e) => e.name === "theme-color"
	);

	if (darkTheme.matches && currentTheme === null) {
		localStorage.setItem("theme", "light");
		html.classList.replace(html.className, "light");
		if (html.className === "light") {
			meta.content = "#ffffff";

			return;
		}
	} else if (currentTheme !== null) {
		html.classList.replace(html.className, currentTheme);
		
	}

	if (html.className === "light") {
		meta.content = "#ffffff";

		return;
	}

	if (html.className === "dark") {
		meta.content = "#000000";

		return;
	}
})();
