"use client"
import { NavBar } from "@/components/custom/navigation"
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
		<>
			<NavBar />
			<main className="absolute block top-40 left-0 w-full h-full min-h-screen">
			

				<h1>Noah Schittenhelm</h1>
				<h2>Student</h2>

				<div>
					<Button>Portfolio</Button>
					<Button variant="outline">Resume</Button>
				</div>

			</main>
		</>
    );
}
