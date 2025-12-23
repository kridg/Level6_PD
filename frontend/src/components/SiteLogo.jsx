import logo from "../logo/Ai_Solutions_Logo.jpg";

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-10 w-10",
};

const SiteLogo = ({ size = "md", showText = true }) => {
  const dim = sizeClasses[size] || sizeClasses.md;
  return (
    <div className="flex items-center gap-2">
      <div className={`${dim} rounded-xl overflow-hidden border border-orange-200 bg-white flex items-center justify-center`}>
        <img
          src={logo}
          alt="AI-Solutions logo"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-primary text-sm sm:text-base">AI-Solutions</span>
          <span className="hidden sm:inline text-[11px] text-gray-500">
            Applied AI delivery
          </span>
        </div>
      )}
    </div>
  );
};

export default SiteLogo;



