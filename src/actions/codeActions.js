import * as firebase from 'firebase';

export function loadCodeSuccess(data) {
    return {
        type: 'GET_CODE',
        payload: data
    }
}

export function getCode() {
    return function(dispatch) {
        const codeRef = firebase.database().ref('code');
        codeRef.on('value', (snap) => {
            dispatch(loadCodeSuccess(snap.val()));
        });
    }
}

export function setCode(code) {
    console.log("code", code);
    return function() {
        const codeRef = firebase.database().ref('code');
        codeRef.set(code);
    }
}
