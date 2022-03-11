const Blob = () => {
  return (
    <div className="z-10">
      <div className="absolute top-10 right-0 w-72 h-72 bg-purple-300 dark:bg-slate-100 rounded-full mix-blend-multiply filter blur-xl dark:blur-2xl opacity-60 animate-blob"></div>
      <div className="absolute top-10 right-32 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 right-8 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Blob;
