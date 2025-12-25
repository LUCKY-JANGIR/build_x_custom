"use client"
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
export default function Home() {
  const [step, setStep] = useState(1);
  const [bg, setBg] = useState('bg-[url("../public/bg1.png")]');
  const click = () => {
    if (step < 6) {
      setStep(step + 1);
      if (step == 2) {
        setBg('bg-[url("../public/bg2.png")]')
      }
      else if (step == 3) {
        setBg('bg-[url("../public/bg3.png")]')
      } else {
        setBg('bg-[url("../public/bg1.png")]')
      }
    } else {
      setStep(1)
    }
  }
  return (
    <div className={`flex h-screen   flex-col transition-all ease-in-out duration-1000 ${bg}  bg-cover bg-center`}>
      <Image
          className={`${step==1?"mt-[180px] ml-[430px]":"mt-[50px] ml-[82px]"} transition-all ease-in-out duration-1000 `}
          src="/Logo.png"
          alt="Next.js logo"
          width={step == 1 ? 360 : 102}
          height={143}
          priority
        />
        <div className="flex justify-center my-auto">
          <button className="cursor-pointer flex  border-[1.3px] font-bold px-[2.5%] py-[3px] rounded-2xl border-[#242424] bg-[#242424]/50 tracking-widest" onClick={click}>Get Started <ArrowRight className="" /> {step}</button>

        </div>
    </div>
  );
}
