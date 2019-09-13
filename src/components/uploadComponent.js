import React from 'react'
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload'


let upload = false
class UploadComponent extends React.Component {

    onDrop(picture) {
        console.log(picture)
    }
    render() {
        return (
            <>
                <div className="rght_btn" onClick={this.upload}>

                    <div> <span className="rght_btn_icon">
                        <img src="images/btn_iconb.png" alt="up" />
                    </span> <span className="btn_sep">
                            <img src="images/btn_sep.png" alt="sep" />
                        </span><a href="#" >Upload Post</a></div>

                </div>
                <ImageUploader className="content"

                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpeg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />

            </>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(">>>>")
    if (state.timelineReducer.state) {
        console.log(">>>>i am state>>", state.timelineReducer.state)
    }
    console.log("i am state", state.timelineReducer)

}

var mapDispatchToProps = dispatch => {
    return {

        onUpload: () => {

            dispatch({ type: "DROP_UPLOAD", payload: false });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadComponent);