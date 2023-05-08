const Badge = (prop: { title: string }) => {
  return (
    <div className="py-2 border border-primary rounded-md px-6 ">
      <p className="text-center">{prop.title}</p>
    </div>
  );
};

export default Badge;
