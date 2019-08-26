import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../css/main.min.css';
const allLinks = [{ name : 'to Login', link : '/'}, { name : 'To Blogs' , link : '/blogs'},{ name : 'To Blogs2' , link : '/blogbyauthor'}];
const allLinksLoggedIn = [{ name : 'Logout', link : '/'}, { name : 'To Blogs' , link : '/blogs'},{ name : 'To Blogs2' , link : '/blogbyauthor'}];
const loggeInLinks = [...allLinksLoggedIn,{ name : 'Create Blog', link : '/createblog'}];

const allButtons = props => allLinks.map( (object,index) => <Link key={index} to={object.link} className={"link"}>
                                                        <Button className={'button'}>{object.name}</Button>
                                                        </Link>);

const loggedInButtons = props => loggeInLinks.map( (object, index ) => <Link key={index} to={object.link} className={"link"}>
                                                        <Button className={'button'}>{object.name}</Button>
                                                        </Link>);

const LinkBar = (props) => props.bool ? <span className={"linkbar"}>{loggedInButtons(props)}</span> : <span className={"linkbar"}>{allButtons(props)}</span>

export default LinkBar;
