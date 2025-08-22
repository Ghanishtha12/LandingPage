
"use client"
import Image from "next/image";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ChevronDown, Search, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  const cards = [
    { title: 'Big Data & Analytics', image: '/BigDataAnalytics.png' },
    { title: 'Consultancy', image: '/Consultancy.png' },
    { title: 'HR & staffing', image: '/HR& staffing.png' },
    { title: 'Cybersecurity', image: '/Cybersecurity.png' },
    { title: 'Consultancy', image: '/Consultancy 2.png' },
    { title: 'Sustainability', image: '/Sustainability.png' },
    { title: 'Cloud', image: '/Cloud.png' },
    { title: 'Metaverse', image: '/Metaverse.png' },
  ];
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Image with dark overlay to maintain readability */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Group 1.png"
          alt="Background"
          height={100}
          width={100}
          sizes="100vw"
          className="object-cover h-[85vh] w-[100vw] "
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Background: solid black via container class */}

      {/* Removed colored shapes for a clean black background */}

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="relative" style={{ width: "174px", height: "70 px" }} >
            <img
              src="/BlackCoffer_Logo.png" // replace with your logo path
              alt="Blackcoffer Logo"
              className="w-full h-full object-contain invert"
            />
          </div>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-white transition-colors">
            <span>Who we are</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-white transition-colors">
            <span>What we do</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-white transition-colors">
            <span>Insights</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-white transition-colors">
            <span>Careers</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>


        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          <button className="flex items-center space-x-2 border border-white bg-white/10 px-4 py-2 rounded-lg transition-colors">
            <Phone className="w-4 h-4" />
            <span>Contact Us</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex mt-[-50px] items-center min-h-[calc(100vh-120px)] px-8">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Main heading */}
          <div className="">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight ">
                TOGETHER WE
                <br />
                <span className="text-white lg:pl-[140px]">
                  REINVENTED
                </span>
              </h1>
            </div>

            {/* Services link */}
            <div className="mt-2 lg:mt-3 lg:pt-[120px] lg:pl-[35px] max-md:hidden">
              <a href="#services" className="text-lg hover:text-white text-xl lg:text-2xl transition-colors cursor-pointer">
                Services
              </a>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="space-y-6 mt-[-70px] max-md:pt-[40px] ">
            <Image
              src="/Rectangle 1.png"
              alt="Reinvented"
              width={80}
              height={9}
              className="w-80px h-9px object-cover mb-6 md:mb-5 md:rounded-none md:w-[80px] md:h-[9px] lg:w-[80px] lg:h-[9px] lg:rounded-none ml-[75px]"
              priority
            />
            <p className="text-md  md:text-xl md:leading-9 text-gray-200 lg:pl-[80px] lg:w-[560px]">
              <span className="text-white font-semibold ">Together, we can reinvent your business. Reinvention is about breaking industry norms. Our wide range of capabilities, ecosystem partnerships and unmatched industry expertise can help your business become the next best version of itself. .</span>
            </p>


            {/* CTA: simple text below paragraph */}
            <p className="pt-4  lg:pl-[80px] ">
              <a href="services" className="text-gray-300 hover:text-white inline-flex items-center justify-center gap-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  fontStyle: "medium",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  width: "182px",
                  height: "30px",
                  whiteSpace: "nowrap",
                }}
              >
                See what we do
                <Image
                  src="/Frame 86.png"
                  alt="arrow"
                  width={24}
                  height={24}
                  className="object-contain p-[2px] gap-[10px]"

                />

              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Cards grid section */}
      <section
        id="services"
        className="relative z-10 px-8 pb-6 -mt-10 sm:-mt-12 lg:-mt-20 max-w-7xl mx-auto scroll-mt-24"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative w-[290px] h-[350px] overflow-hidden bg-gray-800 group cursor-pointer transition-all duration-300"
              style={{ left: "-1px" }}
            >
              {/* Background Image - Hides on hover */}
              <div className="absolute inset-0 overflow-hidden transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 290px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  priority={idx < 4}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col p-6">
                {/* Title - Always visible at top */}
                <h3 className="text-xl font-semibold text-white text-left mb-4">
                  {card.title}
                </h3>

                {/* Hover Content */}
                <div className="flex-1 flex flex-col justify-center items-center overflow-visible">
                  <div className="w-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0">
                    <p className="text-white text-base text-left w-full mb-6 leading-relaxed">
                      {card.title} services tailored to your business needs with our expert solutions. Our team provides comprehensive solutions to help your business grow.
                    </p>
                  </div>
                  <div className="w-full mt-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0 delay-100">
                    <div className="flex justify-end">
                      <button className="flex items-center gap-1 text-white text-sm font-medium hover:gap-2 transition-all duration-300 group px-3 py-1.5">
                        <span>Expand</span>
                        <span className="inline-block group-hover:translate-x-1 transition-transform duration-300 "> {">"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats section */}
      <section className="relative z-10 px-8 py-16 max-w-7xl mx-auto">
        <p className="text-gray-400 mb-2 text-xl">The reason why Blackcoffer stands out</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Blackcoffer Unfolds Solutions To Everything</h2>

        <div className="relative rounded-3xl h-[600px] w-full overflow-hidden border border-white/10">
          {/* Background image covering entire container */}
          <Image
            src="/group.png"
            alt="Background human and logo"
            fill
            sizes="100vw"
            className="object-cover object-center lg:object-right rounded-3xl"
            priority={false}
          />
          {/* Gradient overlay for contrast: darker on left, lighter on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/10 rounded-3xl" />

          {/* Foreground content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 rounded-3xl overflow-hidden">
            {/* Left 3 columns: metric tiles */}
            <div className="lg:col-span-3 bg-black/30 rounded-3xl lg:rounded-r-none overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {/* Top row */}
                <div className="p-6 h-24 md:h-28 border-b border-transparent sm:border-r border-transparent" />
                <div className="p-6 h-24 md:h-28 border-b border-transparent lg:border-r border-transparent" />
                <div className="p-6 h-24 md:h-28 border-b border-transparent" />

                {/* Middle row */}
                <div className="p-6 h-24 md:h-28 border-b border-transparent sm:border-r border-transparent" />
                <div className="p-6 h-24 md:h-28 border-b border-transparent lg:border-r border-transparent" />
                <div className="p-6 h-24 md:h-28 border-b border-transparent" />

                {/* Bottom row left */}
                <div className="p-6 h-24 md:h-28 sm:border-r border-transparent" />
                {/* Bottom row center (dedicated to ...) */}
                <div className="p-6 h-24 md:h-28 lg:col-span-2" />
              </div>
            </div>

            {/* Right column: reserved visual space to showcase image on large screens */}
            <div className="hidden lg:block min-h-[300px]" />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      {/* What Makes Us Different */}
      {/* What Makes Us Different */}
      <section className="relative z-10 px-8 py-20 max-w-7xl mx-auto">
        <h2
          className="text-center font-semibold text-white mb-16"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "50px",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
          What Makes Us Different
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">

          {/* Consistency */}
          <div className="w-[120px] h-[174px] flex flex-col gap-[30px] justify-center items-center">
            <Image
              src="/Component 15.png"
              alt="Consistency"
              width={120}
              height={120}
              className="object-contain"
            />
            <span className="w-[119px] h-[24px] text-[20px] font-medium leading-[100%] text-center text-gray-400">
              Consistency
            </span>
          </div>

          {/* Improvement */}
          <div className="w-[120px] h-[174px] flex flex-col gap-[30px] justify-center items-center">
            <Image
              src="/Frame 21.png"
              alt="Improvement"
              width={120}
              height={120}
              className="object-contain"
            />
            <span className="w-[119px] h-[24px] text-[20px] font-medium leading-[100%] text-center text-gray-400">
              Improvement
            </span>
          </div>

          {/* Branching */}
          <div className="w-[120px] h-[174px] flex flex-col gap-[30px] justify-center items-center">
            <Image
              src="/Component 13.png"
              alt="Branching"
              width={120}
              height={120}
              className="object-contain"
            />
            <span className="w-[119px] h-[24px] text-[20px] font-medium leading-[100%] text-center text-gray-400">
              Branching
            </span>
          </div>

          {/* Expertise */}
          <div className="w-[120px] h-[174px] flex flex-col gap-[30px] justify-center items-center">
            <Image
              src="/Component 14.png"
              alt="Expertise"
              width={120}
              height={120}
              className="object-contain"
            />
            <span className="w-[119px] h-[24px] text-[20px] font-medium leading-[100%] text-center text-gray-400">
              Expertise
            </span>
          </div>

          {/* Security */}
          <div className="w-[120px] h-[174px] flex flex-col gap-[30px] justify-center items-center">
            <Image
              src="/Component 16.png"
              alt="Security"
              width={120}
              height={120}
              className="object-contain"
            />
            <span className="w-[119px] h-[24px] text-[20px] font-medium leading-[100%] text-center text-gray-400">
              Security
            </span>
          </div>

          {/* Transparency */}
          <div className="w-[120px] h-[174px] flex flex-col gap-[30px] justify-center items-center">
            <Image
              src="/Component 17.png"
              alt="Transparency"
              width={120}
              height={120}
              className="object-contain"
            />
            <span className="w-[119px] h-[24px] text-[20px] font-medium leading-[100%] text-center text-gray-400">
              Transparency
            </span>
          </div>

        </div>
      </section>



      {/* Success Stories */}
      <section className="relative z-10 px-8 pb-20 max-w-7xl mx-auto  mt-[30px]">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="font-semibold"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "50px",
              lineHeight: "100%",
              letterSpacing: "0px",
              width: "390px",
              height: "61px",
            }}
          >
            Success Stories
          </h2>
          <a href="#" className="text-gray-300 hover:text-white inline-flex items-center justify-center gap-2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              fontStyle: "medium",
              lineHeight: "100%",
              letterSpacing: "0px",
              width: "182px",
              height: "30px",
              whiteSpace: "nowrap",
            }}
          >
            Read all stories
            <Image
              src="/Frame 86.png"
              alt="arrow"
              width={24}
              height={24}
              className="object-contain p-[2px] gap-[10px]"

            />

          </a>
        </div>

        <div className="w-full overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 1000,
                stopOnInteraction: false,
              })
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-0">
              {/* Story 1 */}
              <CarouselItem className="pl-0 w-full max-w-2xl">
                <article className="space-y-3 pr-4">
                  <p className="text-white">2024 March 17</p>
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "35px",
                      lineHeight: "120%",
                    }}
                  >
                    Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development
                  </h3>

                </article>
              </CarouselItem>

              {/* Story 2 */}
              <CarouselItem className="pl-0 w-full max-w-2xl">
                <article className="space-y-3 pr-4">
                  <p className="text-white">2024 March 17</p>
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "35px",
                      lineHeight: "120%",
                    }}
                  >
                    Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Application
                  </h3>

                </article>
              </CarouselItem>

              {/* Story 3 */}
              <CarouselItem className="pl-0 w-full max-w-2xl">
                <article className="space-y-3 pr-4">
                  <p className="text-white">2024 February 02</p>
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "35px",
                      lineHeight: "120%",
                    }}
                  >
                    Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development
                  </h3>

                </article>
              </CarouselItem>
              <CarouselItem className="pl-0 w-full max-w-2xl">
                <article className="space-y-3 pr-4">
                  <p className="text-white">2024 March 17</p>
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "35px",
                      lineHeight: "120%",
                    }}
                  >
                    Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Application
                  </h3>

                </article>
              </CarouselItem>
            </CarouselContent>

          </Carousel>
          {/* Navigation Buttons */}
          <div className="mt-10 flex gap-3 justify-end">
            <button className="w-10 h-10 rounded bg-white/10 hover:bg-white/20 grid place-items-center">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded bg-white/10 hover:bg-white/20 grid place-items-center">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Request a Call Back */}
      <section className="relative z-10 px-8 py-10  mx-auto text-center bg-white/10 border-t border-b border-white/20">
        <h2
          className="text-white font-semibold mx-auto mb-7"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "29px",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
          REQUEST A CALL BACK
        </h2>
        <p className="mt-2 text-[30px] font-medium leading-[100%] tracking-normal text-center font-roboto">
          Get your Business Right up There
        </p>
        <p
          className="mt-4 text-[20px] font-normal text-gray-300 leading-[100%] text-center max-w-[665px] mx-auto"
        >
          When you need intelligent answers to your toughest questions, we’re here to help.
          We’re just a call or email away! Don’t hang back from getting in touch with us.
          We’ll be glad to assist you.
        </p>

        {/* Double-border style button */}
        <div className="mt-8 flex justify-center">
          <div className="border border-white/20 bg-white/10 p-1 ">
            <button className="w-[290px] h-[67px] px-[40px] py-[20px] border border-[#7A7A7A] text-white text-[18px] font-semibold leading-[100%] tracking-normal bg-transparent hover:bg-white/10 transition-colors"
              style={{
                borderWidth: "0.5px",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              <span
                className="text-[22px] font-semibold leading-[100%] text-center text-white whitespace-nowrap"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "22px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                }} >
                Request a Call Back
              </span>
            </button>
          </div>
        </div>
      </section>

      {/*

 */}



      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-[1800px] mx-auto px-8 py-12 flex justify-between">
          {/* Left side content with proper spacing */}
          <div className="flex gap-20 pt-15"> {/* Added pt-8 for top padding */}
            {/* About Us section */}
            <div className="space-y-6"> {/* Increased space-y-3 to space-y-6 */}
              <h4 className="text-gray-400 font-normal text-[20px] leading-[100%]">
                About us
              </h4>
              <ul className="space-y-4"> {/* Increased space-y-2 to space-y-4 */}
                <li><a href="#" className="text-[20px] text-gray-300 hover:text-white">About Founder</a></li>
                <li><a href="#" className="text-[20px] text-gray-300 hover:text-white">Contact us</a></li>
                <li><a href="#" className="text-[20px] text-gray-300 hover:text-white">Team</a></li>
                <li><a href="#" className="text-[20px] text-gray-300 hover:text-white">Locations</a></li>
              </ul>
            </div>

            {/* FAQ section */}
            <div className="space-y-6"> {/* Increased space-y-3 to space-y-6 */}
              <h4 className="text-gray-400 font-normal text-[20px] leading-[100%]">
                FAQ
              </h4>
              <ul className="space-y-4"> {/* Increased space-y-2 to space-y-4 */}
                <li><a href="#" className="text-[20px] text-gray-300 hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="text-[20px] text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-[20px] text-gray-300 hover:text-white">Solutions</a></li>
                <li><a href="#" className="text-[20px] text-gray-300 hover:text-white">Our Process</a></li>
              </ul>
            </div>

            {/* Get In Touch section */}
            <div className="space-y-6"> {/* Increased space-y-4 to space-y-6 */}
              <h4 className="text-gray-400 font-normal text-[20px] leading-[100%]">
                Get In Touch
              </h4>
              <p className="text-[20px] text-gray-300 max-w-[260px] leading-[28px]">
                Taking seamless key performance indicators offline to maximise the long tail.
              </p>
              <div className="flex items-center gap-4 pt-2"> {/* Added pt-2 for slight top padding */}
                <a href="#" className="w-10 h-10">
                  <img src="/image 18.png" alt="Facebook" className="w-full h-full object-contain" />
                </a>
                <a href="#" className="w-10 h-10">
                  <img src="/image 19.png" alt="YouTube" className="w-full h-full object-contain" />
                </a>
                <a href="#" className="w-10 h-10">
                  <img src="/image 20.png" alt="LinkedIn" className="w-full h-full object-contain" />
                </a>
                <a href="#" className="w-10 h-10">
                  <img src="/image 22.png" alt="Twitter" className="w-full h-full object-contain" />
                </a>
              </div>
            </div>
          </div>

          {/* Technology Vector animation - Responsive */}
          <div className="relative mt-12 lg:mt-0">
            <div className="hidden lg:block">
              <img
                src="/Technology Vector icon animation.gif"
                alt="Tech"
                className="w-[300px] h-[200px] xl:w-[500px] xl:h-[280px] 2xl:w-[700px] 2xl:h-[380px] object-contain 2xl:-mr-[200px] xl:-mr-[100px] -mr-[100px]"
              />
            </div>
            {/* Mobile/Tablet version */}
            <div className="lg:hidden flex justify-center">
              <img
                src="/Technology Vector icon animation.gif"
                alt="Tech"
                className="w-[250px] h-[180px] sm:w-[300px] sm:h-[200px] object-contain"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Removed floating particles for a clean look */}
    </div>
  );
}
