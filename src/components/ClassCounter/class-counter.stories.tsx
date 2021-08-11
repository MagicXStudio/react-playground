import React from 'react';
import { storiesOf } from '@storybook/react';
import ClassCounter  from './class-counter';
storiesOf('ClassCounter', module).add('default', () => (
    <ClassCounter label={'ClassCounter'} />
));
