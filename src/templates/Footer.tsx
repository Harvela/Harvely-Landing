const Footer = () => (
  <footer className="flex h-80 flex-row justify-between bg-[#FFDDBD] p-16 text-text dark:bg-gray-800">
    <div className="">
      <p>A propos de nous</p>
    </div>

    <div className="w-[30%]">
      <h2 className="text-md mb-8 font-semibold">NOUS CONTACTER</h2>
      <form>
        <input
          type="email"
          placeholder="Email / Telephone"
          id="small-input"
          className="w-full border-x-0 border-b-2 border-t-0 border-text bg-[#FFDDBD] pl-0 outline-none sm:text-xs"
        />
        <textarea
          placeholder="Message"
          id="small-input"
          className="my-4 w-full border-x-0 border-b-2 border-t-0 border-text bg-[#FFDDBD] pl-0 outline-none sm:text-xs"
        />
        <button className="w-full rounded-lg bg-text p-2 text-sm font-semibold text-white">
          SOUMETTRE
        </button>
      </form>
    </div>
  </footer>
);

export { Footer };
