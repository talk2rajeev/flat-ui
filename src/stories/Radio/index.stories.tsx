import React from "react";
import { storiesOf } from "@storybook/react";
import { RadioGroup } from "../../Radio";

storiesOf("Radio", module)
    .add("Radio default",
        () => {
            const items = ["Mango", "Banana", "Guava"];
            const onRadioSelect = (item) => {
                console.log("item selected > ", item);
            };
            return <RadioGroup
                items={items}
                onRadioSelect={onRadioSelect}
            />
        }
    )
    .add("Radio with disabled flag",
        () => {
            const items = ["Mango", "Banana", "Guava"];
            const onRadioSelect = (item) => {
                console.log("item selected > ", item);
            };
            return <RadioGroup
                items={items}
                onRadioSelect={onRadioSelect}
                disabled={true}
            />
        }
    )
    .add("Radio with alignment option",
        () => {
            const items = ["Mango", "Banana", "Guava"];
            const onRadioSelect = (item) => {
                console.log("item selected > ", item);
            };
            return <RadioGroup
                items={items}
                onRadioSelect={onRadioSelect}
                alignment="stacked"
            />
        }
    )
    .add("with default value",
        () => {
            const items = ["Mango", "Banana", "Guava"];
            const onRadioSelect = (item) => {
                console.log("item selected > ", item);
            };
            return <RadioGroup
                items={items}
                onRadioSelect={onRadioSelect}
                defaultValue="Banana"
            />
        }
    );