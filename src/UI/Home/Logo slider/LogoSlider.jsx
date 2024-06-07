
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
import { Container } from "@mui/material"
// import { useEffect, useState } from "react"

const animation = { duration: 16000, easing: (t) => t }

const LogoSlider = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        slidesPerView: 10,
        spacing: 5,
        pauseOnHover: true, // Pause the slider on hover
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
    })


    return (
        <div className="mt-8">
            <Container>
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide  number-slide1 w-[310px] grid grid-cols-5 gap-4">
                        <img className="w-[200px] h-[200px]" src={sl1} alt="" />
                        <img className="w-[200px]  h-[200px]" src={sl11} alt="" />
                        <img className="w-[200px]  h-[200px]" src={sl3} alt="" />
                        <img className="w-[200px]  h-[200px]" src={sl4} alt="" />
                        <img className="w-[200px]  h-[200px]" src={sl5} alt="" />
                    </div>
                    <div className="keen-slider__slide  number-slide1 w-[310px] grid grid-cols-5 gap-4">
                        <img className="w-[200px] h-[200px]" src={sl6} alt="" />
                        <img className="w-[200px]  h-[200px]" src={sl7} alt="" />
                        <img className="w-[200px]  h-[200px]" src={sl8} alt="" />
                        <img className="w-[200px]  h-[200px]" src={sl9} alt="" />
                        <img className="w-[200px]  h-[200px]" src={sl10} alt="" />
                    </div> 
                </div>
            </Container>
        </div>
    );
};

export default LogoSlider;