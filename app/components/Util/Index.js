import moment from 'moment'
import axios from 'axios'

export function getRandomColor(props, count) {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 66;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

export function numberThousand(num) {
    num=Number(num)
    return num
       .toFixed(0) // always two decimal digits
       .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")  // use . as a separator
 
}

export function cagr(Value,count){
    let x=0,naik=0
    let tumbuh=[]
    for (x = 0; x < count; x++) {
        
        if ( x == 0 ) {
            let naik = 0;
            tumbuh.push(naik);
        } else {
            let naik = ((Value[x] - Value[x - 1]) / Value[x - 1]) * 100;
            tumbuh.push(naik);
            
        }
        }
        return tumbuh
};

export function Month(Value){
        return   moment().month(Value-1).format('MMM');
};
   
export function getGIcon(program) {
    if (program == '1') {
    return 'icon-jkk text-info fa-4x' ;
    } else if (program == '2') {
    return  'icon-jkm text-danger fa-4x';
    } else if (program == '3') {
    return  'icon-jht text-warning fa-4x';
    } else if (program == '4') {
    return 'icon-jp text-success fa-4x';
    }
  }
export function getIconS(segmen) {
    if (segmen == 'PPU') {
    return 'icon-ppu text-success fa-1x';
    } else if (segmen == 'BPU') {
    return  'icon-bpu text-danger fa-1x';
    } else if (segmen == 'JAKON') {
    return  'icon-jakon text-warning fa-1x';
    } 
}  
export function getPrograms(idp) {
        if (idp == '1') {
        return 'JKK';
        } else if (idp == '2') {
        return  'JKM';
        } else if (idp == '3') {
        return  'JHT';
        } else 
        return 'JP'
  }     
export function getProgram(idp) {
    if (idp == '1') {
    return 'Jaminan Kecelakaan Kerja';
    } else if (idp == '2') {
    return  'Jaminan Kematian';
    } else if (idp == '3') {
    return  'Jaminan Hari Tua';
    } else 
    return 'Jaminan Pensiun'
}
export function getKedwil(kedwil) {
    let result=[];
    return 'Kedeputian Wilayah Sumbagut'
}



