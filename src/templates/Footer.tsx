const Footer = () => (
  <footer className="flex flex-col-reverse justify-between bg-[#0E9F90] p-4 py-8 text-text dark:bg-gray-800 md:flex-row md:p-16">
    <div className="text-md mt-8 font-semibold md:mt-0">
      <p>A propos de nous</p>
    </div>

    <div className="w-[100%] md:w-[40%]">
      <h2 className="text-md mb-8 font-semibold text-white">NOUS CONTACTER</h2>
      <form>
        <input
          type="email"
          placeholder="Email / Telephone"
          id="small-input"
          className="w-full rounded-md border-0 bg-white px-4  outline-none sm:text-xs"
        />
        <textarea
          placeholder="Message"
          id="small-input"
          className="my-4 w-full rounded-md border-0 bg-white  px-4 outline-none sm:text-xs"
        />
        <button className="w-full rounded-lg bg-text p-2 text-sm font-semibold text-white">
          SOUMETTRE
        </button>
      </form>
    </div>
  </footer>
);

export { Footer };
