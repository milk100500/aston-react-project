import { createContext, useState } from "react";

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

    return (
        <CollapseContext.Provider
            value={{
                collapsed,
                switchCollapse,
            }}
        >
            {children}
        </CollapseContext.Provider>
    );
};

export { CollapseContext, CollapseContextProvider };