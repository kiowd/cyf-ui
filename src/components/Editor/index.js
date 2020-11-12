import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 38%;
  height: auto;
  background-color: white;
  border: 2px solid black;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
`;

const TextEditor = () => {
  return (
    <>
      <h3>React Draft Wysiwyg :)</h3>

      <StyledSection>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          placeholder=<em>&nbsp;&nbsp;leave a note here</em>
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "link",
              "list",
            ],
            inline: {
              options: ["bold", "italic", "underline"],
            },
            link: {
              options: ["link"],
            },
            list: {
              options: ["unordered", "ordered"],
            },
          }}
        />
      </StyledSection>
    </>
  );
};

export default TextEditor;
