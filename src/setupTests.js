// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "./fontAwesome";
// Mock third-party modules that Jest cannot resolve due to nonstandard package exports
// react-typist-component only declares a "module" field without a CJS "main",
// which breaks Jest's resolver. Provide a lightweight virtual mock.
jest.mock(
  "react-typist-component",
  () => {
    const React = require("react");
    const Typist = ({ children }) =>
      React.createElement(React.Fragment, null, children);
    return { __esModule: true, default: Typist };
  },
  { virtual: true }
);

// Mock axios to avoid ESM import issues in Jest and to keep tests deterministic
jest.mock(
  "axios",
  () => {
    const mockResponse = Promise.resolve({ data: [] });
    const mockAxiosInstance = {
      get: jest.fn(() => mockResponse),
      post: jest.fn(() => mockResponse),
      put: jest.fn(() => mockResponse),
      delete: jest.fn(() => mockResponse),
    };
    const defaultExport = Object.assign(
      function axios() {
        return mockResponse;
      },
      mockAxiosInstance,
      {
        create: jest.fn(() => mockAxiosInstance),
      }
    );
    return { __esModule: true, default: defaultExport, ...mockAxiosInstance };
  },
  { virtual: true }
);

// Minimal ResizeObserver polyfill for jsdom
if (typeof global.ResizeObserver === "undefined") {
  global.ResizeObserver = class ResizeObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

// Stub window.scrollTo for jsdom (override any existing not-implemented stub)
Object.defineProperty(window, "scrollTo", {
  value: jest.fn(),
  writable: true,
  configurable: true,
});
