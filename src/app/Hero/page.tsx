export default function Hero() {
  return (
      <div className="min-h-screen bg-slate-300 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
          {/* Left Section (Text + Button) */}
          <div className="text-center md:text-left max-w-lg">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-800 mb-6">
                  Welcome to My Portfolio
              </h1>
              <p className="text-lg md:text-2xl lg:text-3xl text-gray-600 mb-8">
                  Hi, I'm <span className="font-bold text-slate-900">Muhammad Rayan</span>. 
                  A skilled Frontend Developer with expertise in 
                  <span className="text-slate-900"> HTML5, CSS3, JavaScript, Next.js, and TypeScript</span>.
              </p>
              <button className="text-white bg-slate-700 hover:bg-slate-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-xl rounded shadow">
                  Hire Me
              </button>
          </div>
          
          {/* Right Section (Image) */}
          <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center">
              <img
                  src="/mypic.jpg"
                  alt="Profile"
                  className="rounded-lg shadow-lg object-cover w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-slate-500"
              />
          </div>
      </div>
  );
}
