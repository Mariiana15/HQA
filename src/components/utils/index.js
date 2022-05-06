export const GetToken = () => {
    let token = {
        AccessToken: sessionStorage.getItem("token"),
        RefreshToken: sessionStorage.getItem("refToken"),
        AtExpires: sessionStorage.getItem("atExpires")
    }
    return token
}
