import { useRef, useLayoutEffect, type MutableRefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  link?: string;
  viewLabel?: string;
  role: string;
  type: string;
  description: string;
  tech: string;
  images: { src: string; alt: string; variant?: string }[];
  imgClass?: string;
}

const projects: Project[] = [
  {
    id: "lbx",
    title: "LBX Mobile App",
    link: "https://digital-detox.co.uk/work/lbx/",
    viewLabel:
      "https://play.google.com/store/apps/details?id=com.lbx1.app&hl=en",
    role: "via Digital Detox",
    type: "Full-stack Development | Native Mobile App",
    description: `Tasked with building a cross platform mobile app for a forthcoming launch of the UK's first Cryptocurrency Exchange: London Blockchain Exchange. Worked with LBX in a highly agile team to deliver a robust, secure and slick mobile app experience. LBX Bitcoin Exchange and Wallet is available in the Apple and Google app stores.`,
    tech: "React Native, React Native Web, Redux, Redux Saga, Alphapoint API, Websockets, NodeJS, NextJs, Jest, Expo, Sentry",
    images: [
      { src: "/img/projects/lbx/1.png", alt: "LBX app screenshot 1" },
      { src: "/img/projects/lbx/2.png", alt: "LBX app screenshot 2" },
    ],
  },
  {
    id: "dd",
    title: "Digital Detox",
    link: "https://digital-detox.agency/work",
    role: "",
    type: "Full-stack development | Technical Consultancy",
    description: `Worked with various clients and delivered top quality web and mobile apps such as: UK's First Cryptocurrency Mobile App, Frontend Framework, Mobile App (IoT) for a multinational telecoms provider, Web App for Education sector.`,
    tech: "HTML, CSS, Javascript, React, React Native, React Native Web, Redux, Redux Saga, Alphapoint API, Websockets, NodeJS, PHP, Laravel 5, NextJs, Jest, Expo, Sentry, AWS Lambdas",
    images: [
      { src: "/img/projects/dd/1.png", alt: "Digital Detox work screenshot 1" },
      { src: "/img/projects/dd/2.png", alt: "Digital Detox work screenshot 2" },
    ],
  },
  {
    id: "fsb",
    title: "FSB SaaS",
    role: "",
    type: "Frontend Development | Lead Developer",
    description: `Lead the development of FSB Technology's Software as a Service (SaaS) platform and developed modules such as CRM, CMS, Analytics, Realtime Market Feeds, Dashboards/charts, etc. Built a highly performant and easy to use platform that enabled efficient management of core business activities.`,
    tech: "Javascript ES6, Sencha ExtJS, Jasmine, Karma, REST API, Websockets, Chrome Developer Tools, Bash, Ant, Jenkins, CI/CD, Docker",
    images: [
      { src: "/img/projects/010_fsbbo/1.png", alt: "FSB SaaS screenshot 1" },
      { src: "/img/projects/010_fsbbo/2.png", alt: "FSB SaaS screenshot 2" },
      {
        src: "/img/projects/010_fsbbo/3.png",
        alt: "FSB SaaS screenshot 3",
        variant: "small",
      },
      {
        src: "/img/projects/010_fsbbo/4.png",
        alt: "FSB SaaS screenshot 4",
        variant: "small",
      },
    ],
    imgClass: "projects__img--fsb",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cardElements = cardsRef.current.filter(Boolean) as HTMLElement[];

      gsap.set(headerRef.current, { opacity: 0, y: 40 });
      gsap.set(cardElements, {
        xPercent: 40,
        opacity: 0,
      });

      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      cardElements.forEach((card, index) => {
        gsap.to(card, {
          xPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="projects min-h-screen w-full flex flex-col items-center justify-center "
    >
      <div className="container mx-auto px-4 content-column">
        <div ref={headerRef} className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Featured Work</h2>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <Project
              key={project.id}
              project={project}
              index={index}
              cardsRef={cardsRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectProps {
  project: Project;
  index: number;
  cardsRef: MutableRefObject<(HTMLElement | null)[]>;
}

function Project({ project, cardsRef, index }: ProjectProps) {
  const gallery = (
    <div
      className={`project__gallery ${project.imgClass ?? ""}`}
      aria-label={`${project.title} project gallery`}
    >
      {project.images.map((image, imageIndex) => (
        <figure
          key={image.src}
          className={`project__frame ${
            image.variant ? "project__frame--small" : ""
          } ${imageIndex === 0 ? "project__frame--lead" : ""}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="project__image"
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );

  return (
    <article
    ref={(el) => {
      cardsRef.current[index] = el;
    }}
    className="projects__card"
  >
      <header className="project__masthead">
   
        <div className="project__heading">
          <h3>{project.title}</h3>
        </div>
        <p className="project__discipline">{project.type}</p>
        {project.viewLabel && (
          <a
            className="project__visit"
            href={project.viewLabel}
            target="_blank"
            rel="noreferrer"
          >
            View project <span aria-hidden="true">↗</span>
          </a>
        )}
      </header>

      <div className="project__body">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project__gallery-link"
            aria-label={`View ${project.title} case study`}
          >
            {gallery}
          </a>
        ) : (
          gallery
        )}

        <div className="project__details">
          <div className="project__copy">
            <p className="project__label">The brief</p>
            <p className="project__description">{project.description}</p>
          </div>
          <dl className="project__credits">
            {project.role && (
              <div>
                <dt>Collaboration</dt>
                <dd>{project.role.replace(/^via\s+/i, "")}</dd>
              </div>
            )}
            <div>
              <dt>Built with</dt>
              <dd>{project.tech}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}
