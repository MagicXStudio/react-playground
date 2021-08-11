import React from 'react';
import { storiesOf } from '@storybook/react';

import { IUser, User } from '../../models/user';
import { GenericList } from './generic-list';

const users = [
    new User('Lucy', '芦溪'),
    new User('Aguantadora', '伍尔夫'),
    new User('Taragui', '安德鲁'),
];

export class UserList extends GenericList<IUser> { }

storiesOf('GenericList', module).add('default', () => (
    <UserList
        items={users}
        itemRenderer={item => <div key={item.id}>{item.fullName}</div>}
    />
));
