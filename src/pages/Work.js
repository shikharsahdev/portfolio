import { useState, useEffect } from 'react';

function Work() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle modal open/close
  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
    // Delay clearing selected experience for smooth animation
    setTimeout(() => setSelectedExperience(null), 300);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const keyExperiences = [
    {
      logo: '/gc.svg',
      heading: 'Goldcast',
      subheading: 'Founding Engineer & Product-Focused Engineer',
      brief: 'Joined as the second employee at a pre-product startup and built the entire events platform from scratch, scaling it to *$15M ARR*. Led product direction, frontend architecture, and WebRTC infrastructure.',
      text: 'Joined pre-product and built Goldcast\'s Events Platform, scaling it from concept to *$15M ARR* — now Goldcast\'s primary revenue engine. Owned frontend architecture, product direction, and *WebRTC-based audio/video infrastructure* enabling reliable real-time streaming in enterprise networks. Over the past two years, transitioned into a broader leadership role, guiding multiple teams, mentoring engineers, and shaping architecture and product strategy across business lines.',
      detailedText: 'As the second employee at Goldcast, I designed and built the entire events platform from UX to implementation. The platform now serves as the company\'s primary revenue engine, generating $15M ARR. I architected real-time AV systems supporting thousands of concurrent attendees using WebRTC technology, solving complex enterprise network challenges. I designed a completely customizable theming architecture that no competitor offered, allowing organizers to match their brand identity. I built hybrid event solutions enabling both virtual and in-person attendees, and created digital check-in systems with authenticators and codes. Recently, I spearheaded AI initiatives including a transcript-aware AI Video Editor and Generative Page Builder Agent, and launched Recording Studio extending the platform to asynchronous video creation.',
      highlights: [
        'Architected real-time AV systems supporting thousands of concurrent attendees using WebRTC',
        'Designed frontend theming architecture enabling full event-brand customization (unique competitive advantage)',
        'Built hybrid event solutions supporting both virtual and in-person attendees',
        'Created digital check-in systems with authenticators and codes (no competitor offered this)',
        'Led AI initiatives: Transcript-aware AI Video Editor and Generative Page Builder Agent',
        'Launched Recording Studio, extending platform to asynchronous video creation',
        'Mentored engineers and shaped architecture across multiple product teams'
      ],
      technicalChallenges: [
        'Solved enterprise network AV streaming challenges with Agora SDK and cloud proxy solutions',
        'Built scalable theming system allowing complete UI customization without performance impact',
        'Architected hybrid event infrastructure supporting seamless virtual-physical attendee interaction',
        'Developed AI video editing pipeline with transcript analysis and automated editing decisions'
      ],
      dates: 'Aug 2020 – Present',
      category: 'Current Role',
      impact: '$15M ARR',
      color: 'blue'
    },
    {
      logo: '/shipsy.webp',
      heading: 'Shipsy',
      subheading: 'Full-Stack Developer (Product Ownership & Market Expansion)',
      brief: 'Became star performer handling critical projects for major clients like DTDC. Built pricing modules, returns systems, and last-mile tracking solutions that unlocked pan-India contracts.',
      text: 'Drove key initiatives expanding Shipsy\'s international footprint and product scalability. Built a new logistics platform for the Middle East with *RTL/LTR support* — enabling regional expansion and establishing a major business hub.',
      detailedText: 'At Shipsy, I became the star performer within months and was trusted with critical projects for major clients. I handled pricing modules for DTDC, one of India\'s biggest logistics players, and built complex returns systems that the company didn\'t support before. I created a generic last-mile tracking solution that unlocked Domino\'s pan-India contract and could scale to other clients like McDonald\'s, Swiggy, and Zomato. During COVID, I built contactless delivery workflows and created RTL/LTR compatible solutions for Middle East expansion, establishing Shipsy\'s presence in that region.',
      highlights: [
        'Became star performer handling pricing modules for DTDC (India\'s biggest logistics player)',
        'Built complex returns and settlements system from scratch (company didn\'t support this before)',
        'Created generic last-mile tracking solution unlocking Domino\'s pan-India contract',
        'Built RTL/LTR compatible platform for Middle East expansion',
        'Developed contactless delivery workflows during COVID-19',
        'Scalable solution architecture for McDonald\'s, Swiggy, Zomato integration'
      ],
      technicalChallenges: [
        'Built complex returns system handling payments, settlements, and order lifecycle',
        'Created generic tracking solution with customizable UI for multiple client types',
        'Developed RTL/LTR support for international market expansion',
        'Architected contactless delivery workflows for COVID-19 safety compliance'
      ],
      dates: 'Oct 2019 – Aug 2020',
      category: 'Growth Phase',
      impact: 'Pan-India Expansion',
      color: 'green'
    },
    {
      logo: 'aiimsxicmr.webp',
      heading: 'ICMR & AITSC',
      subheading: 'Software Engineer (Research Collaboration)',
      brief: 'Solely built digital trauma-patient enrollment systems for 5 government hospitals across India, transitioning them from pen-and-paper to digital systems.',
      text: 'Developed *digital trauma-patient enrollment systems* across 5 hospitals with ICMR & AIIMS, accelerating trauma response and laying the foundation for India\'s digital health systems.',
      detailedText: 'I solely built the digital trauma-patient enrollment system, transitioning government hospitals from pen-and-paper to digital systems. I was given physical servers at their location, connected them to the internet, and made the system accessible to government hospitals. I personally visited and ramped up users at 5 different government hospitals across India with high trauma patient volumes. This project was highly successful and set the path for Indian hospitals, especially government hospitals, to follow digital enrollment practices.',
      highlights: [
        'Solely built digital trauma-patient enrollment system from scratch',
        'Deployed physical servers and connected them to internet infrastructure',
        'Personally visited and ramped up users at 5 government hospitals across India',
        'Transitioned hospitals from pen-and-paper to digital enrollment systems',
        'Set foundation for India\'s digital health systems adoption'
      ],
      technicalChallenges: [
        'Built secure patient enrollment system for government hospital networks',
        'Deployed and configured physical server infrastructure',
        'Created user-friendly interface for hospital staff with varying technical skills',
        'Ensured data security and compliance with medical data regulations'
      ],
      dates: '2016 – 2018',
      category: 'Impact Work',
      impact: '5 Hospitals',
      color: 'purple'
    },
    {
      logo: 'samsung.svg',
      heading: 'Samsung R&D',
      subheading: 'Software Engineer, Security Systems',
      brief: 'Built bootloader and data security modules across Samsung chipsets, contributing to ML-based privacy tools and 5G configuration systems.',
      text: 'Built bootloader and data security modules across Samsung chipsets, contributing to *ML-based privacy tools* and 5G configuration systems.',
      detailedText: 'At Samsung R&D, I built bootloader and data security modules across Samsung chipsets, contributing to ML-based privacy tools and 5G configuration systems. While the work was technically solid, I realized the corporate environment wasn\'t where I felt most alive. The work felt monotonous, and I yearned for more significant impact and creative freedom. This experience taught me valuable lessons about finding a path that aligns with my passion and values.',
      highlights: [
        'Built bootloader and data security modules across Samsung chipsets',
        'Contributed to ML-based privacy tools and 5G configuration systems',
        'Enhanced security infrastructure for Samsung\'s chipset ecosystem',
        'Gained experience in enterprise-level security implementations'
      ],
      technicalChallenges: [
        'Developed secure bootloader systems for Samsung chipset architecture',
        'Built ML-based privacy tools for data protection',
        'Implemented 5G configuration systems for network optimization',
        'Ensured security compliance across multiple chipset variants'
      ],
      dates: '2018 – 2019',
      category: 'Corporate',
      impact: 'Enterprise Scale',
      color: 'orange'
    }
  ];
  // return (
  //   <div>
  //     hello
  //   </div>
  // );
  // Remove individual color theming - use consistent design

  return (
      <section className='max-w-7xl mx-auto px-6 py-24'>
        <div className='space-y-20'>
          {/* Header Section */}
          <div className='text-center space-y-8 max-w-4xl mx-auto'>
            <h2 className='text-5xl md:text-6xl lg:text-7xl font-light text-[--text-primary] tracking-tight leading-tight'>
              My Journey in 
              <span className="gradient-text block">
                Product Engineering
              </span>
            </h2>
            <p className='text-xl md:text-2xl text-[--text-secondary] leading-relaxed font-light max-w-3xl mx-auto'>
              I've been building products since school — what began as curiosity turned into a deep passion for creating meaningful, scalable experiences.
            </p>
          </div>

          {/* Work Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {keyExperiences.map((experience, index) => (
              <div 
                key={index} 
                className="group hover:opacity-80 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(experience)}
              >
                {/* Minimal Card Design */}
                <div className='space-y-6'>
                  {/* Header */}
                  <div className='flex items-start justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 flex items-center justify-center bg-white rounded-xl flex-shrink-0'>
                        <img 
                          src={experience.logo} 
                          alt={`${experience.heading} Logo`} 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className='text-2xl font-medium text-[--text-primary] tracking-tight'>{experience.heading}</h3>
                        <p className='text-sm text-[--text-tertiary]'>{experience.dates}</p>
                      </div>
                    </div>
                    <div className='text-right'>
                      <div className='text-sm font-medium text-[--accent-primary]'>{experience.impact}</div>
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <h4 className='text-lg font-medium text-[--text-primary] mb-3'>{experience.subheading}</h4>
                    <p className='text-[--text-secondary] leading-relaxed'>
                      {experience.brief.split('*').map((text, textIndex) => (
                        <span key={textIndex} className={textIndex % 2 === 1 ? 'font-medium text-[--accent-primary]' : ''}>{text}</span>
                      ))}
                    </p>
                  </div>

                  {/* Learn More */}
                  <div className='flex items-center gap-2 text-[--accent-primary] font-medium'>
                    <span className='text-sm'>Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
        {/* Background & Journey Section */}
        <div className="mt-32">
          <div className='text-center space-y-8 max-w-4xl mx-auto mb-20'>
            <h2 className='text-4xl md:text-5xl font-light text-[--text-primary] tracking-tight leading-tight'>
              My Background & <span className="gradient-text">Journey</span>
            </h2>
            <p className='text-xl text-[--text-secondary] leading-relaxed'>
              From discovering Photoshop at 12 to building products that impact millions — here's how curiosity became a career in product engineering.
            </p>
          </div>
          
          {/* Story Flow */}
          <div className="max-w-5xl mx-auto space-y-20">
            {/* Early Beginnings */}
            <div className="relative">
              <div className="flex items-start gap-8">
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[--accent-primary]/20 to-[--accent-purple]/20 rounded-2xl items-center justify-center">
                  <svg className="w-8 h-8 text-[--accent-primary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className='text-2xl font-medium text-[--text-primary]'>The Spark of Creation</h3>
                    <span className="text-sm text-[--text-tertiary]">2008-2014</span>
                  </div>
                  <p className='text-lg text-[--text-secondary] leading-relaxed'>
                    At 12-13 years old, I discovered Photoshop and web development. What started as curiosity became a lifelong passion for building things that people love and that solve real problems.
                  </p>
                  
                  {/* Key Projects with Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="group hover:opacity-80 transition-all duration-300">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[--accent-primary] rounded-full"></div>
                          <h4 className="text-lg font-medium text-[--text-primary]">CrowdAlert</h4>
                          <span className="text-xs text-[--accent-primary] font-medium bg-[--accent-primary]/10 px-2 py-1 rounded-full">Hackathon Winner</span>
                        </div>
                        <p className="text-[--text-secondary] leading-relaxed">
                          A beacon-based solution to visualize metro coach occupancy before trains arrive. We solved a real problem that Delhi Metro Corporation now implements differently.
                        </p>
                      </div>
                    </div>

                    <div className="group hover:opacity-80 transition-all duration-300">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[--accent-primary] rounded-full"></div>
                          <h4 className="text-lg font-medium text-[--text-primary]">Aasha</h4>
                          <span className="text-xs text-[--accent-primary] font-medium bg-[--accent-primary]/10 px-2 py-1 rounded-full">Blood Donation</span>
                        </div>
                        <p className="text-[--text-secondary] leading-relaxed">
                          An app connecting blood donors and recipients. As first and second-year college students, we built a solution that actually worked and helped users.
                        </p>
                      </div>
                    </div>

                    <div className="group hover:opacity-80 transition-all duration-300">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[--accent-primary] rounded-full"></div>
                          <h4 className="text-lg font-medium text-[--text-primary]">Immerse</h4>
                          <span className="text-xs text-[--accent-primary] font-medium bg-[--accent-primary]/10 px-2 py-1 rounded-full">Hackathon Winner</span>
                        </div>
                        <p className="text-[--text-secondary] leading-relaxed">
                          An AR travel companion that let tourists point their phone in any direction to see what's happening and discover places they might like.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Achievements moved here */}
                  <div className="mt-8 p-6 bg-[--surface] rounded-2xl border border-[--border-light]">
                    <h4 className="text-lg font-medium text-[--text-primary] mb-4">Early Recognition</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[--accent-primary] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="text-[--text-secondary] font-medium">50+ inter-school tech wins</span>
                            <p className="text-sm text-[--text-tertiary]">Consistent winner across multiple competitions</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[--accent-primary] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="text-[--text-secondary] font-medium">Winner — Hack Shipsy & Goldcast AI Hackathon</span>
                            <p className="text-sm text-[--text-tertiary]">Recent hackathon victories</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[--accent-primary] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="text-[--text-secondary] font-medium">B.Tech, Computer Engineering — DTU</span>
                            <p className="text-sm text-[--text-tertiary]">Delhi Technological University (2018, 80.9%)</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[--accent-primary] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="text-[--text-secondary] font-medium">DPS Rohini</span>
                            <p className="text-sm text-[--text-tertiary]">97.5% in Class 12, 10 CGPA in Class 10</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership & Growth */}
            <div className="relative">
              <div className="flex items-start gap-8">
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[--accent-primary]/20 to-[--accent-purple]/20 rounded-2xl items-center justify-center">
                  <svg className="w-8 h-8 text-[--accent-primary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className='text-2xl font-medium text-[--text-primary]'>Learning to Lead</h3>
                    <span className="text-sm text-[--text-tertiary]">2014-2018</span>
                  </div>
                  <p className='text-lg text-[--text-secondary] leading-relaxed'>
                    School gave me my first exposure to teamwork and leadership. I learned how to bring people together, organize events, and work collaboratively on projects that mattered to our community.
                  </p>
                  
                  {/* Leadership Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium text-[--text-primary]">Leadership Experience</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[--accent-primary] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="text-[--text-secondary] font-medium">President, XINO (School Computer Club)</span>
                            <p className="text-sm text-[--text-tertiary]">Organized tech initiatives and hackathons</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[--accent-primary] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="text-[--text-secondary] font-medium">President, IT & Quiz Cabinet</span>
                            <p className="text-sm text-[--text-tertiary]">Coordinated inter-school competitions</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[--accent-primary] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="text-[--text-secondary] font-medium">DTU Theatre Society</span>
                            <p className="text-sm text-[--text-tertiary]">Explored creative expression alongside technical work</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-medium text-[--text-primary]">What I Learned</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[--accent-primary] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="text-[--text-secondary] font-medium">Teamwork & Collaboration</span>
                            <p className="text-sm text-[--text-tertiary]">How to work effectively with diverse groups</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[--accent-primary] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="text-[--text-secondary] font-medium">Event Organization</span>
                            <p className="text-sm text-[--text-tertiary]">Planning and executing community events</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-[--accent-primary] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="text-[--text-secondary] font-medium">Balancing Interests</span>
                            <p className="text-sm text-[--text-tertiary]">Managing technical and creative pursuits</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Pursuits */}
            <div className="relative">
              <div className="flex items-start gap-8">
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[--accent-primary]/20 to-[--accent-purple]/20 rounded-2xl items-center justify-center">
                  <svg className="w-8 h-8 text-[--accent-primary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h2a1 1 0 011 1v2m-6 0h16" />
                  </svg>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className='text-2xl font-medium text-[--text-primary]'>Beyond Code</h3>
                    <span className="text-sm text-[--text-tertiary]">Ongoing</span>
                  </div>
                  <p className='text-lg text-[--text-secondary] leading-relaxed'>
                    I enjoy music, football, and art — not because I'm particularly good at them, but because they bring me joy and help me think differently. I play guitar and ukulele for myself, kick around a football when I can, and doodle when I need a break from screens. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className='apple-card bg-gradient-to-br from-[--accent-primary]/20 to-[--accent-purple]/20 border-[--accent-primary]/30 p-12 md:p-16 text-center'>
            <div className='space-y-8 max-w-4xl mx-auto'>
              <h3 className="text-4xl md:text-5xl font-light text-[--text-primary] leading-tight tracking-tight">
                Ready to Build Something <span className="gradient-text">Amazing Together?</span>
              </h3>
              <p className="text-xl text-[--text-secondary] leading-relaxed max-w-3xl mx-auto">
                I'm always excited to collaborate on projects that make a real difference. Whether you're looking to build the next big thing or solve a complex problem, let's create something people will love.
              </p>
              <div className='flex flex-col sm:flex-row gap-6 justify-center items-center pt-4'>
                <a 
                  href="mailto:shikharsahdev@gmail.com" 
                  className='apple-button bg-[--accent-primary] text-white hover:bg-[--accent-primary]/90 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-medium'
                >
                  Let's talk
                </a>
                <a 
                  href="https://linkedin.com/in/shikharsahdev" 
                  className='apple-button bg-white/10 backdrop-blur-sm text-[--text-primary] hover:bg-white/20 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-medium'
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedExperience && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-enter">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            ></div>
            
            {/* Modal Content */}
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-[--surface] border border-[--border] rounded-3xl shadow-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-[--border-light] bg-[--surface]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
                    <div className='w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-2xl border border-[--border-light] flex-shrink-0'>
                      <img 
                        src={selectedExperience.logo} 
                        alt={`${selectedExperience.heading} Logo`} 
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[--text-primary] tracking-tight truncate'>{selectedExperience.heading}</h2>
                      <p className='text-base md:text-lg text-[--text-tertiary] font-medium'>{selectedExperience.category}</p>
                      <p className='text-xs md:text-sm text-[--text-secondary] mt-1'>{selectedExperience.dates}</p>
                    </div>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="p-2 hover:bg-[--surface-hover] rounded-full transition-colors duration-200 flex-shrink-0 ml-4"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[--text-primary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-4 md:mt-6">
                  <h3 className='text-lg md:text-xl font-medium text-[--text-primary] mb-2 md:mb-3'>{selectedExperience.subheading}</h3>
                  <div className='text-sm font-semibold text-[--accent-primary]'>
                    Impact: {selectedExperience.impact}
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
                <div className="space-y-6 md:space-y-8">
                  {/* Detailed Description */}
                  <div>
                    <h4 className='text-xl md:text-2xl font-semibold text-[--text-primary] mb-3 md:mb-4'>Overview</h4>
                    <div className='text-base md:text-lg text-[--text-secondary] leading-relaxed'>
                      {selectedExperience.detailedText.split('*').map((text, textIndex) => (
                        <span key={textIndex} className={textIndex % 2 === 1 ? 'font-semibold text-[--accent-primary]' : ''}>{text}</span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className='text-xl md:text-2xl font-semibold text-[--text-primary] mb-4 md:mb-6'>Key Achievements & Impact</h4>
                    <div className='space-y-3 md:space-y-4'>
                      {selectedExperience.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className='flex items-start space-x-3 md:space-x-4'>
                          <div className='w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[--accent-primary]'></div>
                          <span className='text-base md:text-lg text-[--text-secondary] leading-relaxed'>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Challenges */}
                  <div>
                    <h4 className='text-xl md:text-2xl font-semibold text-[--text-primary] mb-4 md:mb-6'>Technical Challenges Solved</h4>
                    <div className='space-y-3 md:space-y-4'>
                      {selectedExperience.technicalChallenges.map((challenge, challengeIndex) => (
                        <div key={challengeIndex} className='flex items-start space-x-3 md:space-x-4'>
                          <div className='w-2 h-2 bg-[--accent-secondary] rounded-full mt-2 flex-shrink-0'></div>
                          <span className='text-base md:text-lg text-[--text-secondary] leading-relaxed'>{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 md:p-6 border-t border-[--border-light] bg-[--surface-secondary]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs md:text-sm text-[--text-tertiary] hidden sm:block">
                    Press <kbd className="px-2 py-1 bg-[--surface] rounded text-xs">ESC</kbd> to close
                  </div>
                  <button 
                    onClick={closeModal}
                    className="w-full sm:w-auto px-6 py-3 bg-[--accent-primary] text-white rounded-xl hover:bg-[--accent-primary]/90 transition-colors duration-200 font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer Disclaimer */}
        <div className="mt-32">
          <div className="text-center">
            <p className="text-base text-[--text-tertiary] font-light tracking-wide">
              Made with 
              <svg className="inline w-6 h-6 mx-1 text-red-500 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              and a little help from AI
            </p>
          </div>
        </div>
      </section>
  );  
}

export default Work;
