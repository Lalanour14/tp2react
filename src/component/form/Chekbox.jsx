/**
 * 
 * @param {boolean} checked
 * @param {(v:boolean)} onChange
 * @param {string} label 
 * @param {string} id
 *  
 */


// eslint-disable-next-line react/prop-types
export function Checkbox ({checked, onChange, label, id}){
    return <div className="form-check">
        <input 
        id={id}
        type="checkbox"
            className="form-check-input"
            checked={checked}
        onChange={(e)=> onChange(e.target.checked)}
         />
         <label htmlFor={id} className="form-checked-label">{label}</label>
    </div>

}