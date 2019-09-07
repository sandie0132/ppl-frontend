import React from 'react'


class UploadComponent extends React.Component {
    render() {
        return (
            <div className="rght_btn">
                <span className="rght_btn_icon">
                    <img src="images/btn_iconb.png" alt="up" />
                </span> <span className="btn_sep">
                    <img src="images/btn_sep.png" alt="sep" />
                </span>
                <a href="#">Upload Post</a>
            </div>

        )
    }
}

export default UploadComponent;