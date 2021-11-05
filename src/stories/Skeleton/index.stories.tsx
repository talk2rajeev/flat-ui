import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import { Skeleton, TextSkeleton, GridSkeleton } from "../../Skeleton";

storiesOf("Skeleton", module)
    .add("Skeleton",
        () => {
            return <div style={{width: 100, height: 30}}>
                    <Skeleton />
                </div>
        }
    )
    .add("TextSkeleton Paragraph",
        () => {
            return <div style={{width: 500}}>
                    <TextSkeleton type="paragraph" rows={5} />
                </div>
        }
    )
    .add("TextSkeleton Heading",
        () => {
            return <div style={{width: 300}}>
                    <TextSkeleton type="heading" rows={1} />
                </div>
        }
    )
    .add("Section",
        () => {
            return <div style={{width: 300}}>
                    <TextSkeleton type="heading" rows={1} hasShortLastRow/>
                    <TextSkeleton type="paragraph" rows={10} hasShortLastRow />
                </div>
        }
    )
    .add("Grid Skeleton",
        () => {
            return <div style={{width: 600}}>
                    <GridSkeleton rows={5} cols={8}/>
                </div>
        }
    );