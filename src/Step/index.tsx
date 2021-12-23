import React, {useState, createRef} from 'react';
import '../assets/css/steps.min.css';
export interface StepType {
    sequence: number,
    stepTitle: string,
}
export interface StepInterface {
    steps: Array<StepType>,
    selectedStep: number | null,
    onclick: (stepSequence: number) => void,
}
export const Step: React.FC<StepInterface> = ({ steps, selectedStep, onclick }: StepInterface) => {
    const [selectedStepSeq, setSelectedStepSeq] = useState<number | null>(selectedStep)

    const onClickhandler = (seq: number) => {
        setSelectedStepSeq(seq);
        onclick(seq)
    }
    
    return (
        <div className="rt-steps-container">
            <div className="rt-step-line" />
            <div className="rt-steps">
                {
                    steps.map((step: StepType) => <div className="rt-step-item" key={step.sequence} onClick={()=>onClickhandler(step.sequence)}>
                        <div className="rt-step-wrapper">
                            <div>
                                <div className={`rt-step rt-step--${selectedStepSeq === step.sequence ? 'active': 'normal'}`}>{step.sequence}</div>
                            </div>
                            <div>{step.stepTitle}</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};
