import React, { useContext, createContext, useState, useEffect } from 'react'

const TabContext = createContext();

const Tabs = ({ defaultValue, children }) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue || '');

  const value = {
    selectedTab,
    setSelectedTab
  }

  return (
    <TabContext.Provider value={value}>
      {children}
    </TabContext.Provider>
  )
}

const Button = ({ label, className, children }) => {
  const { selectedTab, setSelectedTab } = useContext(TabContext);

  const handleClick = () => {
    try {
      if (label === undefined || label === null) throw `Label must have a value and cannot be "undefinded" or "null".`
      setSelectedTab(label);
    } catch (err) {
      console.error(
        `Error occurred in 'Tabs.jsx': ${err}`
      )
    }
  };

  return (
    <button className={`${selectedTab === label ? 'bg-blue-400' : ''} ${className}`} onClick={handleClick}>{children}</button>
  )
}

const Panel = ({ value, children }) => {
  const { selectedTab } = useContext(TabContext);

  return (
    <>
      {selectedTab === value && children}
    </>
  )
}

Tabs.Panel = Panel;
Tabs.Button = Button;
export default Tabs;