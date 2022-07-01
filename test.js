const kofi = 1;
const ama = 5;

if (kofi < ama) {
	console.log(kofi + ama);
} else {
	console.log("wow");
}

for (let man = 0; man < 5; man++) {
	console.log(man);
}

let gof = {
    h: 1,
    gg: 2
}

function obed(){
return {
    h:'jk',
    jj: 1,
    kk: [123,"trre"],
    uu: {

    },
    gg: function(){

    }
}
}


obed()



	const [dashtheme, setdashtheme] = useState("");
	const [theme, settheme] = useState(false);

	useEffect(() => {
		const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
		const currentTheme = localStorage.getItem("theme");

		if (darkTheme.matches && currentTheme === null) setdashtheme("dark");
		else if (currentTheme !== null) setdashtheme(currentTheme);
	}, []);

	useEffect(() => {
		let body = document.getElementsByTagName("BODY")[0];
		console.log(dashtheme);

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