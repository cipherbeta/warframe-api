const axios = require('axios');
const fs = require('fs');

let dataURLs = {
    pc:  'http://content.warframe.com/dynamic/worldState.php',
    ps4: 'http://content.ps4.warframe.com/dynamic/worldState.php',
    xbox:'http://content.xb1.warframe.com/dynamic/worldState.php'
}

const requestDataStream = (source, name) => {
    let data;
    axios.get(source)
        .then(res => {
            if(res.status === 200) {
                console.log(`Successfully grabbed ${name} stream data.`);
                data = res.data;
                let formattedData = JSON.stringify(data, null, 4);
                fs.writeFile(`./wfstreams/${name}.json`, formattedData, 'utf8', (err) => {
                    if (err) { console.log(err) }
                    else { console.log(`JSON file for ${name} written without errors.`) }
                });
            }
        });
}

requestDataStream(dataURLs.pc, "pc");
requestDataStream(dataURLs.ps4, "ps4");
requestDataStream(dataURLs.xbox, "xbox");