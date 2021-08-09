import * as React from 'react';
import { IUser, User } from '../models';
import { GenericList } from '../components';

const users = [
    new User('Rosamonte', '吴亦凡'),
    new User('Aguantadora', '王思聪'),
    new User('Taragui', '吴京'),
];

export class UserList extends GenericList<IUser> { }

export default () => (
    <UserList
        items={users}
        itemRenderer={item => <div key={item.id}>{item.fullName}</div>}>
    </UserList>
);
