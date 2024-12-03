
const Banner = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className='w-full mb-20'>
      <img
        src={imgUrl}
        alt="Banner"
        className=" object-cover h-[450px] w-[100%]"
      />
    </div>
  )
}

export default Banner