import React,{Component} from 'react'


export default class Utility extends Component {

  getRandomColor(props, count) {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 66;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  numberThousand(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  
}
