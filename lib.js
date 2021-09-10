

function fixText(txt) {
    txt = txt.split(' ').join('');
    let små = txt.slice(1, 20).toLowerCase();
    let stor = txt.slice(0, 1).toUpperCase();
    return stor + små;    
}



