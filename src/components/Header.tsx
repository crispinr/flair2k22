/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import mq from '../utils/mq'
import NavList from './NavList'
import logo from '../assets/images/logo-1.png'

const HamMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <nav
      css={css`
        /* display: none; */
        position: absolute;
        /* z-index: 20; */
        width: 100%;
        /* right: 0; */
        top: 0;
        right: 0;
        text-align: end;
        height: ${window.innerHeight}px;
        background-color: rgba(0, 0, 0, 0.7);
      `}
      onClick={closeMenu}
    >
      <svg
        css={css`
          max-width: 430px;
          ${mq['md']} {
            width: 80%;
            max-width: 650px;
          }
        `}
        onClick={(e) => {
          e.stopPropagation()
        }}
        width="88%"
        viewBox="0 2 315 535"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M76.5 1.25919L315 1.25918V535C283.713 534.11 250.431 535 203.5 535C156.569 535 125.951 529.641 113.5 482.5L15 119.5C-27.2744 -24.6271 31.311 4.00001 76.5 1.25919Z"
          fill="white"
        />
      </svg>
      <ul
        onClick={(e) => e.stopPropagation()}
        css={css`
          position: absolute;
          top: 100px;
          right: 30px;
          height: 100%;
          max-height: 320px;
          font-family: var(--font-sans);
          font-size: 20px;

          color: var(--black);
          display: flex;
          justify-content: space-around;

          flex-direction: column;

          ${mq['md']} {
            top: 50%;
            font-size: 1.5em;
            transform: translateY(-55%);
            right: 50px;
            max-height: 400px;
          }
          a {
            text-decoration: none;
            cursor: pointer;
            user-select: none;
            transition: all ease-in-out 0.1s;
            &:active {
              position: relative;
              font-size: 24px;
              font-weight: 600;
            }
          }
        `}
      >
        <NavList closeMenu={closeMenu} />
      </ul>
    </nav>
  )
}

const blackOverlay = css`
  width: 100vw;
  height: 100%;
  top: 0;
  @media (min-width: 1200px) {
    left: calc((1200px - 100vw) / 2);
  }
  position: absolute;
  z-index: -1;
  background-color: var(--black);
`

