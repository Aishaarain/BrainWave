import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h6 className="tagline  mb-6 text-center items-center text-zinc-600 uppercase">
        Helping people create beautiful content at
      </h6>
      <ul className="flex">
        {companyLogos.map((logo, index) => ( 
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;