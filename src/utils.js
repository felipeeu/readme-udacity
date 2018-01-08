export function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}


export function formatTimestamp(timestamp) {
    const d = new Date(timestamp)
    return d.toDateString()
}


export function pluralSingular(number, string) {

    return number <= 1 ? number + ' ' + string : number + ' ' + string.concat('s');
}