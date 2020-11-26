import React, {useState}  from 'react';
import './App.css';
import { Form } from "react-bootstrap";
import marked from 'marked';

 const App = () => {

    const [text, setText] = useState(defaultText)

    return (

      <div className="App">
        <div>
        <div className="box-header" id="editor-header">
          <h1>Editor</h1>
        </div>
          <Form.Group id="editor-box">
            <Form.Control id="editor" onChange={(e) => setText(e.target.value)}as="textarea" value={text}/>
          </Form.Group>
        </div>
        <div className="box-header" id="preview-header">
          <h1>Preview</h1>
        </div>
        <div
          dangerouslySetInnerHTML = {{__html: marked(text)}} 
          id ="preview" 
          className = "text"
          as="textarea" 
          value = {text} 
          >
        </div>
    </div>
  );
}

export default App;

const defaultText = 
`
# This is a header.

## This is a sub-header.

**This text is bold.**

*This text is in italics.*


***This text is in bold italics.***

> This is a block quote. This
>
> paragraph has two lines.

> You can also nest block quotes.
>> Look at how nested I am!

Here's some reasons why bullet points could also be used:

- To make lists.
- To show off markdown bullet points.
- Just for fun.

To learn more about how to use Markdown, click on the Markdown logo below.

[![The Markdown logo](https://cdn.iconscout.com/icon/free/png-256/markdown-433293.png)](https://markdown-guide.readthedocs.io/en/latest/basics.html)

`