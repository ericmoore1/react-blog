import React, { Component } from 'react';

//  ContentState,convertToRaw
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'whatwg-fetch';
/* global fetch */
import './../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const styles = theme => ({
  toolbar: {
    marginBottom: 0,
    border: 'none',
    background: '#f9f9f9',

  },

  editor: {
    maxHeight: 300,
    padding: 10,
    border: '1px solid #f9f9f9'
  }


});

class WisyEditor2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show_save : false,
        show_editor : true,
        editorState: "",
        contentState : "",
    }

  }

  setContenteAndEditorState = (data) => {

        if(data === ""){
            this.setState({
                      contentState : "",
                      editorState : ""
                    });
            return;
        }
        let convert_from_raw_json = convertFromRaw(data);

        this.setState({
                      contentState : data,
                      editorState : EditorState.createWithContent(convert_from_raw_json)
                    });
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });

  };

  clearEditor = () => this.setState({editorState: "", contentState : ""});
  getEditorAndContent = () => {
      return {
          editorState : this.state.editorState,
          contentState : this.state.contentState
      }
  }

  onContentStateChange = (contentState) => {
    this.setState({
      contentState
    });

    //this.props.setContent(contentState);
  };

  /* Get number of modules and user avatar on mount */
  componentDidMount = () => {

  }

  /* Fetch the user's avatar from the server, add to state */
  user_avatar_image = () => {
      return;
    //let url =  + '/index.php/Userprofile/fetch_user_avatar';
      fetch(url,{
          credentials : 'include',
          mode : 'cors'
      }).then(response => {
                        return response.json();
                    }).then(json =>  {
                        this.setState({user_avatar : json.user_avatar});

                    });
  }

  render() {
    return(
      <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          editorState={this.state.editorState}
          onEditorStateChange={this.onEditorStateChange}
          onContentStateChange={this.onContentStateChange}
          toolbarClassName={styles.toolbar}
          editorClassName={styles.editor}

      />
    );
  }
}

export default WisyEditor2;
