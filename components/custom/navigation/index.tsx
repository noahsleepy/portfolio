"use client"

import { ModeToggle } from "../darkModeToggle"

export function NavBar() {
    return (
        
        <main className="fixed w-full h-20 top-8 flex items-center justify-center z-10">
            <div className="relative flex items-center w-11/12 h-full bg-popover border rounded-full">
                <div className="absolute block right-3">
                    <ModeToggle />
                </div>
            </div>
        </main>
        
    )
}