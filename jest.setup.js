import "@testing-library/jest-dom";

// Mock Auth0
jest.mock("@auth0/nextjs-auth0", () => ({
  useUser: () => ({ user: null, isLoading: false }),
  Auth0Provider: ({ children }) => children,
}));
