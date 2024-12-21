import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm () {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ewx9ihd', 'template_m3ierqk', form.current, {
        publicKey: 'ktCsYrXAOErrtdRb0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
      <div className="w-full px-2 sm:px-24 bg-transparent">
        <form className="space-y-6 text-center text-[18px] text-white/80
                         sm:text-start sm:text-[20px]"
                         ref={form} onSubmit={sendEmail}>
          <div>
            <label
              htmlFor="name"
              className="block text-[18px] sm:text-[20px] font-medium text-white"
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
                className="block text-[18px] sm:text-[20px] font-medium text-white"
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
                className="block text-[18px] sm:text-[20px] font-medium text-white"
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
              className="block text-[18px] sm:text-[20px] font-medium text-white"
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
          <input type='submit' className='btn-section bg-[#5C43FF] py-3 px-16 sm:px-20 mt-5 rounded-[15px] text-[18px] sm:text-[20px] font-bold max-w-[300px]' value="Enviar"/>
          </div>
        </form>
        
      </div>
  );
};
