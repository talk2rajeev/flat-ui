import React, {useState, useEffect} from 'react'
import { storiesOf } from "@storybook/react";
import { Toast } from "../../Toast";

storiesOf("Toast", module)
    .add("Toat with default settings",
        () => {
            const [showtoast, setShowtoast] = useState(false)
            return <div>
                { showtoast && <Toast title="this is title" toastDuration={5000}>
                    <div>FASDFASDF</div>
                </Toast> }
                <button onClick={()=>setShowtoast(true)}>showToast</button>
            </div>
        }
    );
    