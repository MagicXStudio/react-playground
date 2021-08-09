import React, { useState } from 'react';
import { Button } from 'antd'
import { withErrorBoundary } from '../hoc';
import { ErrorMessage } from '../components';

const ErrorMessageWithErrorBoundary =
    withErrorBoundary(ErrorMessage);

const BrokenComponent = () => {
    throw new Error('I\'m broken! Don\'t render me.');
};

const BrokenButton = () => {
    const [shouldRenderBrokenComponent, setShouldRenderBrokenComponent] =
        useState(false);

    if (shouldRenderBrokenComponent) {
        return <BrokenComponent />;
    }

    return (
        <Button
            type="primary"
            onClick={() => {
                setShouldRenderBrokenComponent(true);
            }}
        >
            {`Throw nasty error`}
        </Button>
    );
};

export default () => (
    <ErrorMessageWithErrorBoundary>
        <BrokenButton />
    </ErrorMessageWithErrorBoundary>
);
