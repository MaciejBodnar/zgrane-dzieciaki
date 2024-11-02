const Box = ({ children, className = '', padding = 'p-4', backgroundColor = 'bg-white', url }) => {
  return (
    <a href={url}>
      <div className={`${padding} ${backgroundColor} rounded-lg shadow-md ${className}`}>
        {children}
      </div>
    </a>
  );
};

export default Box;
