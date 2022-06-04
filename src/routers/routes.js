import { BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp