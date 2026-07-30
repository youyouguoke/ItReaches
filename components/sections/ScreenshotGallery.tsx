import Image from "next/image";
import { Container } from "@/components/layout/Container";

interface ScreenshotGalleryProps {
  images: { src: string; alt: string }[];
}

export function ScreenshotGallery({ images }: ScreenshotGalleryProps) {
  return (
    <section className="py-24">
      <Container>
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-accent rounded-full" />
          <h2 className="font-label text-label-caps text-on-surface-variant uppercase tracking-widest">
            Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-video border border-white/10 overflow-hidden bg-surface-container"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
