class Model {
    constructor () {
        this._adminLogin = {userData: [{"user_token":"47840d5d91360088a07f29c0f8e0ed74","user_email":"elmarh@deveducation.com","full_name":"Elmar Huseynov","birthday":"1974-09-20","gender_id":1,"gender_text":"Male","position_id":3,"position_text":"Trainee","branch_id":1,"branch_text":"XCritical Software LLC","dept_id":1,"dept_text":"Mobile Development","city_id":1,"city_text":"Baku","country_id":1,"country_text":"Azerbaijan","error":false}],rateData: [{"rate_id":1,"rate_value":1},{"rate_id":2,"rate_value":2},{"rate_id":3,"rate_value":3},{"rate_id":4,"rate_value":4},{"rate_id":5,"rate_value":5},]};

    }

    getAdmin = () => {
        return this._adminLogin;
    } 
}

export default Model;