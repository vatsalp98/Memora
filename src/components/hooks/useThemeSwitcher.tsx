import { useEffect, useState } from "react";

export default function useThemeSwitcher() {
    const preferDarkQuery = "(prefers-color-scheme: dark)"; // changed typo in media query string
    const [darkMode, setDarkMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");
        const handleChange = () => {
            if (userPref && (userPref === "dark" || userPref === "light")) { // check if userPref is "light" or "dark"
                setDarkMode(userPref);
            } else {
                setDarkMode(mediaQuery.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        if (darkMode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return {darkMode, setDarkMode};
}