import React from "react";
import style from '../../style/showImage.module.css'
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'  
import four from '../../assets/four.png'
import five from '../../assets/five.png'
import six from '../../assets/six.png'

const ShowImages = ({ roll }) => {

    const images = () => {
        if(roll === 1) {
            return <img src={one} alt='dado' />
        }
        if(roll === 2) {
            return <img src={two} alt='dado' />
        }
        if(roll === 3) {
            return <img src={three} alt='dado' />
        }
        if(roll === 4) {
            return <img src={four} alt='dado' />
        }
        if(roll === 5) {
            return <img src={five} alt='dado' />
        }
        if(roll === 6) {
            return <img src={six} alt='dado' />
        }
    }

    return (
        <div className={style.dados}>
            {images()}
        </div>
    )
}

export default ShowImages;