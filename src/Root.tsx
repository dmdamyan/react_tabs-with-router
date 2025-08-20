import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './Components/PageNotFound';
import { TabsProvider } from './Components/TabsContext';
import { PageContent } from './Components/PageContent';
import { HomePage } from './Components/HomePage';

export const Root = () => (
  <BrowserRouter>
    <TabsProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="/tabs" element={<PageContent />}>
            <Route path=":tabId" />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Route>
      </Routes>
    </TabsProvider>
  </BrowserRouter>
);
