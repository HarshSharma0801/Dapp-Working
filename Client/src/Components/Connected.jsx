


const Connected =(props)=>{

return(
    <div className='flex  p-20 justify-center'>
      <h1 className='text-2xl font-bold p-5'>MetaMask connected at address: {props.address}</h1>
    </div>
)

}

export default Connected