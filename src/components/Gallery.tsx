import type { JSX } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';

export default function Gallery(): JSX.Element {
    const prefixPath: string = 'HelloWhyAreYouSavingMyImage_TAKAI';

    const orderOfPics: number[] = [1,2,3,4,5,6,7,8,9,10,11];
    const [showLeft, setShowLeft] = useState<boolean>(false);
    const [showRight, setShowRight] = useState<boolean>(true);

    const leftArrowClass:string = (!showLeft) ? 'opacity-0 pointer-events-none' : '';
    const rightArrowclass:string = (!showRight) ? 'opacity-0 pointer-events-none' : '';
    

    useEffect(() => {
        let firstImg = document.getElementById(`${prefixPath}1`)
        let lastImg = document.getElementById(`${prefixPath}11`)
        firstImg?.classList.toggle(`mx-[1px]`)
        lastImg?.classList.toggle(`mx-[1px]`)
        firstImg?.classList.add(`mr-[1px]`)   
        lastImg?.classList.add(`ml-[1px]`)        
    }, [])


    return (
            <ul id={`gallery`} class="carousel carousel-center md:overflow-x-hidden" onScroll={() => {
                let gallery = document.getElementById(`gallery`)
                if (gallery?.scrollLeft < 300) {
                    setShowLeft(false);
                }
                else if (!showLeft) {
                    setShowLeft(true);
                }

                if (gallery?.scrollWidth - (gallery?.scrollLeft + gallery?.clientWidth) < 300) {
                    setShowRight(false);
                } else if (!showRight) {
                    setShowRight(true);
                }
            }}>
                <div id={`left and right buttons`} class="hidden absolute md:flex justify-between left-6 right-6 self-center">
                    <button id={`left-arrow`} class={leftArrowClass} onClick={() => {
                        let gallery = document.getElementById(`gallery`)
                        if (gallery?.scrollLeft > 300) {
                            gallery.scrollLeft -= 400
                            // setFocusedPic(focusedPic - 1)
                        }
                    }}>
                        <img src={`/left-arrow.svg`} className={`w-[20px]`}/>
                    </button>
                    <button id={`right-arrow`} className={rightArrowclass} onClick={() => {
                        let gallery = document.getElementById(`gallery`)
                        gallery.scrollLeft += 400
                        // console.log(gallery?.scrollLeft)
                        // setFocusedPic(focusedPic + 1);
                    }}>
                        <img src={`/right-arrow.svg`} className={`w-[20px]`}/>
                    </button>
                </div>
                {orderOfPics.map((num:number) => {
                    if (num === 7) {
                        return (
                            <li id={`${prefixPath}${num}`} className={`mx-[1px] carousel-item h-full`}>
                                <img src={`./assets/${prefixPath}${num}.jpg`} className={`2xl:h-[22.5em] h-[302px]`}/>
                            </li>
                        );
                    }
                    else {
                        return (
                            <li id={`${prefixPath}${num}`} className={`mx-[1px] carousel-item h-full w-fit`}>
                                <img src={`./assets/${prefixPath}${num}.jpg`} className={`2xl:h-[22.5em] h-[302px]`}/>
                            </li>
                        );
                    }
                })}
            </ul>
    );
}