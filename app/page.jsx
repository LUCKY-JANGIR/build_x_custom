"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";


export default function Home() {
  const [step, setStep] = useState(1);
  const [bg, setBg] = useState('bg-[url("../public/bg1.png")]');
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (step === 1) return;

    let index = 0;
    setTypedText("");

    const fullText = content[step];
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 25); // typing speed

    return () => clearInterval(interval);
  }, [step]);

  const content = {
    2: "Welcome to BuildX Custom — an industry-style innovation event where ideas evolve into real products.This is not a single hackathon.BuildX Custom is a two- phase experience, designed to reflect how products are built in the real world — first through design, then through development., then through development.",
    3: "Every product begins with understanding.The BuildX CUSTOM DESIGN is an online experience focused on problem analysis, user thinking, and UI/UX planning. Participants work on real-world challenges, mapping user journeys and designing practical, build-ready solutions.No coding.Just clear thinking, strong logic, and impactful design.",
    4: "The BuildX CUSTOM DEV is an offline, hands-on coding experience. Teams plan technical solutions, design architectures, and build functional prototypes under real-time pressure.Here, execution matters.Working features, clean logic, and teamwork define success.This stage reflects real company development sprints and delivery expectations.",
  };

  const click = () => {
    if (step < 4) {
      setStep(step + 1);

      if (step === 2) {
        setBg('bg-[url("../public/bg2.png")]');
      } else if (step === 3) {
        setBg('bg-[url("../public/bg3.png")]');
      } else {
        setBg('bg-[url("../public/bg1.png")]');
      }
    } else {
      setStep(1);
      setBg('bg-[url("../public/bg1.png")]');
    }
  };

  return (
    <div
      className={`flex h-screen flex-col transition-all ease-in-out duration-2000 ${bg} bg-cover bg-center`}
    >
      <Image
        className={`${step === 1 ? "mt-[180px] ml-[430px]" : "mt-[50px] ml-[82px]"
          } transition-all ease-in-out duration-2000 logo_custom_intro_animations opacity-80`}
        src="/Logo.png"
        alt="Next.js logo"
        width={step === 1 ? 360 : 102}
        height={143}
        priority
      />

      <div className="flex items-center justify-center h-full w-full my-auto self-center transition-all duration-1000 px-[82px]">
        <span
          className={`${step === 1 ? "hidden" : "tech-text"} w-full text-left`}
        >
          {typedText}
          <span className="cursor">▌</span>
        </span>


        <button
          className="cursor-pointer flex flex-row absolute border-2 border-gray-400 px-2 rounded-3xl right-5 bottom-5 font-bold tracking-widest button_custom_intro_animations button_delayed opacity-80"
          onClick={click}
        >
          {step === 1 ? "Get Started" : "next"}
          <ArrowRight />
          {step}
        </button>
      </div>
    </div>
  );
}
