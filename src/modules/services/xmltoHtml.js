import XMLParser from 'react-xml-parser'
import mapingObjFunc from './mapingObj'
export default function xmlToHtmlFunc(xml) {
    let json = new XMLParser().parseFromString(xml)
    let htmlTags = mapingObjFunc(json)
    return htmlTags

}