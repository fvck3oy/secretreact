import React, { Component } from 'react';
import PostList from './PostList'

class Post extends Component {





    // render() {


    //     // return (
    //     //     <div>   <hr/>
    //     //             ทดลองใช้ props <br/><br/>
    //     //             {this.props.name}<br />{this.props.text}
    //     //     </div>


    render() {
        const { name, text } = this.props;
        return (
            <div>{name} <br /> {text}

                <hr />

                
            <PostList name={name} text={text} />
            </div>
        )
    }
}
// render(){
//     const { name, text } = this.props
//     return(
//        <div>{ name ? name : 'Anonymous' } <br/> { text } </div>
//     )
//   }



//     );

// }
//}


export default Post;