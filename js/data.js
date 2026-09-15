var ICONS = {
  talent: '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6l4 9 9.5 1.2-7 6.6 2 9.5L20 27.7 11.5 32.3l2-9.5-7-6.6L16 15z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  interdisciplinary: '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="9" stroke="currentColor" stroke-width="1.8"/><circle cx="25" cy="25" r="9" stroke="currentColor" stroke-width="1.8"/></svg>',
  multicultural: '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="14" stroke="currentColor" stroke-width="1.8"/><ellipse cx="20" cy="20" rx="14" ry="6" stroke="currentColor" stroke-width="1.5"/><line x1="6" y1="20" x2="34" y2="20" stroke="currentColor" stroke-width="1.5"/></svg>',
  entrepreneurship: '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 34V10M20 10l-7 7M20 10l7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  social: '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 32s-11-6.5-11-14.5C9 12.5 12.5 9 17 9c1.5 0 3 .8 3 3 0-2.2 1.5-3 3-3 4.5 0 8 3.5 8 8.5C31 25.5 20 32 20 32z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>'
};

// Each item can optionally carry:
//   image:    path to a screenshot/document (gives the entry the click-to-expand modal)
//   expand:   true (forces the modal even with no image, using a generic icon visual, for
//             entries whose value is in listing several supporting links, or showing
//             an abstract, at once)
//   abstract: longer text shown in the modal body instead of the list-row text
//   links:    [{label, href}, ...] supporting links (shown in the modal, or as plain
//             links when there's no image/expand)
//   link:     single external URL, shorthand for links:[{label:'View', href:link}]
// Entries with neither image/expand nor any link render as plain text.
var COMP_DATA = [
  { key:'talent', title:'Talent', items:[
      {d:'Jan–Apr 2025', title:'Proof-42', t:'Built an adaptive mobile logic tutor for personalized learning (GCSP REU).',
        image:'assets/proof-42-screenshot.jpeg',
        links:[{label:'Proof-42 (GitHub)', href:'https://github.com/ClaraLeonora/proof-42-app'}]},
      {d:'May 2025', title:'LLM Proofs & Hints Paper', t:'Co-authored a study on LLM-generated proofs and hints for personalized tutoring.',
        expand:true,
        abstract:'Intelligent tutoring systems have demonstrated effectiveness in teaching formal propositional logic proofs, but their reliance on template-based explanations limits their ability to provide personalized student feedback. While large language models (LLMs) offer promising capabilities for dynamic feedback generation, they risk producing hallucinations or pedagogically unsound explanations. We evaluated the stepwise accuracy of LLMs in constructing multi-step symbolic logic proofs, comparing six prompting techniques across four state-of-the-art LLMs on 358 propositional logic problems. Results show that DeepSeek-V3 achieved superior performance with up to 86.7% accuracy on stepwise proof construction and excelled particularly in simpler rules. We further used the best-performing LLM to generate explanatory hints for 1050 unique student problem-solving states from a logic ITS and evaluated them on 4 criteria with both an LLM grader and human expert ratings on a 20% sample. Our analysis finds that LLM-generated hints were 75% accurate and rated highly by human evaluators on consistency and clarity, but did not perform as well in explaining why the hint was provided or its larger context. Our results demonstrate that LLMs may be used to augment tutoring systems with logic tutoring hints, but those hints require additional modifications to ensure accuracy and pedagogical appropriateness.',
        links:[{label:'Read paper', href:'https://www.sciencedirect.com/science/article/pii/S2666920X25001304?via%3Dihub'}]},
      {d:'May–Aug 2024', title:'Bidirectional Prompting', t:'On verifying a tutor’s own logic before trusting it to correct someone else’s.',
        image:'assets/bidirectional-prompting-poster.jpeg',
        links:[{label:'DNF Solver (GitHub)', href:'https://github.com/ClaraLeonora/Proof-Solver'}]},
      {d:'Mar 2024', title:'IBM & Meta Certifications', t:'Earned IBM and Meta certificates in Python for Data Science/AI and front-end development, the same spring Proof-42 needed both.',
        links:[
          {label:'Python for Data Science & AI (IBM)', href:'https://www.coursera.org/account/accomplishments/verify/5PQM5YJA55V7?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'},
          {label:'Front-End Development (Meta)', href:'https://www.coursera.org/account/accomplishments/verify/4EEFXJQDRTPM'}
        ]}
    ]},
  { key:'interdisciplinary', title:'Interdisciplinary', items:[
      {d:'Sep 2026–present', title:'AKDOT Bridge Capstone', t:'Engineered a full-stack seismic assessment platform for Alaska infrastructure.'},
      {d:'Feb 2026', title:'AI Scholars Program', t:'Co-authored a paper scaling personalized AI-literacy outreach to K–12 classrooms.',
        expand:true,
        abstract:'As artificial intelligence (AI) becomes increasingly integrated into daily life, there is a critical need for developing AI literacy across all educational levels. However, current AI education remains largely confined to college-level computer science classrooms with limited access for K-12 learners. We present the AI Scholars Program, a novel approach that addresses the AI education gap by preparing college computing students to serve as AI education ambassadors in their communities and empowering K-12 teachers to adopt AI education practices in their classrooms. This experience report presents the curriculum and its outcomes after one round of refinement. The program offers structured AI learning through bi-weekly webinars, resources, and collaborative opportunities to form teams and conduct community outreach projects. Our program invited 63 scholars from 30 institutions across the U.S., including 51 college students and 12 K-12 teachers. Their outreach impacted over 230 K-12 learners. We examine program outcomes for participants and projects through pre/post surveys measuring computing attitudes and self-efficacy for teaching AI, scholar interviews, and outreach project reports. We share lessons learned and challenges for designing similar programs, highlighting the importance of involving educators for effective community-engaged AI education. The program creates a sustainable pipeline for college students to develop technical skills and leadership while addressing K-12 AI education shortages. We contribute insights for scaling AI literacy and broadening participation in computing.',
        links:[{label:'Read paper', href:'https://ojs.aaai.org/index.php/AAAI/article/view/41518'}]},
      {d:'May–Aug 2024', title:'NASA L’SPACE', t:'Co-designed a 199-page lunar exploration mission system template.',
        image:'assets/nasa-lspace-certificate.jpeg'},
      {d:'Aug–Dec 2023', title:'Gender in Science & Technology', t:'Took WGS 210, NC State’s course on gender in science and technology, the same semester as a full load of algorithms.'},
      {d:'Aug–Dec 2023', title:'Soil Salinization Research', t:'Ran an NC State Honors research project standardizing how soil salinization gets measured across inconsistent global units.'}
    ]},
  { key:'multicultural', title:'Multicultural', items:[
      {d:'Jan–May 2026', title:'Hong Kong Polytechnic University', t:'Completed a semester of computer science coursework at Hong Kong Polytechnic University, picking up beginner Cantonese alongside it.',
        links:[{label:'See more', href:'index.html#global'}]},
      {d:'Jan–May 2025', title:'Sustainable Urban Design, Nice', t:'Studied sustainable urban design and green infrastructure in an NC State course, capped by two weeks of field research in Nice, France, interviewing locals and analyzing green infrastructure.',
        links:[{label:'See photos from Nice', href:'index.html#global'}]},
      {d:'Oct 2024', title:'Developing Cultural Competence', t:'Completed NC State’s Developing Cultural Competence certificate: three workshops on cultural-dimensions theory plus a live virtual exchange with international students.',
        image:'assets/dcc-certificate.png'}
    ]},
  { key:'entrepreneurship', title:'Entrepreneurship', items:[
      {d:'May–Jul 2026', title:'Venture Development & Research Lead', t:'Conducted edtech user-retention and market analyses for global ventures.'},
      {d:'Jun–Aug 2025', title:'NASA JPL', t:'Unified Deep Space Network subsystem workflows into a web platform.'},
      {d:'Mar 2025', title:'ASA DataFest 2025', t:'Won a Connections Award at NC State’s ASA DataFest 2025.',
        image:'assets/datafest-connections-award.jpeg'},
      {d:'Dec 2024', title:'Digital Garden', t:'Designed and built Digital Garden, a Next.js and Tailwind site with original illustration and custom animation, deployed on Vercel.'},
      {d:'Aug 2023–May 2024', title:'NC State IT Technician', t:'Worked as an NC State IT Technician, keeping classroom AV and presentation systems running across campus.'},
      {d:'2023–2026', title:'Business Administration Minor', t:'Added a Business Administration minor to the CS degree, splitting coursework between algorithms and balance sheets.'}
    ]},
  { key:'social', title:'Social Consciousness', items:[
      {d:'Jan–Nov 2025', title:'GCSO Treasurer', t:'Led financial restructuring to transition our campus GCSP chapter to a non-profit.'},
      {d:'Aug–Dec 2024', title:'CS Teaching Assistant', t:'Taught object-oriented programming and debugging to 100+ undergraduates.'},
      {d:'Aug–Dec 2024', title:'GCSO Fundraising Chair', t:'Directed GCSO’s fundraising and event strategy as Fundraising Chair, planning the campaigns that funded the org’s programming, and sat on the GCSP Symposium planning committee, helping plan its transportation budget and designing the event’s logo and swag.',
        image:'assets/gcsp-swag-logo.jpeg'},
      {d:'Oct 2024', title:'GCSP Symposium Panel', t:'Sat on a panel and the planning committee for NC State’s GCSP Symposium, presenting to the broader Grand Challenges Scholars cohort.'},
      {d:'Dec 2023–Apr 2024', title:'Inclusive AI Learning', t:'On designing an AI curriculum flexible enough to actually include the students it’s built for.',
        image:'assets/reach-for-the-stars.jpeg',
        links:[
          {label:'Inclusive AI Learning (poster)', href:'assets/inclusive-ai-learning-poster.jpeg'},
          {label:'SuperSTARS Award', href:'assets/superstars-award.jpeg'},
          {label:'Byte Sized Builders curriculum (PDF)', href:'assets/byte-sized-builders.pdf'}
        ]},
      {d:'Aug 2023–May 2024', title:'Feed the Pack & Zero Waste Wolfpack', t:'Volunteered with NC State’s Feed the Pack food pantry and the Zero Waste Wolfpack compost-diversion events.',
        image:'assets/zero-waste-wolfpack.jpeg',
        links:[{label:'Read article', href:'https://sustainability.ncsu.edu/blog/2024/10/22/zero-waste-wolfpack-scoring-big/'}]},
      {d:'2024–2025', title:'CITI Research Ethics Certifications', t:'Completed CITI certifications in Human Subjects Research and the Responsible Conduct of Research (the clearance an intelligent-tutoring study needs before it can start) on top of NC State’s Ethics in Computing coursework.',
        expand:true,
        links:[
          {label:'Technology, Ethics, and Regulations', href:'https://www.citiprogram.org/verify/?w099b3633-4b8c-4fa7-ae85-3785da462924-62843868'},
          {label:'SBE Good Clinical Practices', href:'https://www.citiprogram.org/verify/?w0fcd9311-8beb-40fc-a710-8d5c857f56ae-62843870'},
          {label:'Conflicts of Interest', href:'https://www.citiprogram.org/verify/?we338fbb2-4db7-4d9d-be0d-ca6671892487-62843867'},
          {label:'Responsible Conduct of Research', href:'https://www.citiprogram.org/verify/?w3d8e8f39-e58f-4b9e-8cba-b65bcbeeb563-62843866'},
          {label:'Human Subjects Research', href:'https://www.citiprogram.org/verify/?w3a07d11b-0f8a-4955-936f-ad1c6a57e31d-62843869'}
        ]}
    ]}
];

