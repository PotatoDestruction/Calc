import { useState } from 'react';
import './Calcus.css';

const buttons = [7,8,9,4,5,6,1,2,3,0,'C','.']
const operatos = ['/', '*', '-', '+']
const equal = '='

function Calcu() {
    const [answer, setAnswer] = useState(0)
    const [action, setAction] = useState('')
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [oper, setOper] = useState(false)
    
    return (
    <div className='calc'>
        <div className='screen'>            
            <div className='action'>{
            action ? action : '...'}
            </div>
            <h3 className='answer'>{answer}</h3>           
        </div>
        <div className='numsOpers'>
        <div className='nums'>
            { buttons.map((a,k) => {
                return(
                    <button key={k} className='num' onClick={() => {
                        if (a !== 'C' ){
                            setAction([...action, a])
                            if (!oper) {
                                setNum1(num1 + a)                               
                            }else {
                                setNum2(num2 + a)
                            }
                        }
                        if(a === 'C') {
                            setAnswer(0)
                            setNum1('')
                            setNum2('')
                            setAction('')
                            setOper(false)
                        }                     
                    }}>{a}</button>
                )              
            })}
        </div>
        <div className='opers'>
            { operatos.map((a,k) => {
                return(
                    <button key={k} className='op' onClick={() => {
                        setAction([...action, a])
                        setOper(a)
                    }}>{a}</button>                   
                )              
            })}
            <button className='equal'
            onClick={() => {
                if(num1 && oper) {
                    if( oper === '/') {
                        setAnswer(Number(num1) / Number(num2)) 
                        setNum1(Number(num1) / Number(num2)) 
                    }else if(oper === '*') {
                        setAnswer(Number(num1) * Number(num2))
                        setNum1(Number(num1) * Number(num2)) 
                    }else if(oper === '-') {
                        setAnswer(Number(num1) - Number(num2))
                        setNum1(Number(num1) - Number(num2)) 
                    }else if(oper === '+'){
                        setAnswer(Number(num1) + Number(num2))
                        setNum1(Number(num1) + Number(num2)) 
                    }else {
                        console.log('operator error')
                    }             
                    setNum2('')
                }
            }}
            >{equal}</button>
        </div>     
        </div>      
    </div>  
    )  
}

export default Calcu;