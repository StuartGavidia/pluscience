//converting chemical equations to have subscript
export default function ChemicalEquation(sentence){

    //Note: Append a 0 in front any number to not subscript it, all other number will be subscripted
    //Append a 3 to superscript numbers and ^ to superscript letters
    //Append a 9 to double script numbers and _ for letters
    
    let result = sentence

    .split(/(\d+)/)
    .map((s, i) => {
        if(i % 2){
            //might have to change to >=
            if(s.indexOf(0) === 0){
                return s.substring(1)
            } 
            if(s.indexOf(3) === 0 && s.length > 1){
                return <sup>{s.substring(1)}</sup>
            }
            if(s.indexOf(9) === 0 && s.length > 1){
                return <span className="supsub"><span>{s.substring(1, 2)}</span><span>{s.substring(2, 3)}</span></span>
            }
            return <sub>{s}</sub>
        } else {
            if(s.indexOf('^') === 0){
                return <sup>{s.substring(1)}</sup> 
            }
            if(s.indexOf("_") === 0 && s.length > 1){
                return <span className="supsub"><span>0</span><span>{s.substring(1, 2)}1</span></span>
            }
            return s
        }
    })

    return result
}