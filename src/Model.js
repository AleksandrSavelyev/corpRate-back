class Model {
    constructor () {
        this._adminLogin = {userData: [{"user_token":"47840d5d91360088a07f29c0f8e0ed74","user_email":"elmarh@deveducation.com","full_name":"Elmar Huseynov","birthday":"1974-09-20","gender_id":1,"gender_text":"Male","position_id":3,"position_text":"Trainee","branch_id":1,"branch_text":"XCritical Software LLC","dept_id":1,"dept_text":"Mobile Development","city_id":1,"city_text":"Baku","country_id":1,"country_text":"Azerbaijan","error":false}],rateData: [{"rate_id":1,"rate_value":1},{"rate_id":2,"rate_value":2},{"rate_id":3,"rate_value":3},{"rate_id":4,"rate_value":4},{"rate_id":5,"rate_value":5},]};
        this._allUsers = {
            "allUserData": [
                {
                    "user_token": "1ae22e526fbf0a2fb6e670f4c5c76b1f",
                    "full_name": "Dilara Jabarova",
                    "position_text": "Coordinator",
                    "birthday": "1996-01-28",
                    "gender_text": "Female",
                    "branch_id": 1
                },
                {
                    "user_token": "1e584a9c0eb8b4a18fcf54de826bbe1e",
                    "full_name": "Javid Hakhizade",
                    "position_text": "Mobile Developer",
                    "birthday": "1995-01-12",
                    "gender_text": "Female",
                    "branch_id": 1
                },
            ]
        };
        this._city = {registerData: [{"city_id":1,"city_text":"Baku","country_id":1,"country_text":"Azerbaijan"},
            {"city_id":2,"city_text":"Dnepr","country_id":2,"country_text":"Ukraine"}],
            genderData:[{"gender_id":1,"gender_text":"male"},{"gender_id":2,"gender_text":"female"}]}
        
        
    }

    getAdmin = () => this._adminLogin;
    getAllUsers = () => this._allUsers;
    getCity = () => this._city;
}

module.exports = Model;

