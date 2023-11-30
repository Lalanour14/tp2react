import { useEffect, useState } from "react"
/**import { Checkbox  } from "./component/form/Chekbox"*/
import { Input } from "./component/form/Input"

/* exemples des champs controler */
/*function App() {
  const [showInput, setShowInput] = useState('')

  return <div className="container my-3 ">
  <Checkbox
  checked={showInput}
  onChange={setShowInput}
  id="titleshow"
  label="Afficher que le champs titre "
  />
 {showInput && <EditTitle/>}
        
          <div style={{height:'300vh'}}>

          </div>  
        </div>
 } */
 /**exemples d'utilisation des useEfect */
 /*function EditTitle(){
 
      const [title , setTitle] = useState('')
      const [firstname, setFirstname] = useState('')
      const [y, setY] = useState (0) 

      useEffect(() => {
        
        document.title = title
      }, [title]);



      useEffect (()=> {
         const originalTitle = document.title 
         return () => {
            document.title = originalTitle
         }
      },[]);

      useEffect (()=>{ 
        const handler = (e) =>{
          console.log('scroll')
          setY(window.scrollY)
        } 
        window.addEventListener('scroll', handler )  
        return () => {
         window.removeEventListener('scroll',handler
         )
        } 
      },[]); 

       return <div className="vstack gap-2 ">
        <div>
          Scroll : {y}
        </div>
       
       <Input
      type="text" 
      className="form-control"
   value={title}
   placeholder="le titre"
   onChange={setTitle}
   />
        <Input
      type="text" 
      className="form-control"
   value={firstname}
   placeholder="Prénom"
   onChange={setFirstname}
   />
   </div>

 
}
*/
function App () {


      const [duration, setDuration] = useState(50)
      const [secondsLeft, setSecondsLeft] = useState(duration)

      const handleChange = (v) => {
         setDuration(v)
        setSecondsLeft(v)

      }
      
      useEffect(()=> {
        
        const timer = setInterval(() => {
            setSecondsLeft(v =>{ 
              if( v <= 1){
                clearInterval(timer)
                return 0
              }
              return v -1

            } )



          },1000 )
          return () => {
            clearInterval(timer)
          }
            
      }, [duration]);

      return <div className="vstack gap-2 ">
        <Input
           value={duration}
           onchange={handleChange}
           placeholder='Timer...'
        />
        <p>
            Décompte : {secondsLeft}
        </p>
      </div>

}


export default App
