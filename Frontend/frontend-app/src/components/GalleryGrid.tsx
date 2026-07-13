import Image from "next/image";
import { galleryItems } from "@/lib/galleryData";

export function GalleryGrid() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {galleryItems.map((item) => (
        <article
          key={item.src}
          className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/70 bg-white/50 shadow-[0_20px_50px_-35px_rgba(47,23,15,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(47,23,15,0.65)]"
        >
          {item.type === "video" ? (
            <video
              className="h-auto w-full object-cover"
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          ) : (
            <Image
              src={item.src}
              alt={item.alt}
              width={900}
              height={1200}
              className="h-auto w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
        </article>
      ))}
    </div>
  );
}
