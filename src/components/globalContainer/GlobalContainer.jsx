import SingleCard from '../singleCard/SingleCard'
import style from './globalConatiner.module.css'

const GlobalContainer =()=>{
   return <div className={style.box}>
    <SingleCard img='Group 2.svg' color='orange' title='SEDAN' text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' buttontext='orangetext' position='first'></SingleCard>
    <SingleCard  img='Group 3.svg' color='aqua' title='SUVS' text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.' buttontext='aquatext' position='second'></SingleCard>
    <SingleCard  img='Group 4.svg' color='green' title='LUXURY' text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ' buttontext='greentext' position='third'></SingleCard>
   </div>
}
export default GlobalContainer