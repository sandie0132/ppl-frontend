import React from 'react'


class CatsFeatured extends React.Component {
    render() {
        return (
            <div className="feat_sec">
                <div className="feat_sec_img"><img src="images/feat_img1.png" alt="image" /></div>
                <div className="feat_txt">Lorem Ipusum Text</div>
                <div className="btm_rgt">
                    <div className="btm_arc">Cats</div>
                </div>
            </div>

        )
    }
}

export default CatsFeatured;