import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";
import Show from "./pages/Show";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {GlobalTheme} from './Styles/Theme'
const query_client = new QueryClient();
// -----------------------------------------------------------

// -----------------------------------------------------------

function App() {
  return (
    <QueryClientProvider client={query_client}>
    <GlobalTheme>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route>
        <Route path="/starred" element={<Starred/>}></Route>
        <Route path="*" element={<div>Not Found</div>}></Route> */}

        <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/starred" element={<Starred/>}></Route>
        </Route>

        <Route path="/show/:showId" element={<Show/>}>

        </Route>

      </Routes>
    </BrowserRouter>
    </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
