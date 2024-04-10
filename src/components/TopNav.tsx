'use client'
import { usePathname } from 'next/navigation'

export default function TopNavigation() {
    const pathname = usePathname()
    console.log(pathname)



    return (
        <div className="top-nav bg-slate-950 text-white grid align-middle grid-cols-3">
            <div className="">Logo</div>
            <div className="flex justify-center items-center gap-2">
                <a className={`border rounded-lg p-2 hover:opacity-80 ${pathname == "/" ? "active" : ""}`} href="/">Home</a>
                <a className={`border rounded-lg p-2 hover:opacity-80 ${pathname == "/countries" ? "active" : ""}`} href="/countries">Countries</a>
            </div>
            <div className="">Socials</div>
        </div>
    )

}