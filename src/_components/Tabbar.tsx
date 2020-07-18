import React, { useState, useEffect } from "react";

//Styles
import "../_styles/Tabbar.css"

type props = {
    tabs:{
        key:string,
        content:JSX.Element|string,
        actionValue:any,
        action:(val:any)=>void
    }[],
}

export default function Tabbar(props:props) {
    const [activeTab, setActiveTab] = useState(props.tabs[0].key)
    const [tabsOut, setTabsOut]:JSX.Element|any = useState([])
    
    useEffect(()=>{
        let tmpTabs:JSX.Element[] = []
        props.tabs.forEach(tab => {
            if (tab !== props.tabs[0]) {
                tmpTabs.push(
                    <div className="tab-spacer"/>
                )
            }
            tmpTabs.push(
                <div 
                    className={(activeTab===tab.key)?"tab active-tab":"tab"} 
                    onClick={()=>{setActiveTab(tab.key); tab.action(tab.actionValue)}}
                >
                    <div>{tab.content}</div>
                </div>
            )
            setTabsOut(tmpTabs)
        });
    },[props])
    
	return (
		<div className={"tabbar"}>
            <div>
                <div>
                    {tabsOut}
                </div>
            </div>
		</div>
	);
}