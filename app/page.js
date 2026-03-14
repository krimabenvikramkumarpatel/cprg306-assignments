import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="mb-4 text-3xl font-bold text-black">
        CPRG 306 Assignments
      </h1>

      <ul className="space-y-2">
        <li>
          <Link href="/week-2" className="text-blue-600 hover:underline">
            Week 2 Assignment
          </Link>
        </li>

        <li>
          <Link href="/week-3" className="text-blue-600 hover:underline">
            Week 3 Assignment
          </Link>
        </li>

        <li>
          <Link href="/week-4" className="text-blue-600 hover:underline">
            Week 4 Assignment
          </Link>
        </li>

        <li>
          <Link href="/week-5" className="text-blue-600 hover:underline">
            Week 5 Assignment
          </Link>
        </li>

        <li>
          <Link href="/week-6" className="text-blue-600 hover:underline">
            Week 6 Assignment
          </Link>
        </li>

        <li>
          <Link href="/week-7" className="text-blue-600 hover:underline">
            Week 7 Assignment
          </Link>
        </li>

        <li>
          <Link href="/week-8" className="text-blue-600 hover:underline">
            Week 8 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}