import Image from "next/image";
export default function Footer() {
  return (
    <footer className=" px-6 py-4">
      <div className="flex flex-col-reverse  sm:flex-row sm:justify-between">
        <div className="text-gray-700 flex justify-center">
          <p className="m-auto mt-4">
            © {new Date().getFullYear()} Made with ❤️ by Marlon Acosta
          </p>
        </div>
        <div className="flex gap-6  justify-center">
          <Image
            src={"/image/linkedin.svg"}
            alt="Linkedin"
            width={40}
            height={40}
          />
          <Image
            src={"/image/whatsapp.svg"}
            alt="Linkedin"
            width={40}
            height={40}
          />
          <Image
            src={"/image/github.svg"}
            alt="Linkedin"
            width={40}
            height={40}
          />
          <Image
            src={"/image/instagram.svg"}
            alt="Linkedin"
            width={40}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
}
