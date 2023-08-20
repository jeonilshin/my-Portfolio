import Image from "next/image";
import Link from "next/link";

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0">
    <Link href={'/work'} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circles bg-cover bg-center bg-no-repeat group">
      <Image src={'/rounded-text.png'} width={141} height={148} alt="" className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]" />
      <span className="absolute text-4xl group-hover:translate-x-1 transition-all duration-300" role="img" aria-label="Developer">👨‍💻</span>
    </Link>
    </div>;
};

export default ProjectsBtn;
