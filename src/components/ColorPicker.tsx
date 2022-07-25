import React, { useState } from "react";

type Option = { label: string, color: string };
interface ColorSwitcherProps { option: Option[] }

const ColorSwitcher = ({ option }: ColorSwitcherProps) => {
    const [activeOptionIndex, setActiveOptionIndex] = useState(0);

    const setActiveIndex = (index: number) => {
        setActiveOptionIndex(index);
    }

    const { label, color } = option[activeOptionIndex];

    return (
        <div>
            <div
                style={{ backgroundColor: color, width: "50px", height: "50px" }}
            >
                {label}
            </div>
            {option.map(({ label, color }, index) => (
                <button
                    key={label}
                    style={{ backgroundColor: color, width: "50px", height: "50px", cursor: "pointer" }}
                    onClick={() => setActiveIndex(index)}
                >
                </button>
            ))}
        </div>
    );

}

export default ColorSwitcher;