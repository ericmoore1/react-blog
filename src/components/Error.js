import React from 'react';
import BlogHeader from './BlogHeader';
const Error = ( {title, message} ) => <div>
                      <BlogHeader title={title} />
                      <h1>{message}</h1>
                    </div>
export default Error;
