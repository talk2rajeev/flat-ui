import React, {useState} from 'react'
import "../assets/css/radio.css";

type Alignment = 'stacked' | 'inline';

export interface RadioGroupInterface{
    items: Array<string>
    onRadioSelect: (item: string) => void
    defaultValue?: string
    alignment?: Alignment
    disabled?: boolean
}

export const RadioGroup: React.FC<RadioGroupInterface> = ({ items, onRadioSelect, defaultValue="", alignment="inline", disabled=false }: RadioGroupInterface) => {
    const [checkedItem, setCheckedItem] = useState<string>(defaultValue);
  
    const onselect = (item: string) => {
      setCheckedItem(item);
      onRadioSelect(item);
    };
  
    return (
        <div
            className={`radio-group ${disabled && "radio-group--disabled"} ${
            alignment === "stacked" ? "radio-group--stacked" : "radio-group--inline"
            }`}
        >
            {items.map((item) => (
                <div
                    key={item}
                    className={`radio-item ${checkedItem === item && "checked"}`}
                    onClick={() => !disabled && onselect(item)}
                >
                    <div className="radio-outer">
                    <div className="radio-inner"></div>
                    </div>
                    <div className="radio-label">{item}</div>
                </div>
            ))}
        </div>
    );
}


   