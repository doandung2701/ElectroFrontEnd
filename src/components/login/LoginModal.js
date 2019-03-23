import React, { Component } from 'react';

class LoginModal extends Component {

    constructor(props){
        super(props);
        this.state ={
            ck: ''
        }

    }

    onEditorChange = (e)=>{
        this.setState({
            ck: e.editor.getData()
        })
    }

    render() {
    //     var htmlToReactParser = HtmlToReactParser.Parser;
    //     var parser = new htmlToReactParser();
    //     console.log(parser.parse('<table border="1" cellpadding="1" cellspacing="1" style="width:500px"><tbody><tr><td>&nbsp;</td><td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td><td>&nbsp;</td></tr>  <tr><td>&nbsp;</td> <td>&nbsp;</td> </tr> </tbody> </table><p>&nbsp;</p>'
    // ))
        return (
            <div>

            </div>
        );
    }
}

export default LoginModal;