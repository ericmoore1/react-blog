import React, { Component } from 'react';
// import { convertFromRaw,convertToRaw, EditorState } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import './../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class WisyView extends Component {
  render() {

    let content = this.props.content;
    let _editor = <div />;
    if(content !== ""){

      let editorstate = EditorState.createWithContent(convertFromRaw(content));
      _editor = <Editor
          toolbarHidden
          readOnly
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          editorState={editorstate}

      />
    }
    return(
        <div>
          {_editor}
        </div>
    );
  }
}


/*

*/

export default WisyView;
