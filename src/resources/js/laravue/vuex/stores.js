/**
 * returns vuex store modules from the ./stores directory
 */

const storeFiles = require.context('./stores');
let stores = {};
storeFiles.keys().map( key => {
    const store = storeFiles(key);
    stores[store.default.name] = store.default.definition;
});

export default stores;
