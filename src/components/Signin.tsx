import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Envelope from '../utils/Envelope'
import Phone from '../utils/Phone'

function Signin() {
  var email, phone
  const [value, setValue] = useState('Test Your Luck')
  const navigate = useNavigate()

  function validateEmail(email: string) {
    const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g
    const result = pattern.test(email)
    return result
  }

  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault()
    phone = (document.getElementById('number') as HTMLInputElement).value
    email = (document.getElementById('email') as HTMLInputElement).value
    let emailValid = validateEmail(email)

    if (emailValid === false && phone.trim().length < 5) {
      alert('Please enter correct details')
      navigate('/')
    } else {
      setValue('Loading...')
      setTimeout(() => {
        navigate('/spinwheel')
      }, 1500)
    }
  }
  return (
    <form className='min-h-screen HEAD items-center space-y-10 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='flex-col flex IMA items-center justify-center overflow-hidden'>
        <img
          src='https://ik.imagekit.io/2e35v6mja/wheel.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669488153409'
          alt='wheel'
        />
      </div>
      <div className='flex-col'>
        <div className='max-w-md w-full mx-auto px-10 space-y-6'>
          <h1 className='text-start font-extrabold text-gray-900'>
            This is how Engagebud <br /> looks like in action!
          </h1>
          <div className='flex flex-row bg-white p-2'>
            <div className='flex-col p-2 pt-3'>
              <Envelope />
            </div>
            <div className='flex-col'>
              <span className='flex text-sm font-bold px-3 text-gray-600 mb-1'>
                Email Address
              </span>
              <input
                className='bg-white px-3 INP'
                type='text'
                name='email'
                minLength={5}
                id='email'
                required
                placeholder='Enter your email address'
              />
            </div>
          </div>
          <div className='flex flex-row bg-white p-2'>
            <div className='flex-col p-2 pt-3'>
              <Phone />
            </div>
            <div className='flex-col'>
              <span className='flex text-sm font-bold px-3 text-gray-600 mb-1'>
                Phone number
              </span>
              <input
                className='bg-white px-3 INP'
                type='number'
                name='number'
                id='number'
                minLength={5}
                required
                placeholder='Enter your phone number'
              />
            </div>
          </div>
          <div className='flex p-1 CHECK items-center justify-center rounded space-x-2'>
            <input
              className='h-10 w-10 cursor-pointer m-2 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
              type='checkbox'
              name='agree'
              id='agree'
              required
            />
            <span className='text-xs p-1'>
              I agree to receiving recurring automated messages at the number I
              have provided. <br /> Consent is not a condition to purchase.
            </span>
          </div>
          <div>
            <button
              className='w-full SignButton font-extrabold text-white rounded-md p-3'
              onClick={handleClick}
            >
              {value}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Signin
