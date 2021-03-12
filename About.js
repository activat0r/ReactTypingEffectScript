import { Typography } from '@material-ui/core'
import react from 'react'
import {useState, useEffect} from 'react'
import './NameTransition.css'

var word ="";
var keywordCounter = 0;
var charCounter = 0;
var deleting = false;
const eraseCharDelay= 150;
const typeCharDelay = 400;
const newKeywordDelay = 1000;
const keywords = ["Aditya Sawant","a Developer", "an Engineer"];

function About(){
    const [text, setText] = useState("");   
    useEffect(()=>{
        const timer = setTimeout(()=>{

        if(charCounter < keywords[keywordCounter].length && !deleting){
            word = (word + keywords[keywordCounter].charAt(charCounter));
            setText(word)
            charCounter++;
            if(charCounter == keywords[keywordCounter].length){
                deleting = true;
            }
        }
        
    },typeCharDelay)
    return () => window.clearTimeout(timer);

    })

    useEffect(()=>{
        const timer2 = setTimeout(()=>{

       if(charCounter>0 && deleting){
            word = (keywords[keywordCounter].substr(0,charCounter-1));
            setText(word)
            charCounter--;
            if(charCounter == 0){
                deleting = false;
                keywordCounter = 1 - keywordCounter
            }
        }
    },eraseCharDelay)
    return () => window.clearTimeout(timer2);

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

