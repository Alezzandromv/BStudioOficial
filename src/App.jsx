import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dec1 from './assets/dec1.svg'
import './App.css'
import { NavBs } from './components/nav/Nav'
import { Services } from './components/card-services/services'
import { Brillo } from './components/decoration/Brillo'
import s1 from './assets/code-pc.svg'
import s2 from './assets/pen-tool.svg'
import s3 from './assets/database.svg'
import s4 from './assets/curly-bracket.svg'
import s5 from './assets/image.svg'
import s6 from './assets/settings.svg'
import { Modelo } from './components/card-modelo/Modelo'
import { Slider } from './components/proyectos/Slide'
import  logo2 from './assets/logo23.svg'
import { ContactForm } from './components/contact-form/ContactForm'
import logoBs from './assets/logoBs.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const serv=[
  {
    img:s1,
    title: 'Desarrollo web',
    des: 'Creamos sitios modernos, rápidos y personalizados para impulsar tu negocio.'
  },
  {
    img:s2,
    title: 'Diseño web',
    des: 'Diseñamos sitios web atractivos, funcionales y optimizados para tu negocio.'
  },
  {
    img:s3,
    title: 'Sistemas web',
    des: 'Desarrollamos sistemas web personalizados, eficientes y escalables para tu empresa.'
  },
  {
    img:s4,
    title: 'Estrategias SEO',
    des: 'Implementamos estrategias SEO efectivas para aumentar tu visibilidad y atraer más clientes.'
  },
  {
    img:s5,
    title: 'Branding',
    des: 'Creamos identidades de marca únicas, auténticas y memorables para tu negocio.'
  },
  {
    img:s6,
    title: 'Optimización y Soporte',
    des: 'Ofrecemos optimización continua y soporte técnico para garantizar el rendimiento de tu web.'
  },
  
]
const mod=[
  {
    title: 'Enfoque en la excelencia.',
    des: 'Cada proyecto es único. Nos enfocamos en ofrecer soluciones digitales de alta calidad, adaptadas a tus necesidades',
    des2: 'Desarrollamos con precisión y creatividad para entregarte resultados que destacan.',
    icon1:s1,
    icon2:s1
  },{
    title: 'Trabajo colaborativo.',
    des:'Trabajamos de la mano contigo, comprendiendo tus ideas y objetivos para transformar tu visión en una realidad digital efectiva y funcional.',
     des2: 'Tu visión guía el proceso; nosotros la hacemos realidad.',
    icon1:s1,
    icon2:s1
  },{
    title: 'Resultados que impulsan.',
    des: 'Nos enfocamos en resultados medibles: sitios rápidos, sistemas eficientes y estrategias que conectan con tu audiencia',
    des2: 'Optimizamos cada entrega para un impacto real.',
    icon1:s1,
    icon2:s1
  },
]

