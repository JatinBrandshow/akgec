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


const ITDepartment = () => {
  const features = [
    "Triple-Level Certification Program in IT Specializations",
    "15-hour Online/Blended Course with one credit for each level, aligned with IT industry standards",
    "Advance earning opportunity for students with 3 credits in IT domains",
    "Skill development aligned with NEP guidelines for IT professionals",
    "Immersive learning experience to cultivate IT-ready skills",
    "Live, instructor-led sessions with hands-on learning from IT expert faculty",
  ];

  const recruiters = [
    { name: "Amazon", column: 1 },
    { name: "Uber", column: 1 },
    { name: "IBM", column: 1 },
    { name: "Accenture", column: 1 },
    { name: "Infosys", column: 1 },
    { name: "Adobe", column: 2 },
    { name: "Walmart", column: 2 },
    { name: "CISCO", column: 2 },
    { name: "Cognizant", column: 2 },
    { name: "Wipro", column: 2 },
    { name: "TCS", column: 3 },
    { name: "Capgemini", column: 3 },
    { name: "Dell", column: 3 },
    { name: "Intel", column: 3 },
    { name: "Microsoft", column: 3 },
  ]

  const services = [
    {
      title: "Study Abroad",
      icon: GraduationCap,
      href: "/study-abroad",
    },
    {
      title: "Program Exchange",
      icon: BookOpen,
      href: "/program-exchange",
    },
    {
      title: "Education Loan",
      icon: PiggyBank,
      href: "/education-loan",
    },
    {
      title: "Scholarship",
      icon: Award,
      href: "/scholarship",
    },
    {
      title: "Apply Now",
      icon: Send,
      href: "/apply",
    }
  ]

  const placements = [
    {
      logo: "/image/company-logos/UBER.png",
      number: "38.44",
      company: "UBER",
      isRed: false
    },
    {
      logo: "/image/company-logos/nxtpeLogo.png",
      number: "42.75",
      company: "NXTPE",
      isRed: true
    },
    {
      logo: "/image/company-logos/CommvaultLogo.png",
      number: "34",
      company: "Commvault Systems",
      isRed: false
    },
    {
      logo: "/image/company-logos/walmart.jpg",
      number: "19.48",
      company: "Walmart",
      isRed: true
    },
    {
      logo: "/image/company-logos/CISCO.png",
      number: "24.73",
      company: "CISCO",
      isRed: false
    },
    {
      logo: "/image/company-logos/tanx-long-light.png",
      number: "55.50",
      company: "TANX.FI",
      isRed: true
    }
  ]

  const BreadCrumb = [
    {
      name: "Department of Information Technology",
      Link: "/department-of-information-technology",
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
            <span className='text-xl sm:text-2xl max-sm:text-center font-novaReg'>Bachelor of Engineering</span>
            <h2 className='font-novaReg max-md:text-center text-3xl sm:text-4xl'>Information Technology</h2>
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
              <h2 className="text-3xl font-novaReg">Information Technology</h2>
              <p className="my-5 tracking-tight font-novaReg text-start leading-5">
                The Department of Information Technology at AKGU was established in 2005 to meet the growing demand for IT professionals in the digital era. Our department provides an outstanding research environment complemented by excellence in teaching cutting-edge IT concepts.
              </p>
              <p className="leading-5 text-start font-novaReg">
                Since its inception, the department has been a pioneering academic center for higher education, research, and innovation in key areas of Information Technology. We offer specialized programs in cloud computing, data science, cybersecurity, and IoT. The department provides full support to M.Tech. scholars with dissertation guidance, advanced lab facilities, and access to international journals. Our faculty and students regularly publish research papers in peer-reviewed journals and present at international conferences.
              </p>
            </div>
            <div>
              <h2 className='font-novaReg text-2xl'>Scope</h2>
              <p className='mt-2 font-novaReg'>According to NASSCOM, India's IT industry is projected to reach $350 billion by 2025, creating over 1 million new jobs annually. The demand for IT professionals with expertise in emerging technologies like AI, blockchain, and cloud computing is growing exponentially across all sectors.</p>
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
      {/* Section 1: Information Technology */}
      <section className="relative h-[40vh] xl:h-[50vh] bg-cover flex flex-col justify-between lg:p-10">
        <div className="absolute inset-0 bg-BG42 bg-cover bg-fixed grayscale">
          <div className="absolute inset-0 bg-gray-800 bg-opacity-90" />
        </div>
        <div className="relative max-w-4xl w-full mx-auto text-white text-center flex max-md:flex-col max-md:gap-5 items-center justify-between px-4 py-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-novaBold max-w-lg leading-6 sm:leading-7">
              INFORMATION TECHNOLOGY
            </h2>
            <span className="text-lg sm:text-xl md:text-2xl font-novaReg">
              Program Ranked Amongst
            </span>
            <h1 className="text-2xl sm:text-4xl xl:text-6xl text-yellow-500 font-novaBold">
              TOP IT PROGRAMS
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
                <span className="text-gray-600">Cutting-edge curriculum with focus on emerging IT trends</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Hands-on experience with latest IT tools and technologies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Strong industry-academia collaboration with IT leaders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Excellent placement record in top IT companies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Project-based learning with real-world IT solutions</span>
              </li>
            </ul>
            <button className="py-2 max-sm:py-1.5 max-sm:px-4 max-sm:text-xs px-5 mt-5 text-[15px] rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max  hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">
              VIEW MORE <MoveRight className='w-5 h-5' />
            </button>
          </div>

          {/* Exclusive Labs Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg h-fit">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-10 h-10 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
              </svg>
              <h2 className="text-2xl font-novaSemi text-black">Advanced IT Labs</h2>
            </div>
            <ul className="space-y-2 font-novaReg">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Cloud Computing & Big Data Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Cybersecurity & Ethical Hacking Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">AI & Machine Learning Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">IoT & Embedded Systems Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Blockchain Technology Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                <span className="text-gray-600">Software Development Center</span>
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
                'IT Innovations', 'Research Publications', 'Tech Workshops', 'Industry Expert Lectures',
                'Hackathons', 'Incubation Center', 'Coding Competitions', 'Updated Syllabus',
                'Program Outcomes', 'Faculty Directory', 'Best IT Practices'
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
              AKG University B.Tech IT Admission Eligibility & Fees
            </h1>
            <p className="text-gray-800 font-novaReg">
              Applicants must have completed 10+2 with Physics, Mathematics, and one additional subject such as Chemistry/Computer Science, securing at least 60% aggregate marks. Students with Computer Science background in 10+2 will be given preference.
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
                    <td className="py-3 px-4 text-gray-700">110000/- INR</td>
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
                    <td className="py-3 px-4 text-gray-700">Examination Fee</td>
                    <td className="py-3 px-4 text-gray-700">3500/- INR</td>
                  </tr>
                  <tr className="border-b font-novaReg">
                    <td className="py-3 px-4 text-gray-700">Security</td>
                    <td className="py-3 px-4 text-gray-700">3000/- INR</td>
                  </tr>
                  <tr className="border-b font-novaReg">
                    <td className="py-3 px-4 text-gray-700">Tech Kit Fee</td>
                    <td className="py-3 px-4 text-gray-700">5000/- INR (One-time)</td>
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
          Unprecedented Placement Achievements
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
            Career Opportunities After
            <br />
            Information Technology
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Careers Section */}
            <div>
              <h2 className="text-2xl font-novaReg text-white mb-4">Career Prospects</h2>
              <p className="text-white font-novaReg leading-relaxed">
                The IT industry offers diverse career paths for graduates. Beyond traditional software development roles, IT professionals can explore careers in cloud architecture, cybersecurity, data science, and IT consulting. The digital transformation across industries has created demand for IT specialists in healthcare IT, fintech, e-commerce, and smart city projects. With the right specialization, IT graduates can command premium salaries and rapid career growth.
              </p>
            </div>
            {/* Top Recruiters Section */}
            <div>
              <h2 className="text-2xl font-novaReg text-white mb-4">Leading Employers</h2>
              <p className="text-white font-novaReg mb-4">
                Our IT graduates are placed in top companies including:
              </p>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-2">
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
                src="/image/building/building5.webp"
                alt="Advanced Credit Programs"
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
              IT Certification Programs
            </h1>
            <p className="text-gray-600 font-novaReg">
              AKG University offers advanced IT certification programs that include career-focused specializations in Cloud Computing, Cybersecurity, Data Science, AI/ML, and Blockchain, adhering to the National Education Policy.
            </p>
            <p className="text-gray-600 font-novaReg">
              These programs equip students with cutting-edge IT skills, providing them with an excellent platform to excel in the digital economy. It's an opportunity for tech-savvy students to gain expertise in high-demand IT domains through practical, industry-aligned training.
            </p>
          </div>
          {/* Features Section */}
          <div className="space-y-6 bg-gray-50 p-6 lg:col-span-4">
            <h2 className="text-xl font-novaSemi text-gray-900">
              Key Highlights
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
          <h2 className='text-center text-4xl md:text-5xl text-white font-novaSemi'>Student Stories</h2>
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
          <h2 className='text-3xl max-w-xs max-lg:max-w-full'>Ready to Master Information Technology?</h2>
          <p className='mt-5 font-novaReg max-w-2xl max-lg:max-w-full'>
            According to NASSCOM, India will need over 1.5 million digitally skilled professionals by 2025. The IT sector is projected to grow at 8-9% annually, offering excellent career prospects for skilled professionals. Start your journey to become an IT expert today.
          </p>
          <button className="py-2 max-sm:px-6 max-sm:text-xs px-4 mt-5 text-sm rounded-lg font-novaBold uppercase bg-btn-gradient animate-gradient text-white w-max hover:bg-[#3c5686] hover:border-b-4 hover:border-[#beb6ff] hover:transform scale-y-105 tracking-widest flex items-center gap-1">
            Apply Today <MoveRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ITDepartment