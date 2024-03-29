import React from 'react';
import CreateEdit from './CreateEdit';
import ReadOnly from './ReadOnly';

const Editor = ( props ) => {
  return props.canEdit ? <CreateEdit {...props}/> : <ReadOnly {...props}/>
};

const WisyEditor2 = (props) => {

    return(
      <Editor {...props} />
    )
}

export default WisyEditor2;
