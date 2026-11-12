import { cn } from "@/lib/utils";

export interface EditorialGalleryImage {
  src: string;
  alt: string;
  objectPosition?: string;
}

interface ImageGalleryProps {
  images: readonly EditorialGalleryImage[];
  className?: string;
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  return (
    <div
      className={cn(
        "hidden h-[420px] w-full gap-1.5 overflow-hidden md:flex lg:h-[460px]",
        className,
      )}
    >
      {images.map(({ src, alt, objectPosition }) => (
        <div
          key={src}
          className="h-full min-w-0 flex-1 overflow-hidden transition-[flex-grow] duration-700 ease-[ease-in-out] hover:flex-[4] motion-reduce:transition-none"
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            style={{ objectPosition }}
            className="h-full w-full select-none object-cover"
          />
        </div>
      ))}
    </div>
  );
}
