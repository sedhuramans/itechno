import React from "react";
import Image from "next/image";
import { Marquee } from "../magicui/marquee";
import Title from "../Title";
import { sponsorData, sponsorDataType } from "@/data/sponsor";

const middleIndex = Math.ceil(sponsorData.length / 2);
const firstRow = sponsorData.slice(0, middleIndex);
const secondRow = sponsorData.slice(middleIndex);

type SponsorCardProps = {
    img: string;
};

const SponsorCard: React.FC<SponsorCardProps> = ({ img }) => {
    return (
        <div className="p-3 flex w-72 sm:w-80 h-24 items-center justify-center rounded-2xl border border-yellow-500/25 bg-[#05070e]/90 backdrop-blur-md hover:border-yellow-400/70 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all">
            <Image
                src={img}
                alt="Sponsor logo"
                width={260}
                height={80}
                className="h-full w-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            />
        </div>
    );
};

const SponsorSection: React.FC = () => {
  return (
    <div id="sponsors" className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
        <Title title="Our Corporate Partners" className="from-yellow-300 via-white to-blue-400" />

        {/* First Marquee Row */}
        <Marquee pauseOnHover className="[--duration:25s] mb-4">
            {firstRow.map((sponsor: sponsorDataType, index: number) => (
                <SponsorCard key={index} img={sponsor.img} />
            ))}
        </Marquee>

        {/* Second Marquee Row (Reversed) */}
        <Marquee reverse pauseOnHover className="[--duration:25s]">
            {secondRow.map((sponsor: sponsorDataType, index: number) => (
                <SponsorCard key={index} img={sponsor.img} />
            ))}
        </Marquee>

    </div>
  );
};

export default SponsorSection;
