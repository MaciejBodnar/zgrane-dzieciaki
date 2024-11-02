const PremiereBar = () => {
  return (
    <div className="flex items-center bg-[#1A1A1A] p-3 w-fit rounded shadow-lg">
      {/* Premiere Pro Icon */}
      <div className="bg-[#9999FF] rounded mr-3 p-1">
        <span className="text-white font-bold">Pr</span>
      </div>

      {/* Text */}
      <span className="text-white text-lg mr-8">Premiere Pro</span>

      {/* Close Button */}
      <button className="text-white text-xl hover:text-gray-300">×</button>
    </div>
  );
};

export default PremiereBar;
