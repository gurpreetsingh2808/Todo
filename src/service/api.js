import axios from 'axios';
import ConnectivityUtil from '../utilities/connectivity';
import Properties from '../properties';
import Strings from "../app_assets/strings";

function _handleError(error) {
    alert(error);
}

class Api {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'dataType': 'json',
        }
    }

    static get(route) {
        return this.xhr(route, null, 'get');
    }

    static get(route, params) {
        return this.xhr(route, params, 'get');
    }

    static put(route, params) {
        return this.xhr(route, params, 'put');
    }

    static post(route, obj) {
        Api.buildConfig('a', 'b', 'c', 'd');
        const host = Properties.url_base;
        const url = `${host}${route}`;
        return axios.post(url, obj)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        // return this.xhr(route, params, 'POST')
    }

    static delete(route, params) {
        return this.xhr(route, params, 'DELETE')
    }

    static xhr(route, params, verb) {
        const host = Properties.url_base;
        const url = `${host}${route}`;
        console.log("url " + url);
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
        options.headers = Api.headers();
        return axios.get(url, options)
            .then(function (response) {
                console.log(response);
            if (response.status === 200) {
                return response;
            } else {
                _handleError(Strings.error + ` ${response.status}, ${response.statusText}`);
            }
        });
    }


    static buildConfig(url, params, method, data) {
        let options ;
        //= Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
        options.headers = Api.headers();
        options.baseURL = Properties.url_base;
        options.url = url;
        options.method = method;
        options.params = {body: JSON.stringify(params)};
        options.data = data;
        options.timeout = 30 * 1000;

        console.log("options "+options);
        // return options;
    }
}

export default Api;