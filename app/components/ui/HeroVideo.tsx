"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroVideo() {
  

  return (
    <div className="absolute inset-0 h-full w-full">
   

      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 opacity-100"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/frame1.jpg"
        
      >
        <source src="images/hero3.mp4" type="video/mp4" />
      </video>

      {/* Darker left side for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/40 to-transparent" />
    </div>
  );
}