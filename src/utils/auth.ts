export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("authToken");
  return !!token; // Returns true if token exists, false otherwise
};
