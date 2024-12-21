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

import { handleScroll } from './components/nav/Nav'
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
    
      <header className='relative z-50 px-5
                         sm:px-0'>
        <NavBs></NavBs>
        <section className='header-section mt-10 flex flex-col justify-center items-center gap-10
                            sm:px-20 sm:items-start'>
          <h1 className='header-section-title font-bold text-center text-[50px]
                         sm:text-[80px] sm:leading-[100px] sm:text-left sm:max-w-[800px] '>
            El <span className='text-transparent bg-clip-text bg-gradient-to-r
             from-[#FFFFFF] via-[#8674FB] to-[#725CFE]'>respaldo </span>
            digital que necesitas
            para tu empresa<span className='text-transparent bg-clip-text bg-gradient-to-r
             from-[#FFFFFF] via-[#8674FB] to-[#725CFE] text-[100px] leading-[20px]
             sm:text-[200px]'>.</span>
          </h1>
          <h3 className='header-section-des text-center text-[18px]
                         sm:text-[22px] sm:text-left sm:max-w-[750px]'>
            Creamos programas personalizados que destacan por su diseño único
            y funcionalidad optimizada, ayudando a que tu negocio alcance
            nuevos niveles de éxito.
          </h3>
          <button className='header-section-btn text-[#171719] min-w-[256px] bg-[#fff] 
          py-4 rounded-[15px] text-[24px] font-bold' onClick={() => handleScroll('contacto')}>Contactanos</button>
        </section>
      </header>
      <section className='section-inf relative z-40 mt-64 px-6
                          flex flex-col justify-center text-center gap-5
                          sm:px-20'>
        <h4 className='text-[40px] font-bold sm:text-[50px]'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r
        from-[#FFFFFF] via-[#8674FB] to-[#725CFE] text-[150px] leading-[20px]
          sm:text-[200px]'>.</span>
        Todo lo que necesitas
        </h4>
        <p className='max-w-[527px] min-w-[150px] text-[18px] m-auto text-center
                      sm:text-[20px]'>
        Desarrollamos soluciones web, sistemas y tecnología 
        a medida. Optimiza procesos, mejora tu presencia
        digital y lleva tu empresa al siguiente nivel 
        con herramientas innovadoras y personalizadas.
        </p>
      </section>
      
      <main className='px-6 relative mt-36 z-20 text-center
                       sm:px-20'>
        <section id='servicios' className='sec-servicios text-center relative z-60
                            sm:text-start'>
          <h2 className='text-[40px] font-medium sm:text[50px]'>
            Nuestros servicios  <img src={dec1} className=' inline-block'/>
          </h2>
          
          <p className='text-[18px] sm:text-[20px]'>
            Explora los servicios que tenemos para ti
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-10 gap-6 text-start">
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
          <h6 className='text-[30px] font-bold
                         sm:text-[50px]'>Construimos  
            <span className='text-transparent bg-clip-text bg-gradient-to-r
        from-[#FFFFFF] via-[#8674FB] to-[#725CFE] leading-[20px]'> soluciones digitales</span> que potencian tu
        <br /><img src={dec1} className='inline-block w-6 sm:w-14'/> negocio y marcan un nuevo camino en tu sector.</h6>
          <button className='btn-section bg-[#5C43FF] py-3 px-10  mt-5 rounded-[15px] text-[22px] font-bold
                            sm:px-20' onClick={() => handleScroll('contacto')}>Contactanos</button>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-3 mt-10 gap-10 text-start
                            ">
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
          
          <section id='proyectos' className='sec-proyectos  text-center relative z-60 mt-[100px]
                              sm:text-start'>
            <h2 className='text-[40px] sm:text-[50px] font-medium'>
              Nuestros proyectos  <img src={dec1} className=' inline-block w-6 sm:w-10'/>
            </h2>
             <p className='text-[18px] sm:text-[20px]'>
              Explora nuestros trabajos realizados
            </p>
            <Slider></Slider>
         </section>
           
           <section className='mt-[150px]' id='nosotros'>
            <h5 className='text-[35px] font-bold
                           sm:text-[50px]'>¿Quienes Somos?</h5>
            <p className='text-transparent text-[20px] bg-clip-text bg-gradient-to-r
          from-[#FFFFFF] to-[#725CFE] leading-[20px] mt-2
            sm:text-[24px]'> 
              El respaldo digital que necesitas para seguir creciendo
            </p>
          </section>

          <section className='flex justify-center align-middle mt-20 flex-wrap'>
            <div className='p-2
                            sm:p-20'>
              <img  src={logo2} alt="" className='min-w-[250px] sm:max-w-[400px]' />
            </div>
            <div className='flex-1 text-center pt-10 px-2 flex flex-col gap-5
                            sm:text-start'>
              <h4 className='text-transparent text-[40px] bg-clip-text bg-gradient-to-r
            from-[#FFFFFF] to-[#725CFE] font-bold
              sm:text-[60px]'>Somos Backup Studio</h4>
              <p className='text-[18px] leading-[30px]
                            sm:text-[26px] sm:leading-[45px]'>Somos un equipo apasionado que transforma ideas en soluciones tecnológicas efectivas.
                Con experiencia en diseño y desarrollo,creamos herramientas únicas que combinan 
                innovación, funcionalidad y estética.</p>
              <button className='btn-section bg-[#5C43FF] py-3 px-10 sm:px-20 mt-5 mx-auto sm:mx-0 rounded-[15px] text-[22px] font-bold max-w-[300px]'onClick={() => handleScroll('contacto')}>Contactanos</button>
       
            </div>
          </section>

          <section id='contacto' className='mt-[150px] px-2'>
            <h5 className='text-[40px] font-bold
                           sm:text-[50px]'>¿Qué esperas para crecer?</h5>
            <p className='text-transparent text-[18px] bg-clip-text bg-gradient-to-r
          from-[#FFFFFF] to-[#725CFE] leading-[20px] mt-2
            sm:text-[20px]'> 
              Ponte en contacto con nosotros, somos tu respaldo digital
            </p>
          </section>

           <section className='mt-28'>
            <ContactForm></ContactForm>
           </section>

      </main>

      <footer className='footer px-10 pb-20 relative flex flex-wrap justify-between items-end h-[450px] w-full
                         sm:px-20'>
           <div className='min-w-[100%]
                           sm:min-w-[350px]'>  
              <img src={logoBs} alt="" className='max-w-[250px] m-auto
                                                  sm:w-[300px] '/>
              <p className='text-[16px]'><span className='font-extrabold text-[20px]'>®</span> copyright 2025 
              <span className='font-bold'> Backup Studio</span></p>
           </div>
           <div className='text-[25px] w-[100%] sm:w-[30%]'>
            <h6 className='text-[20px]'>Contactanos</h6>
            <FontAwesomeIcon className="mx-2" icon={faWhatsapp} />
            <FontAwesomeIcon className="mx-2" icon={faGoogle} />
            <FontAwesomeIcon className="mx-2" icon={faFacebook} />
           </div>
           
      </footer>
      
      
      <div className='bg-container h-[1500px] w-full z-10 '>
      </div>
      
    </  >

  )
}

export default App