var WORK_DATA = [
  { date:'May–Jul 2026', role:'Ventures development & research lead, Hong Kong',
    desc:'Conducted edtech user-retention and market analyses for global ventures.' },
  { date:'Feb 2026', role:'Co-author, published research',
    desc:'Co-authored a paper scaling personalized AI-literacy outreach to K–12 classrooms.',
    abstract:'As artificial intelligence (AI) becomes increasingly integrated into daily life, there is a critical need for developing AI literacy across all educational levels. However, current AI education remains largely confined to college-level computer science classrooms with limited access for K-12 learners. We present the AI Scholars Program, a novel approach that addresses the AI education gap by preparing college computing students to serve as AI education ambassadors in their communities and empowering K-12 teachers to adopt AI education practices in their classrooms. This experience report presents the curriculum and its outcomes after one round of refinement. The program offers structured AI learning through bi-weekly webinars, resources, and collaborative opportunities to form teams and conduct community outreach projects. Our program invited 63 scholars from 30 institutions across the U.S., including 51 college students and 12 K-12 teachers. Their outreach impacted over 230 K-12 learners. We examine program outcomes for participants and projects through pre/post surveys measuring computing attitudes and self-efficacy for teaching AI, scholar interviews, and outreach project reports. We share lessons learned and challenges for designing similar programs, highlighting the importance of involving educators for effective community-engaged AI education. The program creates a sustainable pipeline for college students to develop technical skills and leadership while addressing K-12 AI education shortages. We contribute insights for scaling AI literacy and broadening participation in computing.',
    links:[{label:'Read paper', href:'https://ojs.aaai.org/index.php/AAAI/article/view/41518'}] },
  { date:'Jun–Aug 2025', role:'Software engineer intern, NASA JPL',
    desc:'Unified Deep Space Network subsystem workflows into a web platform.' },
  { date:'Jan–Apr 2025', role:'Proof-42',
    desc:'Built an adaptive mobile logic tutor for personalized learning (GCSP REU).',
    image:'assets/proof-42-screenshot.jpeg',
    links:[{label:'GitHub', href:'https://github.com/ClaraLeonora/proof-42-app'}] },
  { date:'May 2025', role:'Co-author, published research',
    desc:'Co-authored a study on LLM-generated proofs and hints for personalized tutoring.',
    abstract:'Intelligent tutoring systems have demonstrated effectiveness in teaching formal propositional logic proofs, but their reliance on template-based explanations limits their ability to provide personalized student feedback. While large language models (LLMs) offer promising capabilities for dynamic feedback generation, they risk producing hallucinations or pedagogically unsound explanations. We evaluated the stepwise accuracy of LLMs in constructing multi-step symbolic logic proofs, comparing six prompting techniques across four state-of-the-art LLMs on 358 propositional logic problems. Results show that DeepSeek-V3 achieved superior performance with up to 86.7% accuracy on stepwise proof construction and excelled particularly in simpler rules. We further used the best-performing LLM to generate explanatory hints for 1050 unique student problem-solving states from a logic ITS and evaluated them on 4 criteria with both an LLM grader and human expert ratings on a 20% sample. Our analysis finds that LLM-generated hints were 75% accurate and rated highly by human evaluators on consistency and clarity, but did not perform as well in explaining why the hint was provided or its larger context. Our results demonstrate that LLMs may be used to augment tutoring systems with logic tutoring hints, but those hints require additional modifications to ensure accuracy and pedagogical appropriateness.',
    links:[{label:'Read paper', href:'https://www.sciencedirect.com/science/article/pii/S2666920X25001304?via%3Dihub'}] },
  { date:'May–Aug 2024', role:'AI & logic systems researcher',
    desc:'Engineered algorithmic verification to audit personalized, generative tutoring scaffolding (GCSP REU).',
    image:'assets/bidirectional-prompting-poster.jpeg',
    links:[{label:'DNF Solver (GitHub)', href:'https://github.com/ClaraLeonora/Proof-Solver'}] }
];

