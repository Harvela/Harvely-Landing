'use client';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface PhotoPageProps {
  photos: { src: string; width: number; height: number }[];
  error?: string | null;
}

const Gallery = ({ photos }: PhotoPageProps) => {
  const [index, setIndex] = useState<number>(-1);
  console.log(photos, 'photos');

  return (
    <div
      id="gallery"
      className="flex max-h-[100vh] w-full flex-col gap-0 overflow-scroll bg-primary-400 p-4 md:p-16"
    >
      <h1 className="mb-12 text-[24px] font-semibold text-white md:text-[32px]">
        GALLERIE
      </h1>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={300}
        onClick={({ index: clickedIndex }: { index: number }) =>
          setIndex(clickedIndex)
        }
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export { Gallery };
