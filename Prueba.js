
//formato { "_id": "398418001ph1a", "created": 1572880698375, "utm_source": "hackTheUniverse" }
//Fechas utc miliseconds
//by options = day, week, month
//ini_date int epoch unix time
//end_date int epoch unix time
//ini_date < end_date
const data = [{ "_id": "398418001ph1a", "created": 1572880698375, "utm_source": "hackTheUniverse" }, { "_id": "449457001tb1a", "created": 1575943038251, "utm_source": "hackTheChain" }, { "_id": "436876001ll1a", "created": 1575188196107, "utm_source": "hackTheUniverse" }, { "_id": "412577001wa1a", "created": 1573730220475, "utm_source": "hackTheUniverse" }, { "_id": "91584001ir51b", "created": 1586006708740, "utm_source": "helloWorld" }, { "_id": "93511001ok51b", "created": 1586122256306, "utm_source": "helloWorld" }, { "_id": "93829001ci51b", "created": 1586141339933, "utm_source": "hackTheChain" }, { "_id": "96364001fi51b", "created": 1586293457220, "utm_source": "hackTheChain" }, { "_id": "97167001gy51b", "created": 1586341655597, "utm_source": "hackTheChain" }, { "_id": "99242001nn51b", "created": 1586466135079, "utm_source": "helloWorld" }, { "_id": "104768001ub61b", "created": 1586797729650, "utm_source": "helloWorld" }, { "_id": "109034001kl61b", "created": 1587053645271, "utm_source": "hackTheChain" }, { "_id": "134535001om61b", "created": 1588583741830, "utm_source": "helloWorld" }, { "_id": "151114001dj61b", "created": 1589578460004, "utm_source": "helloWorld" }, { "_id": "154837001yk61b", "created": 1589801837154, "utm_source": "hackTheUniverse" }, { "_id": "166463001lp61b", "created": 1590499375873, "utm_source": "helloWorld" }, { "_id": "172625001bd61b", "created": 1590869105709, "utm_source": "hackTheUniverse" }, { "_id": "178748001ax61b", "created": 1591236508302, "utm_source": "helloWorld" }, { "_id": "185718001dd61b", "created": 1591654690437, "utm_source": "hackTheUniverse" }, { "_id": "191273001bl61b", "created": 1591988025363, "utm_source": "hackTheChain" }, { "_id": "194113001dr61b", "created": 1592158408157, "utm_source": "helloWorld" }, { "_id": "198508001fr61b", "created": 1592422127715, "utm_source": "hackTheUniverse" }, { "_id": "491946001jx1a", "created": 1578492380655, "utm_source": "hackTheUniverse" }, { "_id": "197127001xb61b", "created": 1592339283217, "utm_source": "hackTheUniverse" }, { "_id": "198219001hg61b", "created": 1592404795769, "utm_source": "hackTheUniverse" }, { "_id": "192246001dt61b", "created": 1592046412746, "utm_source": "hackTheUniverse" }, { "_id": "215828001ko61b", "created": 1593461277735, "utm_source": "helloWorld" }, { "_id": "216431001nr61b", "created": 1593497456225, "utm_source": "helloWorld" }, { "_id": "443398001xl1a", "created": 1575579551221, "utm_source": "hackTheChain" }, { "_id": "506347001id1a", "created": 1579356447909, "utm_source": "hackTheUniverse" }, { "_id": "544208001sn1a", "created": 1581628100062, "utm_source": "hackTheUniverse" }, { "_id": "590198001wl1a", "created": 1584387486099, "utm_source": "hackTheUniverse" }, { "_id": "92721001of51b", "created": 1586074939755, "utm_source": "hackTheChain" }, { "_id": "94125001mw51b", "created": 1586159150296, "utm_source": "hackTheChain" }, { "_id": "95508001dw51b", "created": 1586242087811, "utm_source": "hackTheChain" }, { "_id": "96202003dj51b", "created": 1586283766267, "utm_source": "hackTheChain" }, { "_id": "100314001uu61b", "created": 1586530462874, "utm_source": "hackTheUniverse" }, { "_id": "104597001lr61b", "created": 1586787455695, "utm_source": "helloWorld" }, { "_id": "115964001iy61b", "created": 1587469451214, "utm_source": "helloWorld" }, { "_id": "109040001ws61b", "created": 1587054011042, "utm_source": "hackTheUniverse" }, { "_id": "113359001xh61b", "created": 1587313137976, "utm_source": "hackTheUniverse" }, { "_id": "118850001jj61b", "created": 1604597923755, "utm_source": "hackTheUniverse" }, { "_id": "119495001ls61b", "created": 1587681321073, "utm_source": "hackTheUniverse" }, { "_id": "121837001rx61b", "created": 1587821812368, "utm_source": "hackTheUniverse" }];

function dates(init_date, end_date, by) {
    let result = {};
    let init = new Date(init_date);
    let end = new Date(end_date);

    //filtrar del array los usuarios entre esas fechas
    //el resultado agruparlo por el tiempo determinado en la variable by
    if (init < end) {
        const fechas = [...data];
        for (let i = 0; i < data.length; i++) {
                let dates = new Date(fechas[i].created);
                fechas[i].created = dates;
                //console.log(fechas[i]);
        }
        let diai = init.getUTCDay();
        let mesi = init.getUTCMonth();
        let diaf = init.getUTCDay();
        let mesf = init.getUTCMonth();
        switch (by) {
            case "day":
                for (let i = diai; i < diaf; i++) {
                    for (let j = 0; j < fechas.length - 1; j++) {
                        let usuarios = [];
                        if (fechas[j].created.getUTCDay() === i) {
                            usuarios.push(fechas[j]._id);
                            console.log(usuarios);
                        }
                        result.push(`Dia${j}: ${usuarios}`)
                    }
                }
                console.log(result);
                break;
            case "week":
                let weeki = getWeekNumber(init);
                let weekf = getWeekNumber(end);
                for (let i = weeki[1]; i < weekf[1]; i++) {
                    for (let j = 0; j < fechas.length - 1; j++) {
                        let fechasi=getWeekNumber(fechas[j].created);
                        let usuarios = [];
                        if (fechasi[1]===  weeki[1]) {
                            usuarios.push(fechas[j]._id);
                            console.log(usuarios);
                        }
                        result.push(`Dia${j}: ${usuarios}`)
                    }
                }
                console.log(result);
                break;

            case "month":
                for (let i = mesi; i < mesf; i++) {
                    for (let j = 0; j < fechas.length - 1; j++) {
                        let usuarios = [];
                        if (fechas[j].created.getUTCMonth() === mesi) {
                            usuarios.push(fechas[j]._id);
                            console.log(usuarios);
                        }
                        result.push(`Dia${j}: ${usuarios}`)
                    }
                }
                console.log(result);
                break;
                break;
            default:
                //
                break;
        }
    } else {
        console.log("Fechas invalidas");
    }
}
function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return [d.getUTCFullYear(), weekNo];
}

dates("2020-11-05T17:38:43.755Z", "2020-12-05T17:38:43.755Z", "day");