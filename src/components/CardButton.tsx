const CardButton = () => {
  return (
    <button className='bg-primary hover:bg-primary/70 transition-colors w-10 h-10 rounded-full relative'>
      <span className='icon-cart text-xl'></span>
      <span
        className="
          absolute top-[-5px] right-[-5px] h-5 w-5 font-svn font-bold text-xs text-white
          bg-secondary rounded-full border border-white leading-[18px] text-center
        "
      >
        2
      </span>
    </button>
  )
}

export default CardButton