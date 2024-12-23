---
to: packages/ui/<%= category %>/src/__tests__/<%= component %>.test.tsx
---
import { render, screen } from '@testing-library/react';

import <%= component %> from '../<%= component %>';

describe('<%= component %>', () => {
    it('should render', () => {
        render(<<%= component %> />);
    });
});
