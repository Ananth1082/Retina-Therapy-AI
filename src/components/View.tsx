
const View = (props:any) => {
    function HandleClick(e:any){
        e.preventDefault()
        props.destination[0].current.scrollIntoView({behavior: "smooth"})
    }
  return (
    <a className='cursor-pointer' onClick={(e)=> HandleClick(e)} href={props.destination}>
      {props.children}
    </a>
  )
}

export default View
