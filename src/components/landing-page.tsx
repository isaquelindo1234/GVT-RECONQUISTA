import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Heart, PlayCircle } from 'lucide-react';

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
                    After he left, nothing hurt more than feeling disposable.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vsl" className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container flex flex-col items-center gap-8 px-4 md:px-6">
            <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
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
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button
                className="w-full rounded-full py-6 font-bold text-lg animate-gentle-bounce"
                size="lg"
              >
                <Heart className="mr-2 h-5 w-5" /> YES! I want to save my
                relationship
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Digital Love. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
