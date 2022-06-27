// Fechas utc miliseconds
// //by options = day, week, month
// //ini_date int epoch unix time
// //end_date int epoch unix time
// //ini_date < end_date
// function (ini_date, end_date, by){
//   //filtrar del array los usuarios entre esas fechas
//   //el resultado agruparlo por el tiempo determinado en la variable by
//   return
// }
// 1572880698375, 1572880698375,"day"
// let obj = {
//   day1: [usuarios],
//   day2: [usuarios],
//   day3: [usuarios]
// }{ "_id": "398418001ph1a", "created": 1572880698375, "utm_source": "hackTheUniverse" }


const data = [{ "_id": "398418001ph1a", "created": 1572880698375, "utm_source": "hackTheUniverse" }, { "_id": "449457001tb1a", "created": 1575943038251, "utm_source": "hackTheChain" }, { "_id": "436876001ll1a", "created": 1575188196107, "utm_source": "hackTheUniverse" }, { "_id": "412577001wa1a", "created": 1573730220475, "utm_source": "hackTheUniverse" }, { "_id": "91584001ir51b", "created": 1586006708740, "utm_source": "helloWorld" }, { "_id": "93511001ok51b", "created": 1586122256306, "utm_source": "helloWorld" }, { "_id": "93829001ci51b", "created": 1586141339933, "utm_source": "hackTheChain" }, { "_id": "96364001fi51b", "created": 1586293457220, "utm_source": "hackTheChain" }, { "_id": "97167001gy51b", "created": 1586341655597, "utm_source": "hackTheChain" }, { "_id": "99242001nn51b", "created": 1586466135079, "utm_source": "helloWorld" }, { "_id": "104768001ub61b", "created": 1586797729650, "utm_source": "helloWorld" }, { "_id": "109034001kl61b", "created": 1587053645271, "utm_source": "hackTheChain" }, { "_id": "134535001om61b", "created": 1588583741830, "utm_source": "helloWorld" }, { "_id": "151114001dj61b", "created": 1589578460004, "utm_source": "helloWorld" }, { "_id": "154837001yk61b", "created": 1589801837154, "utm_source": "hackTheUniverse" }, { "_id": "166463001lp61b", "created": 1590499375873, "utm_source": "helloWorld" }, { "_id": "172625001bd61b", "created": 1590869105709, "utm_source": "hackTheUniverse" }, { "_id": "178748001ax61b", "created": 1591236508302, "utm_source": "helloWorld" }, { "_id": "185718001dd61b", "created": 1591654690437, "utm_source": "hackTheUniverse" }, { "_id": "191273001bl61b", "created": 1591988025363, "utm_source": "hackTheChain" }, { "_id": "194113001dr61b", "created": 1592158408157, "utm_source": "helloWorld" }, { "_id": "198508001fr61b", "created": 1592422127715, "utm_source": "hackTheUniverse" }, { "_id": "491946001jx1a", "created": 1578492380655, "utm_source": "hackTheUniverse" }, { "_id": "197127001xb61b", "created": 1592339283217, "utm_source": "hackTheUniverse" }, { "_id": "198219001hg61b", "created": 1592404795769, "utm_source": "hackTheUniverse" }, { "_id": "192246001dt61b", "created": 1592046412746, "utm_source": "hackTheUniverse" }, { "_id": "215828001ko61b", "created": 1593461277735, "utm_source": "helloWorld" }, { "_id": "216431001nr61b", "created": 1593497456225, "utm_source": "helloWorld" }, { "_id": "443398001xl1a", "created": 1575579551221, "utm_source": "hackTheChain" }, { "_id": "506347001id1a", "created": 1579356447909, "utm_source": "hackTheUniverse" }, { "_id": "544208001sn1a", "created": 1581628100062, "utm_source": "hackTheUniverse" }, { "_id": "590198001wl1a", "created": 1584387486099, "utm_source": "hackTheUniverse" }, { "_id": "92721001of51b", "created": 1586074939755, "utm_source": "hackTheChain" }, { "_id": "94125001mw51b", "created": 1586159150296, "utm_source": "hackTheChain" }, { "_id": "95508001dw51b", "created": 1586242087811, "utm_source": "hackTheChain" }, { "_id": "96202003dj51b", "created": 1586283766267, "utm_source": "hackTheChain" }, { "_id": "100314001uu61b", "created": 1586530462874, "utm_source": "hackTheUniverse" }, { "_id": "104597001lr61b", "created": 1586787455695, "utm_source": "helloWorld" }, { "_id": "115964001iy61b", "created": 1587469451214, "utm_source": "helloWorld" }, { "_id": "109040001ws61b", "created": 1587054011042, "utm_source": "hackTheUniverse" }, { "_id": "113359001xh61b", "created": 1587313137976, "utm_source": "hackTheUniverse" }, { "_id": "118850001jj61b", "created": 1604597923755, "utm_source": "hackTheUniverse" }, { "_id": "119495001ls61b", "created": 1587681321073, "utm_source": "hackTheUniverse" }, { "_id": "121837001rx61b", "created": 1587821812368, "utm_source": "hackTheUniverse" }];

