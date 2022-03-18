import moment from "moment";

export const formatDate = (date, format) => {
    if(date) {
        return format ?  moment(date).format(format) :  moment(date).format('LLL')
    }
    return null
}