function printObj(obj, level = -1, lk = false) {
    level += 1;
    let oneSpace = '    ';
    let space = oneSpace.repeat(level);
    let arKeys = Object.keys(obj);
    let emptyObj = arKeys.length === 0;
    let lK = arKeys.slice(-1);
    let fNL = emptyObj ? '' : '\n';
    let nS = emptyObj ? '' : space;
    let res = `${fNL}${nS}{${fNL}`;
    let lkk = '';
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object' && !Array.isArray(value)) {
            res += `${oneSpace}${space}${key}: ${printObj(value, level, lK != key)}`;
        } else {
            res += `${oneSpace}${space}${key}: ${parseType(value)}${lK != key ? ',' : ''}\n`;
        }
        lkk = key;
    }
    level++;
    space = oneSpace.repeat(Math.max(level-1, 0));
    let comma = level > 1 && lk ? ',' : '';
    res += `${nS}}${comma}\n`;
    return res;
}
function parseType(val) {
    let res = ``;
    switch (typeof val) {
        case 'Number':
            res = `${val}`
            break;
        case 'string':
            res = `'${val}'`;
            break;
        case 'object':
            res = `[${val}]`;
            break;
        default:
            res = `${val}`;
    }
    return res;
}

const app = window.Telegram.WebApp;
document.querySelector('#pre_1').innerHTML = app.initData;
document.querySelector('#pre_2').innerHTML = (typeof app.initDataUnsafe === 'object') ? printObj(app.initDataUnsafe) : app.initDataUnsafe;
document.querySelector('#pre_3').innerHTML = app.platform;
document.querySelector('#pre_4').innerHTML = app.version;
document.querySelector('#pre_5').innerHTML = app.viewportHeight;
document.querySelector('#pre_6').innerHTML = app.viewportStableHeight;
document.querySelector('#pre_7').innerHTML = app.WebAppUser.username;