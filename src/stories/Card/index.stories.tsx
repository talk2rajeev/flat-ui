import React, {useState, useEffect} from 'react'
import { storiesOf } from "@storybook/react";
import { Card } from "../../Card";

storiesOf("Card", module)
    .add("Card with default settings",
        () => {
            return <div style={{display: 'grid', maxWidth: 300}} >
                <Card>
                    <h5>FASDFASDF</h5>
                </Card>
            </div>
        }
    )
    .add("Card with Header &  Body",
        () => {
            const [value, setValue] = useState('');

            useEffect(() => {
                setTimeout(()=> {setValue('This is header text')},3000)
            })

            return <div style={{display: 'grid', maxWidth: 300}}>
                <Card header={{title: value, borderBottom: true}} loading={value === "" ? true : false}>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </Card>
            </div>
        }
    )
    .add("Card with image 1",
        () => {
            return <div style={{display: 'grid', maxWidth: 300}}>
                <Card 
                    coverImage={{image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", alt: "alt"}}
                    header={{title: "Vogue gala event", borderBottom: true}}
                    withBorderRadius
                    withShaddowOnHover
                >
                    <h5>FASDFASDF</h5>
                </Card>
            </div>
        }
    )
    .add("Card with image 2",
        () => {
            return <div style={{display: 'grid', maxWidth: 300}}>
                <Card 
                    coverImage={{image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", alt: "alt"}}
                    header={{title: "Card titlet", borderBottom: true}}
                    withBorderRadius
                >
                    <p>Tom and Jerry</p>
                </Card>
            </div>
        }
    )
    .add("Card with shaddow Effect",
        () => {
            return <div style={{display: 'grid', maxWidth: 300}}>
                <Card 
                    coverImage={{image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", alt: "alt"}}
                    header={{title: "Card titlet", borderBottom: true}}
                    withBoxShaddow
                >
                    <p>Tom and Jerry</p>
                </Card>
            </div>
        }
    )
    .add("Card with Hover effect",
        () => {
            return <div style={{display: 'grid', maxWidth: 300}}>
                <Card 
                    coverImage={{image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", alt: "alt"}}
                    header={{title: "Card titlet", borderBottom: true}}
                    withBorderRadius
                    withShaddowOnHover
                >
                    <p>Tom and Jerry</p>
                </Card>
            </div>
        }
    )
    