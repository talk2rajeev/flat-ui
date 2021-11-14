import React, {useState, useEffect} from 'react'
import { storiesOf } from "@storybook/react";
import { Toast, toast, showNotification } from "../../Toast";
import { Button } from '../../Button'

storiesOf("Toast", module)
    .add("Toat with default settings",
        () => {
            const [showtoast, setShowtoast] = useState(false)

            const showToaster = () => {
                showNotification({title: "this is title", description: "this is description"})
            }
            
            return <div>
                { showtoast && <Toast title="this is title" toastDuration={5000}>
                    <div>FASDFASDF</div>
                </Toast> }
                <Button withBorderRadius label="showToast" buttonType="secondary" buttonSize="medium"  onclick={() => toast.show({title:"this is title"})} /> &nbsp;
                <Button withBorderRadius label="Fail" buttonType="primary" buttonSize="medium"  onclick={() => showNotification({title: "Fail", description: "Sorry, the process failed"})} /> &nbsp;
                <Button withBorderRadius label="Success" buttonType="primary" buttonSize="medium"   onclick={() => showNotification({title: "success", description: "success, the process succed"})} /> &nbsp;
                <Button withBorderRadius label="Info" buttonType="primary" buttonSize="medium"   onclick={() => showNotification( {title: "info", description: "this info is regarding process", closable:true} ) } /> &nbsp;
                <Button withBorderRadius label="Error" buttonType="primary" buttonSize="medium"   onclick={() => showNotification({title: "Error", description: "Sorry Error occured, the process failed. Pleae check with server administrator.", toastType:"error", closable:true})} /> 
            </div>
        }
    );
    