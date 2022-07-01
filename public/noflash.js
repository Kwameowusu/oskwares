(() => {
	const darkTheme = window.matchMedia("(prefers-color-scheme: light)");
	const currentTheme = localStorage.getItem("theme");
	let body = document.getElementsByTagName("body")[0];

	let meta = [...document.querySelectorAll("meta")].find(
		(e) => e.name === "theme-color"
	);

	if (darkTheme.matches && currentTheme === null) {
		localStorage.setItem("theme", "light");
		body.classList.replace(body.className, "light");
		if (body.className === "light") {
			meta.content = "#ffffff";

			return;
		}
	} else if (currentTheme !== null) {
		body.classList.replace(body.className, currentTheme);
		
	}

	if (body.className === "light") {
		meta.content = "#ffffff";

		return;
	}

	if (body.className === "dark") {
		meta.content = "#000000";

		return;
	}
})();
