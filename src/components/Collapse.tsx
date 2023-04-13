import type { JSX } from 'preact/jsx-runtime';

interface ICollapseProps {
    type: CollapseTypes;
    hide?: boolean;
}

export enum CollapseTypes {
    Experience,
    Education,
    Playlist
}

function GetBodyText(type: CollapseTypes): JSX.Element {
    switch(type) {
        case CollapseTypes.Experience:
            return (
                <div className={`mt-2 mb-3 flex flex-col`}>
                    <span className={`  text-[0.89em] italic`}>Currently</span>
                    <span className={`  mt-[1px] text-[0.89em]`}>Experience Design » <a className={`  underline decoration-1 underline-offset-[3px]`} href={`https://www.september.works`}>September Works</a></span>
                    <span className={`  mt-[18px] text-[0.89em] italic`}>Previously</span>
                    <span className={`  mt-[1px] text-[0.89em]`}>Graphic Design » NPR KUOW Radio, 2022</span>
                    <span className={`  mt-[1px] text-[0.89em]`}>Content Design » Columbia Records, 2021</span>
                    <span className={`  mt-[1px] text-[0.89em]`}>Graphic Design » CAD Music Mgmt, 2020</span>
                    <span className={`  mt-[1px] text-[0.89em]`}>Photography » Freelance, 2016-2020</span>
                </div>
            );
        case CollapseTypes.Education:
            return (
                <div className={`mt-2 mb-2 flex flex-col gap-[2px]`}>
                    <span className={`  text-[0.89em]`}>BDes Visual Communication Design</span>
                    <span className={`  text-[0.89em]`}>University of Washington, 2021</span>
                    <span className={`  text-[0.89em]`}>School of Art + Art History + Design</span>
                </div>
            );
        case CollapseTypes.Playlist:
            return (
                <div className={`mt-1 mb-2`}>
                    <span className={`  text-[0.89em]`}>Ten of my favorite songs <a className={`  underline decoration-1 underline-offset-[3px]`} href={`https://open.spotify.com/playlist/4rOJbqp8hgw9sTPkt8huRc?si=1e7b85d9af7a4614`}>here</a>.</span>
                </div>
            );
        default:
            return <><p>placeholder</p></>;

    }
}

export default function CollapseGroup(): JSX.Element {
    return (
        <>
            <Collapse type={CollapseTypes.Experience} />
            <Collapse type={CollapseTypes.Education} />
            <Collapse type={CollapseTypes.Playlist} />
        </>
    );
}

function Collapse(props: ICollapseProps): JSX.Element {
    const title:string = CollapseTypes[props.type];

    return (
        <div>
            <button
                className={`cursor-pointer flex flex-row items-center gap-[9.5px]`}
                onClick={() => AnimateAndShowContent(title)}>
                <div id={`${title}`} className={`plusminus`} />
                <span className={`text-[0.89em]`}>{title}</span>
            </button>
            <div id={`${title}-hiddenstuff`} className={`hiddenstuff`}>
                {GetBodyText(props.type)}
            </div>
        </div>
    );
}

function AnimateAndShowContent(title: string): void {
    // THIS IS THE ONE TO OPEN
    let plus = document.getElementById(`${title}`); // trigger plus to minus animation
    let hiddenContent = document.getElementById(`${title}-hiddenstuff`); // hidden text
    const delay:boolean = HideAllExcept(title);
    if (delay) {
        setTimeout(() => {
            plus?.classList.toggle('active');
            hiddenContent?.classList.toggle('show')
        }, 275)
    }
    else {
        plus?.classList.toggle('active');
        hiddenContent?.classList.toggle('show')
    }

}

function HideAllExcept(title: string): boolean {
    const listOfIds: string[] = ['Experience', 'Playlist', 'Education'].filter((val) => val !== title)
    let valToReturn:boolean = false;
    // console.log(listOfIds)

    listOfIds.forEach((id) => {
        let plus = document.getElementById(id);
        let hiddenContent = document.getElementById(`${id}-hiddenstuff`);
        if (plus?.classList.contains('active')) {
            valToReturn = true;
            plus.classList.toggle('active')
            hiddenContent?.classList.toggle('show')
        }
    })
    return valToReturn;
}