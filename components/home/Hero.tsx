import Image from "next/image";
import { supabase } from "@/lib/supabase";
import ClientPersonaDialog from "./ClientPersonaDialog";
import previewImage from "@/public/slider.png"; // Pastikan file ini sudah ada di folder /public

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
       
        {/* Headings */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span>
            1000+ Free AI Tools in One Website – No Login Needed
          </span>
        </h1>

       <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          <span className="uai-700">All-in-One AI Tools – Free, Fast, and in One App</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Access the most complete collection of free AI tools — perfect for content creators, developers, designers, and marketers.
        </p>
          {/* Showcase Image */}
          <div className="mt-10 flex justify-center">
            <Image
              src={previewImage}
              alt="AI Tool Showcase"
              width={1000}
              height={600}
              className="rounded-xl shadow-xl border"
            />
          </div>  
        {/* Client Persona Dialog */}
        <ClientPersonaDialog personas={personas} />
      </div>
    </section>
  );
}
