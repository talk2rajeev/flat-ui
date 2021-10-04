import React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox, CheckboxGroup } from "../../Checkbox";

storiesOf("Checkbox", module)
    .add("Single Checkbox",
        () => {
            const onItemCheck = (item) => {
                console.log("single item check > ", item);
            };
            return <Checkbox
                item="Mango"
                onItemCheck={onItemCheck}
            />
        }
    )
    .add("Multiple Single Checkbox",
        () => {
            const onItemCheck = (item) => {
                console.log("single item check > ", item);
            };
            return <div>
                <Checkbox
                    item="Mango"
                    onItemCheck={onItemCheck}
                />
                <Checkbox
                    item="dsasd"
                    onItemCheck={onItemCheck}
                />
                <Checkbox
                    item="wetwet"
                    onItemCheck={onItemCheck}
                />
            </div>
        }
    )
    .add("Checkbox default",
        () => {
            const items = ["Mango", "Banana", "Guava"];
            const onCheckboxSelect = (item) => {
                console.log("item selected > ", item);
            };
            return <CheckboxGroup
                items={items}
                onCheckboxSelect={onCheckboxSelect}
            />
        }
    )
    .add("Checkbox with disabled flag",
        () => {
            const items = ["Mango", "Banana", "Guava"];
            const onCheckboxSelect = (item) => {
                console.log("item selected > ", item);
            };
            return <CheckboxGroup
                items={items}
                onCheckboxSelect={onCheckboxSelect}
                disabled={true}
            />
        }
    )
    .add("Checkbox with alignment option",
        () => {
            const items = ["Mango", "Banana", "Guava"];
            const onCheckboxSelect = (item) => {
                console.log("item selected > ", item);
            };
            return <CheckboxGroup
                items={items}
                onCheckboxSelect={onCheckboxSelect}
                alignment="stacked"
            />
        }
    )
    .add("Checkbox with default value",
        () => {
            const items = ["Mango", "Banana", "Guava"];
            const onCheckboxSelect = (item) => {
                console.log("item selected > ", item);
            };
            return <CheckboxGroup
                items={items}
                onCheckboxSelect={onCheckboxSelect}
                defaultValue="Banana"
            />
        }
    );