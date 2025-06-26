function Contacto() {
  return (
    <>
     <section id="contacto">
      <p className="font-extrabold tracking-tight text-5xl mt-3 font-manrope text-[#2a3644] text-center xl:text-start xl:ml-12">
        CONTACTO
      </p>
      <div className="flex justify-center h-32 gap-8 mb-8 xl:justify-start xl:ml-12">
        <a
          href="https://www.linkedin.com/in/kevindiazsuarez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center justify-end h-full">
            <img
              className="w-15 h-20 object-contain transition duration-300 hover:opacity-65"
              src="src\assets\icons8-linkedin-96.png"
              alt="github-logo"
            />
            <p className="text-black text-sm text-center font-medium font-lora">
              LinkedIn
            </p>
          </div>
        </a>
        <div className="flex flex-col items-center justify-end h-full">
          <a
            href="mailto:kevinds1895@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-12 h-20 object-contain transition duration-300 hover:opacity-65"
              src="src\assets\gmail.png"
              alt="gmail-logo"
            />

            <p className="text-black text-sm text-center font-medium font-lora">
              Gmail
            </p>
          </a>
        </div>
      </div>
      </section>
    </>
  );
}
export default Contacto;
