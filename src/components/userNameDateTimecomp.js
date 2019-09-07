import React from 'react';
import UserPostTitleComponent from './userPostTitleComp';


class UserNameDateTimeComponent extends React.Component {
    render() {
        return (
            <div className="div_top">
                <div className="div_top_lft"><img src="images/img_6.png" />Steave Waugh</div>
                <div className="div_top_rgt"><span className="span_date">02 Jan 2014</span><span className="span_time">11:15am</span></div>
            </div>


        )
    }
}


export default UserNameDateTimeComponent;