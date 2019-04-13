import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const allLinks = [{ name : 'to Login', link : '/'}, { name : 'To Blogs' , link : '/blogs'}];
const allLinksLoggedIn = [{ name : 'Logout', link : '/'}, { name : 'To Blogs' , link : '/blogs'}];
const loggeInLinks = [...allLinksLoggedIn,{ name : 'Create Blog', link : '/createblog'}];

const allButtons = props => allLinks.map( (object,index) => <Link key={index} to={object.link} className={props.classes.link}>
                                                        <Button className={props.classes.button}>{object.name}</Button>
                                                        </Link>);

const loggedInButtons = props => loggeInLinks.map( (object, index ) => <Link key={index} to={object.link} className={props.classes.link}>
                                                        <Button className={props.classes.button}>{object.name}</Button>
                                                        </Link>);

const LinkBar = (props) =>  props.bool ? <span>{loggedInButtons(props)}</span> : <span>{allButtons(props)}</span>
export default LinkBar;
