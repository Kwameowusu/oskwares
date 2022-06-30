import React, { createContext,useState } from "react";

export const ActionContext = createContext("");
const ActionProvider = ({ children }) => {
	const [openabout, setopenabout] = useState(null);
	const [opengall, setopengall] = useState(null);
    // console.log(openabout)
	return (
		<ActionContext.Provider
			value={{
				openabout,
				setopenabout,
				opengall,
				setopengall,
			}}>
			{children}
		</ActionContext.Provider>
	);
};

export default ActionProvider;
