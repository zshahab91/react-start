import * as actionType from "./../types/index";
import Api from '../config/api';
import xmlToHtmlFunc from  '../services/xmltoHtml'

const sample = `<page>

    <text>سلام و تست 
    <bold>bold men</bold>
    <img src="https://www.w3schools.com/bootstrap/cinqueterre.jpg"/>
     </text>

</page>`
export function getDataInline(data) {
    return (dispatch) => {
        dispatch({type: actionType.fetchedStartGetData});
        return  Api.get({url: ""}).then(
            res => dispatch({type: actionType.fetchedGetData, data:  xmlToHtmlFunc(sample)}),
            err => {
                throw err
            }
        )
    }
}