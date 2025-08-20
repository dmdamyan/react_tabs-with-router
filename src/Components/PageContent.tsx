import { useLocation, useParams } from 'react-router-dom';
import { Tabs } from './Tabs';
import { Title } from './Title';
import { useContext } from 'react';
import { TabsContext } from './TabsContext';

export const PageContent = () => {
  const tabs = useContext(TabsContext);
  const { pathname } = useLocation();
  const { tabId } = useParams();
  const tab = tabs.find(t => t.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <Title />

        {(pathname === '/tabs' || tabId) && <Tabs />}

        {pathname === '/tabs' && !tabId && (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}

        {tabId && (
          <div className="block" data-cy="TabContent">
            {tab?.content}
          </div>
        )}
      </div>
    </div>
  );
};
