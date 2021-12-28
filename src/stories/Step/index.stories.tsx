import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import { Step } from "../../Step";

storiesOf("Step", module)
    .add("Without active Step",() => {
        return <div>
            <h1>User Infromation</h1>
            <Step
                steps={ [{stepTitle: 'Personal Detail', sequence: 1}, {stepTitle: 'Address Detail', sequence: 2}, {stepTitle: 'Payment Detail', sequence: 3}] }
                onclick={(seq)=>console.log(seq)}
                selectedStep={null}
            />
        </div>
    })
    .add("With active Step",() => {
        const [seq, setSeq] = useState(2);
        return <div>
            <h1>User Infromation</h1>
            <Step
                steps={ [{stepTitle: 'Personal Detail', sequence: 1}, {stepTitle: 'Address Detail', sequence: 2}, {stepTitle: 'Payment Detail', sequence: 3}] }
                onclick={(seq)=>setSeq(seq)}
                selectedStep={2}
            />
        </div>
    })