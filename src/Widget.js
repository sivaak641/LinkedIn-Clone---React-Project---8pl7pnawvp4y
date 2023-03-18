import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./css/Widget.css"
function Widget() {
    return (
        <>
            <div className='widget'>
                <div className='widget_top'>
                    <div className='widget_header'>
                        <h4>LinkedIn News</h4>
                        <InfoIcon />
                    </div>
                    <div className='widget_body'>
                        <ul className='widget_options'>
                            <li>
                                <h4>new web developer roles</h4>
                                <p>2d ago *855 readers</p>
                            </li>
                            <li>
                                <h4>A web developer fast</h4>
                                <p>1d ago * 420 readers</p>
                            </li>
                            <li>
                                <h4>A web developer fast</h4>
                                <p>3d ago * 380 readers</p>
                            </li>
                            <li>
                                <h4>
                                how to become a web developer fast
                                </h4>
                                <p>1d ago * 280 readers</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='widget_bottom'>
                    <div className='widget_header'>
                        <h4>Todays's top Courses</h4>
                        <InfoIcon />
                    </div>
                    <div className='widget_body'>
                        <ul className='widget_options'>
                            <li>
                                <h4>some text</h4>
                                <p>1d ago * 4,860 readers</p>
                            </li>
                            <li>
                                <h4>residency</h4>
                                <p>titianic Kolo</p>
                            </li>
                            <li>
                                <h4> some random text</h4>
                                <p>3d ago * 4,560 readers </p>
                            </li>
                            <li>
                                <h4>improve productivity</h4>
                                <p>2d ago * 5,56 readers </p>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Widget