import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';
import { PlayCircle } from 'lucide-react';

const vslImage = PlaceHolderImages.find((p) => p.id === 'vsl-thumbnail');

export function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background animate-in fade-in duration-1000">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-1">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                    Descubra o Amor na Era Digital com Amor Digital
                  </h1>
                  <p className="mx-auto max-w-[600px] font-body text-muted-foreground md:text-xl">
                    Deixe-nos ajudar você a encontrar uma conexão verdadeira e
                    duradoura. Assista ao nosso vídeo para saber como.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vsl" className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative aspect-video">
                {vslImage && (
                  <Image
                    src={vslImage.imageUrl}
                    alt={vslImage.description}
                    data-ai-hint={vslImage.imageHint}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <button className="text-white/80 transition-colors hover:text-white">
                    <PlayCircle className="h-20 w-20 md:h-28 md:w-28" />
                    <span className="sr-only">Play Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full bg-muted/50 py-12 md:py-24 lg:py-32"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground md:text-4xl/tight">
                Pronto para Começar sua Jornada?
              </h2>
              <p className="mx-auto max-w-[600px] font-body text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insira seus dados abaixo para receber acesso exclusivo e dar o
                primeiro passo para encontrar o amor.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Amor Digital. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
