import React, {Component} from 'react'


class ThumbIndicator extends Component{
  render(){
    const thumb = this.props.thumb
    const thumbStyle = {float: "left", marginRight: 20}

    switch (thumb) {
      case "up":
          return    <div style = {thumbStyle}>
                      <img src="./assets/thumbs-up.png"/>
                    </div>
        break;
      case "down":
          return    <div>
                      <img src="./assets/thumbs-down.png"/>
                    </div>
    }

  }
}

export default ThumbIndicator;
