import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const renderWithBrowser = (ui: React.ReactNode) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

export default renderWithBrowser;
