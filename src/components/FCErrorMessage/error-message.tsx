import * as React from 'react';
import { Card } from 'antd';
 const FCErrorMessage: React.FC<{ onReset: () => void }> = ({
    onReset,
}) => {
    return (
        <Card>
            <h2>{`Sorry there was an unexpected error`}</h2>
            {`To continue: `}
            <a
                href="/"
                onClick={() => {
                    onReset();
                }}
            >
                {`go to home page`}
            </a>
        </Card>
    );
};
export default FCErrorMessage;
export function test(props: any) {
    const Container = props.componentClass;
    return <Container />;
}
