export function Brillo({width, top, left, height, blur}){
    return( <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          top: `${top}px`,
          left: `${left}px`,
          filter: `blur(${blur}px)`
        }}
        className="bg-[#372688]/50 rounded-full absolute z-40"
      ></div>
    )



}