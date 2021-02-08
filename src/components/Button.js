export const ButtonBase = ({ text }) => {
  return <button onClick={() => console.log(text)}>{text}</button>;
};

export const ReturnToProjects = () => {
  const classes = useStyles();

  let history = useHistory();
  return (
    <div>
      <button type="submit" onClick={() => history.push("/projects")}>
        fleche à gauche
      </button>
    </div>
  );
};
