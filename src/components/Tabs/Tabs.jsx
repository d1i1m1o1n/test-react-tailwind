import React, {useState} from 'react';

const Tabs = ({children, className}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [content, setContent] = useState(children[0]);
  const changeTab = (i) => {
    setActiveTab(i);
    setContent(children[i]);
  }

  return (
    <div>
      <div className={className}>
        {children.map((tab, index) => {
          const activeClass = index === activeTab ? '' : 'opacity-50';

          return <button
            key={tab.props.label}
            type="button"
            className={`${activeClass} hover:opacity-100`}
            onClick={() => changeTab(index)}
          >
            {tab.props.label}
          </button>
        })}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Tabs;