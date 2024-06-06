
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import "./styles.css"
// import images 
import sl1 from '../../../assets/sl1.svg'
// import sl2 from '../../../assets/sl2.svg'
import sl3 from '../../../assets/sl3.svg'
import sl4 from '../../../assets/sl4.svg'
import sl5 from '../../../assets/sl5.svg'
import sl6 from '../../../assets/sl6.svg'
import sl7 from '../../../assets/sl7.svg'
import sl8 from '../../../assets/sl8.svg'
import sl9 from '../../../assets/sl9.svg'
import sl10 from '../../../assets/sl10.svg'
import sl11 from '../../../assets/sl10.svg'
// import { useEffect, useState } from "react"

const animation = { duration: 16000, easing: (t) => t }

const LogoSlider = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        slidesPerView: 5,
        spacing: 15,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })

   
    return (
        <div>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <img className="w-[200px]" src={ sl1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img className="w-[220px]" src={ sl5} alt="" />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img className="w-[250px]" src={ sl3} alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img className="w-[250px]" src={ sl4} alt="" />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <img className="w-[250px]" src={ sl5} alt="" />
                </div>
                <div className="keen-slider__slide number-slide6">
                    <img className="w-[250px]" src={ sl6} alt="" />
                </div>
                <div className="keen-slider__slide number-slide7">
                    <img className="w-[250px]" src={ sl7} alt="" />
                </div>
                
                <div className="keen-slider__slide number-slide8">
                    <img className="w-[250px]" src={ sl8} alt="" />
                </div>
                
                <div className="keen-slider__slide number-slide9">
                    <img className="w-[250px]" src={ sl9} alt="" />
                </div>
                
                <div className="keen-slider__slide number-slide10">
                    <img className="w-[250px]" src={ sl10} alt="" />
                </div>
                
                <div className="keen-slider__slide number-slide11">
                    <img className="w-[250px]" src={ sl11} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default LogoSlider;