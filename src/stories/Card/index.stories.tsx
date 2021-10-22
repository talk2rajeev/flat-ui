import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import { Card } from "../../Card";

storiesOf("Card", module)
    .add("Card with default settings",
        () => {
            return <div style={{display: 'grid', maxWidth: 300}}>
                <Card>
                    <h5>FASDFASDF</h5>
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
    