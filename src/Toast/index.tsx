import React, { createRef, useEffect } from 'react';
import '../assets/css/toast.min.css';

type ToastType = 'success' | 'warning' | 'info' | 'error' |'none';

interface ToastInterface {
    title: string,
    description?: string,
    children?: React.ReactElement,
    toastDuration?: number,
    toastType?: ToastType
    onclose?: (title: string, description?: string) => void,
}

const toastRef = createRef<HTMLDivElement>();

export const Toast = ({ title, description, children, toastDuration, toastType='none', onclose }: ToastInterface) => {
    const closeToaster = () => {
        toastRef.current!.style.display = 'none';
        onclose && onclose(title, description);
    }

    useEffect(() => {
        let timer: any;
        if (toastDuration) {
            timer = setTimeout(()=>{
                toastRef.current!.style.display = 'none';
            }, toastDuration)
        }
        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    }, [])

    return (
        <div className="rt-toast-wrapper" ref={toastRef}>
            <div>
                <div className="rt-toast-header">
                    <div className="rt-toast-inner">
                        { getIcon(toastType) } <span className="rt-toast-title">{title}</span>
                        <span className="rt-close-icon" onClick={closeToaster}><CloseIcon /></span>
                    </div>
                </div>
                <div className="rt-toast-body">
                    <div className="rt-toast-inner">
                        {description}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

const getIcon = (toastType: ToastType): React.ReactElement | null => {
    switch(toastType) {
        case 'none': 
            return null;
        case 'success':
            return  <SuccessIcon />
        case 'warning':
            return <WarningIcon />
        case 'error':
            return <ErrorIcon /> 
        case 'info':
            return <InfoIcon />
        default:
            return null;                    
    }
}

const CloseIcon = () => <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
</svg>

const SuccessIcon = () => <svg width="20" height="20" className="mr-2" viewBox="0 0 24 24">
    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" fill="#52c41a"></path>
</svg>

const ErrorIcon = () => <svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="#f5222d" aria-hidden="true">
    <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
    <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
</svg>

const WarningIcon = () => <svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="#faad14" aria-hidden="true">
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
    <path d="M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
</svg>

const InfoIcon = () => <svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="#1890ff" aria-hidden="true">
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
    <path d="M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
</svg>

// success: #52c41a
// error: #f5222d
// warning: #faad14



