import Particles from "@/components/particles";
import Spotlight from "@/components/spotlight";
import LinkPreview from "@/components/linkPreview";

const navigation = [
  {
    name: "Projects",
    href: "/projects",
    imageSrc: "/preview/projects.png",
  },
  {
    name: "Contact",
    href: "/contact",
    imageSrc: "/preview/contact.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-zinc-600/20 to-white">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <LinkPreview
              key={item.href}
              url={item.href}
              isStatic
              imageSrc={item.imageSrc}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-700"
            >
              <button className="inline-flex h-8 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(45deg,#dcdcde,45%,#c4c4ef,55%,#dcdcde)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none">
                {item.name}
              </button>
            </LinkPreview>
          ))}
        </ul>
      </nav>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1
        className={`z-10 text-4xl text-transparent duration-1000 bg-black cursor-default text-edge-outline animate-title font-display font-bold tracking-tighter sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text`}
      >
        Kamal Kashyap
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className=" m-8 md:m-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          A creative developer with a passion for building creative.
        </h2>
      </div>
    </div>
  );
}
