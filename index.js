const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={"button ${className}"}>{buttonText}</button>;
};

const element = (
  <div className="main-sec">
    <h1 className="Head-ing">Social Buttons</h1>
    <div className="button-sec">
      <button buttonText="like" className="like-button" />
      <button buttonText="comment" className="comment-button" />
      <button buttonText="share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