type IconProps = {
  xCss?: SerializedStyles
  onClick?: React.MouseEventHandler
  close?: boolean
}
const Icon = ({ xCss, close = true, ...props }: IconProps) => (
  <div
    {...props}
    css={css`
      ${xCss}

      width: 35px;
      height: 35px;
      padding: 5px;
    `}
  >
    {close ? (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#015CA1" fillRule="nonzero">
          <path d="M14 .189c-.306.846-.71 1.592-1.15 2.303-.442.711-.927 1.377-1.44 2.007-1.016 1.295-2.418 2.195-3.65 3.266a157.749 157.749 0 0 1-3.74 3.167C2.741 11.958 1.492 13.002.188 14L0 13.811c.998-1.305 2.05-2.555 3.066-3.833 1.043-1.26 2.095-2.51 3.165-3.743 1.07-1.232 1.97-2.636 3.264-3.644a16.907 16.907 0 0 1 2.005-1.44C12.21.712 12.957.307 13.802 0L14 .189Z" />
          <path d="M.189 0c.846.306 1.592.71 2.303 1.152.711.44 1.377.926 2.007 1.44 1.295 1.007 2.195 2.41 3.266 3.643a178.263 178.263 0 0 1 3.167 3.743c1.026 1.278 2.07 2.528 3.068 3.833l-.189.189c-1.305-.999-2.555-2.051-3.833-3.068a178.263 178.263 0 0 1-3.743-3.167c-1.232-1.07-2.627-1.97-3.644-3.257A16.919 16.919 0 0 1 1.151 2.5C.712 1.781.307 1.044 0 .19L.189 0Z" />
        </g>
      </svg>
    ) : (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 22 22"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Menu</title>
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="icon-/-hamburger-/-dark"
            fill="var(--white)"
            fillRule="nonzero"
          >
            <g
              id="Menu---Hamburger-2"
              transform="translate(3.000000, 4.000000)"
            >
              <path
                d="M1,1.90559878 C2.00134614,1.75253201 3.00269227,1.6504875 3.99596159,1.52293187 C4.99730197,1.40812952 5.9986481,1.31246393 7,1.23593054 C8.00136342,1.15302279 9.00266923,0.897911515 9.99596735,1.04459936 C10.4966491,1.10200054 10.9972732,1.19128721 11.4979549,1.32522176 C11.9986366,1.45915177 12.4993183,1.6313553 13,1.90559878 L13,2.09692996 C12.4993183,2.37117345 11.9986366,2.54337697 11.4979549,2.67730698 C10.9972732,2.81762045 10.4966491,2.90053276 9.99596735,2.95792938 C8.99460394,3.09824286 8.00136342,2.8495105 7,2.7665982 C5.9986481,2.6836859 4.99730197,2.58802031 3.99596159,2.47959688 C3.00269227,2.35204124 2.00134614,2.24999673 1,2.09692996 L1,1.90559878 Z"
                id="Path"
              />
              <path
                d="M0,7.90421906 C0.746199219,7.62960969 1.50069105,7.45722717 2.24689618,7.32311138 C2.9930954,7.1826178 3.74758724,7.09961543 4.49378645,7.04212422 C5.99445976,6.90163064 7.49517447,7.1506833 8.99588918,7.23373122 C10.4965447,7.3103558 11.9972595,7.40611374 13.4979742,7.52105061 C14.9986297,7.64878861 16.4993444,7.7509699 18,7.90421906 L18,8.0957805 C16.4993444,8.24902966 14.9986297,8.35121095 13.4979742,8.47894895 C11.9972595,8.59388582 10.4965447,8.68964376 8.99588918,8.7663139 C7.49517447,8.84931627 5.99445976,9.09836892 4.49378645,8.95787534 C3.74758724,8.90038413 2.9930954,8.81100398 2.24689618,8.67688819 C1.50069105,8.53639461 0.746199219,8.37038987 0,8.0957805 L0,7.90421906 Z"
                id="Path"
              />
              <path
                d="M6,13.9044608 C7.00203689,13.7515985 8.00401614,13.6496751 8.99798232,13.5222596 C10.0000192,13.4076128 11.0019985,13.3120966 11.9959646,13.2356654 C12.9979439,13.1528271 13.9999808,12.8980414 14.993947,13.0445421 C15.4949078,13.1018882 15.9959262,13.1910427 16.4969447,13.32482 C16.9979631,13.4585972 17.4989816,13.6305446 18,13.9044608 L18,14.0955387 C17.4989816,14.3694549 16.9979631,14.5414023 16.4969447,14.6751796 C15.9959262,14.8153185 15.4949078,14.8981114 14.993947,14.9554575 C13.9919101,15.1019581 12.9898732,14.8471724 11.9959646,14.7643796 C10.9939277,14.687903 9.99189085,14.5923867 8.99798232,14.47774 C7.99594543,14.3503244 6.99396618,14.2484011 6,14.0955387 L6,13.9044608 Z"
                id="Path"
              />
              <path
                d="M15.5647578,3.8199426 C15.796887,4.06001913 16.2031278,4.06001913 16.4351979,3.8199426 L17.8445326,2.37173209 C18.0518225,2.16263335 18.0518225,1.83736927 17.8445326,1.62827054 L16.4351979,0.18005781 C16.2031278,-0.06001927 15.796887,-0.06001927 15.5647578,0.18005781 L14.1554231,1.62827054 C13.9481923,1.83736927 13.9481923,2.16263335 14.1554231,2.37173209 L15.5647578,3.8199426 Z"
                id="Path"
              />
              <path
                d="M1.56476952,15.8199592 C1.79689422,16.0600136 2.203108,16.0600136 2.4352327,15.8199592 L3.84455825,14.3717321 C4.05181392,14.1626168 4.05181392,13.8373693 3.84455825,13.628254 L2.4352327,12.1800823 C2.203108,11.9399726 1.79689422,11.9399726 1.56476952,12.1800823 L0.155440423,13.628254 C-0.0518134742,13.8373693 -0.0518134742,14.1626168 0.155440423,14.3717321 L1.56476952,15.8199592 Z"
                id="Path"
              />
            </g>
          </g>
        </g>
      </svg>
    )}
  </div>
)

