let sessionStorageName = 'windowSessionStorage';

let saveAllWindows = document.querySelector('#saveAllWindowsBtn');

saveAllWindows.addEventListener('click', e => {
    console.log(model.windows);
    let name = prompt('type your session name');
    if (name.length < 1) {
        return;
    }
    let sessionsObj = getObjFromStorage(sessionStorageName);
    sessionsObj[name] = model.windows;
    setObjToStorage(sessionStorageName, sessionsObj);
})

let sessionList = document.querySelector(".SessionList")
let sessionsObj = getObjFromStorage(sessionStorageName);
for (const name in sessionsObj) {
    console.log(name)
    let sessionLi = document.createElement('li');
    sessionLi.innerHTML = name + `
        <button class="restoreBtn">restore</button>
        <button class="removeBtn">remove</button>
        `
    sessionList.appendChild(sessionLi);
    sessionLi.querySelector('.restoreBtn').addEventListener('click', e => {
        console.log('click')

        controller.updateWindows(sessionsObj[name])
    })

}

function getObjFromStorage(name) {
    return JSON.parse(window.localStorage.getItem(name)) || {};
}

function setObjToStorage(name, obj) {
    window.localStorage.setItem(name, JSON.stringify(obj));
}