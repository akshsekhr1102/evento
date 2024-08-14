import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {

  

  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Find Events around you</H1>
      <p className="text-2xl mb-12 mt-7  opacity-75">Browse more than <span className="font-bold italic underline text-accent ">10,000 events</span>  around you</p>
      <SearchForm />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-4 font-semibold">
          <Link href={"/events/austin"}>Austin</Link>
          <Link href={"/events/Seatle"}>Seatle</Link>
        </div>
      </section>
    </main>
  )
}
