export default function renderTwoDecimalPlaces(num: number) {
  const roundedNum = Math.round(num * 100) / 100
  return roundedNum.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
