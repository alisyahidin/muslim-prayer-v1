import posed from 'react-pose'

const easing = [.10, .60, .40, 1]

const SvgMosque = posed.img({
  normal: {
    width: '70%',
    bottom: 0,
    right: 45,
    transition: {
      ease: easing,
      duration: 800,
    }
  },
  chibi: {
    width: '40%',
    bottom: -0.5,
    right: 30,
    transition: {
      ease: easing,
      duration: 800,
    }
  },
})

export default SvgMosque