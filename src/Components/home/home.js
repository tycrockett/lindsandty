import * as React from 'react';
import main from '../../Assets/main.jpg';
import amazon from '../../Assets/amazon.png';
import venmo from '../../Assets/venmo.png';
import './home.css';

export default class Navbar extends React.Component {

    render() {
        return (
            <div className="main">

                <div className="info">
                    <div className="date">
                            <p>February 14th, 2019</p>
                    </div>
                </div>

                <div className="flex banner">                    

                    <div className="mainImgDiv">
                        <img alt="main" src={main} className="mainImg"/>
                    </div>

                    <div className="sideBar">

                        <div className="registry">
                        <p className="registryHead">Registry</p>
                            <div className="flex">
                                <div className="registryItem">
                                    <a href="https://www.amazon.com/wedding/lindsay-sanderson-ty-crockett-provo-february-2019/registry/3NPLFT4MM26RR">
                                        <img alt="amazon" className="registryImg" src={amazon} />
                                        <p className="amazonP">Amazon</p>
                                    </a>
                                </div>
                                <div className="registryItem">
                                    <a href="https://venmo.com/code?user_id=2382321864933376120">
                                        <img alt="venmo" className="registryImg" src={venmo} />
                                        <p className="amazonP">Venmo</p>
                                    </a>
                                </div>
                            </div>
                            
                            <p className="addr">The Vista at Cedar Hills</p>
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe title="googlemap" width="100%" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q=the%20vista%20at%20cedar%20hills%20golf%20course&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}


/*
<div className="address">
<p className="addr">The Vista at Cedar Hills</p>
<p className="addr">10640 N Clubhouse Drive</p>
<p className="addr">Cedar Hills, Utah</p>
<p className="addr">84042</p>
</div>
*/