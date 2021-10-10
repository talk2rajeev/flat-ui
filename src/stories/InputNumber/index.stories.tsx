import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import { InputNumber } from "../../InputNumber";

storiesOf("InputNumber", module)
    .add("Default InputNumber",
        () => {
            const [value, setValue] = useState<number>(4);
            const onInputChange = (val, name) => {
                console.log("value, name > ", value, name);
                setValue(val)
            };
            return <InputNumber
                onInputChange = {onInputChange}
                defaultValue= {value}
                disabled
                border
                name="number"
                borderRadius
            />
        }
    );