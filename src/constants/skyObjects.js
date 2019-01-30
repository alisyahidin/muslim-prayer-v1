import cloud1 from '../assets/clouds/1.svg'
import cloud2 from '../assets/clouds/2.svg'
import cloud3 from '../assets/clouds/3.svg'
import cloud4 from '../assets/clouds/4.svg'
import cloud5 from '../assets/clouds/5.svg'
import star1 from '../assets/stars/1.svg'
import star2 from '../assets/stars/2.svg'
import star3 from '../assets/stars/3.svg'
import star4 from '../assets/stars/4.svg'
import sun from '../assets/sun/sun.svg'
import moon from '../assets/moon/moon.svg'

const prayers = {
  shubuh: [
    {
      size: 130,
      bottom: -20,
      right: 60,
      src: sun
    },
    {
      size: 100,
      bottom: 25,
      right: 60,
      src: moon,
      opacity: 0,
    },
    {
      size: 90,
      bottom: 33,
      right: 50,
      src: cloud2,
      opacity: 0.4,
    },
    {
      size: 100,
      bottom: 30,
      right: 27,
      src: cloud1,
      opacity: 0,
    },
    {
      size: 75,
      bottom: 39,
      right: 44,
      src: cloud3,
      opacity: 0,
    },
    {
      size: 80,
      bottom: 60,
      right: 35,
      src: cloud4,
      opacity: 0.15,
    },
    {
      size: 90,
      bottom: 37,
      right: 33,
      src: cloud5,
      opacity: 0,
    },
    {
      size: 50,
      bottom: 55,
      right: 17,
      src: star1
    },
    {
      size: 50,
      bottom: 37,
      right: 25,
      src: star2,
    },
    {
      size: 50,
      bottom: 45,
      right: 40,
      src: star3,
    },
  ],
  dzuhur: [
    {
      size: 130,
      bottom: 48,
      right: 60,
      src: sun
    },
    {
      size: 100,
      bottom: 25,
      right: 60,
      src: moon,
      opacity: 0,
    },
    {
      size: 90,
      bottom: 28,
      right: 57,
      src: cloud2
    },
    {
      size: 100,
      bottom: 35,
      right: 11,
      src: cloud1
    },
    {
      size: 75,
      bottom: 42,
      right: 47,
      src: cloud3
    },
    {
      size: 80,
      bottom: 54,
      right: 38,
      src: cloud4
    },
    {
      size: 90,
      bottom: 47,
      right: 17,
      src: cloud5
    },
    {
      size: 50,
      bottom: 37,
      right: 14,
      src: star1,
      opacity: 0,
    },
    {
      size: 50,
      bottom: 44,
      right: 37,
      src: star2,
      opacity: 0,
    },
    {
      size: 50,
      bottom: 45,
      right: 30,
      src: star3,
      opacity: 0,
    },
  ],
  ashar: [
    {
      size: 130,
      bottom: 27,
      right: 60,
      src: sun
    },
    {
      size: 100,
      bottom: 25,
      right: 60,
      src: moon,
      opacity: 0,
    },
    {
      size: 90,
      bottom: 33,
      right: 52,
      src: cloud2
    },
    {
      size: 85,
      bottom: 37,
      right: 14,
      src: cloud1
    },
    {
      size: 85,
      bottom: 45,
      right: 42,
      src: cloud3
    },
    {
      size: 85,
      bottom: 56,
      right: 50,
      src: cloud4
    },
    {
      size: 90,
      bottom: 54,
      right: 15,
      src: cloud5
    },
    {
      size: 50,
      bottom: 45,
      right: 27,
      src: star1,
      opacity: 0,
    },
    {
      size: 50,
      bottom: 44,
      right: 37,
      src: star2,
      opacity: 0,
    },
    {
      size: 50,
      bottom: 48,
      right: 30,
      src: star3,
      opacity: 0,
    },
  ],
  maghrib: [
    {
      size: 130,
      bottom: 0,
      right: 60,
      src: sun
    },
    {
      size: 100,
      bottom: 25,
      right: 60,
      src: moon,
      opacity: 0,
    },
    {
      size: 90,
      bottom: 36,
      right: 22,
      src: cloud2
    },
    {
      size: 100,
      bottom: 55,
      right: 34,
      src: cloud1
    },
    {
      size: 75,
      bottom: 30,
      right: 53,
      src: cloud3
    },
    {
      size: 80,
      bottom: 44,
      right: 55,
      src: cloud4
    },
    {
      size: 90,
      bottom: 47,
      right: 17,
      src: cloud5
    },
    {
      size: 50,
      bottom: 49,
      right: 23,
      src: star1,
      opacity: 0,
    },
    {
      size: 50,
      bottom: 44,
      right: 37,
      src: star2,
      opacity: 0,
    },
    {
      size: 50,
      bottom: 45,
      right: 30,
      src: star3,
      opacity: 0,
    },
  ],
  isya: [
    {
      size: 130,
      bottom: -20,
      right: 60,
      opacity: 0,
      src: sun
    },
    {
      size: 100,
      bottom: 35,
      right: 60,
      src: moon
    },
    {
      size: 90,
      bottom: 28,
      right: 57,
      src: cloud2,
      opacity: 0,
    },
    {
      size: 100,
      bottom: 35,
      right: 11,
      src: cloud1,
      opacity: 0,
    },
    {
      size: 75,
      bottom: 42,
      right: 47,
      src: cloud3,
      opacity: 0,
    },
    {
      size: 80,
      bottom: 54,
      right: 38,
      src: cloud4,
      opacity: 0,
    },
    {
      size: 90,
      bottom: 47,
      right: 17,
      src: cloud5,
      opacity: 0,
    },
    {
      size: 50,
      bottom: 47,
      right: 41,
      src: star1,
    },
    {
      size: 50,
      bottom: 40,
      right: 26,
      src: star2,
    },
    {
      size: 50,
      bottom: 60,
      right: 20,
      src: star3,
    },
    {
      size: 50,
      bottom: 58,
      right: 50,
      src: star4,
      opacity: 1,
    },
  ],
}

const day = () => {
  return prayers.dzuhur
}

const night = () => {
  return prayers.isya
}

export default Object.assign(prayers, { day: day(), night: night() })