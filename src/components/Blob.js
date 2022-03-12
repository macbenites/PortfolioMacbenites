const Blob = () => {
  return (
    <div className="z-10">
      <div className="absolute top-56 sm:top-10 right-0 w-48 h-48 md:w-72 md:h-72 bg-blue-400 dark:bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
      <div className="absolute top-56 sm:top-10 right-32 w-48 h-48 md:w-72 md:h-72 bg-emerald-400 dark:bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 sm:top-40 right-8  w-48 h-48 md:w-72 md:h-72 bg-sky-400 dark:bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Blob;
