import * as React from 'react';
import { FCCounter } from '../components/FCCounter/fc-counter';
import FCSpreadAttributes from '../components/FCSpreadAttributes/FCSpreadAttributes';
import ClassCounter from '../components/ClassCounter/class-counter';
import ClassCounterWithDefaultProps from '../components/ClassCounterWithDefaultProps/ClassCounterWithDefaultProps';
import { NameProvider } from '../components/NameProvider/name-provider';
import { MouseProvider } from '../components/MouseProvider/mouse-provider';

import { WithState } from '../hoc/WithState';
import WithConnectedCount from '../hoc/WithConnectedCount';

import FCCounterConnected from '../connected/FCCounterConnected';
import FCCounterConnectedBindActionCreators from '../connected/FCCounterConnectedBindActionCreators';
import FCCounterConnectedOwnProps from '../connected/FCCounterConnectedOwnProps';

import UseReducer from '../hooks/use-reducer'
import UseState from '../hooks/use-state';
import UseThemeContext from '../hooks/use-theme-context';

import { epics } from '../features/app/epics';

import { Card, Button, Tag, Tabs } from 'antd';
const FCCounterWithConnectedCount = WithConnectedCount(FCCounter);
const FCCounterWithState = WithState(FCCounter);
const home = (): any => {
    return (
        <Tabs>
            <Tabs.TabPane tab="components" key="components">
                <Card>
                    <Tag>components</Tag>
                    <FCSpreadAttributes
                        className={'classy'}
                        style={{ backgroundColor: 'lightcyan' }}
                    >
                        {`I'll spread every property you give me!`}
                    </FCSpreadAttributes>
                    <ClassCounter label={'ClassCounter'} />
                    <ClassCounterWithDefaultProps label={'ClassCounterWithDefaultProps'} />
                    <NameProvider>
                        {({ name }) => (
                            <div>{name}</div>
                        )}
                    </NameProvider>
                    <MouseProvider
                        render={(mouse: { x: React.ReactNode; y: React.ReactNode; }) => (
                            <p>The mouse position is X:{mouse.x}, Y:{mouse.y}</p>
                        )}
                    />
                </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab='hoc' key='hoc' >
                <Card>
                    <Tag>hoc</Tag>
                    <FCCounterWithState label={'FCCounterWithState'} />
                    <FCCounterWithConnectedCount overrideCount={15} label={'FCCounterWithConnectedCount'} />
                </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab='connected' key='connected'>
                <Card>
                    <Tag>connected</Tag>
                    <FCCounterConnected label={'FCCounterConnected'} />
                    <FCCounterConnectedBindActionCreators
                        label={'FCCounterConnectedBindActionCreators'}
                    />
                    <FCCounterConnectedOwnProps
                        label={'FCCounterConnectedOwnProps'}
                        initialCount={10}
                    />
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
