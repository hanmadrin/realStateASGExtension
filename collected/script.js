import {florida} from './florida.js';
const length = Object.keys(florida).length;
const results = [];
const keys = Object.keys(florida);
for(let i = 0; i < keys.length; i++){
    const key = keys[i];
    const result = florida[key];
    results.push(result);
}
for(let i=0;i<results.length;i++){
    if(results[i].address!="N/A" && results[i].address!=null){
        [,results[i].state, results[i].zipCode]= results[i].address.split(',').pop().split(' ');
        // remove state zip
        results[i].address = results[i].address.split(',').slice(0,-1).join(',');
        results[i].city = results[i].address.split(',').pop().trim();
        // if(!results[i].city){
        //     results[i].city = "N/A";
        // }
        results[i].address = results[i].address.split(',').slice(0,-1).join(',');
    }else{
        // console.log('a')
        results[i].state = "N/A";
        results[i].zipCode = "N/A";
        results[i].city = "N/A";
    }
}

console.log(results);
// const downloadData = document.createElement('a');
// downloadData.innerText = 'Download Data';
// downloadData.setAttribute('href',`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(results))}`);
// downloadData.setAttribute('download',`csvReady.json`);
// downloadData.click();


// ffffff

//    



// import {arap}  from './arap.js';
// import {rimon1} from './rimon1.js';
// import {rimon2} from './rimon2.js';
// import {sunnybai} from './sunnybai.js';
// import {fahad} from './fahad.js';

// console.log(`arap: ${Object.keys(arap).length}`);
// console.log(`rimon1: ${Object.keys(rimon1).length}`);
// console.log(`rimon2: ${Object.keys(rimon2).length}`);
// console.log(`sunnybai: ${Object.keys(sunnybai).length}`);
// console.log(`fahad: ${Object.keys(fahad).length}`);

// const allCount = Object.keys(arap).length + Object.keys(rimon1).length + Object.keys(rimon2).length + Object.keys(sunnybai).length + Object.keys(fahad).length;
// console.log(`allCount: ${allCount}`);
// const uniquetotal = {...arap, ...rimon1, ...rimon2, ...sunnybai, ...fahad};
// console.log(`total: ${Object.keys(uniquetotal).length}`);

// const downloadData = document.createElement('a');
// downloadData.innerText = 'Download Data';
// downloadData.setAttribute('href',`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(uniquetotal))}`);
// downloadData.setAttribute('download',`data.json`);
// downloadData.click();