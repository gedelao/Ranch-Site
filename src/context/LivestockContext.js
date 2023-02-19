import { createContext, useState } from "react";
const LivestockContext = createContext();


export const LivestockProvider = ({ children }) => {
    const [animalState, setAnimalState] = useState([
        {
            id: 1,
            name:"cow",
            image: "cows.jpeg",
        },
        {
            id: 2,
            name:"chicken",
            image: "donkeys.jpeg",
        },
        {
            id: 3,
            name:"bird",
            image: "This s more info",
        },{
            id:4,
            name:"pig",
            image:"This is something",
        },{
        },{
            id:5,
            name:"chicken",
            image:"This is something new",
        },
    ]);
    return (
        <LivestockContext.Provider
            value={{
                animalState
            }}
        >
            {children}
        </LivestockContext.Provider>
    );
};

export default LivestockContext;
