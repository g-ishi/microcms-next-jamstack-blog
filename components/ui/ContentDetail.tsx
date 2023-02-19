interface ContentDetailProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  mainContent: string;
  date: string;
  personInCharge: string;
}

const ContentDetail: React.FC<ContentDetailProps> = ({
  title,
  image,
  mainContent,
  date,
  personInCharge,
}) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-bold">{title}</p>
      <div className="my-3 flex w-full justify-between">
        <p>{date}</p>
        <p>{personInCharge}</p>
      </div>
      <img
        className="w-full"
        width="400"
        height="300"
        src={image.src}
        alt={image.alt}
      />
      <p>{mainContent}</p>
      {/* TODO: Google Analyticsで解析できるようにイベントを設定する */}
      <button
        className="self-end rounded bg-slate-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        id="convert-button border"
      >
        Convert Button
      </button>
    </div>
  );
};

ContentDetail.defaultProps = {
  title: 'content title',
  image: {
    src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
    alt: 'external-image',
  },
  mainContent:
    'みなも前いよいよその発見屋という方の所をなるますた。あたかも場合から相違年はよくその下宿べきでまでがやるているたがも講義なりませうと、当然にもしたたんませ。絵に要らですのはやはり前をすでにですまします。',
  personInCharge: 'person-in-charge',
  date: '2023/02/28',
};

export default ContentDetail;
