import { render } from '@testing-library/react';

import SharedUiLayoutComponent from './shared-ui-layout-component';

describe('SharedUiLayoutComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiLayoutComponent />);
    expect(baseElement).toBeTruthy();
  });
});
