import React, { useState } from 'react';
import { Button } from 'antd'
import { WithErrorBoundary } from '../hoc/WithErrorBoundary';
import ErrorMessage  from '../components/FCErrorMessage/error-message';

const ErrorMessageWithErrorBoundary =
    WithErrorBoundary(ErrorMessage);

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
