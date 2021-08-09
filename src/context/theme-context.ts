import * as React from 'react';

export type Theme = React.CSSProperties;

type Themes = {
    dark: Theme;
    light: Theme;
};

export const themes: Themes = {
    dark: {
        color: 'red',
        backgroundColor: 'white',
    },
    light: {
        color: 'white',
        backgroundColor: 'red',
    },
};

export type ThemeContextProps = { theme: Theme; toggleTheme?: () => void };
const ThemeContext = React.createContext<ThemeContextProps>({ theme: themes.light });

export default ThemeContext;
