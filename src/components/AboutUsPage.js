import Image from 'next/image';
import TimeLine from './TimeLine';
export default function AboutUsPage() {
  return (
    <div>
      <section className="flex flex-col md:flex-row	content-cente min-h-screen mt-10 p-6">
        <div className="md:w-8/12">
          <h1 className="text-5xl font-sans break-words font-extrabold text-cyan-900 antialiased">
            About <span className="text-5xl font-sans break-words font-extrabold text-orange-600 antialiased">Me</span>
          </h1>
          <p className="text-lg font-normaltext-gray-200 antialiased mt-8">
            Hello! I&apos;m Junior, a Software Developer based in Lima Perú.
            <br />I enjoy creating beautiful and reliable applications for internet and phones. My goal is to always build scalable products and performant experiences.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <IconAbout src={'/image/react.svg'} alt="React" title="React.js" />
            <IconAbout src={'/image/javascript.svg'} alt="javascript" title="JavaScript" />
            <IconAbout src={'/image/nodejs.svg'} alt="node.js" title="Node.js" />
            <IconAbout src={'/image/html.svg'} alt="Html" title="Html 5" />
            <IconAbout src={'/image/css.svg'} alt="css" title="CSS" />
            <IconAbout src={'/image/postgresql.svg'} alt="PostgresSql" title="Postgresql" />
          </div>
        </div>
        <div className="mt-5 md:w-4/12">
          <Image src={'/image/me.png'} alt="Mi picture" className="object-contain" width="400" height="400" />
        </div>
      </section>
      <TimeLine />
    </div>
  );
}

const IconAbout = ({ src, alt, title }) => {
  return (
    <div className="text-center">
      <Image src={src} width="50" height="50" alt={alt} />
      <p className="text-slate-900 text-md font-extralight">{title}</p>
    </div>
  );
};
