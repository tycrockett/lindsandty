import * as React from 'react';
import main from '../../Assets/main.jpg';
import amazon from '../../Assets/amazon.png';
import venmo from '../../Assets/venmo.png';
import linds from '../../Assets/linds.png';
import ty from '../../Assets/ty.png';

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
                <div>
                    <p className="aboutus" id="aboutus">About Us</p>
                    <div className="aboutusp">
                        <div className="convoher">
                            <div className="imgDiv"><img src={linds} alt='linds' className='herIMG'/></div>
                            <p className="her together">My friend from institute, Justin, reached out to me and asked if I would be interested in going out with a friend of his. I told him I’d be open to it, but had a lot going on at the time. I meant to get back to him but I didn’t. Luckily, Ty didn’t give up easily so he reached out to me on Facebook until I responded. We went on a date soon after and connected instantly. I didn’t know that I had gone out with my future husband, but I knew I wanted to see him again.</p>
                        </div>

                        <div className="convohim">
                            <p className="him together">One of my best friends, Justin, shared a class with Lindsay and they ended up being friends on facebook. I saw they were friends and thought, “she’s dang cute” so I requested her as a friend and sent her a "wave". She didn’t get back to me so I asked Justin if he could set me up, which he said yes and tried. She ended up being too busy, but she was too dang cute to let go. A month later I messaged her again on facebook and asked her out. She finally said yes!</p>
                            <div className="imgDiv"><img src={ty} alt='ty' className='himIMG'/></div>
                        </div>

                        <p className="us together">We had so much fun together and never stopped laughing. We have spent almost every day together since. We knew we wanted to get married within a month of meeting for the first time.</p>
                        <br/>
                        <hr/>
                        <p className="them">The Proposal</p>
                        <hr/>

                        <div className="convoher">
                            <div className="imgDiv"><img src={linds} alt='linds' className='herIMG'/></div>
                            <p className="her together">Ty took me to the restaurant we went to on our first date. Afterward he surprised me by taking me to a spot near Utah Lake where he had set up a lit arch and got down on one knee. Our special moment was almost ruined when the arch fell over and nearly knocked us out.</p>
                        </div>

                        <div className="convohim">
                            <p className="him together">Lindsay wouldn’t stop singing “And a knick knack paddy whack, give the dog a bone!” in the car on the way to Utah lake. Her singing is still one of the reasons I love her. That was a very special night and when she said yes to me I was elated.</p> 
                            <div className="imgDiv"><img src={ty} alt='ty' className='himIMG'/></div>
                        </div>
                        <p className="them">We’re very excited to get married in the Provo City Center Temple, and for our friends and family to be joining us at our wedding celebration at the Vista at Cedar Hills!</p>
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