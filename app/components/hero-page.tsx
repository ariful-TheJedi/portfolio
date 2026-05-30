"use client";

import BgBlur from "./reusabls/bg-brlur";
import ThreeDViewer from "./reusabls/3d-viewer";
import WarriorButton from "./reusabls/button"

//the data
import homeData from "../data/home-data.json"


export default function HeroSection() {
  const { hero } = homeData;


  return (
    <div id="home" className="relative bg-background min-h-screen body-text ">
      <BgBlur
        imagePath="https://i.pinimg.com/1200x/fe/34/40/fe3440a78a91be861470c0635a901239.jpg"
        blur="blur-[2px]"
        overlay="bg-background/60"
      />

      {/* Content */}
      <div
        className="main-container min-h-screen items-center relative z-10  grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column */}
        <div className="flex items-center justify-center order-2 lg:order-1">
          <div className="max-w-2xl">

            {/* Greeting */}
            <p
              className="
                mb-3
                text-sm font-medium tracking-[0.2em]
                text-bronze/80 uppercase
                md:text-base
              "
            >
              {hero.greeting}
            </p>

            {/* Name */}
            <h1
              className="
                text-5xl font-heading font-black leading-[0.95]
                text-bronze
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              {hero.name}
            </h1>

            {/* Subtitle */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-bronze" />

              <h2
                className="
                  text-base font-semibold tracking-wide text-text
                  md:text-xl
                  lg:text-2xl
                "
              >
                {hero.title}
              </h2>
            </div>

            {/* Description */}
            <p
              className="
                mt-8 
                max-w-xl
                text-muted"
            >
              {hero.description}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              
            <WarriorButton 
            variant="blood" 
            size="lg" 
            isFloating={true}
            href={hero.cta['link']}
            >
              {hero.cta["text"]}
            </WarriorButton>
               <p className="text-sm text-muted">
                {hero.cta["side-text"]}
              </p>

            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="text-text order-1 lg:order-2 flex items-center">
          <ThreeDViewer
            modelPath="/achilles_helmet.glb"
            scale={1.15}
            position={[0, 0, 0]}
            rotationSpeed={0.002}
            floatProps={{
              speed: 2,
              rotationIntensity: 0.15,
              floatIntensity: 0.3,
            }}
          />
        </div>
      </div>
    </div>
  );
}