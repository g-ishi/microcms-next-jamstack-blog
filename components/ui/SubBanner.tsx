import Link from 'next/link';

interface SubBanner {
  subTitle: string;
  subText: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
}

const SubBanner: React.FC<SubBanner> = ({ subText, subTitle, image, link }) => {
  return (
    <Link href={link}>
      <div className="grid-column-3 grid items-center justify-center gap-4">
        <img
          className="col-start-1 col-end-2 aspect-square w-full object-cover"
          width="400"
          height="300"
          src={image.src}
          alt={image.alt}
        />
        <div className="col-start-2 col-end-3">
          <p className="my-5 text-lg font-semibold">{subTitle}</p>
          <p>{subText}</p>
        </div>
      </div>
    </Link>
  );
};

export default SubBanner;
