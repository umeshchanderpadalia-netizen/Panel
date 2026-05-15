import {
  useContext,
} from "react";

import {
  AppContext,
} from "../context/context";

function useApp() {

  return useContext(AppContext);
}

export default useApp;