import React from 'react';
import {render} from 'react-dom';
import ThumbIndicator from './thumbIndicator'


class Feedback extends React.Component {
  render(){
      const thumbsStyle = { margin:"auto", width:"50%"}
      return <div style={thumbsStyle}>
              <ThumbIndicator thumb={"up"}/>
              <ThumbIndicator thumb={"down"}/>
             </div>
  }
}

render(<Feedback/>, document.getElementById('feedback'));
