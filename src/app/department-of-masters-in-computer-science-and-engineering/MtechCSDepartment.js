"use client";

import React from 'react'
import Image from 'next/image';
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { studentReviewsData } from '@/Json/PlacementData';
import CSEForm from '@/Components/CSEForm'
import { ArrowRight, Check, MoveRight } from 'lucide-react'
import { GraduationCap, BookOpen, PiggyBank, Award, Send } from 'lucide-react'
import PlacementBanner from '@/Components/PlacementBanner';
import HowToApply from '@/Components/HowToApply';
import IndustryPartnerSlider from '@/Components/IndustryPartnerSlider';
import HighlightSlider from '@/Components/HighlightSlider';
import Breadcrumb from '@/Components/Breadcrumb';


const MtechCSDepartment = () => {
  const features = [
    "Advanced Certification Program with specialization options",
    "30-hour intensive course with research components",
    "Industry-aligned curriculum with emerging technologies focus",
    "Skill development aligned with NEP research guidelines",
    "Immersive research experience with practical applications",
    "Expert faculty mentorship for thesis and projects",
  ];

  const recruiters = [
    { name: "Google Research", column: 1 },
    { name: "Microsoft Research", column: 1 },
    { name: "IBM Research", column: 1 },
    { name: "Intel Labs", column: 1 },
    { name: "NVIDIA", column: 1 },
    { name: "Adobe Research", column: 2 },
    { name: "Amazon Science", column: 2 },
    { name: "CISCO Research", column: 2 },
    { name: "Qualcomm Research", column: 2 },
    { name: "Samsung Research", column: 2 },
  ]

  const services = [
    {
      title: "Research Opportunities",
      icon: GraduationCap,
      href: "/research",
    },
    {
      title: "PhD Programs",
      icon: BookOpen,
      href: "/phd-programs",
    },
    {
      title: "Research Grants",
      icon: PiggyBank,
      href: "/research-grants",
    },
    {
      title: "Research Scholarships",
      icon: Award,
      href: "/research-scholarships",
    },
    {
      title: "Apply Now",
      icon: Send,
      href: "/apply",
    }
  ]

  const placements = [
    {
      logo: "/image/company-logos/google-research.png",
      number: "48.50",
      company: "Google Research",
      isRed: false
    },
    {
      logo: "/image/company-logos/microsoft-research.png",
      number: "45.75",
      company: "Microsoft Research",
      isRed: true
    },
    {
      logo: "/image/company-logos/ibm-research.png",
      number: "42.00",
      company: "IBM Research",
      isRed: false
    },
    {
      logo: "/image/company-logos/nvidia.png",
      number: "52.25",
      company: "NVIDIA",
      isRed: true
    },
    {
      logo: "/image/company-logos/intel-labs.png",
      number: "38.60",
      company: "Intel Labs",
      isRed: false
    },
    {
      logo: "/image/company-logos/qualcomm.png",
      number: "44.80",
      company: "Qualcomm",
      isRed: true
    }
  ]

  const BreadCrumb = [
    {
      name: "Department Of Computer Science and Engineering (MTech)",
      Link: "/department-of-computer-science-and-engineering-mtech",
    },
  ]

  return (
    <section>
      <div className='relative h-[90vh] max-lg:h-full bg-cover'>
        <div className='absolute inset-0 bg-BG42 bg-cover grayscale'>
          <div className='absolute inset-0 bg-black bg-opacity-70' />
        </div>
        <div className='relative max-w-[1400px] mx-auto h-full w-full grid grid-cols-3 px-10 max-sm:px-3'>
          <div className='col-span-1 flex flex-col justify-center max-lg:items-center text-white max-lg:col-span-3 max-lg:pt-40'>
            <span className='text-xl sm:text-2xl max-sm:text-center font-novaReg'>Master of Technology</span>
            <h2 className='font-novaReg max-md:text-center text-3xl sm:text-4xl'>Computer Science & Engineering</h2>
            <button className="py-3 max-sm:py-2 max-sm:px-6 max-sm:text-xs px-8 mt-5 text-[15px] rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">Apply Now <MoveRight className='w-5 h-5' /></button>
            <div className='mt-10 flex max-[420px]:flex-col gap-2'>
              <img className='w-60 max-xl:w-48 rounded-lg' src="/image/qs-i-gauge.jpg" alt="I-GAUGE" />
              <img className='w-60 max-xl:w-48 rounded-lg' src="/image/iic.jpg" alt="IIC" />
            </div>
          </div>
          <div className='col-span-2 flex justify-end items-center max-lg:col-span-3 max-lg:justify-center lg:pt-10 max-lg:py-10'>
            <CSEForm />
          </div>
        </div>
      </div>
      <main className='max-w-[1400px] max-[1450px]:container mx-auto py-10 px-10 max-sm:px-2'>
        <Breadcrumb data={BreadCrumb} />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-novaReg">Master of Technology in Computer Science</h2>
              <p className="my-5 tracking-tight font-novaReg text-start leading-5">
                The MTech program in Computer Science at AKGU is designed to provide advanced technical knowledge and research skills in cutting-edge areas of computer science. Established in 2005, the department has been at the forefront of research and innovation in specialized domains.
              </p>
              <p className="leading-5 text-start font-novaReg">
                Our MTech program emphasizes both theoretical foundations and practical applications, with specializations available in Artificial Intelligence, Data Science, Cybersecurity, and Cloud Computing. The department boasts state-of-the-art research facilities and collaborations with leading industry research labs. Students work closely with faculty on cutting-edge research projects, with opportunities to publish in reputed journals and conferences.
              </p>
            </div>
            <div>
              <h2 className='font-novaReg text-2xl'>Research Focus</h2>
              <p className='mt-2 font-novaReg'>According to NASSCOM, India's AI/ML workforce is expected to grow at 30% CAGR, creating over 300,000 research-oriented positions by 2025. Our program prepares students for these high-growth research and specialized technical roles.</p>
            </div>
          </div>
          <div className="h-max border border-gray-400 rounded-lg p-6 shadow-lg mt-14">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="flex flex-col text-center items-center gap-3 group">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center border bg-gray-200 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white`}>
                    <service.icon strokeWidth={1.5} className="w-8 h-8" />
                  </div>
                  <span className="font-novaReg text-black">{service.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* Section 1: Computer Science & Engineering */}
      <section className="relative h-[40vh] xl:h-[50vh] bg-cover flex flex-col justify-between lg:p-10">
        <div className="absolute inset-0 bg-BG42 bg-cover bg-fixed grayscale">
          <div className="absolute inset-0 bg-gray-800 bg-opacity-90" />
        </div>
        <div className="relative max-w-4xl w-full mx-auto text-white text-center flex max-md:flex-col max-md:gap-5 items-center justify-between px-4 py-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-novaBold max-w-lg leading-6 sm:leading-7">
              MTech IN COMPUTER SCIENCE
            </h2>
            <span className="text-lg sm:text-xl md:text-2xl font-novaReg">
              Research Program Ranked Amongst
            </span>
            <h1 className="text-2xl sm:text-4xl xl:text-6xl text-yellow-500 font-novaBold">
              TOP RESEARCH INSTITUTIONS
            </h1>
          </div>
          <div>
            <img
              className="w-40 sm:w-48 md:w-60 rounded-lg"
              src="/image/qs-i-gauge.jpg"
              alt="I-GAUGE"
            />
          </div>
        </div>
      </section>


      {/* Section 2: Blue Background with 3 Cards */}
      <section className="bg-blue-600 px-8 py-16 h-full xl:h-[50vh]">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto xl:-translate-y-40">
          {/* Department at a Glance Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg h-fit">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-10 h-10 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <h2 className="text-2xl font-novaSemi text-black">
                Department at a Glance
              </h2>
            </div>
            <ul className="space-y-2 font-novaReg">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Advanced Curriculum with Research Focus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Hands-on Research with Emerging Technologies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Collaborations with Industry Research Labs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Outstanding Research Career Opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Thesis work with practical applications</span>
              </li>
            </ul>
            <button className="py-2 max-sm:py-1.5 max-sm:px-4 max-sm:text-xs px-5 mt-5 text-[15px] rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">
              VIEW MORE <MoveRight className='w-5 h-5' />
            </button>
          </div>

          {/* Research Labs Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg h-fit">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-10 h-10 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
              </svg>
              <h2 className="text-2xl font-novaSemi text-black">Research Labs</h2>
            </div>
            <ul className="space-y-2 font-novaReg">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">AI & Machine Learning Research Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Data Science & Big Data Analytics Center</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Cybersecurity Research Facility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Cloud Computing & Distributed Systems Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">IoT and Embedded Systems Research Center</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Quantum Computing Research Initiative</span>
              </li>
            </ul>
            <button className="py-2 max-sm:py-1.5 max-sm:px-4 max-sm:text-xs px-5 mt-5 text-[15px] rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">
              VIEW MORE <MoveRight className='w-5 h-5' />
            </button>
          </div>

          {/* Department in a Nutshell Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-novaSemi text-black">Your Department in a <br /> Nutshell</h2>
            </div>

            <ul className="space-y-1 font-novaReg">
              {[
                'Research Areas', 'Publications', 'Research Workshops', 'Guest Lectures',
                'Conferences', 'Research Centers', 'PhD Programs', 'Course Structure',
                'Research Outcomes', 'Faculty Directory', 'Research Partnerships'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[15px] text-gray-900 cursor-pointer hover:pl-1.5 duration-200 ease-in-out">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
      <div className="max-w-[1400px] mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-novaReg text-gray-800 mb-2">
              AKG University MTech CSE Admission Eligibility & Fees
            </h1>
            <p className="text-gray-800 font-novaReg">
              Applicants must have completed a BE/BTech in Computer Science/IT or equivalent with at least 60% aggregate marks. GATE qualified candidates are given preference. Candidates with relevant industry experience are also encouraged to apply.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <table className="w-full border border-gray-300 border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 bg-gray-600 text-white font-novaReg">
                      Program Fee
                    </th>
                    <th className="text-left py-3 px-4 bg-gray-600 text-white font-novaReg">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b font-novaReg">
                    <td className="py-3 px-4 text-gray-700">Semester Fee</td>
                    <td className="py-3 px-4 text-gray-700">150000/- INR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <table className="w-full border border-gray-300 border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-3 bg-gray-600 text-white font-novaReg">
                      Other Fee Details
                    </th>
                    <th className="text-left py-3 px-4 bg-gray-600 text-white font-novaReg">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b font-novaReg">
                    <td className="py-3 px-4 text-gray-700">Thesis Examination Fee</td>
                    <td className="py-3 px-4 text-gray-700">5000/- INR</td>
                  </tr>
                  <tr className="border-b font-novaReg">
                    <td className="py-3 px-4 text-gray-700">Research Security Deposit</td>
                    <td className="py-3 px-4 text-gray-700">5000/- INR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

         <div className="relative h-[500px] rounded-lg">
          <img
            src="https://imgs.search.brave.com/Hue7bpZgnaDEf6Yub5aRxipDEnEF9M_aXkSWqFExmLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYXZl/Y2FtZXJhd2lsbHRy/YXZlbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDEv/eW91dHViZS10aHVt/Ym5haWxzLXNpemUt/aGVhZGVyLTEtODAw/eDQ1MC5wbmc"
            alt="Thumbnail"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-center text-3xl font-novaSemi mb-12 text-gray-800">
          Research Placement Achievements
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-start">
          {placements.map((placement, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="text-3xl lg:text-4xl font-novaBold mb-2">
                <span className={placement.isRed ? "text-red-500" : "text-gray-600"}>
                  {placement.number}
                </span>
                <span className="text-gray-400 text-lg ml-1">LPA</span>
              </div>
              <div className="w-32 h-12 relative">
                <Image
                  src={placement.logo}
                  alt={`${placement.company} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className='bg-indigo-900'>
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <h1 className="text-3xl font-novaReg text-white leading-7 mb-8">
            Research & Career Opportunities After
            <br />
            MTech in Computer Science
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Careers Section */}
            <div>
              <h2 className="text-2xl font-novaReg text-white mb-4">Research Career Prospects</h2>
              <p className="text-white font-novaReg leading-relaxed">
                MTech graduates in Computer Science have diverse opportunities in research and development across industries and academia. The growing demand for specialized technical expertise in AI, Data Science, Cybersecurity, and Cloud Computing offers exciting career paths. Graduates can pursue roles as Research Scientists, Technical Architects, or pursue PhD programs at top institutions worldwide.
              </p>
            </div>
            {/* Top Recruiters Section */}
            <div>
              <h2 className="text-2xl font-novaReg text-white mb-4">Leading Research Employers</h2>
              <p className="text-white font-novaReg mb-4">
                Some of the leading research organizations hiring MTech graduates include:
              </p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                {recruiters.map((recruiter, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className='bg-gray-300 p-0.5 rounded-md'>
                      <svg
                        className="w-4 h-4 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-white font-novaReg">{recruiter.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-white shadow-xl my-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Image Section */}
          <div className="relative h-[300px] md:h-full lg:col-span-4">
            <div className="absolute inset-0 bg-red-600">
              <Image
                src="/image/research-lab.jpg"
                alt="Advanced Research Programs"
                className="h-full w-full object-cover object-left grayscale"
                width={500}
                height={600}
                priority
              />
              <div className="absolute inset-0 bg-red-600/20 mix-blend-multiply" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 p-6 lg:col-span-4">
            <h1 className="text-3xl font-novaSemi tracking-tight text-gray-900 md:text-4xl">
              Specialized
              <br />
              Research Programs
            </h1>
            <p className="text-gray-600 font-novaReg">
              AKG University offers advanced research programs with specialization tracks in cutting-edge areas of Computer Science, adhering to the National Education Policy's research guidelines.
            </p>
            <p className="text-gray-600 font-novaReg">
              These programs equip students with deep technical expertise and research skills in emerging technology areas, providing them with an excellent platform to excel in research careers. It's an opportunity for passionate researchers to work in a dynamic and challenging academic environment.
            </p>
          </div>
          {/* Features Section */}
          <div className="space-y-6 bg-gray-50 p-6 lg:col-span-4">
            <h2 className="text-xl font-novaSemi text-gray-900">
              Key Research Highlights
            </h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className='bg-gray-300 rounded-md p-0.5'><Check className="h-4 w-4 flex-shrink-0 text-black" /></span>
                  <span className="text-sm text-gray-600 font-novaReg">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="group font-novaSemi inline-flex items-center gap-2 rounded-full bg-btn-gradient animate-gradient px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              VIEW MORE
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      <PlacementBanner />
      <IndustryPartnerSlider />
      <section className='relative h-screen'>
        <div className='absolute inset-0 bg-BG45 bg-center bg-cover bg-gray-600 bg-blend-multiply grayscale' />
        <div className='relative pt-20'>
          <h2 className='text-center text-4xl md:text-5xl text-white font-novaSemi'>Student Research Stories</h2>
        </div>
        <div className="relative w-full text-white">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '#slider-button-right',
              prevEl: '#slider-button-left',
            }}
            className="mySwiper"
          >
            {studentReviewsData?.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="my-6 text-center flex flex-col items-center mx-10 max-sm:mx-5">
                  <img className='w-16 mb-3' src="/image/quote.png" alt="Quote" />
                  <p className="max-w-4xl text-2xl font-novaReg max-md:text-xl">{review.quote}</p>
                  <div className="flex flex-col items-center mt-10">
                    <div className="mt-4 uppercase text-center">
                      <h4 className="font-bold">{review.name}</h4>
                      <small>{review.company}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <HighlightSlider />
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 gap-5 px-10 max-sm:px-2'>
        <div className='max-lg:col-span-2'>
          <HowToApply />
        </div>
        <div className='ml-auto max-w-xl py-12 max-lg:col-span-2 max-lg:ml-0 max-lg:pb-10 max-lg:max-w-full'>
          <h2 className='text-3xl max-w-xs max-lg:max-w-full'>Ready to Master Your Research Field?</h2>
          <p className='mt-5 font-novaReg max-w-2xl max-lg:max-w-full'>
            Stay Confident and Prepare to Contribute to Cutting-Edge Research. According to NASSCOM, India's research workforce in emerging technologies is expected to grow at 25% CAGR, creating over 200,000 research-oriented positions by 2025.
          </p>
          <button className="py-2 max-sm:px-6 max-sm:text-xs px-4 mt-5 text-sm rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">
            Apply Today <MoveRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default MtechCSDepartment