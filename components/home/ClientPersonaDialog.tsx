// Marks this file as a Client Component (required for useState, useRouter, etc.)
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from '@/components/ui/dialog';

interface Persona {
  id: string;
  title: string;
  description?: string;
  memoji: string;
  slug?: string;
}

interface PersonaGridProps {
  personas: Persona[];
}

export default function ClientPersonaDialog({ personas }: PersonaGridProps) {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

  const handleSelect = (persona: Persona) => {
    setSelectedPersona(persona);
    setDialogOpen(true);
  };
 
  const handleConfirm = () => {
    if (selectedPersona?.slug) {
      setDialogOpen(false);
      router.push(`/chat/${selectedPersona.slug}`);
    }
  };

  return (
    <div className="mt-10">
      <p className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Chat with Famous AI Personalities & Experts
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        {personas.slice(0, 15).map((persona) => (
          <div
            key={persona.id}
            onClick={() => handleSelect(persona)}
            title={persona.title}
            className="cursor-pointer uai-ring w-[90px] h-[90px] rounded-full overflow-hidden bg-white transition hover:scale-105"
          >
            <Image
              src={persona.memoji}
              alt={persona.title}
              width={90}
              height={90}
              className="object-cover rounded-full w-full h-full"
            />
          </div>
        ))}

        {personas.length > 10 && (
          <div className="w-[90px] h-[90px] flex items-center justify-center">
            <a
              href="/chat"
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              More →
            </a>
          </div>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl">
          {selectedPersona && (
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="uai-ring-dialog">
                <div className="w-[250px] h-[250px] rounded-full overflow-hidden bg-background">
                  <Image
                    src={selectedPersona.memoji}
                    alt={selectedPersona.title}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-left space-y-3">
                <h2 className="text-xl font-bold">{selectedPersona.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {selectedPersona.description?.toLowerCase() || 'specialist'}
                </p>
                <p className="text-base">
                  Are you sure you want to chat with <strong>{selectedPersona.title} AI</strong>?
                </p>
              </div>
            </div>
          )}

          <DialogFooter className="mt-6 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>Yes, Start Chat</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}