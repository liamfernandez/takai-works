import type { JSX } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';

export default function Gallery(): JSX.Element {
    const prefixPath: string = 'HelloWhyAreYouSavingMyImage_TAKAI';

    const orderOfPics: number[] = [1,2,3,4,5,6,7,8,9,10,11];
    const [focusedPic, setFocusedPic] = useState<number>(3); //default center pic is 3

    const leftArrowClass:string = (focusedPic === 3) ? 'opacity-0 pointer-events-none' : '';
    const rightArrowclass:string = (focusedPic === 9) ? 'opacity-0 pointer-events-none' : '';
    

    useEffect(() => {
        let firstImg = document.getElementById(`${prefixPath}1`)
        let lastImg = document.getElementById(`${prefixPath}11`)
        firstImg?.classList.toggle(`mx-[1px]`)
        lastImg?.classList.toggle(`mx-[1px]`)
        firstImg?.classList.add(`mr-[1px]`)   
        lastImg?.classList.add(`ml-[1px]`)        
    }, [])


    return (
            <ul id={`gallery`} class="carousel carousel-center overflow-x-hidden" onScroll={() => {
            }}>
                <div id={`left and right buttons`} class="absolute flex justify-between transform -translate-y-1/2 left-6 right-6 2xl:top-[36%] top-[37%]">
                    <button id={`left-arrow`} class={leftArrowClass} onClick={() => {
                        let gallery = document.getElementById(`gallery`)
                        if (gallery?.scrollLeft > 300) {
                            gallery.scrollLeft -= 400
                            setFocusedPic(focusedPic - 1)
                        }
                        console.log(focusedPic)
                    }}>
                        <img src={`/left-arrow.svg`} className={`w-[20px]`}/>
                    </button>
                    <button id={`right-arrow`} className={rightArrowclass} onClick={() => {
                        let gallery = document.getElementById(`gallery`)
                        gallery.scrollLeft += 400
                        setFocusedPic(focusedPic + 1);
                    }}>
                        <img src={`/right-arrow.svg`} className={`w-[20px]`}/>
                    </button>
                </div>
                {orderOfPics.map((num:number) => {
                    return (
                        <li id={`${prefixPath}${num}`} className={`mx-[1px] carousel-item`}>
                            <img src={`./assets/${prefixPath}${num}.jpg`} className={`2xl:h-[22.5em] h-[302px]`}/>
                        </li>
                    );
                })}
            </ul>
    );
}