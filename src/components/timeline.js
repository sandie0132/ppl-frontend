import React from 'react'
import NavBar from './navbar';
import HeadersComponent from './header';
import InviteComponent from './inviteFriendsComponent';
import UploadComponent from './uploadComponent';
import CategoryComponent from './categoriesComponent';
import CatsFeatured from './catsFeatured';
import DogsFeatured from './dogsFeatured';
import RabbitsFeatured from './rabbitsFeatured';
import FooterComponet from './footer';
import FriendsFlaggedComponent from './friendsflaggedcomp';
import UserPostTitleComponent from './userPostTitleComp';
import UserNameDateTimeComponent from './userNameDateTimecomp';
import PostImageComponent from './postImageComp';
import CommentFlagComponent from './commentFlagComp';
import ChangeProfileComponent from './changeProfileComp';
import ProfileComponent from './profileComponent';
// import ImageUploader from 'react-images-upload'









class TimelineComponent extends React.Component {
    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
                <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" />
                <NavBar />
                <HeadersComponent />
                <div className="container">
                    <div className="content">
                        <div className="content_rgt">
                            <UploadComponent />

                            <InviteComponent />
                            <CategoryComponent />
                            <div className="rght_cate">
                                <div className="rght_cate_hd" id="opn_cat_bg">Featured</div>
                                <div className="sub_dwn">
                                    <CatsFeatured />
                                    <DogsFeatured />
                                    <RabbitsFeatured />
                                </div>
                            </div>
                        </div>
                        <div className="content_lft">
                            <div className="contnt_1">
                                <FriendsFlaggedComponent />
                                <div className="timeline_div">
                                    <div className="timeline_div1">
                                        <ChangeProfileComponent />
                                        <ProfileComponent />
                                    </div>

                                </div>
                            </div>
                            <div className="contnt_2">
                                <div className="div_a">
                                    <UserPostTitleComponent />
                                    <UserNameDateTimeComponent />
                                    <PostImageComponent />
                                    <CommentFlagComponent />
                                </div>
                            </div>
                            <div className="contnt_2">
                                <div className="div_a">
                                    <UserPostTitleComponent />
                                    <UserNameDateTimeComponent />
                                    <div className="div_image"><img src="images/lft_img1.png" alt="pet" /></div>
                                    <CommentFlagComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clear" />
                </div>
                <FooterComponet />
            </div>
        );
    }
}


export default TimelineComponent;