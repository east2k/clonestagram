import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Profile } from "./pages/Profile/Profile";
import { Explore } from "./pages/Explore/Explore";

function App() {
    return (
        <div className={styles.main_body}>
            <Sidebar />
            <main className={styles.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route
                        path="/messages"
                        element={<h1 style={{ color: "red" }}>Messages</h1>}
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="*"
                        element={<h1 style={{ color: "red" }}>Error lol</h1>}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
