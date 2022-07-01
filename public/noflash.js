(() => {
	const darkTheme = window.matchMedia("(prefers-color-scheme: light)");
	const currentTheme = localStorage.getItem("theme");
	let ff = document.getElementsByTagName("body")[0];
	if (darkTheme.matches && currentTheme === null) {
		localStorage.setItem("theme", "light");
		ff.classList.replace(ff.className, "light");
	} else if (currentTheme !== null) {
		ff.classList.replace(ff.className, currentTheme);
		console.log(document.querySelector("body").classList);
	}
})();
