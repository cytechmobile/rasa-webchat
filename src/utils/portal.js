import React from 'react';
import { createRoot } from 'react-dom/client';

// This should be deleted when using React 16.x,
// Use ReactDOM.createPortal() instead
class Portal extends React.Component {
  constructor() {
    super();
    this.portalElement = null;
  }

  componentDidMount() {
    const p = document.createElement('div');
    document.body.appendChild(p);
    this.portalElement = p;
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const root = createRoot(this.portalElement);
    root.render(<div>{this.props.children}</div>);
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  }

  render() {
    return null;
  }
}

export default Portal;
