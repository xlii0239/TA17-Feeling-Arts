import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import ProfileCard1 from "components/a17components/cards/ProfileCard1.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";

function ArtistResultShow(props) {
        let list = [
            { id: 1, name: '你妹', age: '20' },
            { id: 2, name: '你哥', age: '20' },
            { id: 3, name: '你姐', age: '20' },
            { id: 4, name: '你表姐', age: '20' }
        ]

        if (typeof props.toData[0] !== 'undefined') {
            list = props.toData;

            return (
                <Container className="shape-container flex align-items-center py-lg-2" >
                    <ol>
                        {list.map((item, index) => {
                            // item子体   index下标
                            // react里一般使用map遍历，通过return返回渲染代码块
                            // map可用于返回符合条件的内容结合if语句
                            // map不结合if判断语句则可以遍历数组，返回全部数组的内容
                            return (
                                <li key={item.id}>
                                    The artist's name is { item.artist}, the following is introduction: { item.bio}
                                </li>
                            )
                        })}
                    </ol>
                </Container>
            )
        }
        else {
            return (<><p>No such data</p></>)
        }
        //const Item = this.state.artistshow.map((item, id) =>
        //    <p key={id}>{ item.name}</p> 
        //)
        //this.populateData();
        //const data = this.state.artistshow;
}

export default ArtistResultShow;