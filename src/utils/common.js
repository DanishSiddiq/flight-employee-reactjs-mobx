/**
 * 
 * @param {*} key 
 * @param {*} isSessionBased 
 * @param {*} data 
 */
const setData = (isSessionBased, key, data) => {
    if (typeof(Storage) !== "undefined") {

        // stringify data in storage if it is JSON
        if(typeof data === JSON) {
            data = JSON.stringify(data);
        }

        (isSessionBased && sessionStorage.setItem(key, data)) || localStorage.setItem(key, data);
        return true;
      } 

      return false;
}

/**
 * 
 * @param {*} key 
 * @param {*} isSessionBased
 */
const getData = (isSessionBased, key) => {
    if (typeof(Storage) !== "undefined") {
        return isSessionBased ? sessionStorage.getItem(key) : localStorage.getItem(key);
    }

    return null;
}


/**
 * 
 * @param {*} key 
 * @param {*} isSessionBased
 */
const removeData = (isSessionBased, key) => {
    if (typeof(Storage) !== "undefined") {
        return isSessionBased ? sessionStorage.removeItem(key) : localStorage.removeItem(key);
    }

    return null;
}

module.exports = { setData, getData, removeData };