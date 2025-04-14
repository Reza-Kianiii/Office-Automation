import { render } from '@testing-library/react';

import SharedUtilsAppCoreSharedprovider from './shared-utils-app-core-sharedprovider';

describe('SharedUtilsAppCoreSharedprovider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUtilsAppCoreSharedprovider />);
    expect(baseElement).toBeTruthy();
  });
});
