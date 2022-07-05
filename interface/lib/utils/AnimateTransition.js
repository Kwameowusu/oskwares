import React, { useEffect } from "react";

const AnimateTransition = ({
	promptWrapeprClassName,
	EnterAnimate,
	ExitAnimate,
	detailsError,
	timeOut,
	nodeRef,
	children,
}) => {
	useEffect(() => {
		if (detailsError === true && promptWrapeprClassName === "yes") {
			nodeRef.current.classList.remove(`${ExitAnimate}`);
			nodeRef.current.classList.add(`${EnterAnimate}`);
			// console.log(nodeRef.current.childNodes[0])
			// nodeRef.current.childNodes[0].classList.remove(`${ExitAnimate}`);
			// nodeRef.current.childNodes[0].classList.add(`${EnterAnimate}`);
			// nodeRef.current.childNodes[0].style.animationDuration =
			// 	Number(timeOut) + "ms";
			setTimeout(() => {
				nodeRef.current.style.backgroundColor = "#000000b3";
			}, Number(timeOut) * 0.8);
		}
		// else if (detailsError) {
		// 	// console.log(promptWrapeprClassName)
		// 	nodeRef.current.classList.remove("promptHideAnimate");
		// 	nodeRef.current.classList.add(`${EnterAnimate}`);
		// 	nodeRef.current.classList.add(`promptShowAnimate`);
		// 	nodeRef.current.style.animationDuration = Number(timeOut) + "ms";
		// }
	}, [detailsError, EnterAnimate, nodeRef, timeOut, promptWrapeprClassName]);

	/////////////////////////////////////////////////////////////////////

	useEffect(() => {
		if (detailsError === false && promptWrapeprClassName === "yes") {
			nodeRef.current.classList.remove(`${EnterAnimate}`);
			nodeRef.current.classList.add(`${ExitAnimate}`);
			nodeRef.current.style.backgroundColor = "#000000b3";

			// nodeRef.current.childNodes[0].classList.remove(`${EnterAnimate}`);
			// nodeRef.current.childNodes[0].classList.add(`${ExitAnimate}`);
			// nodeRef.current.childNodes[0].classList.remove(`${ExitAnimate}`);
			// const timer = setTimeout(() => {

			// }, Number(timeOut) * 0.80);
			// return () => clearTimeout(timer);
		}
		// else if (detailsError === false) {
		// 	nodeRef.current.classList.remove(`${EnterAnimate}`);
		// 	nodeRef.current.classList.add(`${ExitAnimate}`);

		// 	const timer = setTimeout(() => {
		// 		nodeRef.current.classList.remove(`promptShowAnimate`);
		// 		nodeRef.current.classList.remove(`${ExitAnimate}`);
		// 		nodeRef.current.classList.add("promptHideAnimate");
		// 	}, Number(timeOut) * 0.80);
		// 	return () => clearTimeout(timer);
		// }
	}, [
		detailsError,
		EnterAnimate,
		ExitAnimate,
		nodeRef,
		timeOut,
		promptWrapeprClassName,
	]);

	return (
		<>
			<>{children}</>
		</>
	);
};

export default React.memo(AnimateTransition);
