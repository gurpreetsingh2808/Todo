import {NetInfo} from 'react-native'

let ConnectivityUtil = {
    isNetworkConnected() {
        return NetInfo.isConnected.fetch()
            .then(isConnected => {
                console.log('Connectivity status ' + (isConnected ? 'online' : 'offline'));
                return isConnected;
            });
    },

};

module.exports = ConnectivityUtil;