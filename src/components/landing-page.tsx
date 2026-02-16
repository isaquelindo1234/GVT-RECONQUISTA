"use client";

import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Script from 'next/script';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const videoId = "5u5g58fpw6";
  const videoAspect = "1.7777777777777777";
  const wistiaEmbed = `<wistia-player media-id="${videoId}" aspect="${videoAspect}"></wistia-player>`;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 510000); // 510 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background animate-in fade-in duration-1000">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-1">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl max-w-4xl mx-auto leading-snug">
                    This isn't about perfect words. It's about becoming the
                    woman he can't stop thinking about — so he comes back by
                    choice, not obligation.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vsl" className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container flex flex-col items-center gap-8 px-4 md:px-6">
            <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
              <Script src="https://fast.wistia.com/player.js" async />
              <Script
                src={`https://fast.wistia.com/embed/${videoId}.js`}
                async
                type="module"
              />
              <style>
                {`
                  wistia-player[media-id='${videoId}']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${videoId}/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                  }
                `}
              </style>
              <div dangerouslySetInnerHTML={{ __html: wistiaEmbed }} />
            </div>
            {showButton && (
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button
                  asChild
                  className="w-full rounded-full py-6 font-bold text-lg animate-gentle-bounce"
                  size="lg"
                >
                  <a href="https://pay.hotmart.com/I104322873O?checkoutMode=10">
                    <Heart className="mr-2 h-5 w-5" /> YES! I want to save my
                    relationship
                  </a>
                </Button>
              </div>
            )}
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
