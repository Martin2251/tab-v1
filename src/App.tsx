import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import TabOne from './components/TabOne';
import TabThree from './components/TabThree';
import TabTwo from './components/TabTwo';

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Tab One",
    index: 1,
    Component: TabOne
  },
  {
    label: "Tab Two",
    index: 2,
    Component: TabTwo
  },
  {
    label: "Tab Three",
    index: 3,
    Component: TabThree
  }
];


function App() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  return (
    <div className="App">
<Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
    </div>
  );
}

export default App;
