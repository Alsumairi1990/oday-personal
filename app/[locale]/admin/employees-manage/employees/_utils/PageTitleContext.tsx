import React, { Dispatch, ReactNode, SetStateAction, useContext, useState, createContext } from 'react';

export type Page = {
    title: string;
};

export interface PageTitleContextType {
    title: Page;
    setTitle: Dispatch<SetStateAction<Page>>;
}

const defaultContextValue: PageTitleContextType = {
    title: { title: '' },
    setTitle: () => {}  // Placeholder function
};

// Initialize the context with the correct type
export const PageTitleContext = createContext<PageTitleContextType>(defaultContextValue);

type PageTitleProviderProps = {
    children: ReactNode;
};

export const PageTitleProvider: React.FC<PageTitleProviderProps> = ({ children }) => {
    // State should only manage the Page type, not PageTitle
    const [title, setTitle] = useState<Page>({ title: '' });

    return (
        <PageTitleContext.Provider value={{ title, setTitle }}>
            {children}
        </PageTitleContext.Provider>
    );
};

// Custom hook for easier context consumption
export const usePageTitle = () => useContext(PageTitleContext);

