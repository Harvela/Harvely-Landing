import { Navbar } from '@/navigation/Navbar';
import { Gallerie } from '@/templates/Gallery';

const Gallery = (props: any) => {
  return (
    <div>
      <div className="fixed z-[5000] w-full">
        <Navbar />
      </div>

      <div className="pt-[80px]">
        <Gallerie photos={props.photos} />
      </div>
    </div>
  );
};

export default Gallery;
