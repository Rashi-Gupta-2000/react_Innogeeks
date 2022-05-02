import React from "react";

const Authcontext = React.createContext({
    name: "",
    login: () => {},
});

export default Authcontext;