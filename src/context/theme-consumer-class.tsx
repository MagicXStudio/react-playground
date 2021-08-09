import * as React from 'react';
import ThemeContext from './theme-context';
import { Button } from 'antd'
type Props = {};

export class ToggleThemeButtonClass extends React.Component<Props> {
    static contextType = ThemeContext;
    context!: React.ContextType<typeof ThemeContext>;

    render() {
        const { theme, toggleTheme } = this.context;
        return (
            <Button style={theme} onClick={toggleTheme}>
                Toggle Theme
            </Button>
        );
    }
}
