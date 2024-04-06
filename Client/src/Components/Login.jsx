

const Login = (props)=>{

return(
    <div className='flex  p-20 justify-center'>
    <button onClick={props.connect} className='bg-blue-700 text-white rounded-xl p-5' >Connect Wallet</button>
    </div>
)


}

export default Login