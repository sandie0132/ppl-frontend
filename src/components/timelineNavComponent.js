import React from 'react';



class TimelineNavComponent extends React.Component {
    render() {
        return (
            <div className="timeline_div2">
                <ul>
                    <li><a href="#" className="active">Timeline    </a></li>
                    <li><a href="#">About  </a></li>
                    <li><a href="#">Album</a></li>
                    <li><a href="#"> Pets</a></li>
                    <li><a href="#">My Uploads </a></li>
                </ul>
            </div>

        )
    }
}

export default TimelineNavComponent;