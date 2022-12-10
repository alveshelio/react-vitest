// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
// workaround: https://github.com/testing-library/jest-dom/issues/427#issuecomment-1110985202
import '@testing-library/jest-dom/extend-expect';

import { vi } from 'vitest'


Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
});

Object.defineProperty(window, 'open', {
  writable: true,
  value: vi.fn(),
});

const IntersectionObserverMock = function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
    takeRecords: vi.fn(),
  };
};

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);