// Publications and research posters, shown on the homepage Research section:
// a dedicated view of the same underlying work for readers (e.g. a PhD advisor)
// who specifically want the research, separate from the competency breakdown.
var RESEARCH_DATA = [
  { date:'Feb 2026', title:'"AI Scholars Program: Scaling AI Literacy Through K–12 Outreach"', venue:'AAAI EAAI track',
    desc:'On extending AI literacy to under-resourced schools without losing what makes it work for any one classroom.',
    abstract:'As artificial intelligence (AI) becomes increasingly integrated into daily life, there is a critical need for developing AI literacy across all educational levels. However, current AI education remains largely confined to college-level computer science classrooms with limited access for K-12 learners. We present the AI Scholars Program, a novel approach that addresses the AI education gap by preparing college computing students to serve as AI education ambassadors in their communities and empowering K-12 teachers to adopt AI education practices in their classrooms. This experience report presents the curriculum and its outcomes after one round of refinement. The program offers structured AI learning through bi-weekly webinars, resources, and collaborative opportunities to form teams and conduct community outreach projects. Our program invited 63 scholars from 30 institutions across the U.S., including 51 college students and 12 K-12 teachers. Their outreach impacted over 230 K-12 learners. We examine program outcomes for participants and projects through pre/post surveys measuring computing attitudes and self-efficacy for teaching AI, scholar interviews, and outreach project reports. We share lessons learned and challenges for designing similar programs, highlighting the importance of involving educators for effective community-engaged AI education. The program creates a sustainable pipeline for college students to develop technical skills and leadership while addressing K-12 AI education shortages. We contribute insights for scaling AI literacy and broadening participation in computing.',
    links:[{label:'Read paper', href:'https://ojs.aaai.org/index.php/AAAI/article/view/41518'}] },
  { date:'May 2025', title:'"The Promise and Limits of LLMs in Constructing Proofs and Hints for Logic Problems"', venue:'Computers and Education: Artificial Intelligence',
    desc:'On when a generated hint actually helps and when it doesn’t.',
    abstract:'Intelligent tutoring systems have demonstrated effectiveness in teaching formal propositional logic proofs, but their reliance on template-based explanations limits their ability to provide personalized student feedback. While large language models (LLMs) offer promising capabilities for dynamic feedback generation, they risk producing hallucinations or pedagogically unsound explanations. We evaluated the stepwise accuracy of LLMs in constructing multi-step symbolic logic proofs, comparing six prompting techniques across four state-of-the-art LLMs on 358 propositional logic problems. Results show that DeepSeek-V3 achieved superior performance with up to 86.7% accuracy on stepwise proof construction and excelled particularly in simpler rules. We further used the best-performing LLM to generate explanatory hints for 1050 unique student problem-solving states from a logic ITS and evaluated them on 4 criteria with both an LLM grader and human expert ratings on a 20% sample. Our analysis finds that LLM-generated hints were 75% accurate and rated highly by human evaluators on consistency and clarity, but did not perform as well in explaining why the hint was provided or its larger context. Our results demonstrate that LLMs may be used to augment tutoring systems with logic tutoring hints, but those hints require additional modifications to ensure accuracy and pedagogical appropriateness.',
    links:[{label:'Read paper', href:'https://www.sciencedirect.com/science/article/pii/S2666920X25001304?via%3Dihub'}] },
  { date:'May–Aug 2024', title:'"Evaluating Prompting Techniques for Logic Proof Generation in GPT-4: Introducing Bidirectional Prompting"', venue:'Game2Learn Research Lab, NC State',
    desc:'On verifying a tutor’s own logic before trusting it to correct someone else’s.',
    image:'assets/bidirectional-prompting-poster.jpeg',
    links:[{label:'DNF Solver (GitHub)', href:'https://github.com/ClaraLeonora/Proof-Solver'}] },
  { date:'Dec 2023–Apr 2024', title:'"Inclusive AI Learning: Promoting Accessibility in Computing Education for K–12 Students"', venue:'Presented at the STARS Computing Corps Conference, San Diego',
    desc:'On designing an AI curriculum flexible enough to actually include the students it’s built for.',
    image:'assets/inclusive-ai-learning-poster.jpeg',
    links:[
      {label:'SuperSTARS Award', href:'assets/superstars-award.jpeg'},
      {label:'Byte Sized Builders curriculum (PDF)', href:'assets/byte-sized-builders.pdf'}
    ] }
];

