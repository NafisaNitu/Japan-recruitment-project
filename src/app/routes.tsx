import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Partnership } from "./pages/Partnership";
import { TargetMarkets } from "./pages/TargetMarkets";
import { ForEmployers } from "./pages/ForEmployers";
import { ForCandidates } from "./pages/ForCandidates";
import { Compliance } from "./pages/Compliance";
import { GroupProfile } from "./pages/GroupProfile";
import { Events } from "./pages/Events";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "industries", Component: Industries },
      { path: "target-markets", Component: TargetMarkets },
      { path: "partnership", Component: Partnership },
      { path: "for-employers", Component: ForEmployers },
      { path: "for-candidates", Component: ForCandidates },
      { path: "compliance", Component: Compliance },
      { path: "group-profile", Component: GroupProfile },
      { path: "events", Component: Events },
      { path: "contact", Component: Contact },
    ],
  },
]);
