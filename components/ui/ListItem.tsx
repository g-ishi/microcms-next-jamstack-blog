import Link from 'next/link';

export interface ListItemProps {
  link: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  shortDescription: string;
  date: string;
  personInCharge: string;
}

const ListItem: React.FC<ListItemProps> = ({
  link,
  image,
  title,
  shortDescription,
  date,
  personInCharge,
}) => {
  return (
    <Link href={link}>
      <div className="rounded border border-black p-3">
        <img
          className="aspect-square w-full object-cover"
          width="400"
          height="300"
          src={image.src}
          alt={image.alt}
        />
        <p className="my-3 truncate text-lg">{title}</p>
        <p className="my-3 truncate text-sm">{shortDescription}</p>
        <div className="my-3 flex items-center justify-between">
          <p className="truncate text-sm">{date}</p>
          <p className="truncate text-sm">{personInCharge}</p>
        </div>
      </div>
    </Link>
  );
};

ListItem.defaultProps = {
  link: 'blogs/1',
  image: {
    src: 'https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
    alt: 'external-image',
  },
  title: 'item-title',
  shortDescription:
    'みなも前いよいよその発見屋という方の所をなるますた。あたかも場合から相違年はよくその下宿べきでまでがやるているたがも講義なりませうと、当然にもしたたんませ。絵に要らですのはやはり前をすでにですまします。',
  date: '2023/02/28',
  personInCharge: 'person-in-charge',
};

export default ListItem;
