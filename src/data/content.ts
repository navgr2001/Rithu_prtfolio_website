export const designer = {
  name: "Rithu Savindaya",
  role: "Interior Designer",
  experience: "Designing spaces, enhancing lives",
  intro:
    "A curated interior design portfolio where creativity meets comfort through functional, memorable, and inspiring spaces.",
  about:
    "Creative and detail-oriented interior designer with a strong foundation in interior architecture, space planning, furniture design, and 3D visualization. Passionate about creating modern, functional, and visually refined spaces that combine aesthetics with practicality. Skilled in SketchUp, AutoCAD, Lumion, 3ds Max, Enscape, and Photoshop, with experience in residential and commercial interior projects from concept development to final presentation. Known for strong communication, creativity, problem-solving abilities, and delivering high-quality design solutions with professionalism and attention to detail.",
  email: "rithusavindaya633@gmail.com",
  phone: "+94 71 519 1638",
  location: "Sri Lanka",
};

export const skills = [
  "Design Thinking",
  "Detail-Oriented Design",
  "Space Planning",
  "Visual Creation",
  "SketchUp",
  "AutoCAD",
  "Lumion",
  "3ds Max",
  "Enscape",
  "Adobe Photoshop",
  "Furniture Design",
  "3D Visualization",
  "Concept Development",
  "Material Selection",
  "Lighting Design",
  "Client Presentations",
];

type ProjectDetailSection = {
  subtitle: string;
  description: string;
};

export type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  images?: string[];
  description: string;
  imageFit?: "cover" | "contain";
  detailSections?: ProjectDetailSection[];
};

