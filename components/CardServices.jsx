import Image from "next/image";

export default function CardServices({ src, alt, title, description }) {
  return (
    <div className="hover:bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500  p-4 rounded-2xl transition-colors">
      <div className="flex gap-3 bg-white p-6 rounded-2xl hover:shadow-lg hover:shadow-gray-500/50">
        <Image src={src} alt={alt} width={40} height={40} />
        <div>
          <h2 className="text-xl font-bold text-cyan-900">{title}</h2>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
