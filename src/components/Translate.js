import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Dutch",
        value: "nl"
    },
    {
        label: "Czech",
        value: "cs"
    },
    {
        label: "Polish",
        value: "pl"
    },
    {
        label: "Vietnamese",
        value: "vi"
    },
]

const Translate = () => {
    
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");
    
    return (
        <div>
            <div className="ui form">
                <label>Enter Text</label>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <Dropdown 
                label="Select a Language" 
                selected={language} 
                onSelectedChange={setLanguage} 
                options={options}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text}/>
        </div>
    )
};

export default Translate;