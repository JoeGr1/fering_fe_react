import parse from "html-react-parser";

export const parseWysiwyg = (htmlContent) => {
  return parse(htmlContent);
};

export const handlePasswordProtected = (setProp, page) => {
  if (page.content.protected === true) {
    setProp(true);
  } else {
    setProp(false);
  }
};

export const handlePasswordProtectedForm = (e, setState, acf) => {
  e.preventDefault();

  if (e.target[0].value == acf.password) {
    localStorage.setItem("passwordEntered", "true");
    setState(false);
  }
};
