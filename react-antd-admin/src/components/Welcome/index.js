import React from 'react';
import './index.less';

/**
 * 展示欢迎界面
 */
class Welcome extends React.PureComponent {

  render() {
    return (
      <div>
        <h1 className="welcome-text">
          Welcome, 这里是欢迎界面!
        </h1>
      </div>
    );
  }

}

export default Welcome;
