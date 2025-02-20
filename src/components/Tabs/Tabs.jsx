import { Tab } from '../Tab';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const getSelectedTabTitle = (tabsList, tabId) => {
    return tabsList.find(tab => tab.id === tabId);
  };

  function checkAvailiableTabId(id) {
    const isInTabs = tabs.find(tab => tab.id === id);

    if (isInTabs === undefined) {
      return tabs[0].id;
    }

    return id;
  }

  const selectedTab = getSelectedTabTitle(
    tabs,
    checkAvailiableTabId(activeTabId),
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              tab={tab}
              activeTabId={checkAvailiableTabId(activeTabId)}
              // activeTabId={checkAvailiableTabId(activeTabId)}
              onTabSelected={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
