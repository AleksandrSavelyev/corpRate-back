const fetch = require('node-fetch');

const getAllUsers = async data => {
    const response = await fetch('http://185.129.2.58:8997/v1/getAllUsers.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => response)

    return response;
}

const logIn = async data => {
    const response = await fetch('http://185.129.2.58:8997/v1/userLogin.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => response)

    return response;
}

const register = async data => {
    const response = await fetch('http://185.129.2.58:8997/v1/userRegister.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => response)

    return response;
}

const getCommentUserTuday  = async data => {
    const response = await fetch('http://185.129.2.58:8997/v1/getRateCommentToday.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => response)

    return response;
}

const getCommentUserByDate  = async data => {
    const response = await fetch('http://185.129.2.58:8997/v1/getRateCommentByDate.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => response)

    return response;
}

const getRaitingCurentMounth  = async data => {
    const response = await fetch('http://185.129.2.58:8997/v1/getLastDayTopUsers.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"user_token":"47840d5d91360088a07f29c0f8e0ed74",  "branch_id":1, "vote_date":"Fri 5 Nov 2020"}),
    })
    .then(response => response.json())
    .then(response => console.log(response))

    return response;
}

module.exports = {
    getAllUsers,
    logIn,
    register,
    getCommentUserTuday,
    getCommentUserByDate,
    getRaitingCurentMounth,
}