function App() {


  return (
    <>
      <header className='relative z-20'>
        <NavBs></NavBs>
        <section className='header-section ml-20 mt-10 flex flex-col justify-center text-start gap-10'>
          <h1 className='header-section-title text-left text-[80px] font-bold leading-[100px]'>
            El <span className='text-transparent bg-clip-text bg-gradient-to-r
             from-[#FFFFFF] via-[#8674FB] to-[#725CFE]'>respaldo </span><br />
            digital que necesitas <br />
            para tu empresa<span className='text-transparent bg-clip-text bg-gradient-to-r
             from-[#FFFFFF] via-[#8674FB] to-[#725CFE] text-[200px] leading-[20px]'>.</span>
          </h1>
          <h3 className='header-section-des text-left text-[22px]'>
            Creamos programas personalizados que destacan por su diseño único <br />
            y funcionalidad optimizada, ayudando a que tu negocio alcance <br />
            nuevos niveles de éxito.
          </h3>
          <button className='header-section-btn text-[#171719] max-w-[256px] bg-[#fff] 
          py-4 rounded-[15px] text-[24px] font-bold'>Contactanos</button>
        </section>
      </header>
      <section className='section-inf relative z-40 mt-[10rem] 
                          flex flex-col justify-center text-center gap-5'>
        <h4 className='text-[50px] font-bold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r
        from-[#FFFFFF] via-[#8674FB] to-[#725CFE] text-[200px] leading-[20px]'>.</span>
        Todo lo que necesitas
        </h4>
        <p className='w-[527px] text-[20px] m-auto text-center'>
        Desarrollamos soluciones web, sistemas y tecnología 
        a medida. Optimiza procesos, mejora tu presencia
        digital y lleva tu empresa al siguiente nivel 
        con herramientas innovadoras y personalizadas.
        </p>
      </section>
      
      <main className='px-20 mt-[8rem] relative'>
        <section className='sec-servicios text-start relative z-60'>
          <h2 className=' text-[50px] font-medium'>
            Nuestros servicios  <img src={dec1} className=' inline-block'/>
          </h2>
          
          <p className='text-[20px]'>
            Explora los servicios que tenemos para ti
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] mx-auto mt-10 gap-6 text-start">
           {
            serv.map(({img,title,des})=>(
              <Services
                key={title}
                img={img}
                title={title}
                des={des}>
              </Services>
            ))
           }
          </div>
        </section>
        <section className='mt-[150px]'>
          <h6 className='text-[50px] font-bold'>Construimos  
            <span className='text-transparent bg-clip-text bg-gradient-to-r
        from-[#FFFFFF] via-[#8674FB] to-[#725CFE] leading-[20px]'> soluciones digitales</span> que potencian tu
        <br /><img src={dec1} className=' inline-block'/> negocio y marcan un nuevo camino en tu sector.</h6>
          <button className='btn-section bg-[#5C43FF] py-3 px-20 mt-5 rounded-[15px] text-[22px] font-bold'>Contactanos</button>
        </section>
        <Brillo
          key={"b1"}
          width={850}
          height={850}
          left={350}
          top={250}
          blur={500}
        ></Brillo>

        <section className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] mx-auto mt-10 gap-6 text-start">
           {
            mod.map(({title,des, des2, icon1, icon2})=>(
              <Modelo
                key={title}
                title={title}
                des={des}
                des2={des2}
                icon1={icon1}
                icon={icon2}>
              </Modelo>
            ))
           }
          </section>
          
          <section className='sec-proyectos  text-start relative z-60 mt-[100px]'>
            <h2 className=' text-[50px] font-medium'>
              Nuestros proyectos  <img src={dec1} className=' inline-block'/>
            </h2>
             <p className='text-[20px]'>
              Explora nuestros trabajos realizados
            </p>
            <Slider></Slider>
         </section>
           
           <section className='mt-[150px]'>
            <h5 className='text-[50px] font-bold'>¿Quienes Somos?</h5>
            <p className='text-transparent text-[24px] bg-clip-text bg-gradient-to-r
          from-[#FFFFFF] to-[#725CFE] leading-[20px] mt-2'> 
              El respaldo digital que necesitas para seguir creciendo
            </p>
          </section>

          <section className='flex justify-center align-middle mt-20 flex-wrap'>
            <div className='p-20 '>
              <img  src={logo2} alt="" className='max-w-[400px]' />
            </div>
            <div className='flex-1 text-start pt-10 px-20 flex flex-col gap-5 '>
              <h4 className='text-transparent text-[60px] bg-clip-text bg-gradient-to-r
            from-[#FFFFFF] to-[#725CFE] font-bold'>Somos Backup Studio</h4>
              <p className='text-[26px] leading-[45px]'>Somos un equipo apasionado que transforma ideas en soluciones tecnológicas efectivas.
                Con experiencia en diseño y desarrollo,creamos herramientas únicas que combinan 
                innovación, funcionalidad y estética.</p>
              <button className='btn-section bg-[#5C43FF] py-3 px-20 mt-5 rounded-[15px] text-[22px] font-bold max-w-[300px]'>Contactanos</button>
       
            </div>
          </section>

          <section className='mt-[150px]'>
            <h5 className='text-[50px] font-bold'>¿Qué esperas para crecer?</h5>
            <p className='text-transparent text-[24px] bg-clip-text bg-gradient-to-r
          from-[#FFFFFF] to-[#725CFE] leading-[20px] mt-2 '> 
              Ponte en contacto con nosotros, somos tu respaldo digital
            </p>
          </section>

           <section className='mt-28'>
            <ContactForm></ContactForm>
           </section>

      </main>

      <footer className='footer px-20 pb-20 relative flex flex-wrap justify-between items-end h-[450px]'>
           <div className='min-w-[340px]'>  
              <img src={logoBs} alt="" className='w-[300px]'/>
              <p className='text-[16px]'><span className='font-extrabold text-[20px]'>®</span> copyright 2025 
              <span className='font-bold'> Backup Studio</span></p>
           </div>
           <div className='text-[25px]'>
            <h6 className='text-[20px]'>Contactanos</h6>
            <FontAwesomeIcon className="mx-2" icon={faWhatsapp} />
            <FontAwesomeIcon className="mx-2" icon={faGoogle} />
            <FontAwesomeIcon className="mx-2" icon={faFacebook} />
           </div>
           
      </footer>
      
      
      <div className='bg-container h-[895px] w-full z-10 '>
      </div>
      
    </  >

  )
}

export default App
