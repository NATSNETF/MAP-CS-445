const verifyUser = function (username, password, callback) {
        dataBase.verifyUser(username, password, (error, userInfo) => {
            if (error) {
                callback(error)
            } else {
                dataBase.getRoles(username, (error, roles) => {
                    if (error) {
                        callback(error)
                    } else {
                        dataBase.logAccess(username, (error) => {
                            if (error) {
                                callback(error);
                            } else {
                                callback(null, userInfo, roles);
                            }
                        })
                    }
                })
            }
        })
    };
    ///////////////////////////////////////////////////////////solving the problem
    const verifyUser2 = function(username, password) {
            database.verifyUser(username, password)
                .then(userInfo => dataBase.getRoles(userInfo))
                .then(rolesInfo => dataBase.logAccess(rolesInfo))
                .then(finalResult => {
                    //do whatever the 'callback' would do
                })
                .catch((err) => {
                    //do whatever the error handler needs
                });
        };
        
        