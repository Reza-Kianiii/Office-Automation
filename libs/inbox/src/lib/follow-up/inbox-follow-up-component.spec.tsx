import { render } from '@testing-library/react';

import InboxFollowUpComponent from './inbox-follow-up-component';

describe('InboxFollowUpComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InboxFollowUpComponent />);
    expect(baseElement).toBeTruthy();
  });
});
