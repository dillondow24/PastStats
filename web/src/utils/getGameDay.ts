import moment from "moment"
import { MomentInput } from "moment"

export const getGameDay = (inp?: MomentInput) => {
  const tipoff = moment(inp)
  const yesterday = moment().add(-1, 'days')
  const today = moment()
  const tomorrow = moment().add(1, 'day')
  
  if(tipoff.isSame(yesterday, 'day')) {
    return 'Yesterday'
  } else if(tipoff.isSame(today, 'day')) {
    return 'Today'
  } else if(tipoff.isSame(tomorrow, 'day')) {
    return 'Tomorrow'
  } else {
      return tipoff.format('ddd, MMM D')
  }
}