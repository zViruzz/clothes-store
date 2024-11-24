import type { SVGProps } from 'react'

const TiktokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className='icon flat-color'
    data-name='Flat Color'
    viewBox='0 0 24 24'
    aria-hidden='true'
    {...props}
  >
    <path
      d='M21 7v2a1 1 0 0 1-1 1 8 8 0 0 1-4-1.08v6.58a6.5 6.5 0 1 1-9.47-5.78 1 1 0 0 1 1.47.9v2.52a.92.92 0 0 1-.28.62 2.49 2.49 0 0 0 2 4.23A2.61 2.61 0 0 0 12 15.35V3a1 1 0 0 1 1-1h2.11a1 1 0 0 1 1 .83A4 4 0 0 0 20 6a1 1 0 0 1 1 1Z'
      style={{
        fill: '#000',
      }}
    />
  </svg>
)
export default TiktokIcon
