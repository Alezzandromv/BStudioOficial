import React from "react";

export function ContactForm () {
  return (
      <div className="w-full px-24 bg-transparent">
        <form className="space-y-6 text-start text-[20px] text-white/80">
          <div>
            <label
              htmlFor="name"
              className="block text-[20px] font-medium text-white"
            >
              Nombre completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 w-full p-3 bg-transparent rounded-lg border-2 border-[#6952FF]  focus:outline-none focus:ring-2 focus:ring-[#5C43FF]"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-[20px] font-medium text-white"
              >
                Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 w-full p-3 bg-transparent rounded-lg border-2 border-[#6952FF]  focus:outline-none focus:ring-2 focus:ring-[#5C43FF]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[20px] font-medium text-white"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full p-3 bg-transparent  rounded-lg border-2 border-[#6952FF]  focus:outline-none focus:ring-2 focus:ring-[#5C43FF]"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-[20px] font-medium text-white"
            >
              ¿En qué podemos ayudarte? *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="mt-1 w-full p-3 bg-transparent rounded-lg border-2 border-[#6952FF]  focus:outline-none focus:ring-2 focus:ring-[#5C43FF]"
            ></textarea>
          </div>
          <div>
          <button className='btn-section bg-[#5C43FF] py-3 px-20 mt-5 rounded-[15px] text-[22px] font-bold max-w-[300px]'>Enviar</button>
       
          </div>
        </form>
        
      </div>
  );
};