// Homepage "Global experience" tiles. Each shows `cover` as the clickable
// picture; clicking it opens the expand card with `image` (if any) as the
// hero photo and `links` as the rest of the gallery.
var GLOBAL_DATA = [
  { key:'france', title:'France', cover:'assets/france-cover.png',
    caption:'An NC State course, capped by two weeks of field research in Nice.',
    desc:'A semester-long NC State course on sustainable urban design and green infrastructure, culminating in two weeks in Nice, France, doing field research: interviewing locals and analyzing green infrastructure along the Mediterranean coast with an international cohort of classmates, from courtyard discussions to old fort ramparts overlooking the sea, framed by sunsets over the Baie des Anges.',
    image:'assets/france-sunset-bay.jpg',
    links:[
      {label:'Campus courtyard', href:'assets/france-campus-group.jpg'},
      {label:'Moonrise over the harbor', href:'assets/france-moonrise-harbor.jpg'},
      {label:'Sunset at the shoreline', href:'assets/france-beach-dusk.jpg'},
      {label:'On the ramparts', href:'assets/france-ramparts-group.jpg'}
    ] },
  { key:'hongkong', title:'Hong Kong', cover:'assets/hongkong-cover.png',
    caption:'A semester at Hong Kong Polytechnic University.',
    desc:'A semester of computer science coursework at Hong Kong Polytechnic University, picking up beginner Cantonese alongside it. Explored the city between classes: sunset from Victoria Peak, the Big Buddha and lanterns on Lantau Island, and the golden pavilion of Nan Lian Garden.',
    image:'assets/hk-victoria-peak.jpg',
    links:[
      {label:'Big Buddha, Lantau Island', href:'assets/hk-big-buddha.jpg'},
      {label:'Lanterns at the Big Buddha courtyard', href:'assets/hk-lanterns-lantau.jpg'},
      {label:'Nan Lian Garden', href:'assets/hk-nan-lian-garden.jpg'},
      {label:'City map', href:'assets/hk-map.jpg'}
    ] }
];

var IMG_BY_KEY = {
  talent:'img/icon-talent.png', interdisciplinary:'img/icon-interdisciplinary.png', multicultural:'img/icon-multicultural.png',
  entrepreneurship:'img/icon-entrepreneurship.png', social:'img/icon-social.png'
};
var COLOR_BY_KEY = {
  talent:'#e3a53f', interdisciplinary:'#5c86b0', multicultural:'#7a9b76',
  entrepreneurship:'#d97a5f', social:'#a688b8'
};
var CLASS_BY_KEY = {
  talent:'c-talent', interdisciplinary:'c-interdisciplinary', multicultural:'c-multicultural',
  entrepreneurship:'c-entrepreneurship', social:'c-social'
};
