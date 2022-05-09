export const GetToken = () => {
    let token = {
        AccessToken: sessionStorage.getItem("token"),
        RefreshToken: sessionStorage.getItem("refToken"),
        AtExpires: sessionStorage.getItem("atExpires")
    }
    return token
}



export const GetSortStory = (prop) => {

    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}

export const GetSortStoryMay = (prop) => {
    return function (a, b) {
        if (a[prop] < b[prop]) {
            return 1;
        } else if (a[prop] > b[prop]) {
            return -1;
        }
        return 0;
    }
}