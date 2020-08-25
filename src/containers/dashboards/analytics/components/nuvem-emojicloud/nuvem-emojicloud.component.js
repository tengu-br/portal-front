import React from 'react';
import Emojify from 'react-emojione';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

class NuvemEmojicloud extends React.Component {
  constructor(props) {
    super(props);
    fetch("http://167.71.115.228:3030/nuvemEmojicloud/08082020", requestOptions)
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
    this.state = {
      error: null,
      isLoaded: false,
      data: [
        // { value: 'tributária', count: 38 },
        // { value: 'reforma', count: 30 },
        { value: '👇', count: 0 },
        { value: '📚', count: 0 },
        { value: '👉', count: 0 },
        { value: '🇧', count: 0 },
        { value: '😂', count: 0 },
        { value: '👏', count: 0 },
        { value: '📣', count: 0 },
        { value: '🚨', count: 0 },
        { value: '😡', count: 0 },
        { value: '👍', count: 0 },
        { value: '📲', count: 0 },
        { value: '🗣', count: 0 },
        { value: '🙏', count: 0 },
        { value: '💸', count: 0 },
        { value: '💚', count: 0 },
        { value: '🚩', count: 0 },
        { value: '📖', count: 0 },
        { value: '🔴', count: 0 },
        { value: '💛', count: 0 },
        { value: '😉', count: 0 },
        { value: '😠', count: 0 },
        { value: '💡', count: 0 },
        { value: '😍', count: 0 },
        { value: '😅', count: 0 },
        { value: '💰', count: 0 },
        { value: '👀', count: 0 },
        { value: '🔹', count: 0 },
        { value: '👊', count: 0 },
        { value: '😭', count: 0 },
        { value: '📌', count: 0 },
        { value: '😱', count: 0 },
        { value: '📷', count: 0 },
        { value: '💻', count: 0 },
        { value: '👎', count: 0 },
        { value: '😒', count: 0 },
        { value: '😎', count: 0 },
      ]
    };
  }

  componentDidMount() {
    // fetch("http://127.0.0.1:3030/nuvemEmojicloud/08082020", requestOptions)
    //   .then(response => response.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         data: result.data
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )

  }

  render() {
    return (
      <div>
        <Emojify style={{ height: this.state.data[0].count, width: this.state.data[0].count }}>
          <span>{this.state.data[0].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[1].count, width: this.state.data[1].count }}>
          <span>{this.state.data[1].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[2].count, width: this.state.data[2].count }}>
          <span>{this.state.data[2].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[3].count, width: this.state.data[3].count }}>
          <span>{this.state.data[3].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[4].count, width: this.state.data[4].count }}>
          <span>{this.state.data[4].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[5].count, width: this.state.data[5].count }}>
          <span>{this.state.data[5].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[6].count, width: this.state.data[6].count }}>
          <span>{this.state.data[6].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[7].count, width: this.state.data[7].count }}>
          <span>{this.state.data[7].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[8].count, width: this.state.data[8].count }}>
          <span>{this.state.data[8].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[9].count, width: this.state.data[9].count }}>
          <span>{this.state.data[9].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[10].count, width: this.state.data[10].count }}>
          <span>{this.state.data[10].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[11].count, width: this.state.data[11].count }}>
          <span>{this.state.data[11].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[12].count, width: this.state.data[12].count }}>
          <span>{this.state.data[12].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[13].count, width: this.state.data[13].count }}>
          <span>{this.state.data[13].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[14].count, width: this.state.data[14].count }}>
          <span>{this.state.data[14].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[15].count, width: this.state.data[15].count }}>
          <span>{this.state.data[15].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[16].count, width: this.state.data[16].count }}>
          <span>{this.state.data[16].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[17].count, width: this.state.data[17].count }}>
          <span>{this.state.data[17].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[18].count, width: this.state.data[18].count }}>
          <span>{this.state.data[18].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[19].count, width: this.state.data[19].count }}>
          <span>{this.state.data[19].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[20].count, width: this.state.data[20].count }}>
          <span>{this.state.data[20].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[21].count, width: this.state.data[21].count }}>
          <span>{this.state.data[21].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[22].count, width: this.state.data[22].count }}>
          <span>{this.state.data[22].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[23].count, width: this.state.data[23].count }}>
          <span>{this.state.data[23].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[24].count, width: this.state.data[24].count }}>
          <span>{this.state.data[24].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[25].count, width: this.state.data[25].count }}>
          <span>{this.state.data[25].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[26].count, width: this.state.data[26].count }}>
          <span>{this.state.data[26].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[27].count, width: this.state.data[27].count }}>
          <span>{this.state.data[27].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[28].count, width: this.state.data[28].count }}>
          <span>{this.state.data[28].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[29].count, width: this.state.data[29].count }}>
          <span>{this.state.data[29].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[30].count, width: this.state.data[30].count }}>
          <span>{this.state.data[30].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[31].count, width: this.state.data[31].count }}>
          <span>{this.state.data[31].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[32].count, width: this.state.data[32].count }}>
          <span>{this.state.data[32].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[33].count, width: this.state.data[33].count }}>
          <span>{this.state.data[33].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[34].count, width: this.state.data[34].count }}>
          <span>{this.state.data[34].value}</span>
        </Emojify>
        <Emojify style={{ height: this.state.data[35].count, width: this.state.data[35].count }}>
          <span>{this.state.data[35].value}</span>
        </Emojify>
      </div>
    )
  }
}

export default NuvemEmojicloud;
