import type { JSX } from 'preact/jsx-runtime';
import { useState } from 'preact/hooks'

export default function Carousel(): JSX.Element {
    const prefixPath: string = 'HelloWhyAreYouSavingMyImage_TAKAI';
    const imgsToRender: string[] = [1,2,3,4,5,6,7,8,9,10,11].map(
        (num) => {
            return `${prefixPath}${num}`
        }
    );
    let picNum:number = 0

    return (
        <div id={`carousel`} class="carousel carousel-center overflow-x-hidden" onScroll={() => {
            let gallery = document.getElementById(`carousel`)
            // console.log(`clientWidth: ${gallery?.clientWidth}`)
            // console.log(`scrollLeft: ${gallery?.scrollLeft}`)
            // console.log(`scrollWidth: ${gallery?.scrollWidth}`)
            if ((gallery.scrollLeft + gallery.clientWidth) === gallery?.scrollWidth) {
                gallery.scrollLeft = 0;
            }

        }}>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-8 right-8 top-[37%]">
                <button onClick={() => {
                    let gallery = document.getElementById(`carousel`)
                    if (gallery.scrollLeft < 300) {
                        gallery.scrollLeft = gallery?.scrollWidth - gallery?.clientWidth - (300 - gallery?.scrollLeft)
                    }
                    else {
                        gallery.scrollLeft -= 300
                    }
                    
                }}>
                    <img src={`/left-arrow.svg`} className={`w-[20px]`}/>
                </button>
                <button onClick={() => {
                    let gallery = document.getElementById(`carousel`)
                    gallery.scrollLeft += 300
                }}>
                    <img src={`/right-arrow.svg`} className={`w-[20px]`}/>
                </button>
            </div>
            {imgsToRender.map((path:string) => {
                picNum++;
                return (
                    <div id={`slide${picNum}`} className={` carousel-item`}>
                        <div class={`mx-[0.75px]`}>
                            <img src={`./assets/${path}.jpg`} className={`h-[295px]`}/>
                        </div>
                    </div>
                );
            })} 
        </div>
    );
}