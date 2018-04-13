function initCookies() {

    if (document.cookie == "") {
        highscore1P = 0;
        highscore2P = 0;
        document.cookie = "highscore1P=0;expires=Tue, 01 Jan 2019 00:00:01 GMT";
        document.cookie = "highscore2P=0;expires=Tue, 01 Jan 2019 00:00:01 GMT";
    } else {
        highscore1P = getCookie("highscore1P");
        highscore2P = getCookie("highscore2P");
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}