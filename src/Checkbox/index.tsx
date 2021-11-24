import React, {useState} from 'react'
import "../assets/css/checkbox.css";

type Alignment = 'stacked' | 'inline';

export interface CheckboxGroupInterface{
    items: Array<string>
    onCheckboxSelect: (items: string[]) => void
    defaultValue?: string
    alignment?: Alignment
    disabled?: boolean
}

type CheckboxReturnType = {item: string, isChecked: boolean}
export interface CheckboxInterface{
    item: string
    onItemCheck: (Obj: CheckboxReturnType) => void
    defaultValue?: string
    disabled?: boolean
}

/*
    # option for a sinlge checkbox
    # checkbox can be toggled
    # Checkbox Group option
      - oncheck > return all checked items from group
      - Checkbox Group expect a list of items | can take default values as array

    COMPATIBILITY TEST
        - check mark &#10003;
*/

export const CheckboxGroup: React.FC<CheckboxGroupInterface> = ({ items, onCheckboxSelect, defaultValue="", alignment="inline", disabled=false }: CheckboxGroupInterface) => {
    
    const checkedItemMap: {[key: string]: boolean} = {}

    const onItemCheck = (obj: CheckboxReturnType) => {
        checkedItemMap[obj.item] = obj.isChecked;
        const checkedValues: Array<string> = Object.keys(checkedItemMap).filter((key: string) => checkedItemMap[key] === true)
        onCheckboxSelect(checkedValues)
    }
  
    return (
        <div
            className={`rt-checkbox-group ${disabled ? "rt-checkbox-group--disabled" : null} ${
            alignment === "stacked" ? "rt-checkbox-group--stacked" : "rt-checkbox-group--inline"
            }`}
        >
            {items.map((item) => (
                <Checkbox item={item} key={item} onItemCheck={onItemCheck} defaultValue="" />
            ))}
        </div>
    );
}



export const Checkbox: React.FC<CheckboxInterface> = ({ item, onItemCheck, defaultValue="", disabled=false }: CheckboxInterface) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultValue === item);
  
    const onselect = (item: string) => {
        const flag = !isChecked;
        setIsChecked(flag);
        onItemCheck({item, isChecked: flag});
    };
  
    return (
        <div className={`rt-checkbox-group ${disabled && "rt-checkbox-group--disabled"}`}>
            <div
                className={`rt-checkbox-item ${isChecked && "rt-checkbox--checked"}`}
                onClick={() => !disabled && onselect(item)}
            >
                <div className="rt-checkbox-outer">
                    {isChecked && <span className="rt-checkbox-tickicon">&#10003;</span>}
                </div>
                <div className="rt-checkbox-label">{item}</div>
            </div>
        </div>
    );
}


   