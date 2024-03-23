const Auth = () => {
  return (
    <div className="flex flex-row bg-primary-100 md:px-16">
      <div className="my-5 h-[100vh] w-[48%]">
        <img
          src="/logo.png"
          className="mt-3 h-8 w-10 md:mr-3 lg:h-12 "
          alt="Docta Mobile Logo"
        />
        <div className=" grow-1 mt-20  justify-center">
          <img
            src="/assets/images/home/megaphone.png"
            className="mx-0 ml-[-42px] mt-3 h-[20rem]"
            alt="Docta Mobile Logo"
          />
          <p className="text-[1.5rem] font-medium">
            Nous allons vous poser quelques questions
            <br /> avant de generer votre fiche
          </p>
        </div>
      </div>
      <div className="h-[100vh] w-[2px] bg-primary-400"></div>
      <div className="my-8 h-[100vh] w-[48%] bg-green/10 px-8">
        <p>Question 1/5</p>
        <p className="mt-[10rem] text-[1.5rem]">
          Quel est votre numero de telephone ?
        </p>
        <input className="mt-10 h-[50px] w-[40vw] rounded-[10px] border-[1px] border-red/30 bg-primary-200 px-4 text-[16px]"></input>
        <button className="mt-10 rounded-[10px] bg-green px-8 py-3 text-white">
          Continuer
        </button>
      </div>
    </div>
  );
};

export default Auth;
