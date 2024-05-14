'use client'

import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue
} from 'framer-motion'

export default function Home() {
  const primary = useMotionValue('102 65 169')
  const background = useMotionTemplate`linear-gradient(to bottom right, rgb(${primary}), rgb(59 7 100))`

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const color = e.currentTarget.getAttribute('data-color') as string

    // Update the primary color
    const root = document.documentElement
    root.style.setProperty('--primary', color)

    // Animate the primary color
    animate(primary, color, { duration: 1 })
  }

  return (
    <motion.section className='min-h-screen py-24' style={{ background }}>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Background gradient animation</h1>

        <div className='mt-4 flex gap-3'>
          <button
            onClick={handleClick}
            data-color='88 202 155'
            className='rounded-lg border px-3 py-1'
          >
            Green
          </button>
          <button
            onClick={handleClick}
            data-color='196 26 105'
            className='rounded-lg border px-3 py-1'
          >
            Pink
          </button>
          <button
            onClick={handleClick}
            data-color='102 65 169'
            className='rounded-lg border px-3 py-1'
          >
            Purple
          </button>
        </div>
      </div>
    </motion.section>
  )
}
