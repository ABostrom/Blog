import { parseISO, format } from 'date-fns'

//Date tag that will parse and format a date string nicely in react
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
