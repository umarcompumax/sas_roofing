"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";

const ContactCard = dynamic(() => import("./ContactCard"), { ssr: false });

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
    absolute top-[-16] w-12 h-12 bg-[#e63a27] 
    flex items-center justify-center
    before:content-[''] before:absolute before:top-0 before:right-0
    before:w-0 before:h-0
    before:border-t-[16px] before:border-t-transparent
    before:border-l-[16px] before:border-l-red-900
    before:translate-x-[16px] before:-translate-y-[1px]
  `;

  const contactItems = [
    {
      icon: <MapPin className="text-white w-6 h-6" />,
      title: "Visit a Office",
      desc: "You are most welcome to visit office.",
      content: (
        <>
          552 Rugby Rd
          <br />
          Brooklyn NY 11230
        </>
      ),
    },
    {
      icon: <Phone className="text-white w-6 h-6" />,
      title: "Make a Call",
      desc: "Keeping you always better connected.",
      content: (
        <>
          OFFICE: (347) 394-9384
          <br />
          CELL: (347) 221-6549
        </>
      ),
    },
    {
      icon: <Mail className="text-white w-6 h-6" />,
      title: "Send Email",
      desc: "Drop us a mail we will answer you asap.",
      content: (
        <>
          SUPPORT: sascon09@yahoo.com
          <br />
          SUPPORT: amzadh78@gmail.com
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-start gap-8 px-4 py-10 my-16 bg-white">
      {contactItems.map((item, index) => (
        <ContactCard
          key={`contact-card-${index}`}
          item={item}
          index={index}
          cardStyle={cardStyle}
          cardShadowStyle={cardShadowStyle}
          iconTab={iconTab}
        />
      ))}
    </div>
  );
};

export default Contact;
