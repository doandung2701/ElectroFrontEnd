import React from 'react';
import { Modal, Upload, Popconfirm} from 'antd';
import { dummyRequest} from '../../../helpers/helper';
import Alert from 'react-s-alert';
import { HOME_TITLE } from '../../../constants/constants';


class EditProfile extends React.Component{
    
    constructor(props){
        super(props);
        this.state= {
            modalVisible: false,
            file: null,
            formData: null,
        }
    }

    handleInputChange = (e)=>{
        var name = e.target.name;
        var value = e.target.value;
       this.props.handleInputChange(name,value);
    }


    handleCancel = ()=>{
        this.setState({
            modalVisible: false
        })
    }

    openUploadModal = ()=>{
        this.setState({
            modalVisible: true,
            file: document.getElementsByClassName("user-ava")[0].src
        })
    }

    handleOk = ()=>{
        if (this.state.formData){
            this.props.changeAva(this.state.formData);
            this.setState({
                formData: null
            })
            this.handleCancel();
        }else{
            this.handleCancel();
            Alert.info("Please select an avatar!",{
                effect: 'slide',
                timeout: 3000,
                position: 'top-right',
            })
        }
    }

    componentDidMount(){
        document.title = "My profile";
    }

    componentWillUnmount(){
        document.title = HOME_TITLE;
    }
    

    toggleManageCtn= ()=>{
        document.getElementsByClassName("manage-ctn")[0].classList.toggle("active");
    }

    toggleLinkCtn = (index)=>{
        document.getElementsByClassName("link-ctn")[index].classList.toggle("active");

    }

    updateProfile = ()=>{
        this.props.editInfo(this.props.userTask.userToChange);
    }

    handleAvaChange = (info) => {
        var reader = new FileReader();
        if (info.file.status === "done") {
            reader.addEventListener("load", () => {
                var url = reader.result;
                this.setState({
                    file: url
                })
            })
            reader.readAsDataURL(info.file.originFileObj)
            var formData = new FormData();
            formData.append("ava",info.file.originFileObj);
            formData.append("id",JSON.stringify(this.props.authentication.userId));
            console.log(formData);
            this.setState({
                formData: formData
            })
        }
    }

    onAvaRemove = (info) => {
        this.setState({
            file: this.props.userTask.user.avatar
        });
    }


    render(){
        var userTask = {...this.props.userTask};
        var user = {...userTask.user};
        var userToChange = {...userTask.userToChange}
        var isGettingInfo = userTask.isGettingInfo;
        if (isGettingInfo) return (
            <div style={{marginLeft: '35%'}}>
            <img src="/images/loading1.gif" alt="Loading..."/>
        </div>
        )
        return(
            <div className="page-content-item">
                <div className="ava-section">
                        <div className="ava-ctn" onClick={this.openUploadModal}>
                            <img 
                                src={user.avatar} alt="" />
                            <p>Change</p>
                        </div>
                        <Modal
                            title="Upload an avatar"
                            visible={this.state.modalVisible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            >
                            <Upload style={{fontSize: '52px',
                            color: 'grey',
                            }} type="drag" multiple={false}
                            onChange={this.handleAvaChange} 
                            customRequest={dummyRequest}
                            onRemove={this.onAvaRemove}  >
                                    {this.state.file?
                                     <img height="200px" width="auto" src={this.state.file} alt=""></img>:"+"} 
                            </Upload>
                        </Modal>
                    </div>
                    <div className="form-section">
                        <label htmlFor="u-email">Email: </label>
                        <input type="text" id="u-email" name="email" value={user.email}
                         disabled={true}
                        placeholder="Email..."/>
                        <label htmlFor="u-fn">First Name: </label>
                        <input type="text" value={userToChange.firstName}
                            onKeyPress  = {(e)=>{
                                if (e.key==="Enter")
                                    this.updateProfile()
                            }}
                           onChange={this.handleInputChange}
                        id="u-fn" name="firstName" 
                        placeholder="First name..."/>
                        <label htmlFor="u-ln">Last Name: </label>
                        <input type="text" value={userToChange.lastName}
                         onKeyPress  = {(e)=>{
                            if (e.key==="Enter")
                                this.updateProfile()
                        }}
                           onChange={this.handleInputChange}
                        id="u-ln" name="lastName" 
                        placeholder="Last name..."/> 
                        <label htmlFor="u-address">Address: </label>
                        <input type="text" 
                         onKeyPress  = {(e)=>{
                            if (e.key==="Enter")
                                this.updateProfile()
                        }}
                      onChange={this.handleInputChange}
                        name="address" id="u-address" placeholder="Address..."
                        value={userToChange.address}/>
                        <label htmlFor="u-phone">Phone Number: </label>
                        <input type="text"
                         onKeyPress  = {(e)=>{
                            if (e.key==="Enter")
                                this.updateProfile()
                        }}
                         onChange={this.handleInputChange}
                        name="phoneNumber"  value={userToChange.phoneNumber}
                        id="u-phone" placeholder="Phone number..."/>
                        <label htmlFor="u-birthDate">Birth Date: </label>
                        <input type="date" value={userToChange.birthDate}
                         onKeyPress  = {(e)=>{
                            if (e.key==="Enter")
                                this.updateProfile()
                        }}
                                onChange={this.handleInputChange}
                        name="birthDate" id="u-birthDate"/>
                        <Popconfirm title="Are you sure you want to update your profile?" 
                        onConfirm={this.updateProfile}> 
                        <button >Update</button>
                        </Popconfirm>
                    </div>
            </div>
        )
    }

}

export default EditProfile;