import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect,useRef} from 'react';
// import image1 from '../images/image1.jpg';
// import image2 from '../images/image2.jpg';
// import image3 from '../images/image3.jpg';
// import image4 from '../images/image4.jpg';
// import image5 from '../images/image5.jpg';
// import image6 from '../images/image6.jpg';




function CardQuote() {
  

  const [quote,setQuote] = useState('');
  
  const imageRef = useRef();
  const textRef = useRef();
  
  
  let image=['/image/image1.jpg','/image/image2.jpg','/image/image3.jpg','/image/image4.jpg','/image/image5.jpg','/image/image6.jpg']
  let text = ['#FFE4C4','#8A2BE2','#A52A2A','#6495ED','#6495ED','#008B8B']

  const getQuote = async ()=>{
    fetch("https://type.fit/api/quotes/")
    .then((res)=>res.json())
    .then((data)=> {

      let randomNum = Math.floor(Math.random()*data.length);
      setQuote(data[randomNum]);
      //setImg(image[Math.floor(Math.random()* image.length)])
    })
  }
  useEffect(()=>{
     getQuote()
  },[]);

  useEffect(()=>{
    textRef.current.style.backgroundColor = text[Math.floor(Math.random()* text.length)]

  },[quote])

  



//src={require('../images/image1.jpg')}
//src={require(image[Math.floor(Math.random()* image.length)])} 
  return (
    <Card  ref={textRef}  style={{ width: '38rem' }}>
      <Card.Img className='img' width="150px" height="350px"   variant="top" src={image[Math.floor(Math.random()* image.length)]} />
      <Card.Body>
       
        <Card.Text style={{fontSize:'20px',color:'white',fontWeight:'800',fontFamily:'cursive'}} >
          {quote.text}
        </Card.Text>

        <Card.Title style={{fontSize:'18px',fontFamily:'cursive',color:'white',float:'right'}}>{quote.author}</Card.Title>
        
        <div className='mt-5 d-flex justify-content-center gap-2'>
        <Button variant="danger" size="lg" onClick={getQuote} >Quote</Button>{' '}{' '}
         
         <a  href={`https://twitter.com/intent/tweet?text=${quote.text}`} style={{fontSize:'20px',fontWeight:'500',color:'white'}} className='btn btn-warning' target='_blank'>Tweet</a>
      </div>
      </Card.Body>
    </Card>
  );
}

export default CardQuote;