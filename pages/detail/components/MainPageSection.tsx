const MainPageSection = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => {
  return (
    <div className="divide-y divide-y-2">
      <h2 className="font-semibold text-xl text-white py-2">{title}</h2>
      <div className="pt-2 md:py-4 md:px-4 ">{children}</div>
    </div>
  );
};

export default MainPageSection;
