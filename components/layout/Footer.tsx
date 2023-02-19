interface FooterProps {
  companyName: string;
  companyDescription: string;
  email: string;
  phoneNumber: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  companyDescription,
  email,
  phoneNumber,
}) => {
  return (
    <footer className="flex min-h-1/4 justify-between bg-amber-300 p-5">
      <div className="max-w-xs">
        <p>会社名: {companyName}</p>
        <p>会社概要: {companyDescription}</p>
      </div>
      <div>
        <p>お問合せ先</p>
        <p>メールアドレス: {email}</p>
        <p>電話番号: {phoneNumber}</p>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  companyName: 'Perfect Company',
  companyDescription:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  email: 'xxxxx@perfect.company.com',
  phoneNumber: 'xx-xxxx-xxxx-xxxx',
};

export default Footer;
