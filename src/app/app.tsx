
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {SharedUiLayoutComponent} from '@office-automation/layout'
import {SharedUtilsAppCoreSharedprovider} from '@office-automation/app-core'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SharedUiLayoutComponent />,
      children: [
        {
          index:true,
         element:<SharedUiLayoutComponent/>
        },

        // { path: '*', element: <AccountingFeatureShellNotFoundPage /> },
      ],
    },
    // { path: '*', element: <AccountingFeatureShellNotFoundPage /> },
  ],
  { basename: `/automation/` },
);


export function App() {


 

  return (
    <div>
      <SharedUtilsAppCoreSharedprovider>
         <RouterProvider router={router} />
      </SharedUtilsAppCoreSharedprovider>
    </div>
  );
}

export default App;
