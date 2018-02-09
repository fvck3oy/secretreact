import React, { Component } from 'react';
import Post from './Post'

class PostList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        
        // const numbers = [1, 2, 3, 4, 5];
        // const listItems = numbers.map((number) =>
        //     <li>{number}</li>);

        // {/* PostList  */}
        // {/* วนแสดงค่า ที่เก็บอยู่ใน Array numbers 
        //             ** ไม่ใช่ วนแสดงComponent [ทำไม่เป็น 555 งงโจทย์ด้วย อาจจะเป็นเพราะยังไม่ค่อยรู้เรื่อง]
        //         */}
        // {/* {listItems} */}


        // {/* รับค่ามาจากการเรียกใช้ PostList */}
        // {/* {name} {text} */}
        const { posts } = this.props;
        return (
            posts ? posts.map(post => {
                return (
                    <Post name={post.name} text={post.text} />
                )
            }) : ''
        )
    }
}

export default PostList;

// ต่อไปทำ component PostList เอาไว้แสดง Post หลายๆ ตัว

// รับ props เป็น posts ที่เป็น Array แล้วไปวนลูปแสดง component Post ตะกี้ ให้ได้

// สร้าง array สมมุติขึ้นมาสักก้อน