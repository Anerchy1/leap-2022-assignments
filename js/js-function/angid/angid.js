function register(reg) {

            if (Number(reg.substr(8, 1)) % 2 === 0) {
                huis = 'emegtei'
                console.log(huis);
            } else {
                huis = 'eregtei'
                console.log(huis);
            }

            tursunUdur = `${reg.substr(2, 2)} onii ${reg.substr(4, 2)} sariin ${reg.substr(6, 2)} -nd tursun.`
            console.log(tursunUdur);

            if (reg.substr(0, 1) == 'У') {
                aimag = 'Ulaanbaatar';
            } else if (reg.substr(0, 1) == 'А') {
                aimag = 'Arhangai';
            }
            else if (reg.substr(0, 1) == 'Б') {
                aimag = 'Bayan-Olgii';
            }
            else if (reg.substr(0, 1) == 'В') {
                aimag = 'Bayanhongor';
            }
            else if (reg.substr(0, 1) == 'Г') {
                aimag = 'Bulgan';
            }
            else if (reg.substr(0, 1) == 'Д') {
                aimag = 'Govi-Altai';
            }
            else if (reg.substr(0, 1) == 'Е') {
                aimag = 'Dornogovi';
            }
            else if (reg.substr(0, 1) == 'Ж') {
                aimag = 'Dundgovi';
            }
            else if (reg.substr(0, 1) == 'З') {
                aimag = 'Zavhan';
            }
            else if (reg.substr(0, 1) == 'И') {
                aimag = 'Uvurhangai';
            }
            else if (reg.substr(0, 1) == 'Й') {
                aimag = 'Umnugovi';
            }
            else if (reg.substr(0, 1) == 'К') {
                aimag = 'Sukhbaatar';
            }
            else if (reg.substr(0, 1) == 'Л') {
                aimag = 'Selenge';
            }
            else if (reg.substr(0, 1) == 'М') {
                aimag = 'Tuv';
            }
            else if (reg.substr(0, 1) == 'Н') {
                aimag = 'Uvs';
            }
            else if (reg.substr(0, 1) == 'О') {
                aimag = 'Hovd';
            }
            else if (reg.substr(0, 1) == 'П') {
                aimag = 'Huwsgul';
            }
            else if (reg.substr(0, 1) == 'Р ') {
                aimag = 'Khentii';
            }
            else if (reg.substr(0, 1) == 'С ') {
                aimag = 'Darkhan-Uul';
            }
            else if (reg.substr(0, 1) == 'Т') {
                aimag = 'Orkhon';
            }
            else if (reg.substr(0, 1) == 'Ф') {
                aimag = 'Govisumber';
            }
            else if (reg.substr(0, 1) == 'Х') {
                aimag = 'Ulaanbaatar';
            }


            console.log(`${aimag} hot/aimag-t tursun`);

        }
        register('УШ96103147');