import * as React from 'react';
import './AppBar.css';

interface Props {
  styles?: React.CSSProperties;
}

/**
 * App bar at the top of the page.
 */
export default class AppBar extends React.Component<Props> {
  render() {
    const styles = this.props.styles || {};
    return (
      <div className='app-bar' style={styles}>
        {this.props.children}
      </div>
    );
  }
}
