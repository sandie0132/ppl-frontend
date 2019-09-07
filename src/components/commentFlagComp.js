import React from 'react';


class CommentFlagComponent extends React.Component {
    render() {
        return (
            <div className="div_btm">
                <div className="btm_list">
                    <ul>
                        <li><a href="#"><span className="btn_icon"><img src="images/icon_001.png" alt="share" /></span>Share</a></li>
                        <li><a href="#"><span className="btn_icon"><img src="images/icon_002.png" alt="share" /></span>Flag</a></li>
                        <li><a href="#"><span className="btn_icon"><img src="images/icon_004.png" alt="share" /></span>4 Comments</a></li>
                        <li><a href="#"><span className="btn_icon"><img src="images/icon_003.png" alt="share" /></span>Likes</a></li>
                        <div className="like_count" style={{ marginRight: '10px' }}><span className="lft_cnt" /><span className="mid_cnt">10</span><span className="rit_cnt" /></div>
                        <li><a href="#"><span className="btn_icon"><img src="images/icon_003.png" alt="share" /></span>Unlike</a></li>
                        <div className="like_count"><span className="lft_cnt" /><span className="mid_cnt">4</span><span className="rit_cnt" /></div>
                    </ul>
                </div>
            </div>

        )
    }
}


export default CommentFlagComponent;