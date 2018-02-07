import React, { Component } from 'react';


class Post extends Component {

    



    render() {
        return (
            <div>   <hr/>
                    {this.props.name}<br />{this.props.text}
            </div>

        );

    }
}


export default Post;