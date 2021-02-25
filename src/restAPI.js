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
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => console.log(response))

    return response;
}

const addCountry  = async data => {
    const response = await fetch('http://185.129.2.58:8997/v1/addCountry.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => console.log(response))

    return response;
}

const addCity  = async data => {
    const response = await fetch('http://185.129.2.58:8997/v1/addCity.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => console.log(response))

    return response;
}

const addBranch  = async data => {
    const response = await fetch('http://185.129.2.58:8997/v1/addBranch.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => console.log(response))

    return response;
}

const addDepartment  = async data => {
    const response = await fetch('http://185.129.2.58:8997/v1/addDepartment.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
    addCountry,
    addCity,
    addBranch,
    addDepartment,
}