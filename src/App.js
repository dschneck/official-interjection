import './App.css';

function App() {
  const boxes = new Array(15);
  for (let i = 0; i < boxes.length; i++) boxes[i] = i + 1;
  let arr = Array.from(Array(15), () => new Array(5));

  return (
	<>
  	<h1>Interjection</h1>
	<table id="board">
	<tr>
	{arr.map( (element, index) => {
	</tr>
	</table>
	</>
  );

}

export default App;
//	<tr id="B-row"><b>B</b>{boxes.map( (i, index) => {return <td>{i}</td>})}</tr>
//	<tr id="I-row"><b>I</b>{boxes.map( (i, index) => {return <td>{i+15}</td>})}</tr>
//	<tr id="N-row"><b>N</b>{boxes.map( (i, index) => {return <td>{i+30}</td>})}</tr>
//	<tr id="G-row"><b>G</b>{boxes.map( (i, index) => {return <td>{i+45}</td>})}</tr>
//	<tr id="O-row"><b>O</b>{boxes.map( (i, index) => {return <td>{i+60}</td>})}</tr>
