import './services.css'

export function Services({img, title,des}){
    return(
         <div className="px-8 py-5 items-center text-center rounded-2xl border-[5px] border-[#5d5cff] border-opacity-25 flex flex-col gap-4
                        sm:items-start sm:text-start sm:p-10">
            <img className='w-[80px] sm:w-[90px]' src={img} alt="" />
            <h5 className='text-[26px] font-semibold sm:text-[30px]'>{title}</h5>
            <p className='text-[18px] sm:text-[22px]' >{des}</p>
            <a className='text-[18px] sm:text-[22px] text-[#897FFD] font-semibold'>Conoce más ➝</a>
         </div>
    )
}