const Properties = {
    debug: {
        // url_base: 'http://localhost:8080/api',
        url_base: 'https://oneikskzxt.localtunnel.me/api',
        endpoint_user_data: 'test/userData/',
    },
    release: {
        // url_base: 'http://www.todoapp/api',
        endpoint_user_data: 'userData/',
    }

};

module.exports = (__DEV__) ? Properties.debug : Properties.release;