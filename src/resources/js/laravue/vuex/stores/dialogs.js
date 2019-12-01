const dialogFactory = function(itemName = null) {
    return {
        flag: false,
        item: '',
        itemName: itemName,
    }
};

const dialogs = {
    state: {
        newStore: dialogFactory(),
    },
    getters: {

    },
    mutations: {
        showDialog(state, payload) {
            if (payload.name !== undefined) {
                state[payload.name].item = payload.item;
                state[payload.name].flag = true;
            } else {
                state[payload].flag = true;
            }
        },
        hideDialog(state, name) {
            state[name].flag = false;
        },
    },
    actions: {

    }
};

export default {name: 'dialogs', definition: dialogs};
