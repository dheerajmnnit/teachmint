import "./App.css";
import { Routes, Route } from "react-router-dom";
import Directory from "./components/Directory";
import ProfilePage from "./components/ProfilePage";

function App() {
    return (
        <div>
            <Routes> {/* Defining the routes */}
                <Route path="/" element={<Directory />} />  {/* Home route for Directory Page */}
                <Route path="/user/:id" element={<ProfilePage />} />{/* User specific route for each user */}
            </Routes>
        </div>
    );
}

export default App;
