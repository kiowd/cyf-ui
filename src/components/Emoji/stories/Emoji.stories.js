import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSmile, faMeh, faFrown } from "@fortawesome/free-solid-svg-icons";
import Emoji from "..";

library.add(faSmile, faMeh, faFrown);

export default {
  title: "Components/Emoji",
  component: Emoji,
};

export const AddEmoji = () => {
  const icons = ["smile", "meh", "frown"];
  return (
    <div>
      {icons.map((item) => (
        <FontAwesomeIcon icon={item} />
      ))}
    </div>
  );
};
