import WheelComponent from 'react-wheel-of-prizes'
import { useNavigate } from 'react-router-dom'

function SpinWheel() {
  const segments = [
    'BUY1 GET1 FREE',
    'FREE HOT COFFEE',
    '500₹ VOUCHER',
    'FREE COLD DRINK',
    'BUY TEA @50%',
    'FLAT 30% OFF',
  ]
  const segColors = [
    '#FA5454',
    '#F0EFDB',
    '#FA5454',
    '#F0EFDB',
    '#FA5454',
    '#F0EFDB',
  ]
  const navigate = useNavigate()
  const onFinished = (winner) => {
    alert('You won: ' + winner)
    navigate(`/result`)
  }
  return (
    <div className='main flex items-center justify-center'>
      <h2 className='font-bold text-2xl mt-5 mark'>Click to Spin</h2>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment={segments}
        onFinished={(winner) => onFinished(winner)}
        primaryColor='#ffc107'
        contrastColor='black'
        buttonText='🎁'
        isOnlyOnce={true}
        id='wheel'
        size={220}
        upDuration={100}
        downDuration={1000}
        fontFamily='Poppins'
      />
    </div>
  )
}

export default SpinWheel
