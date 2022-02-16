import moment from "moment"
import { MomentInput } from "moment"

export const getGameTime = (inp?: MomentInput, isFinal?: boolean) => {
    if(isFinal) {
        return 'Final'
    } else {
        const scheduled = moment(inp)
        return scheduled.format('h:mm a')
    }
}