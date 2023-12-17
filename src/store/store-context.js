import React from "react";

const StoreContext = React.createContext({
  currentPage: 0,
  setCurrentPage: () => {},
});

export default StoreContext;
