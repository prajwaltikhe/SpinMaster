import { useNavigate } from 'react-router-dom'

function Result() {
  const coupon = ['6CcYza', 'wAaERi', 'XkJHQc', 'kx5VHj', '29VE3j', 'Ua85hn']
  const navigate = useNavigate()
  function handleCopy(e: { preventDefault: () => void }) {
    e.preventDefault()
    let copiedText = document.getElementById('code') as HTMLInputElement
    copiedText.select()
    copiedText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copiedText.value)
    alert('Copied the coupon code: ' + copiedText.value)
    navigate('/')
  }
  return (
    <div className='HEAD py-6 mt-6 items-center justify-center'>
      <div className='flex-col IMA flex RES'>
        <img
          src='https://ik.imagekit.io/2e35v6mja/wheel.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669488153409'
          alt='wheel'
        />
      </div>
      <div className='flex-col justify-center items-center'>
        <h2 className='text-center font-extrabold MAST text-gray-900'>
          Congrats! You Won:
        </h2>
        <h1 className='text-center mt-2 font-extrabold text-gray-900'>
          Best Coupon Reward <br /> of our Store
        </h1>
        <form className='text-center'>
          <div className='mt-4 MOST flex items-center justify-center'>
            <input
              type='text'
              defaultValue={coupon[Math.floor(Math.random() * coupon.length)]}
              id='code'
              className='form-control p-2 font-bold'
            />
            <button onClick={handleCopy} className='bg-green-600 text-white'>
              Copy
            </button>
          </div>
          <button
            className='w-80 SignButton font-bold mt-5 text-white rounded p-3'
            onClick={handleCopy}
          >
            Close Panel & Copy
          </button>
        </form>
      </div>
    </div>
  )
}

export default Result
