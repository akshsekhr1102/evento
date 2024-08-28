import H1 from "@/components/h1"
import { capitalize } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"

type Props ={
  params:{
    slug:string
  }
}


export async function generateMetadata({params}:Props):Promise<Metadata>{
  const slug = params.slug
  const response  = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`)
  const event = await response.json();

  return{
    title: event.name
    //jsjnsajnsa
  }
}




const EventPage = async ({params}:Props) => {

  const slug = params.slug
  const response  = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`)
  const event = await response.json();
  


  
  return (
    <main>
      <section className="overflow-hidden relative h-[400px] flex flex-col justify-center items-center">
        <Image src={event.imageUrl} 
        className="object-cover z-0  blur-3xl "
        quality={50}
        alt={"Event bg image "} fill sizes="(max-width: 1280px) 100vw, 1280px"
        
         />
          <div className="absolute flex justify-center items-center h-full gap-10 w-full flex-col md:flex-row rounded-lg">
            <Image src={event.imageUrl} alt={event.name} width={300} height={201}/>
            <div className="flex flex-col justify-center gap-1 ">
              {/* DISPLAY DATE IN DAY NAME OF THE MONTH AND THEN DAY NUMBER OF THE MONTH  */}

              <p className="text-xs text-white/80">
              {
                new Date(event.date).toLocaleDateString(
                  "en-US", {
                    weekday:'long',
                    month:"long",
                    day:"numeric"
                  }
                )
              }
              </p>
              <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">{event.name}</H1>
              <p className="whitespace-nowrap text-xl text-white/75">
                Organized by <span className="italic">{event.organizerName}</span>
              </p>
              <button className="state-effects bg-white/20 text-lg capitalize  w-[95vw] sm:w-96 py-1 border rounded-md hover:scale-105 active:ring active:scale-95 transition-transform">Get tickets</button>
            </div>
          </div>
      </section>
      <section className="flex py-10 flex-col items-center">
        <h2 className="text-2xl md:text-3xl  font-bold">Description</h2>
        <p className="font-light opacity-75   pb-7 text-center text-balance max-w-3xl">
          {event.description}
        </p>
        <h2 className="text-2xl md:text-3xl  font-bold">Location</h2>
        <p className="font-light opacity-90  pb-7 text-center text-balance">
          {event.location}
        </p>
      </section>
    </main>
  )
}

export default EventPage