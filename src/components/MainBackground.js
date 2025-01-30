// This is just for the screen with the line pattern (faded) as seen on Pip Boys.

import '../styles/PipBoy.css'

// Figure out if there's a better way of doing this instead of just rendering a morbillion things.
// 25 as 1+3 = 4 *25=100
function LinePair(){
    return(
        <>
            <div className='BackgroundLines1' />
            <div className='BackgroundLines2' />
        </>
    )
}

// 
// There 100% has to be a better way of doing all of this because wtf is this???
export default function MainBackground( {children} ){
    return(
        <>
            <div style={{position: 'fixed'}}>
                <div className='MainBackground'>
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                    <div className='BackgroundLines1' /> <div className='BackgroundLines2' />
                </div>
            </div>
            <text className="LargeText"> testing testing </text>
        </>

    )
}