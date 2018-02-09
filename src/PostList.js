import React, { Component } from 'react';


class PostList extends Component {


    render() {
        
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
            <li>{number}</li>);

        const { name, text } = this.props;
        return (

            <div>
                PostList 
                {/* วนแสดงค่า ที่เก็บอยู่ใน Array numbers 
                            ** ไม่ใช่ วนแสดงComponent [ทำไม่เป็น 555 งงโจทย์ด้วย อาจจะเป็นเพราะยังไม่ค่อยรู้เรื่อง]
                */}
                {listItems}


                {/* รับค่ามาจากการเรียกใช้ PostList */}
                {name} {text}
            </div>
        );
    }
}

export default PostList;

// ต่อไปทำ component PostList เอาไว้แสดง Post หลายๆ ตัว

// รับ props เป็น posts ที่เป็น Array แล้วไปวนลูปแสดง component Post ตะกี้ ให้ได้

// สร้าง array สมมุติขึ้นมาสักก้อน