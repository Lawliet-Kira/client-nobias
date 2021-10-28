module.exports.postToAPI = async (url = "", data = {}) => {

    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    
    return await response.json(); // parses JSON response into native JavaScript objects

}

module.exports.codeSesgos = { 

    performance: {
        code: "1", 
        url: "https://gbeninati.github.io/SimulacionNoBias/Performance/index.html?ID="
    },
    attribution: {
        code: "2",
        url: "https://gbeninati.github.io/SimulacionNoBias/Attribution/index.html?ID="
    },
    unconscious: {
        code: "3",
        url: "https://gbeninati.github.io/SimulacionNoBias/Unconscious/index.html?ID="
    },
    maternal: {
        code: "4",
        url: "https://gbeninati.github.io/SimulacionNoBias/Maternal/index.html?ID="
    }

};

module.exports.nextBias = (num) => {

    let nextq;

    switch(num){

        case 1 : nextq = "pq1";
                 break;
        case 2 : nextq = "aq1";
                 break; 
        case 3 : nextq = "uq1";
                 break;
        case 4 : nextq = "mq1";
                 break;
        default: nextq = "aq1";
                 break;  
    }
    
    return nextq;

}