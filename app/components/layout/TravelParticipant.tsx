"use client";

import { motion } from "framer-motion";

// 1. Reusable Card Component to keep code clean
type CardProps = {
  title: string;
  description: string;
  className?: string;
};

const ParticipantCard = ({ title, description, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full relative z-10 flex flex-col h-full ${className}`}
    >
      <h4 className="text-[22px] md:text-2xl font-medium text-gray-900 mb-3">
        {title}
      </h4>
      <p className="text-[15px] text-gray-600 leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      <div className="text-sm font-semibold text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors mt-auto cursor-pointer inline-block w-fit">
        Learn more &gt;
      </div>
    </div>
  );
};

export default function TravelParticipant() {
  const cards = [
    {
      title: "For Travelers",
      description:
        "Seamless discovery, intelligent comparison, and confident booking across global stays.",
    },
    {
      title: "For Hospitality Leaders",
      description:
        "AI-driven management, smart distribution, and accelerated revenue growth.",
    },
    {
      title: "For Travel Creators & Agents",
      description:
        "Turn influence into income through margin-controlled global booking access.",
    },
    {
      title: "For Enterprises & OTAs",
      description:
        "Expand supply, optimize pricing intelligence, and scale without friction.",
    },
    {
      title: "For Investors",
      description:
        "A scalable travel infrastructure platform positioned at the intersection of technology and global hospitality.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F7F5F0] px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        {/* Adjusted margin-bottom to perfectly match ScaleAndMarket (mb-12 md:mb-16) */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-gray-900 leading-tight mb-4">
            Built for Every Travel Participant
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Recognition reflects responsibility.
          </p>
        </div>

        {/* ================= MOBILE VIEW (Standard Stack) ================= */}
        <div className="lg:hidden flex flex-col gap-6">
          {cards.map((card, index) => (
            <ParticipantCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* ================= DESKTOP VIEW (SVG Infographic Layout) ================= */}
        {/* Removed the extra mt-10 here so the gap to the header perfectly matches the rest of the page */}
        <div className="hidden lg:block relative w-[1000px] h-[1150px] mx-auto">
          
          {/* THE DOTTED PATH SVG */}
          <div className="absolute top-[86px] left-[150px] z-0">
            <svg
              width="678"
              height="857"
              viewBox="0 0 678 857"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M246.971 70.9692C344.637 4.80253 727.971 -87.5274 669.471 195.469C451.971 506.473 -28.0293 166.972 3.47051 411.468C28.836 608.351 652.471 332.468 629.971 632.968C607.471 933.468 3.47051 495.968 3.47051 856.468"
                stroke="#B08D57"
                strokeWidth="4"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {/* UPPER PLANE SVG */}
          <div className="absolute top-[80px] left-[520px] z-10">
            <svg
              width="48"
              height="45"
              viewBox="0 0 48 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.6154 17.2163C47.9438 19.145 46.6555 20.9629 44.7404 21.273L32.0248 23.4438L23.6172 43.9031L18.9946 44.709L21.6491 25.232L8.90074 27.4084L6.23976 32.6228L2.75569 33.2008L3.70171 24.7301L0.000456925 17.019L3.49252 16.3892L7.77254 20.486L20.4228 18.3263L11.5137 0.772959L16.1419 -0.000337395L30.8448 16.5135L43.5604 14.3426C45.4181 13.9919 47.3308 15.3474 47.6154 17.2163Z"
                fill="#B08D57"
              />
            </svg>
          </div>

          {/* LOWER PLANE SVG */}
          <div className="absolute top-[770px] left-[320px] z-10">
            <svg
              width="47"
              height="45"
              viewBox="0 0 47 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.000994784 22.5846C0.0197412 24.541 1.60992 26.1017 3.5496 26.0674L16.4487 25.9494L28.3503 44.594L33.0426 44.5676L26.977 25.8698L39.9093 25.7515L43.4526 30.4116L46.9839 30.3627L44.5511 22.1939L46.8266 13.9488L43.2782 13.9481L39.7923 18.7387L26.9596 18.8561L32.6155 0.00127803L27.9236 0.0607576L16.3813 18.9196L3.48223 19.0376C1.59181 19.0217 -0.0502771 20.6948 0.000994784 22.5846Z"
                fill="#B08D57"
              />
            </svg>
          </div>

          {/* ABSOLUTE CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute top-[0px] left-[0px] w-[400px]"
          >
            <ParticipantCard {...cards[0]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="absolute top-[260px] right-[0px] w-[400px]"
          >
            <ParticipantCard {...cards[1]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute top-[470px] left-[0px] w-[400px]"
          >
            <ParticipantCard {...cards[2]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute top-[700px] right-[0px] w-[400px]"
          >
            <ParticipantCard {...cards[3]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute top-[940px] left-[0px] w-[400px]"
          >
            <ParticipantCard {...cards[4]} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}