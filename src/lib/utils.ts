
import { EventoEvent, PrismaClient } from "@prisma/client";
import clsx, { ClassValue } from "clsx";
import { notFound } from "next/navigation";

import { twMerge } from "tailwind-merge";

const prisma  = new PrismaClient();


export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs) )
}

export function sleep(ms: number){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms)
    })
}

export function capitalize (string:string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string, page = 1) {
    // const response =  await fetch(
    //     `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    //     {
    //       next: {
    //         revalidate: 300,
    //       }
    //     }
    //   );
    //   const events:EventoEvent[] = await response.json();
    //   return events
    const events = await prisma.eventoEvent.findMany({
        where:{
            city:city === "all" ? undefined : capitalize(city)
        },
        orderBy:{
            date: "asc"
        },
        take: 6,
        skip: (page-(1)) *6,
    });
    

    let totalCount;
    if(city==="all"){
        totalCount = await prisma.eventoEvent.count();
    } else {
        totalCount = await prisma.eventoEvent.count({
            where:{
                city: capitalize(city)
            }
        })
    }

     
   
    return {events, totalCount}
}
export async function getEvent(slug:string) {
   
  const event =   await prisma.eventoEvent.findUnique({
        where:{
            slug: slug,
        }
        
    },
    
)
    if(!event) {return notFound()}
   
    return event;
    
}

