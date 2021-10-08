import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import { InputText } from "../../InputText";

storiesOf("InputText", module)
    .add("InputText with default setting",
        () => {
            const [value, setValue] = useState<string>('');
            const onInputChange = (val, name) => {
                console.log("value, name > ", value, name);
                setValue(val)
            };
            return <InputText
                onInputChange = {onInputChange}
                defaultValue= {value}
            />
        }
    )
    .add("disabled InputText with default value",
        () => {
            const [value, setValue] = useState<string>('');
            const onInputChange = (val, name) => {
                setValue(val)
            };
            return <InputText
                onInputChange ={onInputChange}
                defaultValue= {value}
                disabled = {true}
                name="username"
            />
        }
    )
    .add("InputText with icon",
        () => {
            const [value, setValue] = useState<string>('');
            const onInputChange = (val, name) => {
                setValue(val)
            };
            return <InputText
                onInputChange ={onInputChange}
                defaultValue= {value}
                icon = {<span>🔍</span>}
                iconAlignment="left"
            />
        }
    )
    .add("InputText with no border",
        () => {
            const [value, setValue] = useState<string>('');
            const onInputChange = (val, name) => {
                setValue(val)
            };
            return <InputText
                onInputChange ={onInputChange}
                defaultValue= {value}
                icon = {<span>🔍</span>}
                iconAlignment="left"
                border= {false}
            />
        }
    )
    .add("InputText with border-radius",
        () => {
            const [value, setValue] = useState<string>('');
            const onInputChange = (val, name) => {
                setValue(val)
            };
            return <InputText
                onInputChange ={onInputChange}
                defaultValue= {value}
                icon = {<span>🔍</span>}
                iconAlignment="left"
                border= {false}
                borderRadius={true}
            />
        }
    )
    .add("InputText with border-radius",
        () => {
            const [value, setValue] = useState<string>('');
            const onInputChange = (val, name) => {
                setValue(val)
            };
            return <InputText
                onInputChange ={onInputChange}
                defaultValue= {value}
                icon = {<span>🔍</span>}
                iconAlignment="right"
                border= {true}
                borderRadius={true}
            />
        }
    );