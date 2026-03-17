import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
import Globalcontext from "./concepts/crudoperation/context/Globalcontext";
import { Provider } from "react-redux";
import { store } from "./concepts/reduxtoolkitconcept/app/store";
createRoot(document.querySelector("#root")).render(
        <Provider store={store}>
            <Globalcontext>
                  <App/>
            </Globalcontext>
      </Provider>
)