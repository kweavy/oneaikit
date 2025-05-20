import Image from "next/image";
import { supabase } from "@/lib/supabase";
import ClientPersonaDialog from "./ClientPersonaDialog";

interface Persona {
  id: string;
  title: string;
  description?: string;
  memoji: string;
  slug?: string;
}

const heroTexts = [
  "Free AI Article Generator",
  "Free Text to Speech",
  "Free Image Generator",
  "Free YouTube to Article",
  "Free Code Generator"
];

async function getPersonas(): Promise<Persona[]> {
  const { data, error } = await supabase
    .from("ai_chat_pro")
    .select("id, title, description, memoji, slug")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading personas:", error);
    return [];
  }
  return data || [];
}

export default async function Hero() {
  const personas = await getPersonas();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-100 to-white pt-20 pb-16">
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium bg-white shadow border border-gray-200 rounded-full mb-6">
          <Image
            src="/avatar.png"
            alt="Free All in One AI Tools"
            width={130}
            height={130}
            className="rounded-full border-2 border-white"
          />
          <span className="text-sm font-semibold">Now You Can Chat with Celebrities</span>
        </div>

        {/* Headings */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="inline-block uai-700">
          Free AI Tools For Everything
          </span>
        </h1>

        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="rainbow">All-in-One AI Tools</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Access the most complete collection of free AI tools — perfect for content creators, developers, designers, and marketers.
        </p>

        {/* Client Persona Dialog */}
        <ClientPersonaDialog personas={personas} />
      </div>
    </section>
  );
}
