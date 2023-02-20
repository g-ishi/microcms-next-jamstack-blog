interface MainBanner {
  mainTitle: string;
  mainText: string;
  image: {
    src: string;
    alt: string;
  };
}

const MainBanner: React.FC<MainBanner> = ({ mainTitle, mainText, image }) => {
  return (
    <div className="grid-column-3 grid items-center justify-center gap-4">
      <div className="col-start-1 col-end-2">
        <p className="my-10 text-4xl font-extrabold">{mainTitle}</p>
        <p className="text-lg font-bold">{mainText}</p>
      </div>
      <img
        className="col-start-2 col-end-3 aspect-square w-full object-cover"
        width="400"
        height="300"
        src={image.src}
        alt={image.alt}
      />
    </div>
  );
};

export default MainBanner;
