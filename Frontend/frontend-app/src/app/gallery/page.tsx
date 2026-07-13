import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";

export default function GalleryPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Gallery"
        subtitle="A glimpse into The Ritual Bar — vibrant drinks, sacred gatherings, and the energy we bring to every event."
      />
      <GalleryGrid />
    </div>
  );
}
