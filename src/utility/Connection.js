import axios from 'axios';

export default class Connection{
    static baseUrl = 'https://the-green-wash-api.herokuapp.com/web/';

    static processGetRequest (requestData, endpoint, callback) {
        let url = this.baseUrl + endpoint;
        let config = requestData;

        axios.get(url, config)
        .then(function (response) {
            // handle success
            callback({
                type: 'success',
                data: response
            });
        })
        .catch(function (error) {
            // handle error
            callback({
                type: 'error',
                data: error.message
            });
        })
    }

    static processPostRequest(requestData, endpoint, callback) {
        let url = this.baseUrl + endpoint;
        
        axios({
            method: 'post',
            url: url,
            data: requestData
          })
        .then(function (response) {
            // handle success
            callback({
                type: 'success',
                data: response
            });
        })
        .catch(function (error) {
            // handle error
            callback({
                type: 'error',
                data: error.message
            });
        });
    }
}
