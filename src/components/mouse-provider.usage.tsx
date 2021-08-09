import * as React from 'react';
import { MouseProvider } from './mouse-provider';

export default () => (
    <MouseProvider
        render={mouse => (
            <p>The mouse position is X:{mouse.x}, Y:{mouse.y}</p>
        )}
    />
);
