// Time Elapsed Function
let timeElapsed = (date) => {
    if (typeof date !== 'object') {
        date = new Date(date);
    }
    var seconds = Math.ceil((new Date(Date.now()) - date) / 1000);
    var intervalType;
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            intervalType = 'month';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                intervalType = 'day';
            } else {
                interval = Math.floor(seconds / 3600);
                if (interval >= 1) {
                    intervalType = "hour";
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = "minute";
                    } else {
                        interval = seconds;
                        intervalType = "second";
                    }
                }
            }
        }
    }
    if (interval > 1 || interval === 0) {
        intervalType += 's';
    }
    return `${interval} ${intervalType} ago`;
}
export default timeElapsed

//SORT FUNCTION
export function sortComments(posts){
    return posts.sort( (a,b) => {
        return b.timestamp - a.timestamp;
    })
}

// FUNCTION FOR GETTING UPLOADED IMAGE FILE PATH
export function theimage(){
    var filename = document.getElementById('file-id').value;
    document.getElementById('file-path').value = filename;
    alert(filename);
}