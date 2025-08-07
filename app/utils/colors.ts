import { pg_colors } from '../../themes/pg-tailwindcss/tokens.mjs'

const primary = pg_colors.primary?.DEFAULT || pg_colors.primary?.[600]
const secondary = pg_colors.secondary?.DEFAULT || pg_colors.primary?.[600]

const safelist = []

function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16)
  return `${hex.padStart(6, '0')}`
}

export { primary, secondary, safelist, getRandomHexColor }
