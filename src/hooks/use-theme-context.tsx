import * as React from 'react';
import ThemeContext from '../context/theme-context';
import { Card, Button } from 'antd';
type Props = { name: string };

export default function ThemeToggleButton(props: Props) {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    return (
        <Card>
            <Button onClick={toggleTheme} style={theme}>切换主题</Button>
        </Card>
    );
}
