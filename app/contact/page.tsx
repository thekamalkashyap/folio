import { MailIcon, PhoneIcon, LinkedinIcon } from "lucide-react";
import LinkPreview from "@/components/linkPreview";
import { GitHubIcon } from "@/components/icons";

const contact = {
  email: "iamkamalkumar@proton.me",
  tel: "+919805056793",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/thekamalkashyap",
      imageSrc: "/preview/github.png",
      icon: GitHubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thekamalkashyap",
      imageSrc: "/preview/linkedin.png",
      icon: LinkedinIcon,
    },
  ],
};

export default function Contact() {
  return (
    <div className="h-screen items-center flex p-10 justify-center">
      <div>
        <h1 className="text-6xl font-bold inline-flex items-center gap-4 md:-ml-10">
          <span className="h-6 w-6 rounded-md bg-black animate-pulse" />
          creative
        </h1>
        <div className="text-xs font-mono text-pretty">
          /krɪˈeɪtɪv/ - relating to or involving the use of the imagination{" "}
          <br /> or original ideas to create something.
        </div>
        <div className="flex sm:block justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mt-10 font-mono text-sm">
            {contact.email ? (
              <button className="h-24 min-w-24 w-full border-2 border-black rounded-md flex justify-center items-center">
                <a href={`mailto:${contact.email}`}>
                  <MailIcon className="size-12" />
                </a>
              </button>
            ) : null}
            {contact.tel ? (
              <button className="h-24 min-w-24 w-full border-2 border-black rounded-md flex justify-center items-center">
                <a href={`tel:${contact.tel}`}>
                  <PhoneIcon className="size-12" />
                </a>
              </button>
            ) : null}
            {contact.social.map((social) => (
              <button
                key={social.name}
                className="h-24 min-w-24 w-full border-2 border-black rounded-md"
              >
                <LinkPreview
                  isStatic
                  imageSrc={social.imageSrc}
                  url={social.url}
                  className="h-full w-full flex justify-center items-center"
                >
                  <social.icon className="size-12" />
                </LinkPreview>
              </button>
            ))}
            <button className="h-24 min-w-24 w-full text-3xl col-span-2 border-2 border-black rounded-md">
              <LinkPreview
                url={"/resume"}
                isStatic
                imageSrc="/preview/resume.png"
                className="h-full w-full flex justify-center items-center"
              >
                Resume
              </LinkPreview>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
