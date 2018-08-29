import local from './locales/tag'
import injectStyles from './injectStyle'
export default function mapingObjFunc(obj) {
    let tag = null
    console.log('obj is:',obj)
    Object.entries(obj).forEach(([key, val]) => {
        console.log('val is:', val)
        if(key === 'name') {
            tag = document.createElement(local[val]!== undefined ? local[val] : val);
        }
        if(key === 'attributes' && Object.keys(val).length!== 0){
             Object.entries(val).forEach(([keyAttr, valAttr]) => {
                 let att = document.createAttribute(keyAttr);
                att.value = valAttr ;
                tag.setAttributeNode(att);
                keyAttr = local[keyAttr] !== undefined ? local[keyAttr] : keyAttr
                valAttr = local[valAttr] !== undefined ? local[valAttr] : valAttr
                tag.style[keyAttr] = valAttr
             })
        }
        if(key === 'children' && val.length !== 0 && tag !== null){
            for(let i = 0; i< val.length; i++){
                let child = mapingObjFunc(val[i])
                tag.appendChild(child)
            }
        }
        if(key === 'value' && val.length !== 0 && tag !== null){
            let txt = document.createTextNode(val);
            tag.appendChild(txt)
        }
    });
    console.log('tag is:', tag)
    return tag
}