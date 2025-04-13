import { render } from '@testing-library/react';

import InboxActionRequiredComponent from './inbox-action-required-component';

describe('InboxActionRequiredComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InboxActionRequiredComponent />);
    expect(baseElement).toBeTruthy();
  });
});
