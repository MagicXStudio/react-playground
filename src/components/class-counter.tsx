import * as React from 'react';
import { Button,Tag } from 'antd';
type Props = {
  label: string;
};

type State = {
  count: number;
};

export class ClassCounter extends React.Component<Props, State> {
  readonly state: State = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { handleIncrement } = this;
    const { label } = this.props;
    const { count } = this.state;

    return (
      <div>
        <Tag>
          {label}: {count}
        </Tag>
        <Button type="primary" onClick={handleIncrement}>
          {`Increment`}
        </Button>
      </div>
    );
  }
}
