import prisma from "../lib/db";

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export async function getEvents(city: string,page=1) {


    const data = await prisma.eventoEvent.findMany({
        where: {
            city: city === "all" ? undefined : capitalize(city)
        },
        orderBy:{
            date:"asc"
        },
        take:8,
        skip:(page-1)*8
    }
    

)
    if (data.length <= 0) {
        throw new Error(`Not found`);
    }
    const countEvent= await prisma.eventoEvent.count({
        where:{
            city: city === "all" ? undefined : capitalize(city),
        }
    })


    return {data,countEvent}

}

export async function getEvent(slug: string) {
    const data = await prisma.eventoEvent.findUnique({
        where: {
            slug: slug
        }
    })
    if (data === null) {
        throw new Error(`Not found`)
    }
    return data
}


