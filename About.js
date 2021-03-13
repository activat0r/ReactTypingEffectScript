import { Typography } from '@material-ui/core'
import react from 'react'
import {useState, useEffect} from 'react'
import './NameTransition.css'

function About(){
    const [text, setText] = useState("");   
    const [deleting,setDeleting] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(()=>{

        if(charCounter < keywords[keywordCounter].length && !deleting){
            word = (word + keywords[keywordCounter].charAt(charCounter));
            setText(word)
            charCounter++;
            
        }
        
    },typeCharDelay)
    return () => window.clearTimeout(timer);

    },[deleting,charCounter,word])

    useEffect(()=>{
        const timer2 = setTimeout(()=>{
       if(charCounter>0 && deleting){
            word = (keywords[keywordCounter].substr(0,charCounter-1));
            setText(word)
            charCounter--;
            if(charCounter == 0){
                setDeleting(false)
                keywordCounter = 1-keywordCounter
            }
        }
    },eraseCharDelay)
    return () => window.clearTimeout(timer2);
    },[deleting,charCounter,word])

    useEffect(()=>{
        const timer3 = setTimeout(()=>{
            if(charCounter == keywords[keywordCounter].length){
                setDeleting(true);
            }
           
        },newKeywordDelay)
        return ()=> window.clearTimeout(timer3);
    })

    return(
      <div className="center">
        <Typography variant="h1">
            Hi!
        </Typography> 
        <br/>
        <Typography display="inline"  variant="h6">
            I am &nbsp;</Typography>
        <Typography display="inline" variant="h6"  id="about_name">
            {text}
        </Typography>
         
      </div> 
    );
}
export default About;
