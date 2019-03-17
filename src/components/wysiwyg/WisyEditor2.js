import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

import './../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const WisyEditor2 = (props) => {
    return(
      <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={props.setContent}
      />
    )
}

export default WisyEditor2;