let prevScrollTop = 0
const Header = () => {
  const [showOverlay, setOverlay] = useState(false)
  const [isVisible, setVisible] = useState(true)
  const [showHamburger, setHamburger] = useState(false)

  const checkScroll = () => {
    window.scrollY > prevScrollTop && setVisible(false)
    window.scrollY < prevScrollTop && setVisible(true)

    if (window.scrollY != prevScrollTop) {
      setHamburger(false)
      if (window.location.pathname === '/') {
        window.scrollY > window.innerHeight - 70
          ? setOverlay(true)
          : setOverlay(false)
      } else {
        window.scrollY < prevScrollTop ? setOverlay(true) : setOverlay(false)
      }
    }
    prevScrollTop = window.scrollY
    // window.requestAnimationFrame(checkScroll)
  }
  useEffect(() => {
    window.onscroll = () => {
      checkScroll()
    }
  }, [])

  return (
    <motion.header
      animate={
        isVisible ? { opacity: 1 } : { opacity: 0, pointerEvents: 'none' }
      }
      css={css`
        width: 100%;
        max-width: 1200px;
        left: 50%;
        transform: translateX(-50%);

        position: fixed;
        z-index: 20;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        ${mq['md']} {
          // padding-top: 10px;
        }
        ${mq['lg']} {
          justify-content: flex-start;
          /* align-items: initial; */
        }
      `}
      className="rounded"
    >
      {showHamburger && (
        <HamMenu
          closeMenu={() => {
            setHamburger(false)
          }}
        />
      )}
      <motion.div
        css={blackOverlay}
        initial={{ y: -100 }}
        animate={isVisible && showOverlay ? { y: 0 } : { y: -100 }}
        transition={{ ease: 'easeInOut' }}
      ></motion.div>
      <a
        href="/"
        css={css`
          text-decoration: none;

          img {
            height: 60px;
            margin-top: 10px;

            ${mq['md']} {
              height: 60px;
            }

            ${mq['lg']} {
              // margin-left: 25px;
            }
          }
        `}
      >
        <img
          src={logo}
          alt="logo"
          css={css`
            position: relative;
            z-index: 10;
          `}
        />
      </a>
      <ul
        css={css`
          display: none;
          font-family: var(--font-sans);
          font-size: 16px;
          width: 50%;
          max-width: 420px;
          margin-left: auto;
          margin-right: 50px;

          color: var(--white);
          justify-content: space-between;
          a {
            text-decoration: none;
            cursor: pointer;
            position: relative;
            display: block;
            padding: 5px 5px;
            text-align: center;

            &:before {
              content: '';
              position: absolute;
              width: 100%;
              height: 1px;
              background-color: var(--white);
              bottom: -4px;
              transform: scaleX(0);
              transform-origin: right center;
              transition: transform cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
            }

            &:hover::before {
              transform: scaleX(1);
              transform-origin: left center;
            }
          }
          ${mq['lg']} {
            display: flex;
          }
        `}
      >
        <NavList />
      </ul>
      <Icon
        close={showHamburger}
        xCss={css`
          position: absolute;
          right: 25px;
          cursor: pointer;
          ${mq['md']} {
            width: 40px;
            height: 40px;
            right: 40px;
          }

          ${mq['lg']} {
            display: none;
          }
        `}
        onClick={() => {
          setHamburger(!showHamburger)
          // showOverlay && setOverlay(false)
        }}
      />
    </motion.header>
  )
}

export { Header as default, IconProps }
