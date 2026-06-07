"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

function useInfiniteScroll(contentRef: React.RefObject<HTMLDivElement | null>, isPaused: boolean) {
  const rafRef = useRef<number>(0);
  const speed = 0.8;

  const animate = useCallback(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    const halfWidth = el.scrollWidth / 2;
    const current = parseFloat((el as any)._scrollX || 0);
    const next = current + speed;
    if (next >= halfWidth) {
      (el as any)._scrollX = 0;
      el.style.transform = 'translateX(0px)';
    } else {
      (el as any)._scrollX = next;
      el.style.transform = `translateX(-${next}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [contentRef]);

  useEffect(() => {
    if (!isPaused) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(rafRef.current);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused, animate]);
}

const testimonials = [
  { text: "We ordered white oak veneer panels for a hotel furniture project. The surface matching was much more consistent than our previous supplier, and the packaging arrived in good condition.", name: "Ahmad H.", initials: "AH", type: "Hotel Project Contractor", country: "UAE" },
  { text: "Tongli helped us choose the right substrate and veneer thickness before production. Their sample process saved us from making the wrong material choice.", name: "Daniel Lim", initials: "DL", type: "Furniture Factory Owner", country: "Singapore" },
  { text: "The engineered veneer was stable in color across different batches, which is very important for our door production. Communication was also clear during the order.", name: "Faisal A.", initials: "FA", type: "Door Manufacturer", country: "Saudi Arabia" },
  { text: "We needed veneer MDF panels with specific size and finish requirements. Tongli gave practical advice instead of just quoting a price, which made the cooperation easier.", name: "Michael Tan", initials: "MT", type: "Cabinet Factory Buyer", country: "Malaysia" },
  { text: "The veneer sheets were well packed and the grain selection matched our sample confirmation. We appreciated the detailed photos before shipment.", name: "Priya N.", initials: "PN", type: "Wood Material Importer", country: "India" },
  { text: "For our wall panel project, we needed a warm natural wood look and stable panel quality. The finished panels met the design requirement and were easy for our team to work with.", name: "Joseph P.", initials: "JP", type: "Interior Project Contractor", country: "Philippines" },
  { text: "We source both veneer panels and matching edge banding from Tongli. Having the surface and edge material from one supplier helps us keep the final product more consistent.", name: "Kelvin Wong", initials: "KW", type: "Cabinet & Wardrobe Manufacturer", country: "Hong Kong" },
  { text: "Their team understood our need for batch consistency. The engineered veneer panels were suitable for repeated production of furniture parts.", name: "Somchai K.", initials: "SK", type: "Furniture Components Factory", country: "Thailand" },
  { text: "The plywood core and veneer surface were both checked before loading. The shipment arrived with no major damage, which is important for long-distance orders.", name: "Omar R.", initials: "OR", type: "Building Material Distributor", country: "Qatar" },
  { text: "We requested several veneer samples before confirming the final walnut tone. Tongli was patient and helped us compare different options for our client.", name: "Elena M.", initials: "EM", type: "Interior Design Material Buyer", country: "Spain" },
  { text: "The melamine board samples and veneer panel samples were clearly labeled, making it easier for our sales team to show options to local customers.", name: "Hassan M.", initials: "HM", type: "Decorative Board Distributor", country: "Lebanon" },
  { text: "What impressed us was the clear explanation of substrate options. We finally chose MDF veneer panels for our cabinet production after comparing the options.", name: "Adrian Lee", initials: "AL", type: "Cabinet Manufacturer", country: "Indonesia" },
  { text: "We needed a supplier who could support custom size panels and stable packaging. Tongli handled both details well during our first trial order.", name: "Mark J.", initials: "MJ", type: "Wood Product Importer", country: "USA" },
  { text: "The natural veneer had a good appearance, and the color difference was within an acceptable range for our furniture project. The team communicated honestly about natural wood variation.", name: "Nabil S.", initials: "NS", type: "Furniture Manufacturer", country: "Kuwait" },
  { text: "We ordered veneer plywood for door skins. The panels were flat, the surface was clean, and the edge protection during shipping was better than expected.", name: "Ravi M.", initials: "RM", type: "Door Skin Manufacturer", country: "India" },
  { text: "Tongli provided clear production photos and packing photos before shipment. This gave us more confidence, especially as a first-time overseas buyer.", name: "George L.", initials: "GL", type: "Project Material Buyer", country: "Greece" },
  { text: "The 3D wood panels added a strong visual effect to our commercial interior project. The product looked close to the approved sample after delivery.", name: "Victor C.", initials: "VC", type: "Commercial Space Contractor", country: "Mexico" },
  { text: "We often need different wood veneer styles for local furniture clients. Tongli's veneer collection gives us more options to present to our customers.", name: "Amir Z.", initials: "AZ", type: "Veneer Distributor", country: "Israel" },
  { text: "The response time was fast, and the quotation was detailed. They asked about application, substrate, size and finish before recommending a solution.", name: "Chen W.", initials: "CW", type: "Whole-House Customization Factory", country: "Taiwan" },
  { text: "We have worked with many panel suppliers, but Tongli's advantage is that they understand both veneer appearance and panel production requirements.", name: "Lucas B.", initials: "LB", type: "Decorative Material Wholesaler", country: "Germany" },
];

// Auto-scroll hook for timeline
function useAutoScroll(containerRef: React.RefObject<HTMLDivElement>, isVisible: boolean) {
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const container = containerRef.current;
    let animationId: number;
    let scrollSpeed = 0.5;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    animationId = requestAnimationFrame(scroll);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, containerRef]);
}

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, isVisible: boolean = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let start = 0;
    const animate = () => {
      start += end / (duration / 16);
      if (start >= end) {
        setCount(end);
      } else {
        setCount(Math.floor(start));
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isVisible, end, duration]);

  return count;
}

// Auto-Scroll Timeline Component
function AutoScrollTimeline() {
  return (
    <div
      className="timeline-scroll flex overflow-x-auto pb-8 pt-4 scroll-smooth"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`
        @keyframes timelineScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .timeline-scroll:hover .timeline-inner {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className="timeline-inner flex gap-6 lg:gap-8 min-w-max"
        style={{
          animation: "timelineScroll 40s linear infinite",
        }}
      >
        {[...timelineEvents, ...timelineEvents].map((event, index) => (
          <div
            key={`${event.year}-${index}`}
            className="relative flex-shrink-0 w-[280px] lg:w-[320px]"
          >
            {/* Year Badge */}
            <div className="relative flex items-center gap-4 mb-6">
              {/* Year Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="group relative">
                  {/* Hover Glow */}
                  <div className="absolute -inset-2 bg-[#0F6B3A]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center font-black text-lg text-white shadow-xl transition-all duration-500 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #0F6B3A 0%, #124B34 100%)" }}>
                    {event.year}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              <div className="flex-1 h-0.5 bg-gradient-to-r from-[#0F6B3A]/30 to-transparent" />
            </div>

            {/* Content Card */}
            <div className="relative bg-ivory rounded-2xl p-6 border border-beige hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
              {/* Top Accent */}
              <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, #0F6B3A, #124B34)" }} />

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #0F6B3A 0%, #124B34 100%)" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Event Text */}
              <p className="text-charcoal leading-relaxed group-hover:text-[#0F6B3A] transition-colors duration-300">
                {event.event}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Stats section with scroll-triggered animation
function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    { value: 1999, label: "Established", suffix: "", highlight: "1999" },
    { value: 18, label: "Factory Area", suffix: ",000 ㎡", highlight: "18K" },
    { value: 150, label: "Skilled Workers", suffix: "+", highlight: "150+" },
    { value: 100, label: "Annual Capacity", suffix: ",000 m³+", highlight: "100K" },
    { value: 3.8, label: "Sheets Per Year", suffix: "M+", highlight: "3.8M" },
    { value: 2002, label: "Export Experience", suffix: "", highlight: "2002" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 overflow-hidden transition-all duration-500 ease-out hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: `${index * 80}ms`
          }}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4C8A68]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          
          {/* Large decorative number */}
          <div className="absolute -right-3 -top-3 text-5xl lg:text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none">
            {stat.highlight}
          </div>
          
          {/* Main content */}
          <div className="relative">
            {/* Animated number with gradient */}
            <div className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-white via-white to-[#4C8A68] bg-clip-text text-transparent">
                {stat.value < 100 ? (
                  <AnimatedNumber value={stat.value} isVisible={isVisible} />
                ) : (
                  <AnimatedCounter target={stat.value} isVisible={isVisible} />
                )}
              </span>
              <span className="text-base lg:text-lg text-white/70 ml-0.5">{stat.suffix}</span>
            </div>
            
            {/* Label with accent dot */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4C8A68] group-hover:scale-125 transition-transform duration-300" />
              <span className="text-xs lg:text-sm text-white/70 font-medium tracking-wide">
                {stat.label}
              </span>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4C8A68] via-[#4C8A68] to-[#0F6B3A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
        </div>
      ))}
    </div>
  );
}

