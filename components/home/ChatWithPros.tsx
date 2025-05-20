'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from '@/components/ui/dialog';

interface Persona {
  id: string;
  title: string;
  description: string;
  prompt: string;
  color?: string;
  slug?: string;
  memoji: string;
}

export default function ChatWithPros() {
  const router = useRouter();
  const [professionals, setProfessionals] = useState<Persona[]>([]);
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;


  
  useEffect(() => {
    const fetchPersonas = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('ai_chat_pro')
        .select('id, title, description, prompt, color, slug, memoji')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching personas:', error);
      } else {
        setProfessionals(data || []);
      }
      setIsLoading(false);
    };

    fetchPersonas();
  }, []);

  const totalPages = Math.ceil(professionals.length / itemsPerPage);
  const displayedProfessionals = professionals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelect = (pro: Persona) => {
    setSelectedPersona(pro);
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    if (selectedPersona?.slug) {
      setDialogOpen(false);
      router.push(`/chat/${selectedPersona.slug}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-black border-t-transparent" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayedProfessionals.map((pro) => (
            <Card
              key={pro.id}
              className={`cursor-pointer transition-all hover:shadow-lg border border-black
              }`}
              onClick={() => handleSelect(pro)}
            >
              <CardHeader className="p-4">
                <div className={`aspect-square rounded-full overflow-hidden mb-3 border-4`}>
                <img
    src={pro.memoji}
    className="w-full h-full object-cover"
    alt={pro.title}
  />

                </div>
                <CardTitle className="text-center text-sm font-semibold">{pro.title}</CardTitle>
                <p className="text-center text-xs text-muted-foreground mt-1">{pro.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        <Button
          className="bg-black text-white hover:bg-gray-900"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <span className="px-4 py-2 text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>

      {/* Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl">
          {selectedPersona && (
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar with Gradient Border */}
              <div className="uai-ring-dialog">
                <div className="w-[250px] h-[250px] rounded-full overflow-hidden bg-background">
                <img
    src={selectedPersona.memoji}
    className="w-full h-full object-cover"
    alt={selectedPersona.title}
  />
                </div>
              </div>

              {/* Text Right */}
              <div className="text-left space-y-3">
                <h2 className="text-xl font-bold">{selectedPersona.title}</h2>
                <p className="text-sm text-muted-foreground">
                  Chat with a {selectedPersona.description.toLowerCase()}
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
