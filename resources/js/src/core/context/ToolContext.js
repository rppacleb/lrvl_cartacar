import { useState, createContext } from 'react';

export const ToolContext = createContext();

export const ToolProvider = ({ children }) => {
    const [tools, setTools] = useState([]);
    const [tool, setTool] = useState([]);

    return (
        <ToolContext.Provider value={{ts: [tools, setTools], t: [tool, setTool] }}>
            {children}
        </ToolContext.Provider>
    )
}