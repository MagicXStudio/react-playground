import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tag } from 'antd'
import { MouseProvider } from './mouse-provider';

storiesOf('MouseProvider', module).add('default', () => (
    <MouseProvider
        render={mouse => (
            <Tag>
                The mouse position is {mouse.x}, {mouse.y}
            </Tag>
        )}
    />
));
