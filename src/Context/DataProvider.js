"use client"
const { createContext, useState } = require("react");

export const DataContext = createContext();

const DataProvider = ({children}) => {
    const [html,setHtml] = useState('');
    const [css,setCss] = useState('');
    const [js,setJs] = useState('');
    return(
        <DataContext.Provider
        value={{
            html,
            css,
            js,
            setHtml,
            setCss,
            setJs
        }}
        >
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider;