import ListItem, { ListItemProps } from './ListItem';

export interface ContentListProps {
  contents: ListItemProps[];
}

const ContentList: React.FC<ContentListProps> = ({ contents }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {contents.map((item, i) => {
        return <ListItem key={i} {...item} />;
      })}
    </div>
  );
};

export default ContentList;
