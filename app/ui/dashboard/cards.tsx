import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link"

export function Card({title, link}:{title: string, link:Url}) {
  
    return (
      <Link href={link}>
      <div className="rounded-3xl bg-gray-100 hover:bg-blue-200 p-4 shadow-md cursor-pointer select-none active:bg-green-200">
        
        <div
          className={`truncate rounded-xl bg-white px-4 py-8 text-center text-2xl active:bg-green-200`}
        >
          {title}
        </div>
      </div>
      </Link>
    );
  }