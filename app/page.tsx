"use client"
import { NavBar } from "@/components/custom/navigation"
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
		<>
			<NavBar />
			<main className="absolute flex justify-center items-center left-0 w-full h-full min-h-screen">
			

				<div className="relative">
					<h1 className="font-semibold text-3xl md:text-5xl xl:text-6xl uppercase      dark:bg-[linear-gradient(to_top_left,#7DE2FC,#B9B6E5)] dark:bg-clip-text dark:text-transparent">Noah Schittenhelm</h1>
					<h2 className="py-5 font-regular text-md md:text-xl xl:text-2xl uppercase text-muted-foreground text-center">Student</h2>
				

					<div className="w-full relative flex justify-center mt-5">
						<Button className="uppercase mx-2 rounded-xl" variant="default">Portfolio</Button>
						<Button className="uppercase mx-2 rounded-xl" variant="default">Resume</Button>
					</div>
				</div>

			</main>
		</>
    );
}
