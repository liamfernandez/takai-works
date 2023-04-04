import type { JSX } from 'preact/jsx-runtime';

interface ICollapseProps {
    type: CollapseTypes;
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
                    <span className={` text-[0.89em] italic`}>Currently</span>
                    <span className={`mt-[1px] text-[0.89em]`}>Experience Design » <a className={`underline decoration-1 underline-offset-[3px]`} href={`https://www.september.works`}>September Works</a></span>
                    <span className={`mt-[18px] text-[0.89em] italic`}>Previously</span>
                    <span className={`mt-[1px] text-[0.89em]`}>Graphic Design » NPR KUOW Radio, 2022</span>
                    <span className={`mt-[1px] text-[0.89em]`}>Content Design » Columbia Records, 2021</span>
                    <span className={`mt-[1px] text-[0.89em]`}>Graphic Design » CAD Music Mgmt, 2020</span>
                    <span className={`mt-[1px] text-[0.89em]`}>Photography » Freelance, 2016-2020</span>
                </div>
            );
        case CollapseTypes.Education:
            return (
                <div className={`mt-2 mb-2 flex flex-col gap-[2px]`}>
                    <span className={`text-[0.89em]`}>BDes Visual Communication Design</span>
                    <span className={`text-[0.89em]`}>University of Washington, 2021</span>
                    <span className={`text-[0.89em]`}>School of Art + Art History + Design</span>
                </div>
            );
        case CollapseTypes.Playlist:
            return (
                <div className={`mt-1 mb-2`}>
                    <span className={`text-[0.89em]`}>Ten of my favorite songs <a className={`underline decoration-1 underline-offset-[3px]`} href={`https://open.spotify.com/playlist/4rOJbqp8hgw9sTPkt8huRc?si=1e7b85d9af7a4614`}>here</a>.</span>
                </div>
            );
        default:
            return <><p>placeholder</p></>;

    }
}

export default function Collapse(props: ICollapseProps): JSX.Element {
    const title:string = CollapseTypes[props.type];

    return (
        <>
            <button
                className={`cursor-pointer flex flex-row items-center gap-[9.5px]`}
                onClick={() => AnimateAndShowContent(title)}>
                <div className={`plusminus w-[10px]`} id={`${CollapseTypes[props.type]}`}/>
                <span className={`text-[0.89em]`}>{CollapseTypes[props.type]}</span>
            </button>
            <div id={`${title}-hiddenstuff`} className={`hiddenstuff`}>
                {GetBodyText(props.type)}
            </div>
        </>
    );
}

function AnimateAndShowContent(title: string): void {
    let plus = document.getElementById(`${title}`);
    plus?.classList.toggle('active');

    let hiddenContent = document.getElementById(`${title}-hiddenstuff`)
    hiddenContent?.classList.toggle('show')
    console.log(hiddenContent?.classList)
}