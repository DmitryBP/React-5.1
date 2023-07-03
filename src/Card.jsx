export default function Card(props) {
  return (
    <div className="Cardwrp">
      <div className={props.children ? 'imgWrp activ' : 'imgWrp'}>{props.children}</div>
      <div className="container">
        <div className="textSection">
          <h3 className="cardTitle">Card Title</h3>
          <p className="cardText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae esse, necessitatibus ipsum
            reprehenderit temporibus?
          </p>
          <button className="btn">Go somewhere</button>
        </div>
      </div>
    </div>
  );
}
