import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React from 'react';



var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

class CardTwitterFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            APIdata: "1293187916584419328"
        };
        // fetch("http://127.0.0.1:3030/publicacaoEmDestaque/08082020", requestOptions)
        //     .then(response => response.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 APIdata: result.id,
        //             });
        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
    }

    // componentDidMount() {

    // }

    render() {
        return (
            <TwitterTweetEmbed tweetId={this.state.APIdata} />
        )
    }
}


export default CardTwitterFour;