import * as React from 'react';
import './Paginator.css';

interface Props {
  styles?: React.CSSProperties;
  items: Array<any>;
  component: React.Component;
}

export default class Paginator extends React.Component<Props> {
  render() {
    const styles = this.props.styles || {};
    return (
      <div className='paginator' style={styles}></div>
    );
  }
}
