import React from 'react';

class ModalGallery extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    onNext = () => {
        if (this.state.currentIndex === this.props.imgs.length - 1) {
            this.setState({
                currentIndex: 0
            })
        } else {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
        }
    }

    onPrev = () => {
        if (this.state.currentIndex === 0) {
            this.setState({
                currentIndex: this.props.imgs.length - 1
            })
        } else {
            this.setState({
                currentIndex: this.state.currentIndex - 1
            })
        }
    }

    render(){
        return(
            <div className="modal-gallery">
                <button onClick={this.props.onClose}><i className="fas fa-times"></i></button>
                <div className="modal-gallery-body">
                    <div className="img-container">
                        <button onClick={this.onPrev}
                        className="btn-prev"><i className="fas fa-chevron-left"></i></button>
                            <img src={this.props.imgs[this.state.currentIndex].imgUrl} alt=""/>
                        <button onClick={this.onNext}
                        className="btn-next"><i className="fas fa-chevron-right"></i></button>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        )
    }
}

export default ModalGallery;