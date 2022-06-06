export const getDate = () => {
  const today = new Date()
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  const sDay = today.toLocaleDateString('en-US', options)

  return sDay
}
