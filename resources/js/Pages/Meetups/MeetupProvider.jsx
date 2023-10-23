import { createContext, useState, useEffect } from "react";

export const MeetupContext = createContext();

const MeetupProvider = (props) => {
    // const [meetupCreate, setMeetupCreate] = useState(null);

    // useEffect(() => {
    //     if (meetupCreate) console.log(meetupCreate);
    // }, [meetupCreate]);

    return (
        <MeetupContext.Provider
            value={{
                setMeetupCreate,
            }}
        >
            {props.children}
        </MeetupContext.Provider>
    );
};

export default MeetupProvider;
