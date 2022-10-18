function asyncSleep(callback) {
    return new Promise((r) => setTimeout(r, callback));
}

async function typeByID(raw, id, callback) {
    let content = document.getElementById(id);
    var str = "";
    for (var i = 0; i < raw.length; i++) {
        str += raw[i].toString();
        content.textContent = str.toString();
        await asyncSleep(callback);
    }
}

typeByID("sweetenpotato", "type-title", 100);

typeByID("under construction", "type-desc", (16/18)*100);