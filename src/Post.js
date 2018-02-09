import React, { Component } from 'react';

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
            <div>
                <h3>Name: { name !== "" ? name : 'Anonymous' }</h3>
                <h5>Text: { text }</h5>
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