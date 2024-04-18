import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import ROUTES from "@common/config/routes";

const App: FC = () => <RouterProvider router={ROUTES} />;

export default App;
