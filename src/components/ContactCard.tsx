"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ContactCard = ({
  item,
  index,
  cardStyle,
  cardShadowStyle,
  iconTab,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
  return (
    <motion.div
      className={cardStyle}
      style={cardShadowStyle}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className={iconTab}>{item.icon}</div>
      <h3 className="text-[#003269] font-semibold mt-2 text-lg lg:text-2xl xl:text-xl group-hover:text-white">
        {item.title}
      </h3>
      <p className="italic text-gray-600 text-md lg:text-lg xl:text-base group-hover:text-gray-300">
        {item.desc}
      </p>
      <p className="mt-1 text-gray-500 font-medium text-md lg:text-lg xl:text-base group-hover:text-gray-300">
        {item.content}
      </p>
    </motion.div>
  );
};

export default ContactCard;
