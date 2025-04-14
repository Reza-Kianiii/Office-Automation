import { PropsWithChildren } from "react";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
 const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});



export function SharedUtilsAppCoreSharedprovider({children}:PropsWithChildren) {
  return (
   <CacheProvider value={rtlCache}>
     {children}
   </CacheProvider>
  );
}

export default SharedUtilsAppCoreSharedprovider;