export const projects: Project[] = [
  {
    title: "Galaxy Iconic Apartment",
    category: "Apartments",
    year: "2 Months",
    image: "/images/portfolio/page-04.jpg",
    imageFit: "contain",
    images: ["/images/portfolio/page-05.jpg"],
    description:
      "A residential apartment project shaped around modern contemporary elegance, warm textures, refined lighting, and practical spatial comfort.",
    detailSections: [
      {
        subtitle: "Design Philosophy",
        description:
          "The design centers on sophisticated contemporary interiors through a harmonious balance of texture, color, lighting, and spatial functionality. Warm and elegant environments are created by combining neutral palettes, natural materials, refined modern elements, cohesive furniture selection, ambient lighting, and material coordination.",
      },
      {
        subtitle: "Spaces Included",
        description:
          "Bedroom, dining area, and living room design with a before-and-after transformation view that highlights how the apartment moved from a plain interior into a polished, functional, and inviting home.",
      },
    ],
  },
  {
    title: "Kollupitiya Apartment Project",
    category: "Apartments",
    year: "4 Months",
    image: "/images/portfolio/page-06.jpg",
    imageFit: "contain",
    description:
      "A refined apartment interior that balances colour, texture, lighting, and spatial functionality while maintaining comfort and contemporary elegance.",
    detailSections: [
      {
        subtitle: "Project Focus",
        description:
          "The project uses neutral palettes, warm wood finishes, elegant fabrics, and modern detailing to create a sophisticated yet comfortable atmosphere. Ambient lighting, layered materials, and clean architectural choices create visual harmony while maintaining everyday practicality.",
      },
    ],
  },
  {
    title: "Prime Apartment",
    category: "Apartments",
    year: "Residential",
    image: "/images/portfolio/page-10.jpg",
    imageFit: "contain",
    images: ["/images/portfolio/page-11.jpg"],
    description:
      "A modern apartment concept built around harmony, function, and elegance through warm wood textures, soft neutral tones, marble finishes, and ambient lighting.",
    detailSections: [
      {
        subtitle: "Design Direction",
        description:
          "This concept balances luxury and comfort through custom display shelving, illuminated cabinetry, modern furniture elements, and carefully coordinated beige, cream, and natural wood tones. The technical drawings support the spatial planning and detailing behind the design.",
      },
    ],
  },
  {
    title: "Canterbury Project",
    category: "Villas",
    year: "Villa Interior",
    image: "/images/portfolio/page-14.jpg",
    imageFit: "contain",
    images: ["/images/portfolio/page-15.jpg"],
    description:
      "A Canterbury villa project with understated sophistication, refined contemporary living, and a warm sense of comfort across lounge, dining, and bedroom areas.",
    detailSections: [
      {
        subtitle: "Concept",
        description:
          "The design combines elegance, comfort, and functionality through soft neutral palettes, natural wood textures, refined finishes, clean architectural lines, balanced material compositions, and carefully curated furniture elements.",
      },
    ],
  },
  {
    title: "Santorini Villa",
    category: "Villas",
    year: "Modern Luxury",
    image: "/images/portfolio/page-18.jpg",
    imageFit: "contain",
    images: ["/images/portfolio/page-19.jpg"],
    description:
      "A modern luxury interior using warm beige, soft cream, muted sage green, powder blue accents, vertical panel detailing, and layered golden ambient lighting.",
    detailSections: [
      {
        subtitle: "Atmosphere",
        description:
          "The design creates a sophisticated yet comfortable living environment with balanced material composition, minimal furniture arrangements, visual continuity, and warm lighting that enhances depth and richness throughout the space.",
      },
    ],
  },
  {
    title: "Apeksha Hospital CSR Project",
    category: "CSR & Children",
    year: "CSR Project",
    image: "/images/portfolio/page-07.jpg",
    imageFit: "contain",
    images: ["/images/portfolio/page-08.jpg", "/images/portfolio/page-09.jpg"],
    description:
      "A nurturing children's interior designed around the theme Read, Play, Love to support learning, creativity, emotional development, and active exploration.",
    detailSections: [
      {
        subtitle: "About The Project",
        description:
          "The design combines playful spatial planning with soft contemporary aesthetics, integrating reading corners, activity zones, open play areas, child-friendly layouts, pastel colours, curved forms, and nature-inspired elements to create a calm yet engaging environment.",
      },
      {
        subtitle: "Key Ideas",
        description:
          "Read, play, love, and grow guide the project. The result is a child-friendly space with soft neutral palettes, safe rounded edges, flexible play zones, organic shapes, indoor plants, and warm natural textures.",
      },
    ],
  },
  {
    title: "Bakery Project",
    category: "Hospitality",
    year: "Bakery Interior",
    image: "/images/portfolio/page-16.jpg",
    imageFit: "contain",
    images: ["/images/portfolio/page-17.jpg"],
    description:
      "A cozy bakery and cafe interior with warm lighting, wood textures, clean display zones, wall art, and inviting seating for a refined customer experience.",
    detailSections: [
      {
        subtitle: "Design Approach",
        description:
          "The project uses neutral palettes, natural wood textures, refined finishes, ambient lighting, and clean compositions to create a welcoming interior that supports both visual harmony and functional food-service flow.",
      },
    ],
  },
  {
    title: "Hand Sketch Collection",
    category: "Hand Sketches",
    year: "Conceptual Work",
    image: "/images/portfolio/page-03.jpg",
    imageFit: "contain",
    description:
      "A collection of hand sketches and conceptual drawings that transform interior ideas into detailed visual presentations with attention to space, form, and design aesthetics.",
    detailSections: [
      {
        subtitle: "Sketch Types",
        description:
          "The collection includes interior perspective, exterior perspective, interior sketch, and landscape sketch work, communicating ideas by hand with purpose and visual clarity.",
      },
    ],
  },
  {
    title: "Furniture Details",
    category: "Furniture Details",
    year: "Technical Drawings",
    image: "/images/portfolio/page-12.jpg",
    imageFit: "contain",
    images: ["/images/portfolio/page-13.jpg"],
    description:
      "Detailed furniture drawings and elevations for custom interior elements, including counters, tables, cabinets, wardrobes, and seating details.",
    detailSections: [
      {
        subtitle: "Technical Focus",
        description:
          "The drawings support production-level clarity with plans, front elevations, sectional views, measurements, material notes, handles, shelves, drawers, and functional furniture detailing.",
      },
    ],
  },
];

export const navItems = [
  {
    label: "About",
    targetId: "about",
  },
  {
    label: "Projects",
    targetId: "projects",
  },
  {
    label: "Skills",
    targetId: "skills",
  },
  {
    label: "Contact",
    targetId: "contact",
  },
] as const;
