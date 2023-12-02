import React, { createContext, useState, useMemo } from "react";

interface CollapseContextInterface {
  collapsed: boolean;
  switchCollapse: () => void;
}

const CollapseContext = createContext<CollapseContextInterface>({
    collapsed: true,
    switchCollapse: () => {},
});

const CollapseContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(true);
    const switchCollapse = () => setCollapsed((prev) => !prev);

    const value = useMemo(() => ({ collapsed, switchCollapse }), [collapsed]);

    return (
        <CollapseContext.Provider value={value}>
            {children}
        </CollapseContext.Provider>
    );
};

export { CollapseContext, CollapseContextProvider };