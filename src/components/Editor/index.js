import React from "react";
// import CKEditor from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";

// import { config } from './editorConfig'

const StyledButton = styled.section`
  width: 38%;
  height: auto;
  background-color: snow;
  border: 2px solid black;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
`;

const TextEditor = () => {
  // ClassicEditor.defaultConfig = config;

  return (
    <>
      <h3>Testing DraftEditor</h3>
      <p>Really How to solve it?!</p>
      <StyledButton>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "link",
              "list",
            ], // This is where you can specify what options you need in
            // the toolbar and appears in the same order as specified
            inline: {
              options: ["bold", "italic", "underline"], // this can be specified as well, toolbar wont have
              // strikethrough, 'monospace', 'superscript', 'subscript'
            },
            link: {
              options: ["link"],
            },
            list: {
              options: ["unordered", "ordered"],
            },
          }}
        />
      </StyledButton>
    </>
  );
};

export default TextEditor;
