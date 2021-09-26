import { ReactElement, useCallback, useState } from "react";
import ReactPhotoGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export interface Photo {
  src: string,
  width: number,
  height: number,
  srcSet?: string,
  title?: string,

}

export interface GalleryProps {
  photos: any[]
}

const Gallery = ({ photos }: GalleryProps): ReactElement => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <ReactPhotoGallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Gallery;
