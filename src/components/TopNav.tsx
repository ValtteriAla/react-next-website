"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/countries",
    name: "Countries",
  },
{
  href: "/about",
  name: "About",
},
];
export default function TopNavigation() {
  const pathname = usePathname();
  
  function getLinkStyle(href: string) {
    let defaultClass = "flex h-[48px] text-black grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 "
    if (pathname === href) {
        return defaultClass += "active"
    }
    return defaultClass
  }

  return (
    <div className="top-nav bg-slate-950 text-white grid align-middle grid-cols-3">
      <div className="flex justify-start gap-2 p-2 items-center">Logo</div>
      <div className="flex justify-center items-center gap-2">
        {links.map((obj) => {
          return (
            <Link
              key={obj.href}
              href={obj.href}
              className={getLinkStyle(obj.href)}
            >
              <p className="hidden md:block">{obj.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-end gap-2 p-2 items-center">Socials</div>
    </div>
  );
}
