interface HeadingProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
}

export const Heading = ({ title, content, children }: HeadingProps) => {
  return (
    <>
      <div className="bg-blue-500 text-white px-6 py-8 text-center">
        {children}
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-blue-100">{content}</p>
      </div>
    </>
  );
};
