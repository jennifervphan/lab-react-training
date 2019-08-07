import React, { Component } from 'react';
import "./BoxColor.css";

export default class BoxColor extends Component {
    render() {
        const {r,g,b}=this.props;

        var rgbToHex = function (rgb) { 
            var hex = rgb.toString(16);
            if (hex.length < 2) {
                 hex = "0" + hex;
            }
            return hex;
          };

          var fullColorHex = function(r,g,b) {   
            var red = rgbToHex(r);
            var green = rgbToHex(g);
            var blue = rgbToHex(b);
            let hexcode=red+green+blue;
            return "#"+hexcode;
          };
         let color= fullColorHex(r, g, b); 

        return (
            <div className="boxContainer" style={{backgroundColor:color}}>
                <p>rgb({r},{g},{b})</p>
                <p>{color}</p>
                
            </div>
        )
    }
}
