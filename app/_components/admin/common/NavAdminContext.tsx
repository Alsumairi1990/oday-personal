import React, { Dispatch, ReactNode, SetStateAction, useContext, useState, createContext } from 'react';

export type Page = {
    parentValue: boolean;
};

export interface NavAdminContextType {
    parentValue: Page;
    setParentValue: Dispatch<SetStateAction<Page>>;
}

const defaultContextValue: NavAdminContextType = {
    parentValue: { parentValue: false },
    setParentValue: () => {}  // Placeholder function
};

// Initialize the context with the correct type
export const NavAdminContext = createContext<NavAdminContextType>(defaultContextValue);

type NavAdminProviderProps = {
    children: ReactNode;
};

export const NavAdminProvider: React.FC<NavAdminProviderProps> = ({ children }) => {
    // State should only manage the Page type, not PageparentValue
    const [parentValue, setParentValue] = useState<Page>({ parentValue: false });

    return (
        <NavAdminContext.Provider value={{ parentValue, setParentValue }}>
            {children}
        </NavAdminContext.Provider>
    );
};

// Custom hook for easier context consumption
export const useNavAdmin = () => useContext(NavAdminContext);

