import React from 'react'
import { storiesOf } from "@storybook/react";
import { Avatar  } from "../../Avatar";

storiesOf("Avatar", module)
    .add("Avatar No background",() => {
        return <div>
            <Avatar
                img= "https://randomuser.me/api/portraits/thumb/men/46.jpg"
                userName= "Alex"
                userRole="Developer"
            />
        </div>
    })
    .add("Avatar Grey background",() => {
        return <div>
            <Avatar
                img= "https://randomuser.me/api/portraits/thumb/men/46.jpg"
                userName= "Alex"
                userRole="Developer"
                background="grey"
            />
        </div>
    })
    .add("Avatar without image",() => {
        return <div>
            <Avatar
                userName= "Alex"
                userRole="Developer"
            />
        </div>
    })