function fechas(init_date, end_date, by) {
    let result = {};
    let usuarios = [];
    const fech = new Date(init_date);
    const fech2 = new Date(end_date);
    let tmp = init_date;
    let i = 0;
    if (init_date < end_date) {
        switch (by) {
            case "day":
                //recorre todas las fechas posibles dentro del rango
                while (tmp < end_date) {
                    //recorre el arreglo en busca de fechas
                    while (i < data.length - 1) {
                        //buscar dentro del arreglo donde el atributo fecha.created sea igual a la fecha temporal
                        let fecha = data.filter(data => init_date < data.created < end_date);
                        if (tmp <= end_date) {
                            if (fecha[i]) {
                                let id = fecha[i]._id;
                                usuarios.push(id);
                            }
                        }
                        i++;  
                    }
                    result[`day${i}`] = usuarios;
                    tmp += 86400000;
                    console.log(result);
                    return result;
                }
                console.log(result);
                console.log(`Fecha Inicial: ${fech} Fecha Final: ${fech2}`);
                break;
            case "week":
                while (tmp <= end_date) {
                    while (i <= data.length - 1) {
                        let fecha = data.filter(data => data.created === tmp);
                        if (tmp <= end_date) {
                            if (fecha[i]) {
                                let id = fecha[i]._id;
                                usuarios.push(id);
                            }
                        }
                        i++;
                        result[`day${i}`] = usuarios;
                    }
                    tmp += 86400000;
                    console.log(result);
                }
                console.log(`Fecha Inicial: ${fech} Fecha Final: ${fech2}`);
                break;

            case "month":
                while (tmp <= end_date) {
                    while (i <= data.length - 1) {
                        let fecha = data.filter(data => data.created === tmp);
                        if (tmp <= end_date) {
                            if (fecha[i]) {
                                let id = fecha[i]._id;
                                usuarios.push(id);
                            }
                        }
                        i++;
                        result[`day${i}`] = usuarios;
                    }
                    tmp += 86400000;
                    console.log(result);
                }
                console.log(`Fecha Inicial: ${fech} Fecha Final: ${fech2}`);
                break;
            default:
                while (tmp <= end_date) {
                    while (i <= data.length - 1) {
                        let fecha = data.filter(data => data.created === tmp);
                        if (tmp <= end_date) {
                            if (fecha[i]) {
                                let id = fecha[i]._id;
                                usuarios.push(id);
                            }
                        }
                        i++;
                        result[`day${i}`] = usuarios;
                    }
                    tmp += 86400000;
                    console.log(result);
                }
                console.log(`Fecha Inicial: ${fech} Fecha Final: ${fech2}`);
                break;
        }
    } else {
        console.log("Fechas invalidas");
    }
}


fechas(1572880698375, 1575188196107, "day");
// fechas(1572880698375, 1587821812368, "week");
// fechas(1572880698375, 1587821812368, "month");
const fech = new  Date(1572880698375);
const fech2 = new Date(1575188196107);
console.log(fech);
console.log(fech2);