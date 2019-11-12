import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const node = document.querySelector('.mdl-layout__inner-container');
      if(node)node.scrollTop = 0;
    }
  }

  render() {
    return <div/>;
  }
}

export default withRouter(ScrollToTop)
