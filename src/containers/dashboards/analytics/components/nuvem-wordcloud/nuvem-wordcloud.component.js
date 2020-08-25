import React from 'react';

import { TagCloud } from 'react-tagcloud'

const myStyle = {
  height: '400px'
};

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

class NuvemWordcloud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3030/nuvemWordcloud/08082020", requestOptions)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <TagCloud
        // disableRandomColor="true"
        colorOptions={{ hue: "blue" ,luminosity:"dark"}}
        minSize={20}
        maxSize={50}
        tags={this.state.data}
        // onClick={tag => alert(`'${tag.value}' was selected!`)}
      />
    )
  }
}

export default NuvemWordcloud;
