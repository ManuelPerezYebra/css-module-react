import style from './singleCard.module.css'

const SingleCard =({color, title, text, img,buttontext, position})=>{
    return <div className={`${style.box} ${style[color]} ${style[position]}`}>
        <img src={`${img}`} alt="" />
        <h1>{title}</h1>
        <p>{text}</p>
        <a href="" className={style[buttontext]}>Learn More</a>
    </div>
}

export default SingleCard