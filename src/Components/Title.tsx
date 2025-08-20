import { useLocation, useParams } from 'react-router-dom';
import { HomePage } from './HomePage';
import { PageNotFound } from './PageNotFound';
import { TabsPage } from './TabsPage';

export const Title = () => {
  const { pathname } = useLocation();
  const { tabId } = useParams();

  return (
    <>
      {pathname === '/' && <HomePage />}
      {(pathname === '/tabs' || pathname === `/tabs/${tabId}`) && <TabsPage />}
      {pathname !== '/' &&
        pathname !== '/tabs' &&
        pathname !== `/tabs/${tabId}` && <PageNotFound />}
    </>
  );
};