// Enhanced Animated Stats Bar Component
function AnimatedStatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    { value: 1999, label: "Established", suffix: "", prefix: "" },
    { value: 18000, label: "Factory Area", suffix: "㎡", prefix: "" },
    { value: 150, label: "Skilled Workers", suffix: "+", prefix: "" },
    { value: 3800000, label: "Sheets Per Year", suffix: "", prefix: "" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="relative group"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
            transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1)`,
            transitionDelay: `${index * 100}ms`
          }}
        >
          {/* Card background */}
          <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4C8A68]/0 to-[#4C8A68]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            {/* Large background number */}
            <div className="absolute -right-4 -top-4 text-6xl lg:text-8xl font-bold text-white/[0.03] select-none">
              {stat.label.split(' ')[0]}
            </div>
            
            {/* Main content */}
            <div className="relative">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                {isVisible && <AnimatedNumberCounter target={stat.value} suffix={stat.suffix} index={index} />}
              </div>
              <div className="text-white/70 text-sm lg:text-base font-medium tracking-wide mb-3">
                {stat.label}
              </div>
              
              {/* Animated underline */}
              <div className="h-1 bg-gradient-to-r from-[#4C8A68] to-[#0F6B3A] rounded-full transform origin-left"
                   style={{ 
                     transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                     transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                     transitionDelay: `${index * 100 + 400}ms`
                   }} 
              />
            </div>
            
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4C8A68]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Animated Number Counter with decimal support
function AnimatedNumberCounter({ target, suffix, index }: { target: number; suffix: string; index: number }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2500;
          const startTime = performance.now();
          
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const value = target * eased;
            
            if (target >= 1000000) {
              setCount(Math.floor(value / 1000000 * 10) / 10);
            } else if (target >= 10000) {
              setCount(Math.floor(value / 1000));
            } else {
              setCount(Math.floor(value));
            }
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              if (target >= 1000000) {
                setCount(target / 1000000);
              } else if (target >= 10000) {
                setCount(target / 1000);
              } else {
                setCount(target);
              }
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const formatNumber = (num: number) => {
    if (target >= 1000000) {
      return `${num.toFixed(1)}M`;
    } else if (target >= 10000) {
      return `${num}K`;
    }
    return num.toLocaleString();
  };

  return (
    <span ref={ref}>
      {formatNumber(count)}{suffix}
    </span>
  );
}

// Animated counter for large numbers with smooth easing
function AnimatedCounter({ target, isVisible }: { target: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const startTime = performance.now();
      
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        
        setCount(Math.floor(target * easedProgress));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      
      requestAnimationFrame(animate);
    } else if (!isVisible) {
      hasAnimated.current = false;
      setCount(0);
    }
  }, [isVisible, target]);

  return <span>{count.toLocaleString()}</span>;
}

// Animated number component
function AnimatedNumber({ value, isVisible }: { value: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        start += increment;
        if (step >= steps) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    } else if (!isVisible) {
      hasAnimated.current = false;
      setCount(0);
    }
  }, [isVisible, value]);

  return <span>{count}</span>;
}

// Production capabilities
const productionSteps = [
  {
    step: "01",
    title: "Veneer Selection",
    description: "Color, grain, grade, and defect inspection of raw veneer sheets.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
  },
  {
    step: "02",
    title: "Substrate Preparation",
    description: "Plywood, MDF, Particleboard, Blockboard, or OSB based on requirements.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"
  },
  {
    step: "03",
    title: "Lamination",
    description: "Precision veneer pressing onto substrates with controlled temperature and pressure.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  },
  {
    step: "04",
    title: "Surface Treatment",
    description: "Sanding, brushing, UV coating for different finishing requirements.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
  },
  {
    step: "05",
    title: "Quality Inspection",
    description: "Surface, thickness, flatness, color consistency, and bonding checks.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    step: "06",
    title: "Packaging & Shipping",
    description: "Wood frame, bulk, or custom packaging for safe delivery worldwide.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  },
];

// Quality control stages
const qualityStages = [
  {
    stage: "Raw Materials",
    checks: "Veneer color, grain, grade, defects, substrate condition"
  },
  {
    stage: "Process Control",
    checks: "Glue spreading, pressing temperature, pressure, timing, bonding condition"
  },
  {
    stage: "Surface Quality",
    checks: "Flatness, sanding quality, color consistency, grain matching, surface defects"
  },
  {
    stage: "Dimensional Check",
    checks: "Thickness, size tolerance, edge condition, order specification match"
  },
  {
    stage: "Final Inspection",
    checks: "Overall appearance, packaging protection, label and shipment requirements"
  },
];

// Company values
const companyValues = [
  {
    title: "Quality First",
    description: "We focus on stable quality from material selection to production and packaging.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Practical Custom Support",
    description: "We help buyers choose suitable substrates, veneers, finishes and packaging based on real applications.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    title: "Responsible Material Use",
    description: "Wood veneer helps create decorative wood surfaces while improving the use efficiency of natural wood resources.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
  },
  {
    title: "Long-Term B2B Cooperation",
    description: "We support buyers with samples, stable supply and practical communication for repeated orders.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
];

// Timeline events
const timelineEvents = [
  { year: "1999", event: "Company officially established in Dongguan, starting our journey in wood panel manufacturing." },
  { year: "2001", event: "The \"Tongli\" trademark was officially approved by the state, building our brand identity." },
  { year: "2002", event: "Awarded \"Dongguan Houjie Enthusiastic Donation Unit\" and Gold Award at Hong Kong Expo." },
  { year: "2003", event: "Invested 25 million yuan to establish a branch factory in Shandong province." },
  { year: "2005", event: "Awarded the China Environmental Labeling Product Certificate, demonstrating our commitment to sustainability." },
  { year: "2007", event: "Invested 20 million yuan to build specialized production workshops for plywood and blockboard." },
  { year: "2010", event: "Established flagship store in Houjie and promoted the brand chain business model nationwide." },
  { year: "2014", event: "Added thick veneer workshop and won Guangdong Famous Brand and Chinese Famous Trademark honors." },
  { year: "2016", event: "National factory headquarters was set up with a comprehensive brand development strategy." },
  { year: "2017", event: "Invested 1.5 million USD to add UV coating production line, enhancing product value." },
  { year: "2019", event: "Opened showroom in Oriental Xingye City, upgrading our customized finished products service." },
  { year: "2020", event: "Transformed customer structure to channel customers: real estate decoration, door factories, high-end customization." },
  { year: "2023", event: "Adjusted competitive strategy: high quality, high efficiency, good services as core, enhanced competitive soft power." },
];

// Focus areas
const focusAreas = [
  {
    title: "Wood Veneer Panels",
    description: "Decorative panels made by laminating natural or engineered veneer onto plywood, MDF, particleboard, blockboard or OSB substrates.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
  },
  {
    title: "Natural Wood Veneer",
    description: "Natural wood veneer sheets in different species, grains and tones for furniture, doors and decorative surfaces.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  },
  {
    title: "Engineered Wood Veneer",
    description: "Consistent and repeatable veneer styles for large-scale production and design consistency.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
  },
  {
    title: "Custom Solutions",
    description: "Substrate, veneer, size, finish, matching and packaging options for different B2B applications.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  },
];

// Factory sections
const factorySections = [
  { title: "Factory Exterior", description: "Our production facility in Dongguan" },
  { title: "Veneer Storage", description: "Organized veneer inventory and selection area" },
  { title: "Lamination Line", description: "Precision veneer pressing equipment" },
  { title: "Sanding & Finishing", description: "Surface treatment and quality sanding" },
  { title: "Quality Inspection", description: "Detailed quality control checks" },
  { title: "Packaging & Warehouse", description: "Secure packaging and storage" },
];

export default function AboutPage() {
  const [heroVideoError, setHeroVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="bg-ivory">
      {/* Hero Banner with Video - Full Screen */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {heroVideoError && (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cta-wood-bg.png')" }}
          />
        )}

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/cta-wood-bg.png"
          className={`absolute inset-0 z-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
          onCanPlay={() => { setHeroVideoError(false); setVideoLoaded(true); }}
          onLoadedData={() => { setHeroVideoError(false); setVideoLoaded(true); }}
          onError={() => setHeroVideoError(true)}
        >
          <source src="/videos/about-banner.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 bg-black/10" />

        {/* Centered Logo and Brand Name */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            {/* Logo */}
            <div className="w-24 lg:w-32 xl:w-40 opacity-90">
              <Image 
                src="/images/tongli-hero-logo-v2.png"
                alt="Tongli Timber Logo"
                width={176}
                height={88}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            {/* Brand Name */}
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-[0.26em] text-white/90 drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
                TONGLI TIMBER
              </h1>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Who We Are - Company Introduction */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Wood Grain Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-wood-bg.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Light Overlay for Readability */}
        <div className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.96) 100%)"
          }}
        />

        <div className="relative z-20 container mx-auto px-6">
          {/* Section Header - Match other pages format */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-charcoal mb-4">Who We Are</h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Professional manufacturer of high-quality wood panels since 1999
            </p>
          </div>
          
          {/* Content Grid - Enlarged */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Left - Company Introduction */}
            <div className="relative order-2 lg:order-1">
              <div className="space-y-10">
                <div className="relative pl-10 border-l-2 border-[#0F6B3A]/30">
                  <span className="absolute left-0 -translate-x-1/2 -top-1 w-10 h-10 bg-[#0F6B3A] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">01</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-4">
                    Founded in 1999
                  </h3>
                  <p className="text-[#6b7280] text-lg leading-relaxed">
                    Dongguan Tongli Timber Products Co., Ltd. is a professional manufacturer of high-quality <span className="text-[#0F6B3A] font-semibold">prefinished and unfinished veneer panels, fancy plywood, wood veneer, melamine boards, and 3D wood panels</span>.
                  </p>
                </div>

                <div className="relative pl-10 border-l-2 border-[#0F6B3A]/30">
                  <span className="absolute left-0 -translate-x-1/2 -top-1 w-10 h-10 bg-[#0F6B3A] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">02</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-4">
                    Scale & Capacity
                  </h3>
                  <p className="text-[#6b7280] text-lg leading-relaxed">
                    With <span className="text-[#0F6B3A] font-semibold">150+ employees</span>, an <span className="text-[#0F6B3A] font-semibold">18,000+ m² factory</span>, and annual output of <span className="text-[#0F6B3A] font-semibold">3.8 million+ sheets</span> of fancy plywood, we provide stable and customized wood solutions for furniture, doors, wall panels, cabinets, and hotel projects worldwide.
                  </p>
                </div>

                <div className="relative pl-10 border-l-2 border-[#0F6B3A]/30">
                  <span className="absolute left-0 -translate-x-1/2 -top-1 w-10 h-10 bg-[#0F6B3A] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">03</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-4">
                    Global Standards
                  </h3>
                  <p className="text-[#6b7280] text-lg leading-relaxed">
                    Products supported by <span className="text-[#0F6B3A] font-semibold">CE, FSC, EPA, CARB, GMC, and SGS</span> certifications. Serving customers in <span className="text-[#0F6B3A] font-semibold">Southeast Asia, the Middle East, North America</span>, and other global markets, with long-term cooperation with <span className="text-[#0F6B3A] font-semibold">50+ brands and partners</span> worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Company Video - Enlarged */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                {/* Video Container */}
                <div className="relative aspect-[4/3] lg:aspect-[16/10]">
                  <video
                    poster="/images/about-video-poster.png"
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/company-intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Clean & Smooth */}
      <section className="relative bg-gradient-to-r from-[#0F4B34] via-[#0F6B3A] to-[#124B34] overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-[#4C8A68]/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative container mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '1999', label: 'Established', sublabel: 'Since' },
              { value: '18K', label: 'Factory Area', sublabel: 'Square Meters' },
              { value: '150+', label: 'Skilled Workers', sublabel: 'Team Members' },
              { value: '3.8M+', label: 'Annual Output', sublabel: 'Sheets Per Year' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group"
                style={{
                  animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`
                }}
              >
                <p className="text-white/50 text-xs lg:text-sm uppercase tracking-widest mb-2">{stat.sublabel}</p>
                <p className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm lg:text-base font-medium">{stat.label}</p>
                <div className="w-8 h-0.5 bg-[#4C8A68] mx-auto mt-3 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Factory Tour - VR Showroom + Photos */}
      <section className="section-spacing bg-white">
        <div className="w-full">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
              Our Facilities
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-charcoal mb-4">Factory Tour</h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Explore our manufacturing facility with 360° VR tour and real production shots
            </p>
          </div>

          {/* VR Showroom - Full Width, Double Height */}
          <div className="mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl mx-4 lg:mx-8 xl:mx-12">
              {/* VR Showroom iframe */}
              <iframe
                src="https://preview-lyj.aliyuncs.com/preview/58338431d46a4b4d87e68145ae99f8ba?lang=en"
                className="w-full h-[900px] lg:h-[1000px]"
                allowFullScreen
                loading="lazy"
                title="360° VR Factory Tour"
              />
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg z-10">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-charcoal text-sm">360° VR Tour</p>
                  <p className="text-xs text-muted">Click & drag to explore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Factory Photos - Horizontal Scroll, 20% Larger */}
          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Scrollable Container */}
            <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
              {[
                { src: "/factory_real_shots/Veneer Slicing.jpg", label: "Veneer Slicing" },
                { src: "/factory_real_shots/Veneer Cutting.jpg", label: "Veneer Cutting" },
                { src: "/factory_real_shots/Manual Veneer Splicing.jpg", label: "Manual Splicing" },
                { src: "/factory_real_shots/Machine Veneer Splicing.jpg", label: "Machine Splicing" },
                { src: "/factory_real_shots/Veneer Lamination.jpg", label: "Lamination" },
                { src: "/factory_real_shots/Hot Pressing.jpg", label: "Hot Pressing" },
                { src: "/factory_real_shots/Cold Pressing 2.jpg", label: "Cold Pressing" },
                { src: "/factory_real_shots/Sanding.jpg", label: "Sanding" },
                { src: "/factory_real_shots/Brushing.jpg", label: "Brushing" },
                { src: "/factory_real_shots/UV Painting Workshop.jpg", label: "UV Painting" },
                { src: "/factory_real_shots/Substrate Inspection.jpg", label: "Quality Check" },
                { src: "/factory_real_shots/Finished Product Inspection.jpg", label: "Final Inspection" },
              ].map((img, i) => (
                <div key={i} className="relative flex-shrink-0 w-[420px] h-[300px] rounded-xl overflow-hidden shadow-xl group cursor-pointer">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-lg">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="container-page text-center mt-8">
            <a
              href="https://preview-lyj.aliyuncs.com/preview/58338431d46a4b4d87e68145ae99f8ba?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              View Full VR Tour
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section - Certifications + Testimonials */}
      <section className="section-spacing bg-white">
      <div className="container-page">
          
          {/* Part 1: Certifications */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
                Verified Standards
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-charcoal mb-4">Certifications & Trust</h2>
              <p className="text-muted max-w-2xl mx-auto text-lg">
                Trusted by global partners with internationally recognized certifications
              </p>
            </div>

            {/* Certificate Video - Auto loop like GIF */}
            <div className="flex justify-center">
              <video
                className="w-full max-w-[75vw] rounded-2xl overflow-hidden shadow-2xl"
                src="/videos/about_certificate.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-16">
            <div className="flex-1 h-px bg-beige" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="flex-1 h-px bg-beige" />
          </div>
          </div>

          {/* Part 2: Customer Testimonials */}
          <div>
        <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
                Client Feedback
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-charcoal mb-4">What Our Partners Say</h2>
              <p className="text-muted max-w-2xl mx-auto text-lg">
                Trusted by furniture manufacturers and distributors worldwide
              </p>
            </div>

            {/* Auto-scrolling Testimonials */}
            {(() => {
              const trackRef = useRef<HTMLDivElement>(null);
              const [isPaused, setIsPaused] = useState(false);
              useInfiniteScroll(trackRef, isPaused);
              return (
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Fade masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling track — duplicated for seamless loop */}
                <div ref={trackRef} className="flex w-max">
                  {[...testimonials, ...testimonials].map((t, i) => {
                    const colors = [
                      ['from-[#0F6B3A]', 'to-[#124B34]'],
                      ['from-[#8B5E3C]', 'to-[#6B4423]'],
                      ['from-[#2C5F2D]', 'to-[#1A3D1B]'],
                      ['from-[#FF6B35]', 'to-[#C94B1D]'],
                      ['from-[#4A6741]', 'to-[#2D4A28]'],
                      ['from-[#6B7280]', 'to-[#4B5563]'],
                      ['from-[#0F6B3A]', 'to-[#8B5E3C]'],
                      ['from-[#124B34]', 'to-[#2C5F2D]'],
                    ];
                    const [from, to] = colors[i % colors.length];
                    return (
                    <div key={i} className="flex-shrink-0 w-[380px] bg-gradient-to-br from-ivory to-white rounded-2xl p-8 shadow-lg border border-beige mx-3">
                      {/* Quote Icon */}
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, si) => (
                          <svg key={si} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      {/* Quote */}
                      <p className="text-charcoal text-base leading-relaxed mb-6">"{t.text}"</p>
                      {/* Author */}
                      <div className="flex items-end gap-4">
                        <div className={`w-12 h-12 flex-shrink-0 bg-gradient-to-br ${from} ${to} rounded-full flex items-center justify-center text-white font-bold text-base leading-none`}>
                          {t.initials}
                        </div>
                        <div className="pb-1 min-w-0">
                          <p className="font-bold text-charcoal text-sm truncate">{t.name}</p>
                          <p className="text-xs text-muted leading-snug">{t.type} — {t.country}</p>
                        </div>
                      </div>
                    </div>
                  );
                  })}
                </div>
              </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Development Timeline - Horizontal Scroll with Auto-Scroll */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="timelineBg" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1.5" fill="#0F6B3A" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#timelineBg)" />
          </svg>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 px-6">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
            Our Legacy
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-charcoal mb-4">
            Our Journey
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Building expertise and trust since 1999
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative px-4 lg:px-8 xl:px-16">
          {/* Horizontal Line */}
          <div className="absolute top-[120px] left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#0F6B3A]/20 to-transparent" />
          
          {/* Timeline Container - Auto-Scroll */}
          <AutoScrollTimeline />
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 px-8 lg:px-16 xl:px-24 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-black mb-2" style={{ color: "#0F6B3A" }}>25+</div>
            <div className="text-sm text-muted uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center border-x border-beige">
            <div className="text-4xl lg:text-5xl font-black mb-2" style={{ color: "#0F6B3A" }}>50+</div>
            <div className="text-sm text-muted uppercase tracking-wider">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-black mb-2" style={{ color: "#0F6B3A" }}>1000+</div>
            <div className="text-sm text-muted uppercase tracking-wider">Happy Clients</div>
          </div>
        </div>
      </section>

      {/* Company Values - Image Card Design */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-ivory">
        
        {/* Background Decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0F6B3A]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0F6B3A]/5 rounded-full blur-3xl" />
        </div>

        {/* Section Header */}
        <div className="relative text-center mb-16 px-6">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
            What We Stand For
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-charcoal mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            The principles that guide every decision and partnership
          </p>
        </div>

        {/* Values Grid - Image Cards */}
        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Value 1 - Quality First */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2" style={{ minHeight: '320px' }}>
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop"
                alt="Quality Control"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, #0F6B3A, #124B34)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0F6B3A 0%, #124B34 100%)" }}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{companyValues[0].title}</h3>
                </div>
                <p className="text-white/80 text-base leading-relaxed">
                  {companyValues[0].description}
                </p>
              </div>
            </div>

            {/* Value 2 - Custom Support */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2" style={{ minHeight: '320px' }}>
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                alt="Custom Support"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, #0F6B3A, #124B34)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0F6B3A 0%, #124B34 100%)" }}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{companyValues[1].title}</h3>
                </div>
                <p className="text-white/80 text-base leading-relaxed">
                  {companyValues[1].description}
                </p>
              </div>
            </div>

            {/* Value 3 - Material Use */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2" style={{ minHeight: '320px' }}>
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop"
                alt="Sustainable Materials"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, #0F6B3A, #124B34)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0F6B3A 0%, #124B34 100%)" }}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{companyValues[2].title}</h3>
                </div>
                <p className="text-white/80 text-base leading-relaxed">
                  {companyValues[2].description}
                </p>
              </div>
            </div>

            {/* Value 4 - B2B Cooperation */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2" style={{ minHeight: '320px' }}>
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Team Collaboration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, #0F6B3A, #124B34)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0F6B3A 0%, #124B34 100%)" }}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{companyValues[3].title}</h3>
                </div>
                <p className="text-white/80 text-base leading-relaxed">
                  {companyValues[3].description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA - Premium Design with Image Background */}
      <section className="relative overflow-hidden" style={{ minHeight: '600px' }}>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta-forest-bg.png"
            alt="Forest background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15, 107, 58, 0.85) 0%, rgba(18, 75, 52, 0.9) 50%, rgba(10, 61, 40, 0.95) 100%)" }} />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-12 text-center py-24 lg:py-32">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Ready to Partner?</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
            Let's Build Something
            <span className="block mt-2 text-white/90">
              Extraordinary Together
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Tell us your product type, application, substrate, veneer species, size, finish and quantity. 
            <br className="hidden md:block" />
            <span className="text-white font-medium">Tongli</span> will help you find the perfect material solution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
            <Link href="/contact" className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-full text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <span className="absolute inset-0 bg-white rounded-full" />
              <span className="absolute inset-[2px] rounded-full bg-[#0F6B3A]" />
              <span className="relative flex items-center gap-3 text-white">
                Start Your Project
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            
            <Link href="/products" className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-full border-2 border-white/30 text-white overflow-hidden transition-all duration-500 hover:border-white hover:bg-white/10">
              <span className="text-white">View Products</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "Quality Certified" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Fast Response" },
              { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "25+ Years Experience" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 text-white/70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                </svg>
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
