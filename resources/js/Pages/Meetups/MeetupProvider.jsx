import { createContext } from "react";

export const MeetupContext = createContext();

const MeetupProvider = (props) => {
    console.log(props.urlMeetup);
    return (
        <MeetupContext.Provider
            value={{
                name: "Meetup",
                city: "Barcelona",
            }}
        >
            {props.children}
        </MeetupContext.Provider>
    );
};

export default MeetupProvider;
