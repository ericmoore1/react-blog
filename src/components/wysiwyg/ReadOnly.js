import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

import './../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//onContentStateChange={props.setContent}
const ReadOnly = (props) => {
  console.log("ReadOnly: ",props);
    return(
      <Editor
        toolbarHidden
        readOnly
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        editorState={props.editorState}
        onEditorStateChange={props.setEditorState}
        onContentStateChange={props.setContent}
        />
    )
}

export default ReadOnly;
