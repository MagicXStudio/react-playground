import * as React from 'react';
import { Card } from 'antd'

export interface MouseProviderProps {
    render: (state: MouseProviderState) => React.ReactNode;
}

interface MouseProviderState {
    readonly x: number;
    readonly y: number;
}

export class MouseProvider extends React.Component<MouseProviderProps, MouseProviderState> {
    readonly state: MouseProviderState = { x: 0, y: 0 };

    handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });
    };

    render() {
        return (
            <Card style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </Card>
        );
    }
}
