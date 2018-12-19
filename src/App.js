import React, { Component } from 'react';
import styled from 'styled-components';

const Hero = styled.header`
  height: 100vh;
  width: 100%;
  background-color: #111;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: table;
  box-sizing: border-box;

  @media (min-width: 30em) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  @media (min-width: 60em) {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  > div {
    vertical-align: middle;
    text-align: left;
    display: table-cell;
    box-sizing: border-box;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  margin: .67em 0;
  box-sizing: border-box;
  letter-spacing: -.05em;
  line-height: 1.25;
  text-align: left;
  color: hsla(0,0%,100%,.9);
  margin: 0;
  font-size: 2.25rem;

  @media (min-width: 30em) {
    font-size: 3rem;
  }
`;

const SubTitle = styled.h2`
  box-sizing: border-box;
  text-align: left;
  font-weight: 400;
  line-height: 1.25;
  color: hsla(0,0%,100%,.5);
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;

  @media screen and (min-width: 30em) {
    font-size: 1.5rem;
  }

  > span {
    white-space: nowrap;
  }
`;

const ContactList = styled.ul`
  line-height: 1.5;
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ContactListItem = styled.li`
  display: block;
  margin-right: .5rem;
  margin-bottom: .25rem;
`;

const ContactListItemLast = styled.li`
  display: block;
  margin-right: .5rem;
`;

const ContactListLink = styled.a`
  background-color: transparent;
  text-decoration: none;
  color: #ff41b4;

  &:active, &:focus, &:hover, &:link, &:visited {
    transition: color .15s ease-in;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const hello = `
------------------------------------------------------------
👋 Hey there! Taking a peek at the codes, are we?

Well, seeing as you're here, I might as well tell you a bit
about this site.

The site is built using React and hosted via Github Pages. 
All styling is handled by Styled Components. The icons are
by Font Awesome. The typeface is Work Sans by Wei Huang. 
The site is 100% overengineered by Yours Truly.

Thanks for stopping by. Remember to get in touch if you have
any questions or comments: hello@aaronmarr.co.uk.

Bye!
------------------------------------------------------------
`;

class App extends Component {
  componentWillMount() {
    console.log(hello);
  }

  render() {
    return (
      <Hero>
        <div>
            <Title>Aaron Marr</Title>
            <SubTitle>Front-end Developer based in <span>Cornwall, UK</span></SubTitle>
            <ContactList>
              <ContactListItem>
                <ContactListLink href="mailto:hello@aaronmarr.co.uk">
                  <abbr title="Email">
                    <i 
                      className="fa fa-fw fa-envelope" 
                      aria-hidden="true"
                    ></i>
                  </abbr>
                  hello@aaronmarr.co.uk
                </ContactListLink>
              </ContactListItem>
              <ContactListItemLast>
                <ContactListLink 
                  href="https://goo.gl/maps/jj7mmurW1tF2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <abbr title="Location">
                    <i 
                      className="fa fa-fw fa-globe" 
                      aria-hidden="true"
                    ></i>
                  </abbr>
                  Redruth, Cornwall, UK
                </ContactListLink>
              </ContactListItemLast>
            </ContactList>
        </div>
      </Hero>
    );
  }
}

export default App;
