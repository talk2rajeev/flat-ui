import React, { useEffect, useState } from 'react';
import '../assets/css/tab.min.css';

interface InjectedProps {
    activeTab: string;
}

interface TabInterface {
    tabList: Array<string>,
    renderChild: (props: InjectedProps)=> JSX.Element;
    defaultTab?: string,
}

export const Tab = ({ tabList, renderChild, defaultTab }: TabInterface) => {

    const [activeTab, setActiveTab] = useState(defaultTab ? defaultTab : '')
    
    useEffect(() => {
        
    }, [])

    return (
        <div className="rt-tab-wrapper">
            <div className="rt-tab-list">
                {
                    tabList.map((tabName: any) => <div key={tabName} onClick={()=>setActiveTab(tabName)} className={`rt-tab rt-tab--${activeTab === tabName ? 'active' : 'normal'}`}>{tabName}</div>)
                }
            </div>
            <div className="rt-tab-content-wrapper">
                {renderChild({activeTab})}
            </div>
        </div>
    );
};



