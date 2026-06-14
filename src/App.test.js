import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the child components to isolate the App component's routing logic
jest.mock('./pages/Home', () => ({ __esModule: true, default: () => <div>Mock Home</div> }));
jest.mock('./pages/Resume', () => ({ __esModule: true, default: () => <div>Mock Resume</div> }));
jest.mock('./pages/Projects', () => ({ __esModule: true, default: () => <div>Mock Projects</div>,}));
jest.mock('./pages/Contact', () => ({ __esModule: true, default: () => <div>Mock Contact</div> }));
jest.mock('./404', () => ({ NoMatch: () => <div>Mock NoMatch</div> }));

// Mock the layout components
jest.mock('./components/Layout', () => ({ 
  Layout: ({ children }) => <div data-testid="mock-layout">{children}</div> 
}));
jest.mock('./components/NavigationBar', () => ({ 
  NavigationBar: () => <div>Mock NavigationBar</div> 
}));
jest.mock('./components/Jumbotron', () => ({ 
  Jumbotron: () => <div>Mock Jumbotron</div> 
}));

// Footer is a default export in my App.js, so this mock is slightly different
jest.mock('./components/Footer', () => () => <div>Mock Footer</div>);

describe('App Component', () => {
  
  test('renders core layout components', () => {
    render(<App />);
    
    // Verify that the persistent UI elements always render
    expect(screen.getByText('Mock NavigationBar')).toBeInTheDocument();
    expect(screen.getByText('Mock Jumbotron')).toBeInTheDocument();
    expect(screen.getByTestId('mock-layout')).toBeInTheDocument();
    expect(screen.getByText('Mock Footer')).toBeInTheDocument();
  });

  test('renders the Home component on the default route ("/")', () => {
    render(<App />);
    
    // Because App.js uses BrowserRouter, it will default to the '/' path in a basic test environment
    expect(screen.getByText('Mock Home')).toBeInTheDocument();
    
    // Ensure other routes are NOT rendering at the same time (testing the Switch)
    expect(screen.queryByText('Mock Resume')).not.toBeInTheDocument();
    expect(screen.queryByText('Mock NoMatch')).not.toBeInTheDocument();
  });
});
