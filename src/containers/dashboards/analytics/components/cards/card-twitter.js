import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React from 'react';



var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

class CardTwitter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            APIdata: ""
        };

    }
    
    componentDidMount() {
        fetch("http://127.0.0.1:3030/publicacaoEmDestaque/08082020", requestOptions)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        APIdata: result.id
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
            <TwitterTweetEmbed key ={this.state.APIdata} tweetId={this.state.APIdata} />
        )
    }
}


export default CardTwitter;