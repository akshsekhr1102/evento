"use client";

import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

const EventCard = ({ event }: EventCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <Link
      href={`/event/${event.slug}`}
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress,
      }}
      className="h-[380px] flex-1 max-w-[500px] basis-80"
    >
      <section className="w-full h-full relative flex flex-col flex-1 basis-80  bg-white/[3%] rounded-xl overflow-hidden transition hover:scale-105 active:scale-[1.02]">
        <Image
          src={
            "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={event.name}
          height={280}
          width={500}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center ">
          <h2 className="text-2xl font-semibold ">{event.name}</h2>
          <p className="italic text-white/[75%]">{event.organizerName}</p>
          <p className="text-sm text-white/50">{event.location}</p>
        </div>
        <section className="flex justify-center items-center flex-col absolute left-[20px] top-[12px] h-[45px] w-[45px] bg-black/[30%]">
          <p className="font-bold text-xl -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent ">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
};

export default EventCard;
