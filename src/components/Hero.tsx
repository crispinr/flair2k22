/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { IconProps } from './Header'
import { motion } from 'framer-motion'

const DownArrow = ({ xCss, ...props }: IconProps) => (
  <motion.svg
    initial={{ x: -25 }}
    animate={{ y: [-10, -10, 0, 0], opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 2,
      times: [0, 0.25, 0.75, 1],
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 1,
    }}
    css={xCss}
    {...props}
    width="49"
    height="17"
    viewBox="0 0 49 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L24.9273 15L48 1" stroke="white" strokeWidth="2" />
  </motion.svg>
)

const tagLineCss = css`
  font-family: var(--font-sans);
  color: var(--white);
  font-size: 40px;
`
const ctaCss = css`
  font-family: var(--font-serif);
  color: var(--l-blue);
  cursor: pointer;
  font-weight: 100;

  display: inline-block;
  position: relative;
  margin-top: 20px;
  font-size: 28px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--l-blue);
  }
`
const Hero = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;

        position: relative;
        background-image: url('/Bg.png');
        background-size: cover;
      `}
    >
      <div
        css={css`
          position: absolute;
          left: 40px;
          bottom: 140px;
        `}
      >
        <h1 css={tagLineCss}>Unlock.</h1>
        <h1 css={tagLineCss}>Within</h1>
        <h2 css={ctaCss}>Register Now</h2>
      </div>
      <DownArrow
        xCss={css`
          position: absolute;
          bottom: 35px;
          left: 50%;
        `}
      />
    </div>
  )
}

export default Hero
