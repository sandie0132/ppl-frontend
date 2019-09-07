import React from 'react';
import NavBar from './navbar';
import HeadersComponent from './header';
import FooterComponet from './footer';
import UploadComponent from './uploadComponent';
import InviteComponent from './inviteFriendsComponent';
import CategoryComponent from './categoriesComponent';
import CatsFeatured from './catsFeatured';
import DogsFeatured from './dogsFeatured';
import RabbitsFeatured from './rabbitsFeatured';
import PostListcomponent from './postListComp'
import FriendsFlaggedComponent from './friendsflaggedcomp';
import CommentFlagComponent from './commentFlagComp';
import UserPostTitleComponent from './userPostTitleComp';
import UserNameDateTimeComponent from './userNameDateTimecomp';
import PostImageComponent from './postImageComp';



class IndexComponent extends React.Component {
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
                                <div className="post_div">
                                    <PostListcomponent />
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


export default IndexComponent;