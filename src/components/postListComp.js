import React from 'react';


class PostListComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="post_list">
                    <ul>
                        <li><a href="#"><span className="list_img"><img src="images/img_1.png" /></span>Latest First</a></li>
                        <li><a href="#"><span className="list_img"><img src="images/img_2.png" /></span>Oldest First</a></li>
                        <li><a href="#"><span className="list_img"><img src="images/img_3.png" /></span>Most Pet</a></li>
                        <li><a href="#"><span className="list_img"><img src="images/img_4.png" /></span>Most Clicks</a></li>
                        <li><a href="#"><span className="list_img"><img src="images/img_5.png" /></span>Most Commented</a></li>
                    </ul>
                </div>
                <div className="post_txt">4 New Post Updates</div>
            </div>
        )
    }
}
export default PostListComponent;