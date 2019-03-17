import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

import './../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const CreateEdit = (props) => {
    return(
      <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={props.setContent}
      />
    )
}

export default CreateEdit;
