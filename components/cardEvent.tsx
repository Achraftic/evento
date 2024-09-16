/* eslint-disable padding-line-between-statements */
'use client'
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { EventoEvent } from '@prisma/client';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

type CardEventProps = {
  data: EventoEvent;
};

const MotionLink = motion(Link);

const CardEvent = ({ data }: CardEventProps) => {
  const ref = useRef(null);

  // Use the scroll animation based on the element's reference
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 3", "1 1"],
  });

  return (
    <MotionLink
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      ref={ref}
      href={`/event/${data.slug}`}
      className="transition"
    >
      <Card className="py-4 w-full hover:bg-content1-foreground hover:text-white dark:hover:text-content2">
        <CardBody className="py-2">
          <Image
            alt={data?.name}
            className="object-cover rounded-xl w-full"
            src={data.imageUrl}
            width={270}
            height={100}
            priority
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">  {new Date(data.date).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}</p>
          <small className="text-default-500">{data.location}</small>
          <h4 className="font-bold text-large">{data.name}</h4>
        </CardHeader>
      </Card>
    </MotionLink>
  );
};

export default CardEvent;
