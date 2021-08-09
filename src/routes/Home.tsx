import * as React from 'react';
import FCCounterUsage from '../components/fc-counter.usage';
import FCSpreadAttributesUsage from '../components/fc-spread-attributes.usage';
import ClassCounterUsage from '../components/class-counter.usage';
import ClassCounterWithDefaultPropsUsage from '../components/class-counter-with-default-props.usage';
import UserListUsage from '../components/generic-list.usage';
import NameProviderUsage from '../components/name-provider.usage';
import MouseProviderUsage from '../components/mouse-provider.usage';

import WithErrorBoundaryUsage from '../hoc/with-error-boundary.usage';
import WithStateUsage from '../hoc/with-state.usage';
import WithConnectedCountUsage from '../hoc/with-connected-count.usage';

import FCCounterConnectedUsage from '../connected/fc-counter-connected.usage';
import FCCounteConnectedBindActionCreatorsUsage from '../connected/fc-counter-connected-bind-action-creators.usage';
import FCCounterConnectedOwnPropsUsage from '../connected/fc-counter-connected-own-props.usage';

import UseReducer from '../hooks/use-reducer'
import UseState from '../hooks/use-state';
import UseThemeContext from '../hooks/use-theme-context';

import { epics} from '../features/app/epics';

import { Card, Button, Tag, Tabs } from 'antd';

const home = (): any => {
    return (
        <Tabs>
            <Tabs.TabPane tab="components" key="components">
                <Card>
                    <Tag>components</Tag>
                    <FCCounterUsage />
                    <FCSpreadAttributesUsage />
                    <ClassCounterUsage />
                    <ClassCounterWithDefaultPropsUsage />
                    <UserListUsage />
                    <NameProviderUsage />
                    <MouseProviderUsage />
                </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab='hoc' key='hoc' >
                <Card>
                    <Tag>hoc</Tag>
                    <WithErrorBoundaryUsage />
                    <WithStateUsage />
                    <WithConnectedCountUsage />
                </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab='connected' key='connected'>
                <Card>
                    <Tag>connected</Tag>
                    <FCCounterConnectedUsage />
                    <FCCounteConnectedBindActionCreatorsUsage />
                    <FCCounterConnectedOwnPropsUsage />
                    <br />
                    <Tag>hook</Tag>
                    <UseReducer initialCount={0} />
                    <UseState initialCount={1} />
                    <UseThemeContext name={'hello'} />
                    <Button type='primary' onClick={() => { console.log(epics) }}>Hello</Button>
                </Card>
            </Tabs.TabPane>
        </Tabs>
    );
};

export default home;
