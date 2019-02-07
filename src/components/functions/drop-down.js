import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

/* Props looks like this:
 * {header: string, info: string, open: boolean}
 */

export default class DropButton extends React.Component {
    constructor(props) {
      super(props);
      
    }
    render() {
        if (this.props){
            /*
            var faq = (this.props).map(function (obj) {
                //data to hold what we are presenting at the moment
                //var data = "";
                //button is open
                if (obj.open) { 
                    return (
                        <button> 
                            <text>
                            <b> {obj.header} </b> {"\n"}
                            {obj.info}
                            </text>
                        </button>
                    );
                } 
                else {
                    return (
                        <button> 
                            <text>
                            <b> {obj.header} </b>
                            </text>
                        </button>
                    ); 
                }
            });
            */
            var len = this.props.length;
           
            return (
                <Text>
                    Hello
                </Text>
            );
        }
    }
}