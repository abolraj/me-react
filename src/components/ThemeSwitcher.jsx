import { useTheme } from "@/hooks/useTheme"
import { Moon, Sun } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ThemeSwitcher({ ...props }) {
    const { darkMode, setTheme } = useTheme();
    
    return (
        <label className="btn btn-ghost btn-circle h-full min-h-[inherit] size-10 sm:size-16 lg:size-16 p-1 sm:p-2 md:p-4 swap swap-rotate text-base-content">
            <input type="checkbox" className="theme-controller" onChange={e => setTheme(e.target.checked ? 'light' : 'dark')} checked={!darkMode} />

            <Sun width={null} height={null} className="swap-off size-full max-sm:h-10"/>
            <Moon width={null} height={null} className="swap-on size-full max-sm:h-10"/>

        </label>
    )
}