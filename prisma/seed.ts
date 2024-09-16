import { PrismaClient } from '@prisma/client';
import { EVENT_DATA } from '../app/lib/eventData';

const prisma = new PrismaClient();

async function main() {
  // Assuming EVENT_DATA is an array of event objects
  for (const event of EVENT_DATA) {
    await prisma.eventoEvent.create({
      data: {
        name: event.name,
        slug: event.slug || "default-slug", // Assuming each event may have its own slug
        city: event.city || "Default City",
        location: event.location || "Default Location",
        date: new Date(event.date) || new Date(),
        organizerName: event.organizerName || "Default Organizer",
        imageUrl: event.imageUrl || "https://default-image-url.com",
        description: event.description || "Default description",
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
  
    await prisma.$disconnect();
    process.exit(1);
  });
