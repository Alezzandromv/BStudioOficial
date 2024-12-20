import './services.css'

export function Services({img, title,des}){
    return(
         <div className="p-10 rounded-2xl border-[5px] border-[#5d5cff] border-opacity-25 flex flex-col gap-4">
            <img className='w-[90px]' src={img} alt="" />
            <h5 className='text-[30px] font-semibold'>{title}</h5>
            <p className='text-[22px]'>{des}</p>
            <a className='text-[22px] text-[#897FFD] font-semibold'>Conoce más ➝</a>
         </div>
    )
}