import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const cardStyle = `
  group bg-white p-6 pt-10 text-sm w-full md:w-1/4
  flex flex-col gap-2 relative border border-gray-100
  hover:bg-black
`;

  const cardShadowStyle = {
    boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.1)",
    backgroundImage: "url(thm-pattern-5.png)",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
  };
  const iconTab = `
    absolute top-[-16] w-12 h-12 bg-red-600 
    flex items-center justify-center
    before:content-[''] before:absolute before:top-0 before:right-0
    before:w-0 before:h-0
    before:border-t-[16px] before:border-t-transparent
    before:border-l-[16px] before:border-l-red-900
    before:translate-x-[16px] before:-translate-y-[1px]
  `;

  return (
    <div className="flex flex-col sm:flex-row justify-center items-start gap-8 px-4 py-10 bg-white">
      <div className={cardStyle} style={cardShadowStyle}>
        <div className={iconTab}>
          <MapPin className="text-white w-6 h-6" />
        </div>
        <h3 className="text-blue-900 font-semibold mt-2 text-lg lg:text-2xl group-hover:text-white">
          Visit a Office
        </h3>
        <p className="italic text-gray-600 text-md lg:text-lg group-hover:text-gray-300">
          You are most welcome to visit office.
        </p>
        <p className="mt-1 text-gray-500 font-medium text-md lg:text-lg group-hover:text-gray-300">
          552 Rugby Rd
          <br />
          Brooklyn NY 11230
        </p>
      </div>

      <div className={cardStyle} style={cardShadowStyle}>
        <div className={iconTab}>
          <Phone className="text-white w-6 h-6" />
        </div>
        <h3 className="text-blue-900 font-semibold mt-2 text-lg lg:text-2xl group-hover:text-white">
          Make a Call
        </h3>
        <p className="italic text-gray-600 text-md lg:text-lg group-hover:text-gray-300">
          Keeping you always better connected.
        </p>
        <p className="mt-1 text-gray-500 font-medium text-md lg:text-lg group-hover:text-gray-300">
          OFFICE: (347) 394-9384
          <br />
          CELL: (347) 221-6549
        </p>
      </div>

      <div className={cardStyle} style={cardShadowStyle}>
        <div className={iconTab}>
          <Mail className="text-white w-6 h-6" />
        </div>
        <h3 className="text-blue-900 font-semibold mt-2 text-lg lg:text-2xl group-hover:text-white">
          Send Email
        </h3>
        <p className="italic text-gray-600 text-md lg:text-lg group-hover:text-gray-300">
          Drop us a mail we will answer you asap.
        </p>
        <p className="mt-1 text-gray-500 font-medium text-md lg:text-lg group-hover:text-gray-300">
          SUPPORT: sascon09@yahoo.com
          <br />
          SUPPORT: amzadh78@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;