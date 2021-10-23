import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import { Skeleton } from "../../Loader";

storiesOf("Skeleton", module)
    .add("Skeleton",
        () => {
            return <div style={{width: 100, height: 30}}>
                    <Skeleton />
                </div>
        }
    );